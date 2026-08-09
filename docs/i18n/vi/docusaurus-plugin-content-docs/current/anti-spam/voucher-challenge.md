---
title: Voucher Challenge
description: Thử thách chống thư rác đặt việc xuất bản sau các mã voucher duy nhất do chủ sở hữu cộng đồng phân phát.
sidebar_position: 3
---

# Voucher Challenge

Voucher Challenge đặt việc xuất bản nội dung phía sau các mã voucher duy nhất do chủ sở hữu cộng đồng phân phát. Thay vì dựa vào chấm điểm tự động, nó chuyển sự tin cậy sang một luồng mời thủ công, nơi những người đã được biết đến sẽ nhận mã qua một kênh do chủ sở hữu kiểm soát.

- **Mã nguồn và README hiện hành:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Gói npm:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Cài đặt

```bash
npm install @bitsocial/voucher-challenge
```

## Cách hoạt động

1. Chủ sở hữu cộng đồng tạo ra một hoặc nhiều mã voucher duy nhất.
2. Chủ sở hữu phân phát các mã đó cho những tác giả đáng tin cậy qua kênh mà họ chọn (tin nhắn riêng, email, trao trực tiếp, v.v.).
3. Khi một tác giả định xuất bản, hệ thống thử thách sẽ yêu cầu họ nhập mã voucher.
4. Mã được kiểm tra -- nếu mã hợp lệ và chưa từng được dùng, nội dung sẽ được chấp nhận xuất bản.

Mỗi mã voucher, sau khi được sử dụng, sẽ gắn với một tác giả cụ thể, nên người khác không thể dùng lại.

## Tài liệu tham chiếu hiện hành của gói

Trang này cố tình chỉ là phần tổng quan, không phải bản sao của hướng dẫn cài đặt. README của gói mới là nguồn thông tin chuẩn cho tên thử thách hiện hành, ví dụ Bitsocial CLI, cách đăng ký với pkc-js, các tùy chọn được hỗ trợ và hành vi khi sử dụng mã:

- [README của Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Khi cấu hình một cộng đồng đang chạy thật, hãy ưu tiên README ở thượng nguồn, vì các tùy chọn voucher và luồng cài đặt được đánh phiên bản theo chính gói đó chứ không theo trang web này.

## Khi nào nên dùng

Voucher Challenge phù hợp nhất với:

- **Cộng đồng chỉ vào bằng lời mời**, nơi thành viên bị giới hạn một cách có chủ đích.
- **Không gian được tuyển chọn**, nơi chủ sở hữu đích thân xét duyệt từng người tham gia.
- **Môi trường tin cậy cao**, nơi việc chấm điểm thư rác tự động là không cần thiết hoặc không mong muốn.

Vì cần phân phát mã thủ công, cách này không mở rộng được cho các cộng đồng mở quy mô lớn. Với những tình huống đó, hãy cân nhắc [Spam Blocker](./spam-blocker.md) hoặc [EVM Contract Call Challenge](./evm-contract-call.md) để thay thế.
