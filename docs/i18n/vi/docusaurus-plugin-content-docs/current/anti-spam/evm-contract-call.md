---
title: EVM Contract Call Challenge
description: Thử thách chống thư rác xác minh các điều kiện trên chuỗi bằng cách gọi một hợp đồng thông minh EVM.
sidebar_position: 4
---

# EVM Contract Call Challenge

EVM Contract Call Challenge kiểm tra trạng thái trên chuỗi của tác giả trước khi cho phép xuất bản. Chủ sở hữu cộng đồng có thể yêu cầu một ví hoặc một danh tính đã phân giải phải thỏa mãn một điều kiện chỉ đọc từ hợp đồng thông minh, chẳng hạn như nắm giữ một số dư token tối thiểu, trước khi đăng bài.

- **Mã nguồn và README hiện hành:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Gói npm:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Cài đặt

```bash
npm install @bitsocial/evm-contract-challenge
```

## Vị trí của nó trong hệ thống

Hãy dùng thử thách này cho những cộng đồng mà việc tham gia nên phụ thuộc vào một tín hiệu EVM bên ngoài: quyền sở hữu token, quyền sở hữu NFT, điểm chứng minh danh tính người thật, tư cách thành viên quản trị, hoặc một điều kiện khác mà hợp đồng có thể đọc được.

Sau khi được cấu hình, thử thách diễn ra tự động dưới góc nhìn của tác giả. Nó kiểm tra các nguồn ví hoặc danh tính đủ điều kiện, gọi phương thức hợp đồng đã cấu hình, rồi so sánh giá trị trả về với điều kiện của cộng đồng.

## Tài liệu tham chiếu hiện hành của gói

Trang này cố tình chỉ là phần tổng quan, không phải bản sao của tài liệu cấu hình. README của gói mới là nguồn thông tin chuẩn cho tên thử thách, ví dụ Bitsocial CLI, cách đăng ký với pkc-js, giá trị mặc định của các tùy chọn, ví dụ ABI, hành vi RPC và các nguồn ví được hỗ trợ:

- [README của EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Khi cấu hình một cộng đồng đang chạy thật, hãy ưu tiên README ở thượng nguồn, vì các tùy chọn hợp đồng và ví dụ được đánh phiên bản theo chính gói đó chứ không theo trang web này.

## Khi nào nên dùng

EVM Contract Call Challenge phù hợp nhất cho:

- **Cộng đồng giới hạn theo token**, chỉ cho phép người nắm giữ token đăng bài.
- **Quyền truy cập giới hạn theo NFT**, nơi bắt buộc phải sở hữu một NFT cụ thể.
- **Không gian quản trị DAO**, nơi việc tham gia chỉ dành cho người nắm giữ token quản trị.

Với những cộng đồng không dựa vào danh tính trên chuỗi, hãy cân nhắc [Spam Blocker](./spam-blocker.md) hoặc [Voucher Challenge](./voucher-challenge.md) để thay thế.
