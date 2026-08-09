---
title: React Hooks
description: Thư viện React hooks để xây dựng ứng dụng mạng xã hội phi tập trung trên giao thức Bitsocial.
sidebar_position: 1
---

# React Hooks

Gói `bitsocial-react-hooks` cung cấp một API React hooks quen thuộc để làm việc với giao thức Bitsocial. Nó lo việc tải bảng tin, bình luận và hồ sơ tác giả, quản lý tài khoản, đăng nội dung và theo dõi cộng đồng -- tất cả mà không cần dựa vào một máy chủ trung tâm.

Thư viện này là giao diện chính được [5chan](/apps/5chan/) và các ứng dụng máy khách Bitsocial khác sử dụng.

:::note
Hiện tại `bitsocial-react-hooks` được dùng trực tiếp từ GitHub chứ chưa được phát hành lên npm.
:::

## Cài đặt

Vì gói này chưa có trên npm, hãy cài đặt trực tiếp từ GitHub và ghim vào một mã commit cụ thể:

```bash
yarn add https://github.com/bitsocialnet/bitsocial-react-hooks.git#<commit-hash>
```

Thay `<commit-hash>` bằng commit mà bạn muốn dùng.

## Tổng quan API

Các hook được sắp xếp theo nhóm chức năng. Dưới đây là tóm tắt những hook thường dùng nhất trong mỗi nhóm. Để xem đầy đủ chữ ký hàm, tham số và kiểu trả về, hãy đọc [tài liệu API đầy đủ trên GitHub](https://github.com/bitsocialnet/bitsocial-react-hooks).

### Tài khoản

Quản lý tài khoản người dùng cục bộ, danh tính và cài đặt.

- `useAccount(accountName?)` -- trả về đối tượng tài khoản đang hoạt động (hoặc tài khoản được gọi theo tên)
- `useAccounts()` -- trả về mọi tài khoản được lưu cục bộ
- `useAccountComments(options?)` -- trả về các bình luận do tài khoản đang hoạt động đăng

### Bình luận

Lấy và tương tác với từng bình luận cũng như từng luồng thảo luận.

- `useComment(commentCid?)` -- lấy một bình luận theo CID của nó
- `useComments(commentCids?)` -- lấy nhiều bình luận trong cùng một lượt
- `useEditedComment(comment?)` -- trả về phiên bản chỉnh sửa mới nhất của một bình luận

### Cộng đồng

Truy xuất siêu dữ liệu và cài đặt của cộng đồng.

- Hook tra cứu một cộng đồng -- lấy một cộng đồng theo địa chỉ
- Hook tra cứu nhiều cộng đồng -- lấy nhiều cộng đồng cùng lúc
- Hook thống kê cộng đồng -- trả về số người theo dõi và số bài đăng

### Tác giả

Tra cứu hồ sơ và siêu dữ liệu của tác giả.

- `useAuthor(authorAddress?)` -- lấy hồ sơ của một tác giả
- `useAuthorComments(options?)` -- trả về các bình luận của một tác giả cụ thể
- `useResolvedAuthorAddress(authorAddress?)` -- phân giải một địa chỉ dễ đọc với con người (ví dụ ENS) thành địa chỉ giao thức tương ứng

### Bảng tin

Theo dõi và phân trang các bảng tin nội dung.

- `useFeed(options?)` -- trả về bảng tin đã phân trang gồm các bài đăng từ một hoặc nhiều cộng đồng
- `useBufferedFeeds(feedOptions?)` -- nạp sẵn nhiều bảng tin vào bộ đệm để hiển thị nhanh hơn
- `useAuthorFeed(authorAddress?)` -- trả về bảng tin các bài đăng của một tác giả cụ thể

### Hành động

Đăng nội dung và thực hiện các thao tác ghi.

- `usePublishComment(options?)` -- đăng một bình luận hoặc một câu trả lời mới
- `usePublishVote(options?)` -- bỏ phiếu tán thành hoặc phản đối
- `useSubscribe(options?)` -- theo dõi hoặc bỏ theo dõi một cộng đồng

### Trạng thái và RPC

Theo dõi trạng thái kết nối và làm việc với một daemon Bitsocial từ xa.

- `useClientsStates(options?)` -- trả về trạng thái kết nối của các máy khách IPFS/pubsub
- Hook cài đặt RPC -- trả về cấu hình hiện tại của daemon RPC

## Phát triển

Để làm việc với thư viện hooks trên máy cục bộ:

**Yêu cầu:** Node.js, đã bật Corepack, Yarn 4

```bash
git clone https://github.com/bitsocialnet/bitsocial-react-hooks.git
cd bitsocial-react-hooks
corepack enable
yarn install
```

Hãy xem README của kho mã để biết các lệnh kiểm thử và dựng.

## Liên kết

- **GitHub:** [bitsocialnet/bitsocial-react-hooks](https://github.com/bitsocialnet/bitsocial-react-hooks)
- **Giấy phép:** GPL-2.0-only
