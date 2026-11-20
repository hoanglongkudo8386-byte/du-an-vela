# SƠ ĐỒ CẤU TRÚC WEBSITE (SITEMAP) & KIẾN TRÚC ĐIỀU HƯỚNG VELA
> *Tham chiếu và nâng cấp từ cấu trúc thực tế của Chillme Candle (chillme.vn)*

---

## 1. TỔNG QUAN KIẾN TRÚC HỆ THỐNG
Website thương mại điện tử **VELA** được xây dựng theo kiến trúc đa tầng (Multi-tier E-commerce Structure), tối ưu cho trải nghiệm người dùng (UX) và tối ưu hóa chuyển đổi (CRO), đồng thời tuân thủ cấu trúc chuẩn SEO của các nền tảng thương mại điện tử hiện đại.

```
                                  [ WEBSITE VELA ]
                                         │
        ┌──────────────┬─────────────────┼────────────────┬──────────────┐
        │              │                 │                │              │
   [TRANG CHỦ]   [CỬA HÀNG/SHOP]   [DỊCH VỤ B2B]    [VỀ VELA]     [BLOG/MAGAZINE]
                       │                 │                               │
            ┌──────────┴──────────┐   [Quà Doanh Nghiệp]         ┌───────┴───────┐
            │                     │   [Quà Cưới/Sự Kiện]         │               │
      [DANH MỤC CON]        [BỘ SƯU TẬP]                       [Hướng Dẫn]  [Kiến Thức]
      - Nến Thơm Phòng      - Luxury Scent                     [Lifestyle]  [Nguyên Liệu]
      - Nến Trang Trí       - Seasonal Editions
      - Tinh Dầu Tán Hương
      - Set Quà Tặng
      - Phụ Kiện Nến
```

---

## 2. BẢNG CHI TIẾT SITEMAP TOÀN TRANG (FULL SITEMAP)

| Cấp 1 (Main Menu) | Cấp 2 (Sub-Category / Page) | Cấp 3 (Chi tiết lọc / Item) | Mục đích & Trải nghiệm |
| :--- | :--- | :--- | :--- |
| **0. Header Top** | **Announcement Bar** | Thông báo Freeship từ 500k, Hotline | Kích thích đơn hàng đạt ngưỡng miễn phí vận chuyển |
| **1. Trang Chủ** | `/` (Homepage) | Hero, Best Sellers, Collections, Story, Reviews, Instagram | Giới thiệu thương hiệu, điều hướng nhanh tới các danh mục cốt lõi |
| **2. Nến Thơm** | `/collections/nen-thom` | **Tất cả nến thơm** | Trang danh mục tổng, có bộ lọc đa tầng |
| | `/collections/nen-thom-phong` | Nến thư giãn, Nến phòng ngủ, Nến phòng khách | Lọc theo không gian sinh hoạt |
| | `/collections/nen-trang-tri` | Nến tạo hình nghệ thuật, Nến hoa khô, Nến decor | Phục vụ chụp ảnh, trang trí phòng |
| | `/collections/collection-luxury` | Hũ thủy tinh mạ vàng, Bấc gỗ lách tách cao cấp | Phân khúc quà tặng cao cấp |
| **3. Tinh Dầu** | `/collections/tinh-dau` | **Tất cả tinh dầu** | Hương thơm không khói 24/7 |
| | `/collections/tinh-dau-khuech-tan` | Reed Diffuser (Chai que mây tán hương) | Thơm phòng liên tục 2-3 tháng |
| | `/collections/da-thom-tan-huong` | Đá pha lê / Đá núi lửa khuếch tán | Decor bàn làm việc sang trọng |
| | `/collections/tinh-dau-refill` | Chai bổ sung dung tích lớn tiết kiệm | Tăng LTV (giá trị trọn đời khách hàng) |
| **4. Set Quà Tặng** | `/collections/set-qua-tang` | **Tất cả hộp quà** | Phục vụ các dịp kỷ niệm, sinh nhật |
| | `/collections/qua-tang-sinh-nhat` | Hộp quà nến + thiệp + diêm que dài | Quà tặng cá nhân |
| | `/collections/qua-tang-doanh-nghiep`| Set nến in logo theo yêu cầu (B2B) | Đơn hàng số lượng lớn |
| | `/collections/combo-tiet-kiem` | Mua 2 tặng phụ kiện, combo nến + tinh dầu | Tăng giá trị giỏ hàng trung bình (AOV) |
| **5. Phụ Kiện Nến** | `/collections/phu-kien` | Bộ dụng cụ 3 món (Kéo, Chuông, Khêu) | Chăm sóc nến chuẩn chuyên gia |
| | | Đèn đốt nến không khói (Candle Warmer Lamp) | Thưởng thức nến an toàn cho chung cư |
| | | Diêm dài nghệ thuật, Bật lửa sạc USB | Phụ kiện thắp lửa an toàn |
| **6. Về VELA** | `/pages/ve-vela` | Câu chuyện thương hiệu ra đời 2022 | Xây dựng niềm tin & cảm xúc thương hiệu |
| | `/pages/nguyen-lieu` | Triết lý 100% Sáp đậu nành & Tinh dầu thuần | Cam kết chất lượng & sức khỏe hô hấp |
| | `/pages/quy-trinh-do-tay` | Kỹ thuật đổ tay thủ công từng lô nhỏ | Nhấn mạnh tính thủ công mỹ nghệ |
| **7. Dịch Vụ B2B** | `/pages/gia-cong-qua-tang` | Quà tặng doanh nghiệp, Quà cưới, Resort | Thu hút khách hàng mua sỉ / hợp đồng lớn |
| **8. Góc Cảm Hứng** | `/blogs/cam-hung` | **Tạp chí hương thơm (Blog)** | Thu hút organic traffic SEO & giáo dục thị trường |
| | `/blogs/huong-dan` | Hướng dẫn đốt nến lần đầu, cách cắt tỉa bấc | Chăm sóc khách hàng sau mua |
| | `/blogs/khoa-hoc-mui-huong`| Khoa học khứu giác, Aromatherapy giảm stress | Tăng độ uy tín chuyên gia |
| | `/blogs/lifestyle` | Setup góc thư giãn, Home decor phong cách Zen | Kích thích cảm hứng sống đẹp |
| **9. Liên Hệ & Hỗ Trợ**| `/pages/lien-he` | Showroom, Bản đồ, Hotline, Email tư vấn | Khách hàng đến trải nghiệm trực tiếp |
| | `/pages/chinh-sach-van-chuyen`| Freeship, Thời gian giao hàng, Đóng gói | Xóa tan rào cản đặt hàng |
| | `/pages/chinh-sach-doi-tra` | Đổi trả 1-1 trong 7 ngày nếu nứt vỡ | Bảo chứng chất lượng |
| | `/pages/faq` | Câu hỏi thường gặp khi dùng nến | Giải đáp thắc mắc tự động |
| **10. Mua Hàng** | `/cart` | Giỏ hàng dạng Drawer & Trang giỏ hàng đầy đủ | Upsell phụ kiện & kiểm tra mã ưu đãi |
| | `/checkout` | Cổng thanh toán COD / VNPAY / Chuyển khoản | Thanh toán nhanh gọn 1 bước (One-page checkout) |

---

## 3. CƠ CHẾ ĐIỀU HƯỚNG HEADER & FOOTER

### A. Main Navigation Header (Thanh điều hướng ngang)
* **Logo Trung Tâm / Cạnh Trái:** `V E L A` (Typography thanh lịch, tracking rộng).
* **Menu Ngang Cấp 1:**
  1. `TRANG CHỦ`
  2. `NẾN THƠM` *(Dropdown: Nến Thư Giãn, Nến Trang Trí, Collection Luxury, Xem tất cả)*
  3. `TINH DẦU` *(Dropdown: Tinh dầu que mây, Đá tán hương, Chai refill)*
  4. `SET QUÀ TẶNG` *(Dropdown: Quà sinh nhật, Quà cưới, Set combo)*
  5. `PHỤ KIỆN` *(Bộ kéo cắt bấc, Đèn đốt nến không khói)*
  6. `DOANH NGHIỆP (B2B)` *(Gia công theo yêu cầu)*
  7. `GÓC CẢM HỨNG` *(Kiến thức & Phong cách sống)*
  8. `VỀ VELA` *(Câu chuyện thương hiệu)*
* **Icon Tương Tác Phía Phải:**
  - Nút Tìm kiếm (Live Search Modal mở trượt)
  - Nút Hotline gọi nhanh (`1800 1234`)
  - Nút Giỏ hàng kèm badge số lượng sản phẩm động (`Cart Drawer`)

### B. Sticky Quick-Category Bar (Thanh phân loại nhanh danh mục)
Nằm cố định ngay dưới Header khi lướt trang, giúp người dùng chuyển tab tức thì không cần mở menu:
`[ TẤT CẢ ]` `[ NẾN THƯ GIÃN ]` `[ NẾN TRANG TRÍ ]` `[ TINH DẦU ]` `[ SET QUÀ TẶNG ]` `[ PHỤ KIỆN ]`

### C. Footer 4 Cột Cân Đối
* **Cột 1: Thương hiệu VELA** — Logo, Giới thiệu ngắn, Chứng nhận sáp thực vật 100%, Mạng xã hội.
* **Cột 2: Danh Mục Sản Phẩm** — Nến thơm thư giãn, Nến decor, Tinh dầu phòng, Hộp quà tặng.
* **Cột 3: Hỗ Trợ Khách Hàng** — Chính sách vận chuyển, Đổi trả bảo hành 1-1, Hướng dẫn đốt nến, FAQ.
* **Cột 4: Showroom & Liên Hệ** — Địa chỉ trải nghiệm thực tế, Hotline, Email B2B, Giấy phép ĐKKD.
* **Băng chân trang (Bottom Bar):** Bản quyền `© 2026 VELA` + Logo thanh toán bảo mật (Visa, Master, MoMo, VNPAY, COD).
