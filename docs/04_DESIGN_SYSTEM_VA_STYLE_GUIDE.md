# HƯỚNG DẪN THIẾT KẾ GIAO DIỆN & STYLE GUIDE VELA
> *Quy chuẩn thị giác (Design System) phong cách tối giản, sang trọng & ấm áp.*

---

## 1. TRIẾT LÝ THIẾT KẾ THỊ GIÁC (VISUAL PHILOSOPHY)
* **Phong cách:** *Warm Minimalist Luxury* (Sang trọng tối giản ấm áp) — Lấy cảm hứng từ các thương hiệu nến thơm đỉnh cao thế giới (Diptyque Paris, Jo Malone London, Le Labo) kết hợp cùng tính gần gũi, tiện dụng của Chillme Candle.
* **Cảm xúc mang lại:** Tĩnh lặng, êm ái, thư thái, tinh tế, an toàn cho sức khỏe và nâng niu giác quan.

---

## 2. BẢNG MÀU CHUẨN THƯƠNG HIỆU (COLOR PALETTE)

| Tên Màu | Mã Màu Hex | Ứng Dụng Trong Giao Diện | Ý Nghĩa Tâm Lý Học |
| :--- | :--- | :--- | :--- |
| **Warm Cream** | `#FAF8F5` | Màu nền chính toàn trang, nền thẻ sản phẩm | Tạo cảm giác nhẹ nhàng, ấm áp tự nhiên như màu sáp đậu nành |
| **Warm Beige** | `#F3EDE4` | Nền các phần xen kẽ (Story, Reviews, Category bar) | Tạo chiều sâu và sự êm dịu cho thị giác |
| **Charcoal Dark** | `#141414` | Thanh Announcement, Header Dark, Banner, Footer | Sang trọng, huyền bí, tạo độ tương phản cao cho chữ |
| **Amber Gold** | `#B8860B` | Màu nhấn, huy hiệu `BÁN CHẠY`, giá tiền, nút active | Thể hiện ánh lửa nến ấm áp, kim loại mạ vàng quý phái |
| **Sale Red** | `#DC2626` | Huy hiệu giảm giá `SALE`, `HOT` | Thúc đẩy hành vi mua sắm nhanh |
| **Text Primary** | `#1C1917` | Tiêu đề chính, tên sản phẩm | Rõ ràng, dễ đọc trên nền kem |
| **Text Muted** | `#78716C` | Mô tả phụ, số đánh giá, thời gian đọc blog | Nhẹ nhàng, không gây rối mắt |

---

## 3. NGHỆ THUẬT CHỮ (TYPOGRAPHY SYSTEM)

* **Phông chữ có chân (Serif) — `Playfair Display`:**
  - Dùng cho: Logo thương hiệu `V E L A` (khoảng cách ký tự giãn rộng `letter-spacing: 0.35em`), Tiêu đề lớn H1, H2, các cụm từ *in nghiêng* mang tính thơ và cảm xúc (*"thắp sáng cảm xúc"*, *"tình yêu với hương thơm"*).
  - Tác dụng: Mang lại chất hoài cổ sang trọng chuẩn phong cách châu Âu.

* **Phông chữ không chân (Sans-serif) — `Plus Jakarta Sans`:**
  - Dùng cho: Đoạn văn bản mô tả, thông số bấc và dung tích, nút bấm hành động, giá bán và nhãn danh mục in hoa.
  - Tác dụng: Hiện đại, thanh thoát, đọc rõ ràng trên mọi màn hình điện thoại và máy tính.

---

## 4. QUY CHUẨN HÌNH ẢNH SẢN PHẨM & DECOR
1. **Hình ảnh sản phẩm:**
   - Tỷ lệ khung hình: `3:4` (chữ nhật đứng) hoặc `1:1` (vuông).
   - Ánh sáng: Ánh sáng tự nhiên buổi sớm hoặc ánh sáng vàng ấm của đèn decor, bóng đổ mềm mại, không dùng phông nền màu sắc lòe loẹt.
   - Bố cục: Cốc nến đặt cạnh cuốn sách mở, tách trà gốm, cành hoa khô hoặc trên khay gỗ sồi tự nhiên.
2. **Hình ảnh không gian (Atmosphere Visuals):**
   - Chụp góc rộng không gian sống thư giãn: bồn tắm thơm, góc bàn làm việc yên tĩnh, phòng ngủ có ánh nến bập bùng.

---

## 5. CÁC THÀNH PHẦN GIAO DIỆN (UI COMPONENTS)
* **Nút bấm (Buttons):** Viền vuông vức sắc nét, chữ in hoa giãn cách chữ rộng (`tracking-widest`), hiệu ứng chuyển màu êm ái khi di chuột (Transition 0.3s).
* **Biểu tượng (Icons):** 100% sử dụng icon nét mảnh của thư viện **Lucide Icons** (`stroke-width: 1.5`), tuyệt đối không dùng emoji màu lòe loẹt làm mất tính cao cấp của thương hiệu.
* **Thanh cuộn ngang (Horizontal Shelf):** Ẩn thanh cuộn mặc định của trình duyệt (`scrollbar-none`), trang bị 2 nút mũi tên tròn điều hướng `<` `>` tinh xảo giúp người dùng lướt sản phẩm mượt mà như xem tạp chí thời trang.
