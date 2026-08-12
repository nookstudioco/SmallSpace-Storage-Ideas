# SmallSpace Storage Ideas — site tĩnh

## Cấu trúc
```
index.html                          → trang chủ
about.html                          → about + affiliate disclosure
privacy-policy.html                 → privacy policy (template, cần rà lại)
articles/small-entryway-storage-ideas.html
articles/dorm-room-storage-ideas.html
css/style.css                       → toàn bộ style, 1 file dùng chung cho mọi trang
```

## Xem thử trên máy trước khi deploy
Chỉ cần double-click `index.html` để mở bằng trình duyệt — không cần cài gì cả vì đây là site tĩnh thuần HTML/CSS.

## Deploy lên GitHub Pages (free)
1. Tạo repo mới trên GitHub, ví dụ `smallspace-storage-ideas`.
2. Upload toàn bộ nội dung thư mục này vào repo (giữ nguyên cấu trúc thư mục).
3. Vào Settings → Pages → chọn branch `main`, thư mục `/root` → Save.
4. Sau 1-2 phút, site live tại `https://<username>.github.io/smallspace-storage-ideas/`.

## Việc cần làm trước khi public
- [ ] Thay 2 chỗ `hello@smallspacestorageideas.com` trong `about.html` và `privacy-policy.html` bằng email thật
- [ ] Thay link Pinterest placeholder trong header (`index.html`, `about.html`...) bằng profile Pinterest thật
- [ ] Rà lại `privacy-policy.html` — đây là bản nháp, không phải tư vấn pháp lý, nên dùng thêm Termly/iubenda hoặc luật sư xem qua
- [ ] Viết thêm 8-13 bài nữa để đạt mốc 10-15 bài Amazon Associates khuyên có trước khi apply (2 bài mẫu đã có sẵn theo đúng format — copy `articles/small-entryway-storage-ideas.html` làm khung cho bài mới)
- [ ] Sau khi được duyệt Amazon Associates, thay các link `amazon.com/s?k=...` trong bài viết bằng link affiliate có tag thật (mỗi link đều có comment `<!-- Sếp thay link Amazon Associates thật vào href khi được duyệt -->` để dễ tìm)

## Hệ thống màu / font (để sửa sau này)
- Nền: `#F3EEE1` — Chữ chính: `#22304A` — Điểm nhấn: `#EFB43C` (mustard) và `#5B7A96` (denim)
- Font tiêu đề: Instrument Serif · Font chữ thường: Inter · Font nhãn/tag: Space Mono
- Toàn bộ khai báo màu nằm ở đầu file `css/style.css` trong phần `:root{...}` — đổi ở đó là đổi cả site
