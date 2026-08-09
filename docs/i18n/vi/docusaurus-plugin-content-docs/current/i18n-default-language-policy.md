# Chính sách ngôn ngữ mặc định của i18n

Với khách truy cập ẩn danh, ngôn ngữ được xác định theo thứ tự sau:

1. Tham số truy vấn `?lang=`
2. Lựa chọn đã lưu ở bộ chọn ngôn ngữ (`localStorage` trong trình duyệt, được sao chép sang cookie `i18nextLng` để dùng cho SSR)
3. Ngôn ngữ của trình duyệt/thiết bị, nếu đó là một trong các ngôn ngữ mà chúng tôi hỗ trợ
4. Quay về mặc định `en`

Quốc gia hoặc khu vực không được dùng để ghi đè một ngôn ngữ trình duyệt/thiết bị đã được hỗ trợ. Ví dụ, `de-DE` cho ra tiếng Đức, `nl-NL` cho ra tiếng Hà Lan và `pt-PT` cho ra tiếng Bồ Đào Nha, bởi vì các nhóm ngôn ngữ đó đều được hỗ trợ.

Nếu không có ngôn ngữ trình duyệt/thiết bị nào khớp với một ngôn ngữ được hỗ trợ, khách truy cập sẽ nhận bản tiếng Anh mặc định.
