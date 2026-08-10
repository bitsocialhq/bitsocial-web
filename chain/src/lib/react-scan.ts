// Dev-only React render scanner + source inspection.
// Toggle the toolbar off during automated screenshots by setting
// window.__VISUAL_TESTING__ = true before load. window.__PROFILING__
// suppresses the toolbar/sounds during automated profiling runs, and
// window.__NO_DEV_TOOLBAR__ (set by scripts/pw-session.sh for every driven
// session) keeps the toolbar from swallowing clicks aimed at the page.
if (import.meta.env.DEV) {
  import("react-scan").then(({ scan, getReport }) => {
    const isVisualTesting = Boolean((window as any).__VISUAL_TESTING__);
    const hideToolbar =
      isVisualTesting ||
      Boolean((window as any).__NO_DEV_TOOLBAR__) ||
      Boolean((window as any).__PROFILING__);

    scan({
      enabled: !isVisualTesting,
      showToolbar: !hideToolbar,
    });

    const notReady = async () => ({
      error: "element-source is not ready yet.",
    });

    const elementSourceApi: any = {
      ready: false,
      error: null,
      resolve: notReady,
      resolveBySelector: async () => ({
        error: "element-source is not ready yet.",
      }),
      resolveAtPoint: async () => ({
        error: "element-source is not ready yet.",
      }),
      formatStack: () => "",
    };

    (window as any).__getReactScanReport = getReport;
    (window as any).__ELEMENT_SOURCE__ = elementSourceApi;

    import("element-source")
      .then(({ formatStack, resolveElementInfo }) => {
        const resolve = async (node: unknown) => {
          if (!(node instanceof Element)) {
            return {
              error: "Expected a DOM Element.",
            };
          }

          try {
            const info = await resolveElementInfo(node);
            return {
              ...info,
              available: Boolean(info.source || info.stack.length || info.componentName),
            };
          } catch (error) {
            return {
              error: error instanceof Error ? error.message : String(error),
            };
          }
        };

        Object.assign(elementSourceApi, {
          ready: true,
          resolve,
          resolveBySelector: async (selector: string) => {
            const element = document.querySelector(selector);
            if (!(element instanceof Element)) {
              return {
                error: `No element matched selector: ${selector}`,
              };
            }
            return resolve(element);
          },
          resolveAtPoint: async (x: number, y: number) => {
            const element = document.elementFromPoint(x, y);
            if (!(element instanceof Element)) {
              return {
                error: `No element found at point (${x}, ${y})`,
              };
            }
            return resolve(element);
          },
          formatStack: (stack: unknown, maxLines = 3) =>
            Array.isArray(stack) ? formatStack(stack as any, maxLines) : "",
        });
      })
      .catch((error) => {
        elementSourceApi.error = error instanceof Error ? error.message : String(error);
      });
  });
}
