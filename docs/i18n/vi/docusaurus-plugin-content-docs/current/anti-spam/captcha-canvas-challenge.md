---
title: Captcha Canvas Challenge
description: Thử thách captcha dạng hình ảnh độc lập dành cho các cộng đồng Bitsocial.
sidebar_position: 2
---

# Captcha Canvas Challenge

Captcha Canvas Challenge là một gói captcha hình ảnh độc lập dành cho các cộng đồng Bitsocial. Nó vẽ chuỗi ký tự ngẫu nhiên lên canvas và cho phép cộng đồng yêu cầu tác giả giải hình ảnh đó trước khi một nội dung được chấp nhận xuất bản.

- **Mã nguồn và README hiện hành:** [github.com/bitsocialnet/captcha-canvas-challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)
- **Gói npm:** [`@bitsocial/captcha-canvas-challenge`](https://www.npmjs.com/package/@bitsocial/captcha-canvas-challenge)

## Cài đặt

```bash
npm install @bitsocial/captcha-canvas-challenge
```

## Vị trí của nó trong hệ thống

Thử thách captcha hữu ích khi một cộng đồng muốn có một cổng tương tác đơn giản để chống thư rác ở mức rủi ro thấp. Gói này cố tình giữ phạm vi hẹp: nó cung cấp phần triển khai thử thách, còn cộng đồng hoặc nút Bitsocial mới là bên quyết định khi nào và trình bày thử thách ra sao.

Để bảo vệ mạnh hơn, hãy kết hợp nó với các hệ thống kiểm duyệt hoặc chấm điểm rủi ro rộng hơn, thay vì coi captcha là một chiến lược chống thư rác hoàn chỉnh.

## Tài liệu tham chiếu hiện hành của gói

Trang này cố tình chỉ là phần tổng quan, không phải bản sao của hướng dẫn cài đặt. README của gói mới là nguồn thông tin chuẩn cho tên thử thách hiện hành, ví dụ đăng ký, ví dụ CLI, các tùy chọn được hỗ trợ, yêu cầu hệ thống và ghi chú bảo mật:

- [README của Captcha Canvas Challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)

Khi cấu hình một cộng đồng đang chạy thật, hãy ưu tiên README ở thượng nguồn, vì các tùy chọn của gói và luồng cài đặt được đánh phiên bản theo chính gói đó chứ không theo trang web này.
