# Thiết lập hook cho agent

Nếu trợ lý lập trình AI của bạn hỗ trợ hook vòng đời, hãy cấu hình các hook sau cho kho lưu trữ này.

## Hook được khuyến nghị

| Hook            | Lệnh                                          | Mục đích                                                                                                                                                                                                            |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Tự động định dạng tệp sau khi AI chỉnh sửa                                                                                                                                                                          |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Chạy `corepack yarn install` khi `package.json` thay đổi                                                                                                                                                            |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Khi một diff thêm `useEffect` hoặc các nguyên hàm memo trong `about/src/`, nhắc agent cân nhắc lại bằng các skill review React                                                                                      |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Cắt tỉa các ref cũ và xóa những nhánh tác vụ tạm đã được tích hợp                                                                                                                                                   |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Quét lại diff hiện tại để tìm effect/memo React mới trong `about/src/` trước cổng xác minh cuối                                                                                                                     |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Cổng cứng cho kiểm tra bản dựng có mục tiêu, lint, kiểm tra kiểu và kiểm tra định dạng; giữ `yarn npm audit` ở mức thông tin và chạy `yarn knip` riêng như một bước rà soát tham khảo khi phụ thuộc/import thay đổi |

## Vì sao

- Định dạng nhất quán
- Lockfile luôn được đồng bộ
- Mỗi lần thêm `useEffect` hoặc memo mới trong site about đều được xem lại một lượt rõ ràng trước khi agent kết thúc
- Các vấn đề dựng/lint/kiểu liên quan tới workspace được phát hiện sớm mà không phải chạy bản dựng tài liệu đa ngôn ngữ đầy đủ cho mọi tác vụ
- Thấy được tình hình bảo mật qua `yarn npm audit`
- Có thể kiểm tra độ lệch phụ thuộc/import bằng `yarn knip` mà không biến nó thành một stop hook toàn cục gây nhiễu
- Một bản triển khai hook dùng chung cho cả Codex và Cursor
- Các nhánh tác vụ tạm luôn ăn khớp với quy trình worktree của kho lưu trữ

## Ví dụ script hook

### Hook định dạng

```bash
#!/bin/bash
# Auto-format JS/TS files after AI edits
# Hook receives JSON via stdin with file_path

input=$(cat)
file_path=$(echo "$input" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*:.*"\([^"]*\)"/\1/')

case "$file_path" in
  *.js|*.jsx|*.ts|*.tsx|*.mjs|*.cjs|*.json|*.css) corepack yarn exec oxfmt "$file_path" 2>/dev/null ;;
esac
exit 0
```

### Hook xác minh

```bash
#!/bin/bash
# Run targeted build verification, lint, typecheck, format check, and security audit when agent finishes

cat > /dev/null  # consume stdin
status=0
corepack yarn build:verify || status=1
corepack yarn lint || status=1
corepack yarn typecheck || status=1
corepack yarn format:check || status=1
echo "=== yarn npm audit ===" && (corepack yarn npm audit || true)  # informational
exit $status
```

Theo mặc định, `scripts/agent-hooks/verify.sh` thoát với mã khác 0 khi một bước kiểm tra bắt buộc thất bại. Chỉ đặt `AGENT_VERIFY_MODE=advisory` khi bạn cố ý cần tín hiệu từ một cây mã đang hỏng mà không muốn chặn hook. Hãy giữ `yarn knip` ngoài cổng cứng, trừ khi kho lưu trữ quyết định rõ ràng là sẽ báo hỏng vì các vấn đề import/phụ thuộc ở mức tham khảo.

Hook vòng đời không thay thế việc kiểm tra thủ công trên trình duyệt. Với thay đổi về UI hoặc hình ảnh, vẫn phải chạy kiểm tra bằng `playwright-cli` trên `chrome`, `firefox` và `webkit`, kèm một luồng ở khung nhìn di động trong từng engine khi tính đáp ứng hoặc hành vi chạm có thay đổi.

### Hook cài đặt Yarn

```bash
#!/bin/bash
# Run corepack yarn install when package.json is changed
# Hook receives JSON via stdin with file_path

input=$(cat)
file_path=$(echo "$input" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*:.*"\([^"]*\)"/\1/')

if [ -z "$file_path" ]; then
  exit 0
fi

if [ "$file_path" = "package.json" ]; then
  cd "$(dirname "$0")/../.." || exit 0
  echo "package.json changed - running corepack yarn install to update yarn.lock..."
  corepack yarn install
fi

exit 0
```

Hãy cấu hình cách nối hook theo tài liệu của công cụ agent bạn dùng (`hooks.json`, hoặc tương đương, v.v.).

Trong kho lưu trữ này, `.codex/hooks/*.sh` và `.cursor/hooks/*.sh` nên giữ vai trò lớp bọc mỏng, ủy quyền cho các bản triển khai dùng chung trong `scripts/agent-hooks/`.
