---
title: Bot Telegram
description: Các bot feed theo dõi danh sách cộng đồng của Bitsocial và chuyển tiếp bài đăng vào các kênh Telegram.
sidebar_position: 4
---

# Bot Telegram

Các bot Telegram của Bitsocial theo dõi danh sách cộng đồng của máy khách trên mạng Bitsocial và tự động chuyển tiếp bài đăng mới vào các kênh Telegram. Mỗi tin nhắn được chuyển tiếp đều kèm những nút inline dẫn ngược về bài đăng gốc trên 5chan và Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Các bot hiện có

| Bot             | Trạng thái     | Mô tả                                                                 |
| --------------- | -------------- | --------------------------------------------------------------------- |
| **5chan Feed**  | Đang hoạt động | Theo dõi mọi danh mục 5chan và chuyển tiếp bài đăng mới tới Telegram. |
| **Seedit Feed** | Dự kiến        | Sẽ cung cấp chức năng tương tự cho các cộng đồng Seedit.              |

## Thiết lập

### Yêu cầu trước

- Node.js
- Yarn
- Một token bot Telegram (tạo qua [BotFather](https://t.me/BotFather))

### Cài đặt

Sao chép kho lưu trữ và cài đặt các phụ thuộc:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Cấu hình

Tạo tệp `.env` ở thư mục gốc của dự án với token bot của bạn:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Chạy

Khởi động bot sau khi đã cấu hình môi trường:

```bash
yarn start
```

## Định dạng bài đăng

Khi bot chuyển tiếp một bài đăng tới Telegram, nó kèm theo hai nút inline:

- **Xem trên 5chan** -- Mở bài đăng trong ứng dụng web 5chan.
- **Xem trên Seedit** -- Mở bài đăng trong ứng dụng web Seedit.

Nhờ vậy người đăng ký kênh Telegram có thể nhảy thẳng tới toàn bộ chuỗi thảo luận trên ứng dụng khách mà họ thích.
