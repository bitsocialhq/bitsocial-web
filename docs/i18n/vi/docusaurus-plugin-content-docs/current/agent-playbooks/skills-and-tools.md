# Skill và công cụ

Dùng playbook này khi thiết lập hoặc điều chỉnh skill và công cụ bên ngoài.

## Skill được khuyến nghị

### Context7 (tài liệu thư viện)

Dành cho tài liệu cập nhật về các thư viện.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Dùng `playwright-cli` để tự động hóa trình duyệt (điều hướng, tương tác, chụp màn hình, kiểm thử, trích xuất dữ liệu).

Khi dùng `playwright-cli` để kiểm tra giao diện của kho lưu trữ, đừng dừng lại sau một engine. Hãy chạy luồng liên quan trên cả ba engine trình duyệt chính:

- `chrome` cho Blink
- `firefox` cho Gecko
- `webkit` để bao phủ Safari/WebKit

Hãy dùng các phiên có tên riêng cho từng engine để bằng chứng không lẫn vào nhau, nhưng chạy các phiên đó lần lượt. Trên toàn máy, chỉ một phiên trình duyệt Playwright được hoạt động tại một thời điểm, vì tài nguyên tranh chấp là RAM và CPU của máy chứ không phải kho lưu trữ. Hãy mở và đóng phiên qua `./scripts/pw-session.sh`; script này giữ khóa dùng chung đó, nhờ vậy các agent chạy song song sẽ hoãn lại rồi thử lại phần việc trình duyệt thay vì làm nghẽn máy. Nếu cố ý bỏ qua một engine, hãy ghi lại lý do.

Trong lúc lặp đi lặp lại để chỉnh sửa, chỉ dùng Chrome/Blink. Chạy trọn chuỗi Chrome, Firefox và WebKit khi thay đổi đã sẵn sàng cho bước xác minh cuối. Hãy tái dùng phiên của mỗi engine cho cả desktop lẫn di động bằng cách đổi kích thước cửa sổ, đóng phiên đó trong bước dọn dẹp kiểu finally, rồi mới mở engine tiếp theo.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Khi suất chạy đang bận, `open` thoát với mã 75; hãy chờ bằng `./scripts/pw-session.sh open --wait[=SECONDS] ...` (mặc định 300 giây) thay vì tự thử lại bằng tay. Khóa còn sót lại từ một quy trình bị gián đoạn sẽ được thu hồi tự động, vì `open` giải phóng mọi suất mà trình duyệt được ghi nhận không còn chạy nữa. Hãy xem ai đang giữ suất bằng `./scripts/pw-session.sh status`; `release <session>` chỉ là phương án cuối cho trường hợp hiếm gặp khi `status` không xác minh được trạng thái trình duyệt.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Vị trí cài đặt skill:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Dành cho hướng dẫn chuyên sâu hơn về hiệu năng React/Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Khám phá và cài đặt skill từ hệ sinh thái mở.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Lý do của chính sách MCP

Hãy tránh dùng GitHub MCP và các máy chủ MCP điều khiển trình duyệt cho dự án này, vì chúng làm phình đáng kể phần schema công cụ và ngữ cảnh.

- Thao tác với GitHub: dùng `gh` CLI.
- Thao tác với trình duyệt: dùng `playwright-cli`.

## Mức độ khả dụng của model

- `composer-2` chỉ có trong Cursor. Đừng cấu hình nó trong `.claude/` hay `.codex/`.
- Codex không có tài liệu nào về bí danh model `latest`. Các tệp TOML agent tùy chỉnh được commit trong `.codex/**/agents/*.toml` bỏ qua cả `model` lẫn `model_reasoning_effort` để chúng kế thừa thiết lập của phiên cha hiện tại.
