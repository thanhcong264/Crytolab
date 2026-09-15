# CryptoLab – Phòng Thí Nghiệm Mật Mã Học Tương Tác
> **"Nhập dữ liệu – Quan sát thuật toán – Hiểu cách mật mã bảo vệ thế giới số"**

CryptoLab là nền tảng giáo dục trực quan, tương tác cao giúp sinh viên, giảng viên và kỹ sư an toàn thông tin (Cybersecurity) nắm vững bản chất toán học cũng như cơ chế hoạt động của các thuật toán mật mã kinh điển và hiện đại: **DES, AES, RSA, MD5, SHA-256**.

Điểm nhấn nổi bật: **Hệ thống 50 Bài Tập & Ví Dụ Thực Hành (10 cấp độ từ Cơ bản đến Nâng cao cho mỗi thuật toán)** có hướng dẫn chi tiết từng bước và khu vực thực hành tương tác ngay trên trình duyệt.

---

## 1. Project là gì?

CryptoLab được thiết kế theo triết lý **"DỄ HIỂU > ĐẸP > NHIỀU TÍNH NĂNG"** và **"TRỰC QUAN > LÝ THUYẾT KHÔ KHAN"**:
- **50 Bài tập thực hành có hướng dẫn mẫu (Hands-on Guided Practice):** 10 bài cho mỗi thuật toán (DES, AES, RSA, MD5, SHA-256), chia theo 4 nấc thang độ khó: *Cơ bản (Level 1-3) ➔ Trung cấp (Level 4-6) ➔ Nâng cao (Level 7-9) ➔ Chuyên sâu (Level 10)*.
- **Trực quan hóa Ma trận trạng thái (State Matrix 4x4) trong AES:** Quan sát sự thay đổi màu sắc của từng byte qua *SubBytes, ShiftRows, MixColumns, AddRoundKey*.
- **Khám phá mạng Feistel 16 vòng trong DES:** Theo dõi từng nhánh trái $L_i$, nhánh phải $R_i$, hàm $f$, bảng mở rộng E và 8 hộp thế S-Box.
- **Toán học RSA tương tác:** Tự chọn số nguyên tố $p, q$, tính Modulo $n$, hàm Euler $\phi(n)$, chọn $e$ và tính $d$ bằng thuật toán Euclid mở rộng.
- **Hàm băm thời gian thực (Reactive Hashing):** MD5 và SHA-256 phản hồi tức thời theo từng phím gõ.
- **Mô phỏng Đào Bitcoin (Proof of Work):** Tìm số Nonce sao cho mã băm SHA-256 đạt độ khó số 0 ở đầu.
- **Mô phỏng Tấn công Bảng Cầu Vồng (Rainbow Table Lookup):** Thấy tận mắt cách mật khẩu MD5 bị giải ngược trong 1 mili-giây.
- **Bộ Trắc Nghiệm Quiz:** 6 câu hỏi then chốt kèm giải thích chuyên sâu sau khi chọn đáp án.

---

## 2. Cách chạy trên Windows

Ứng dụng tuân thủ tiêu chuẩn **Zero-dependency & Standalone Client**:
1. Mở thư mục chứa dự án: `c:\Users\Dell\thanhcong\`.
2. Tìm tệp **`index.html`**.
3. **Nhấp đúp chuột (Double-click)** vào `index.html`.
4. Trình duyệt mặc định (Google Chrome, Microsoft Edge, Firefox, Brave, v.v.) sẽ mở website lên ngay lập tức mà không cần cài đặt bất kỳ server backend nào và không lo lỗi CORS.

---

## 3. Cấu trúc Project

```text
thanhcong/
│
├── index.html        # Ứng dụng Single-Page hoàn chỉnh (HTML5 + CSS Cyber + Engine JS + 50 Bài thực hành)
├── README.md         # Tài liệu học tập và cẩm nang kỹ thuật chi tiết
└── (Các tệp script phân tích dữ liệu khác)
```

---

## 4. Hệ Thống 50 Bài Tập & Ví Dụ Thực Hành (10 Cấp Độ)

Mỗi bài tập được thiết kế chuẩn sư phạm 3 phần:
1. 📖 **Ví dụ mẫu & Hướng dẫn cụ thể từng bước:** Giải thích cặn kẽ nguyên lý, công thức và dữ liệu mẫu.
2. 🛠️ **Khu vực Thực hành Tương tác Ngay:** Có nút "Nạp mẫu ban đầu", các ô nhập liệu, và nút "▶ Chạy thực hành / Kiểm tra" để người học thao tác trực tiếp và nhận phản hồi tức thời.
3. 💡 **Xem lời giải & Phân tích chi tiết:** Nút accordion mở rộng giải thích bản chất an ninh mạng và kiến trúc toán học.

### A. DES (10 Cấp độ):
- **Level 1 (Cơ bản):** Khối dữ liệu 64-bit & Đệm dữ liệu (Padding).
- **Level 2 (Cơ bản):** Khóa DES 64-bit & 8 Bit kiểm tra chẵn lẻ (Parity bits).
- **Level 3 (Cơ bản):** Hoán vị khởi tạo IP (Initial Permutation).
- **Level 4 (Trung cấp):** Tách đôi khối dữ liệu: Nhánh trái $L_0$ và nhánh phải $R_0$ (32 bit mỗi nửa).
- **Level 5 (Trung cấp):** Hàm mở rộng Expansion (E-Box) 32 bit lên 48 bit.
- **Level 6 (Trung cấp):** Tra cứu Hộp thế phi tuyến S-Box 1 (6 bit vào ➔ 4 bit ra).
- **Level 7 (Nâng cao):** Thực hiện Vòng Feistel 1 hoàn chỉnh ($L_1 = R_0$, $R_1 = L_0 \oplus f(R_0, K_1)$).
- **Level 8 (Nâng cao):** Mã hóa 16 vòng & Hoán vị kết thúc FP ($IP^{-1}$).
- **Level 9 (Nâng cao):** Giải mã DES bằng cách đảo ngược thứ tự khóa con ($K_{16} \to K_1$).
- **Level 10 (Chuyên sâu):** 4 Khóa yếu (Weak Keys) và tấn công tự đảo $E_K(E_K(P)) = P$.

### B. AES (10 Cấp độ):
- **Level 1 (Cơ bản):** Xếp Ma trận trạng thái State Matrix 4x4 (Thứ tự Column-major).
- **Level 2 (Cơ bản):** Phép XOR ma trận AddRoundKey khởi tạo (Vòng 0).
- **Level 3 (Cơ bản):** Tra cứu bảng thế phi tuyến Rijndael S-Box (SubBytes).
- **Level 4 (Trung cấp):** Dịch chuyển các hàng trong ma trận (ShiftRows).
- **Level 5 (Trung cấp):** Phép nhân nhân 2 trong trường hữu hạn Galois Field $GF(2^8)$ (`xtime`).
- **Level 6 (Trung cấp):** Phép trộn cột MixColumns khuếch tán dữ liệu.
- **Level 7 (Nâng cao):** Thuật toán mở rộng khóa (Key Expansion sinh 176 bytes khóa con).
- **Level 8 (Nâng cao):** Thực hiện trọn vẹn 1 vòng chuẩn của AES-128.
- **Level 9 (Nâng cao):** Vòng cuối cùng (Final Round 10) bỏ qua MixColumns.
- **Level 10 (Chuyên sâu):** So sánh các chế độ hoạt động: Hiểm họa của ECB (ECB Penguin) và tính ưu việt của GCM.

### C. RSA (10 Cấp độ):
- **Level 1 (Cơ bản):** Kiểm tra tính nguyên tố của 2 số $p$ và $q$.
- **Level 2 (Cơ bản):** Tính Modulo $n = p \times q$.
- **Level 3 (Cơ bản):** Tính hàm Euler Phi $\phi(n) = (p-1)(q-1)$.
- **Level 4 (Trung cấp):** Chọn số mũ công khai $e$ thỏa mãn $\gcd(e, \phi(n)) = 1$.
- **Level 5 (Trung cấp):** Tính số mũ bí mật $d$ bằng thuật toán Euclid mở rộng.
- **Level 6 (Trung cấp):** Phép lũy thừa nhị phân theo modulo (Square-and-Multiply).
- **Level 7 (Nâng cao):** Mã hóa thông điệp số $C = M^e \pmod n$.
- **Level 8 (Nâng cao):** Giải mã thông điệp $M = C^d \pmod n$.
- **Level 9 (Nâng cao):** Mã hóa chuỗi văn bản ASCII thành mảng số bản mã.
- **Level 10 (Chuyên sâu):** Tính chất đồng cấu của Textbook RSA và chuẩn đệm an toàn RSA-OAEP.

### D. MD5 (10 Cấp độ):
- **Level 1 (Cơ bản):** Mã băm MD5 kinh điển của chuỗi rỗng.
- **Level 2 (Cơ bản):** Kích thước đầu ra luôn cố định 128 bit (32 ký tự hex).
- **Level 3 (Cơ bản):** Cơ chế đệm dữ liệu (Padding: bit 1 + các bit 0 + độ dài 64-bit Little-Endian).
- **Level 4 (Trung cấp):** 4 Hằng số khởi tạo của 4 thanh ghi $A, B, C, D$.
- **Level 5 (Trung cấp):** Hàm logic phi tuyến Vòng 1: $F(X,Y,Z) = (X \wedge Y) \vee (\neg X \wedge Z)$.
- **Level 6 (Trung cấp):** Các hàm phi tuyến Vòng 2, 3, 4 ($G, H, I$).
- **Level 7 (Nâng cao):** Bảng 64 hằng số lượng giác $T[i] = \lfloor 2^{32} \times |\sin(i)| \rfloor$.
- **Level 8 (Nâng cao):** Kiểm tra toàn vẹn tệp tin (File Checksum Verification).
- **Level 9 (Nâng cao):** Mô phỏng tấn công tra cứu Bảng Cầu Vồng (Rainbow Table Lookup).
- **Level 10 (Chuyên sâu):** Phân tích và minh họa tấn công va chạm (MD5 Collision Attack).

### E. SHA-256 (10 Cấp độ):
- **Level 1 (Cơ bản):** Giá trị băm chuỗi rỗng nổi tiếng `e3b0c442...` của SHA-256.
- **Level 2 (Cơ bản):** Độ nhạy tuyệt đối: Hiệu ứng Tuyết lở (Avalanche Effect).
- **Level 3 (Cơ bản):** Cơ chế đệm thông điệp 512-bit (Big-Endian Padding).
- **Level 4 (Trung cấp):** 8 Hằng số khởi tạo $H_0 \dots H_7$ sinh từ phần thập phân của căn bậc 2.
- **Level 5 (Trung cấp):** Lập lịch thông điệp Message Schedule $W_0 \dots W_{63}$ bằng các hàm xoay bit $\sigma$.
- **Level 6 (Trung cấp):** Các hàm logic vòng nén $\text{Ch}$ (Choose) và $\text{Maj}$ (Majority).
- **Level 7 (Nâng cao):** 64 Hằng số vòng $K_t$ sinh từ căn bậc 3 của 64 số nguyên tố đầu tiên.
- **Level 8 (Nâng cao):** So sánh bộ ba: SHA-1 vs SHA-256 vs SHA-512.
- **Level 9 (Nâng cao):** Mô phỏng Đào Bitcoin (Proof of Work Mining) tìm Nonce tạo hash có số 0 ở đầu.
- **Level 10 (Chuyên sâu):** Mã xác thực thông điệp HMAC-SHA256 trong bảo mật API & JWT.

---

## 5. Cảnh Báo An Ninh Mạng (Security Guidelines)

> [!CAUTION]
> Ứng dụng này được xây dựng phục vụ **HỌC TẬP VÀ NGHIÊN CỨU**. Tuyệt đối không tự viết thuật toán mật mã tự tạo cho môi trường thực tế (Don't roll your own crypto).
- **DES:** Không sử dụng cho bất kỳ hệ thống mới nào vì khóa 56-bit có thể bị vét cạn trong vài giờ.
- **MD5:** Đã bị vỡ hoàn toàn về mặt chống va chạm (Collision). Không dùng MD5 để lưu mật khẩu hay chứng thực số.
- **Textbook RSA:** Bắt buộc phải sử dụng kèm đệm ngẫu nhiên **RSA-OAEP** với độ dài khóa tối thiểu 2048-bit.
- **AES:** Luôn sử dụng kèm các chế độ xác thực toàn vẹn như **AES-GCM**, không dùng chế độ ECB thô.
