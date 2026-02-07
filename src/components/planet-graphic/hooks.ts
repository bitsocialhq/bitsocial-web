import { useState, useEffect, useRef } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

type NetworkInformation = {
  saveData?: boolean
  effectiveType?: string
  addEventListener?: (type: "change", listener: () => void) => void
  removeEventListener?: (type: "change", listener: () => void) => void
}

export type GraphicsMode = "full" | "fallback"

export function useGraphicsMode() {
  const [graphicsMode, setGraphicsMode] = useState<GraphicsMode>("fallback")
  const lastModeRef = useRef<GraphicsMode>("fallback")

  useEffect(() => {
    if (typeof window === "undefined") return

    const getConnection = () => {
      const nav = navigator as Navigator & {
        connection?: NetworkInformation
        mozConnection?: NetworkInformation
        webkitConnection?: NetworkInformation
      }
      return nav.connection ?? nav.mozConnection ?? nav.webkitConnection
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    )

    const computeGraphicsMode = () => {
      const { deviceMemory } = navigator as Navigator & {
        deviceMemory?: number
      }
      const hardwareConcurrency = navigator.hardwareConcurrency ?? 8
      const memoryBudget = deviceMemory ?? 8
      const connection = getConnection()
      const saveData = Boolean(connection?.saveData)
      const effectiveType = connection?.effectiveType ?? ""
      const isSlowConnection =
        effectiveType === "slow-2g" || effectiveType === "2g"
      const isLowEnd =
        reducedMotionQuery.matches ||
        memoryBudget <= 4 ||
        hardwareConcurrency <= 4 ||
        saveData ||
        isSlowConnection

      return isLowEnd ? "fallback" : "full"
    }

    const updateMode = () => {
      const nextMode = computeGraphicsMode()
      if (lastModeRef.current === nextMode) return
      lastModeRef.current = nextMode
      setGraphicsMode(nextMode)
    }

    updateMode()

    const handleReducedMotionChange = () => updateMode()
    if (reducedMotionQuery.addEventListener) {
      reducedMotionQuery.addEventListener("change", handleReducedMotionChange)
    } else {
      reducedMotionQuery.addListener(handleReducedMotionChange)
    }

    const connection = getConnection()
    connection?.addEventListener?.("change", updateMode)

    return () => {
      if (reducedMotionQuery.removeEventListener) {
        reducedMotionQuery.removeEventListener(
          "change",
          handleReducedMotionChange,
        )
      } else {
        reducedMotionQuery.removeListener(handleReducedMotionChange)
      }
      connection?.removeEventListener?.("change", updateMode)
    }
  }, [])

  return graphicsMode
}
