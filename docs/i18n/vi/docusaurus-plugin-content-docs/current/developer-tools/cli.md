---
title: Bitsocial CLI
description: Giao diện dòng lệnh để chạy một nút Bitsocial, tạo cộng đồng và quản lý các thao tác giao thức.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` là công cụ dòng lệnh để làm việc với phần phụ trợ giao thức Bitsocial. Nó cho phép bạn chạy một daemon P2P cục bộ, tạo và cấu hình cộng đồng, và đăng nội dung -- tất cả từ cửa sổ dòng lệnh.

Công cụ này được xây dựng trên lớp máy khách giao thức Bitsocial dùng chung, và được [5chan](/apps/5chan/) cùng [Seedit](/apps/seedit/) sử dụng để tạo cộng đồng và quản lý nút.

## Cài đặt

Có sẵn các tệp nhị phân dựng trước cho Windows, macOS và Linux. Hãy tải bản phát hành mới nhất cho nền tảng của bạn từ GitHub:

**[Tải xuống từ GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Sau khi tải về, hãy cấp quyền thực thi cho tệp nhị phân (macOS/Linux):

```bash
chmod +x bitsocial
```

## Chạy daemon

Cách dùng CLI phổ biến nhất là chạy một nút Bitsocial. Daemon khởi động lớp mạng P2P và mở một API cục bộ để các máy khách kết nối tới.

```bash
bitsocial daemon
```

Trong lần khởi chạy đầu tiên, daemon in ra các liên kết tới **WebUI**, một giao diện đồ họa chạy trên trình duyệt để quản lý nút, cộng đồng và cài đặt của bạn. Điều này hữu ích nếu bạn thích giao diện đồ họa hơn là các lệnh trong cửa sổ dòng lệnh.

## Các thao tác chính

| Thao tác                 | Mô tả                                                |
| ------------------------ | ---------------------------------------------------- |
| Khởi động daemon         | Chạy nút P2P của Bitsocial                           |
| Tạo cộng đồng            | Tạo một cộng đồng mới                                |
| Chỉnh sửa cộng đồng      | Cập nhật cài đặt cộng đồng (tiêu đề, mô tả, quy tắc) |
| Liệt kê cộng đồng cục bộ | Liệt kê các cộng đồng được lưu trữ trên nút này      |
| Khởi động một cộng đồng  | Bắt đầu phục vụ một cộng đồng cụ thể                 |
| Dừng một cộng đồng       | Ngừng phục vụ một cộng đồng cụ thể                   |

Chạy CLI với `--help` để xem tên lệnh và cờ hiện có trong bản phát hành bạn đã cài:

```bash
bitsocial --help
bitsocial daemon --help
```

## Quy trình làm việc điển hình

Một quy trình thiết lập thường gặp khi lưu trữ một cộng đồng mới:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Từ đó, hãy dùng các lệnh quản lý cộng đồng của bản phát hành đã cài để tạo, cấu hình và bắt đầu phục vụ một cộng đồng. Sau khi khởi động, cộng đồng sẽ hoạt động trên mạng Bitsocial và có thể truy cập từ các máy khách tương thích.

## Liên kết

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
