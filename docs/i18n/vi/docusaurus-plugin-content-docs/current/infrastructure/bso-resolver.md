---
title: BSO Resolver
description: Phân giải tên miền .bso thành khóa công khai thông qua bản ghi TXT của Bitsocial.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver chuyển tên miền `.bso` thành khóa công khai tương ứng bằng cách đọc các bản ghi TXT của Bitsocial. Đây là gói phân giải mà bộ công cụ Bitsocial dùng khi một tên `.bso` hiển thị cho người dùng cần trở thành phần khóa mà ngăn xếp ngang hàng hiểu được.

- **Mã nguồn và README hiện tại:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **Gói npm:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Cài đặt

```bash
npm install @bitsocial/bso-resolver
```

## Vị trí của nó trong hệ thống

Tên Bitsocial được thiết kế để làm điểm vào dễ đọc với con người cho các cộng đồng và tác giả. Bộ phân giải giữ lớp đặt tên đó tách khỏi mã ứng dụng, nhờ vậy máy khách có thể hỏi xem một tên có được hỗ trợ hay không rồi phân giải nó qua điểm vào dành riêng cho môi trường chạy của gói.

Hãy dùng nó khi bạn tích hợp một máy khách, công cụ dòng lệnh hoặc dịch vụ có hiểu Bitsocial và cần chấp nhận tên `.bso` thay vì chỉ khóa công khai thô.

## Tài liệu tham chiếu của gói hiện tại

Trang này cố ý chỉ là phần tổng quan, không phải bản sao của tài liệu API. README của gói mới là nguồn thông tin chuẩn cho các tùy chọn khởi tạo, kiểu dữ liệu trả về, hành vi bộ nhớ đệm, các điểm vào, ví dụ về provider và ngữ nghĩa tắt dịch vụ được hỗ trợ:

- [README của BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Hãy ưu tiên README ở thượng nguồn khi sao chép mã vào một dự án, vì hành vi của bộ phân giải được đánh phiên bản theo gói đó chứ không theo trang web này.
