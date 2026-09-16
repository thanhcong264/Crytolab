// ==========================================================================
// 150 COMPREHENSIVE CRYPTOGRAPHY QUIZ QUESTIONS (30 QUESTIONS PER ALGORITHM)
// ==========================================================================
const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "DES (Data Encryption Standard) là thuật toán thuộc loại mật mã nào?",
    "options": [
      "A. Mật mã bất đối xứng khóa công khai",
      "B. Mã hóa đối xứng khối (Block cipher)",
      "C. Hàm băm mật mã một chiều",
      "D. Mật mã dòng (Stream cipher)"
    ],
    "ans": 1,
    "exp": "DES là thuật toán mã hóa đối xứng khối kinh điển, xử lý dữ liệu theo từng khối 64-bit và sử dụng cùng một khóa bí mật cho cả quá trình mã hóa lẫn giải mã."
  },
  {
    "id": 2,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Kích thước khối (Block size) và kích thước khóa thực tế có hiệu lực của DES lần lượt là bao nhiêu?",
    "options": [
      "A. Khối 128-bit, khóa 128-bit",
      "B. Khối 64-bit, khóa 56-bit (8 bit còn lại dùng kiểm tra chẵn lẻ parity)",
      "C. Khối 64-bit, khóa 64-bit",
      "D. Khối 32-bit, khóa 56-bit"
    ],
    "ans": 1,
    "exp": "DES nhận đầu vào khóa 64-bit nhưng các bit ở vị trí thứ 8, 16, 24, 32, 40, 48, 56, 64 bị loại bỏ làm bit kiểm tra chẵn lẻ (parity check). Do đó không gian khóa hiệu lực chỉ là 56 bit (2^56 khả năng)."
  },
  {
    "id": 3,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Cấu trúc thiết kế cốt lõi mà thuật toán DES sử dụng trong 16 vòng lặp là gì?",
    "options": [
      "A. Mạng Thay thế - Hoán vị (Substitution-Permutation Network - SPN)",
      "B. Cấu trúc Mạng Feistel (Feistel Network)",
      "C. Cấu trúc Bọt biển (Sponge Construction)",
      "D. Kiến trúc Merkle-Damgård"
    ],
    "ans": 1,
    "exp": "DES dựa trên cấu trúc Mạng Feistel do Horst Feistel phát minh. Mạng này chia khối dữ liệu thành hai nửa trái và phải (L, R), cho phép quá trình giải mã dùng chung một kiến trúc phần cứng với mã hóa, chỉ cần đảo ngược thứ tự khóa con."
  },
  {
    "id": 4,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Trong mỗi vòng Feistel của DES, khối nhánh phải R (32-bit) được xử lý qua thành phần nào đầu tiên trước khi XOR với khóa con Ki?",
    "options": [
      "A. Hộp thế phi tuyến S-Box",
      "B. Bảng mở rộng Expansion E-Box (mở rộng từ 32 bit lên 48 bit)",
      "C. Hoán vị P-Box (32 bit)",
      "D. Hoán vị khởi tạo IP"
    ],
    "ans": 1,
    "exp": "Hộp mở rộng E-Box nhận 32 bit của nhánh phải R và nhân bản một số bit biên để tạo thành chuỗi 48 bit, giúp kích thước khớp hoàn toàn với khóa con Ki (48 bit) trước khi thực hiện phép XOR."
  },
  {
    "id": 5,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Thành phần DUY NHẤT tạo ra tính chất phi tuyến (Non-linearity) và khả năng chống thám mã trong thuật toán DES là gì?",
    "options": [
      "A. Hoán vị khởi tạo IP và hoán vị kết thúc FP",
      "B. Bảng hoán vị P-Box",
      "C. 8 hộp thế S-Box (Substitution Boxes)",
      "D. Phép dịch vòng khóa con (Key schedule bit-shift)"
    ],
    "ans": 2,
    "exp": "Các phép hoán vị (IP, FP, E, P) và phép XOR đều là các phép biến đổi tuyến tính. Chỉ có 8 hộp thế S-Box là phi tuyến, đóng vai trò sống còn bảo vệ DES trước kỹ thuật thám mã vi sai (Differential Cryptanalysis)."
  },
  {
    "id": 6,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Mỗi hộp thế S-Box trong DES nhận đầu vào bao nhiêu bit và xuất ra đầu ra bao nhiêu bit?",
    "options": [
      "A. Đầu vào 8 bit, đầu ra 8 bit",
      "B. Đầu vào 6 bit, đầu ra 4 bit",
      "C. Đầu vào 4 bit, đầu ra 6 bit",
      "D. Đầu vào 32 bit, đầu ra 32 bit"
    ],
    "ans": 1,
    "exp": "Mỗi hộp S-Box nhận đầu vào 6 bit (Bit 1 và 6 xác định dòng từ 0-3, 4 bit giữa xác định cột từ 0-15) và trả về giá trị 4 bit. Với 8 S-Box, 48 bit đầu vào được nén thành 32 bit đầu ra."
  },
  {
    "id": 7,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Thuật toán DES thực hiện tổng cộng bao nhiêu vòng lặp Feistel chuẩn?",
    "options": [
      "A. 10 vòng",
      "B. 12 vòng",
      "C. 16 vòng",
      "D. 20 vòng"
    ],
    "ans": 2,
    "exp": "DES thực thi chính xác 16 vòng lặp Feistel liên tiếp. Mỗi vòng sử dụng một khóa con 48-bit khác nhau được sinh ra từ khóa chính 56-bit."
  },
  {
    "id": 8,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Mối quan hệ toán học giữa Hoán vị khởi tạo (IP) và Hoán vị kết thúc (FP) trong DES là gì?",
    "options": [
      "A. FP là hoán vị nghịch đảo của IP (FP = IP^-1)",
      "B. FP giống hệt hoàn toàn với IP",
      "C. FP là phép đảo ngược tất cả các bit của IP",
      "D. Hai hoán vị này hoàn toàn độc lập và không có quan hệ toán học"
    ],
    "ans": 0,
    "exp": "FP (Final Permutation) là hoán vị nghịch đảo chính xác của IP (Initial Permutation). Nếu áp dụng FP ngay sau IP, dữ liệu sẽ quay trở lại trạng thái ban đầu không đổi."
  },
  {
    "id": 9,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Lý do chính khiến thuật toán DES nguyên bản bị coi là không còn an toàn và bị loại bỏ là gì?",
    "options": [
      "A. Đã phát hiện ra cửa sau bí mật (Backdoor) trong các bảng S-Box",
      "B. Không gian khóa 2^56 quá nhỏ, có thể bị tấn công vét cạn (Brute-force) trong vòng vài giờ bằng phần cứng hiện đại",
      "C. DES không thể mã hóa được các ký tự chữ cái tiếng Việt Unicode",
      "D. DES bắt buộc phải kết nối Internet mới hoạt động được"
    ],
    "ans": 1,
    "exp": "Không gian khóa 56-bit tương đương xấp xỉ 7.2 × 10^16 khóa. Dự án EFF Deep Crack từ năm 1998 đã phá khóa DES trong 56 giờ, và ngày nay các cụm máy tính GPU/ASIC hiện đại có thể bẻ khóa trong chưa đầy 1 ngày."
  },
  {
    "id": 10,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Trong quá trình giải mã DES, các khóa con (Subkeys) từ K1 đến K16 được đưa vào các vòng Feistel theo thứ tự như thế nào?",
    "options": [
      "A. Theo đúng thứ tự như khi mã hóa (K1, K2, ..., K16)",
      "B. Đảo ngược hoàn toàn từ vòng 16 về vòng 1 (K16, K15, ..., K1)",
      "C. Đổi chỗ từng cặp: K2 trước K1 sau, K4 trước K3 sau",
      "D. Sử dụng thuật toán sinh khóa con độc lập khác"
    ],
    "ans": 1,
    "exp": "Nhờ tính đối xứng toán học của mạng Feistel, giải mã không cần viết hàm ngược riêng biệt; ta chỉ cần chạy lại cùng thuật toán nhưng nạp các khóa con theo thứ tự đảo ngược từ K16 về K1."
  },
  {
    "id": 11,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Bảng hoán vị PC-1 (Permuted Choice 1) trong khâu lập lịch khóa DES thực hiện chức năng gì?",
    "options": [
      "A. Chọn 48 bit từ 56 bit để tạo khóa con",
      "B. Loại bỏ 8 bit chẵn lẻ từ khóa 64-bit và hoán vị 56 bit còn lại thành hai nửa C0 và D0 (28 bit mỗi nửa)",
      "C. Nhân đôi 32 bit thành 64 bit",
      "D. Đảo ngược toàn bộ các byte trong khóa chính"
    ],
    "ans": 1,
    "exp": "PC-1 nhận khóa gốc 64 bit, bỏ đi các bit thứ 8, 16, 24, 32, 40, 48, 56, 64 và hoán vị 56 bit còn lại, chia đều thành C0 (28 bit) và D0 (28 bit)."
  },
  {
    "id": 12,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Trong thuật toán sinh khóa con DES, ở các vòng nào hai nửa C và D chỉ được dịch vòng trái 1 bit?",
    "options": [
      "A. Vòng 1, 2, 9 và 16",
      "B. Vòng 1, 3, 5 và 7",
      "C. Vòng 4, 8, 12 và 16",
      "D. Tất cả các vòng đều dịch 2 bit"
    ],
    "ans": 0,
    "exp": "Theo quy chuẩn DES, tại các vòng 1, 2, 9 và 16, C và D được dịch vòng trái đúng 1 bit. Ở 12 vòng còn lại, chúng được dịch vòng trái 2 bit. Tổng số bit dịch qua 16 vòng là 28 bit, đưa C và D về trạng thái ban đầu."
  },
  {
    "id": 13,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Bảng hoán vị PC-2 (Permuted Choice 2) trong DES có kích thước đầu vào và đầu ra là bao nhiêu?",
    "options": [
      "A. Đầu vào 64 bit, đầu ra 48 bit",
      "B. Đầu vào 56 bit, đầu ra 48 bit (chọn 48 bit làm khóa con Ki)",
      "C. Đầu vào 48 bit, đầu ra 32 bit",
      "D. Đầu vào 28 bit, đầu ra 24 bit"
    ],
    "ans": 1,
    "exp": "PC-2 ghép hai nửa C_i và D_i (tổng 56 bit) rồi chọn lọc và hoán vị thành chuỗi 48 bit làm khóa con K_i cho vòng thứ i."
  },
  {
    "id": 14,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Sau khi qua 8 hộp thế S-Box, 32 bit đầu ra được đưa qua thành phần nào trước khi XOR với nửa trái L_{i-1}?",
    "options": [
      "A. Hộp mở rộng E-Box",
      "B. Bảng hoán vị thẳng P-Box (32-bit Permutation)",
      "C. Hộp thế S-Box thứ 9",
      "D. Hoán vị khởi tạo IP"
    ],
    "ans": 1,
    "exp": "Bảng P-Box hoán vị 32 bit đầu ra từ 8 S-Box để khuếch tán các bit này sang nhiều vị trí khác nhau, đảm bảo các bit đầu ra từ một S-Box sẽ đi vào các S-Box khác nhau ở vòng lặp kế tiếp."
  },
  {
    "id": 15,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Công thức toán học của một vòng Feistel DES chuẩn (với L_{i-1}, R_{i-1} và khóa K_i) là gì?",
    "options": [
      "A. L_i = R_{i-1}; R_i = L_{i-1} ⊕ f(R_{i-1}, K_i)",
      "B. L_i = L_{i-1} ⊕ R_{i-1}; R_i = f(L_{i-1}, K_i)",
      "C. L_i = f(R_{i-1}, K_i); R_i = L_{i-1}",
      "D. L_i = R_{i-1} ⊕ K_i; R_i = L_{i-1} ⊕ K_i"
    ],
    "ans": 0,
    "exp": "Đặc trưng của mạng Feistel: nửa trái mới nhận nguyên vẹn nửa phải cũ (L_i = R_{i-1}), còn nửa phải mới bằng nửa trái cũ XOR với hàm f của nửa phải cũ và khóa con (R_i = L_{i-1} ⊕ f(R_{i-1}, K_i))."
  },
  {
    "id": 16,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Ở vòng thứ 16 (vòng cuối) của DES, có một bước đặc biệt nào xảy ra trước khi áp dụng hoán vị kết thúc FP?",
    "options": [
      "A. Không thực hiện phép hoán vị P-Box",
      "B. Không hoán đổi hai nhánh (Không swap L16 và R16, ghép thành R16 || L16)",
      "C. Bỏ qua bước XOR với khóa con K16",
      "D. Khóa con K16 được nhân đôi"
    ],
    "ans": 1,
    "exp": "Ở vòng 16, DES cố tình không tráo đổi hai nửa (Pre-output là R16 || L16 thay vì L16 || R16). Nhờ vậy, quy trình giải mã có thể chạy y hệt quy trình mã hóa từ đầu đến cuối."
  },
  {
    "id": 17,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "DES có bao nhiêu \"Khóa yếu\" (Weak Keys) mà khi sử dụng, tất cả 16 khóa con sinh ra đều giống hệt nhau?",
    "options": [
      "A. 2 khóa",
      "B. 4 khóa",
      "C. 8 khóa",
      "D. 16 khóa"
    ],
    "ans": 1,
    "exp": "DES có đúng 4 khóa yếu (chứa toàn 0, toàn 1, hoặc nửa 0 nửa 1 xen kẽ sau khi bỏ bit parity). Khi dùng khóa yếu, mã hóa 2 lần liên tiếp bằng cùng một khóa sẽ trả lại đúng bản rõ ban đầu: E_K(E_K(P)) = P."
  },
  {
    "id": 18,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Tính chất nào của DES phát biểu rằng: nếu đảo ngược tất cả các bit của bản rõ và của khóa thì bản mã cũng bị đảo ngược tất cả các bit (E_{~K}(~P) = ~E_K(P))?",
    "options": [
      "A. Tính chất đồng cấu (Homomorphic)",
      "B. Tính chất bù (Complementarity Property)",
      "C. Tính chất giao hoán (Commutative)",
      "D. Tính chất phân phối (Distributive)"
    ],
    "ans": 1,
    "exp": "Tính chất bù: E_{~K}(~P) = ~E_K(P). Tính chất này cho phép kẻ tấn công vét cạn giảm không gian thử khóa đi một nửa (từ 2^56 xuống 2^55 phép thử)."
  },
  {
    "id": 19,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Tấn công thám mã vi sai (Differential Cryptanalysis) do ai phát minh và nó cần bao nhiêu cặp bản rõ đã chọn để phá DES?",
    "options": [
      "A. Horst Feistel, cần 2^16 cặp",
      "B. Eli Biham và Adi Shamir (1990), cần 2^47 cặp bản rõ đã chọn",
      "C. Mitsuru Matsui, cần 2^43 cặp",
      "D. Ron Rivest, cần 2^56 cặp"
    ],
    "ans": 1,
    "exp": "Eli Biham và Adi Shamir công bố thám mã vi sai năm 1990 và chỉ ra cần 2^47 cặp bản rõ đã chọn để phá vỡ 16 vòng DES. Các nhà thiết kế DES tại IBM sau đó tiết lộ họ đã biết và tối ưu các hộp S-Box để kháng lại tấn công này từ những năm 1970."
  },
  {
    "id": 20,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Phương pháp thám mã tuyến tính (Linear Cryptanalysis) do ai công bố năm 1993 và cần bao nhiêu bản rõ đã biết?",
    "options": [
      "A. Mitsuru Matsui, cần khoảng 2^43 bản rõ đã biết",
      "B. Vincent Rijmen, cần 2^32 bản rõ",
      "C. Whitfield Diffie, cần 2^56 bản rõ",
      "D. Martin Hellman, cần 2^128 bản rõ"
    ],
    "ans": 0,
    "exp": "Nhà mật mã học người Nhật Mitsuru Matsui phát minh thám mã tuyến tính năm 1993, tìm các xấp xỉ tuyến tính của S-Box và phá DES với 2^43 bản rõ đã biết (nhanh hơn vét cạn 2^56 trên lý thuyết)."
  },
  {
    "id": 21,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Giải pháp Double-DES (áp dụng DES hai lần với hai khóa độc lập K1, K2: C = E_{K2}(E_{K1}(P))) không được sử dụng vì lý do gì?",
    "options": [
      "A. Tốn quá nhiều bộ nhớ RAM",
      "B. Bị tấn công \"Gặp nhau ở giữa\" (Meet-in-the-Middle) làm độ an toàn chỉ tương đương 2^57 thay vì 2^112",
      "C. Không giải mã ngược lại được",
      "D. Làm tăng kích thước bản mã lên gấp đôi"
    ],
    "ans": 1,
    "exp": "Tấn công Meet-in-the-Middle của Diffie & Hellman tính toán E_{K1}(P) và D_{K2}(C) lưu vào bảng băm, chỉ mất thời gian 2^56 và bộ nhớ 2^56, khiến Double-DES gần như không an toàn hơn Single-DES là bao."
  },
  {
    "id": 22,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Thuật toán Triple-DES (3DES) chuẩn sử dụng chuỗi thao tác nào sau đây trên 3 khóa K1, K2, K3?",
    "options": [
      "A. Mã hóa - Mã hóa - Mã hóa (EEE: Encrypt - Encrypt - Encrypt)",
      "B. Mã hóa - Giải mã - Mã hóa (EDE: Encrypt - Decrypt - Encrypt)",
      "C. Giải mã - Mã hóa - Giải mã (DED: Decrypt - Encrypt - Decrypt)",
      "D. Mã hóa - Băm - Mã hóa (EHE: Encrypt - Hash - Encrypt)"
    ],
    "ans": 1,
    "exp": "3DES sử dụng cấu trúc EDE: C = E_{K3}(D_{K2}(E_{K1}(P))). Khi đặt K1 = K2 = K3, thao tác D_{K2} sẽ triệt tiêu E_{K1}, giúp 3DES tương thích ngược hoàn toàn với hệ thống DES truyền thống đơn lẻ."
  },
  {
    "id": 23,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Biến thể 3DES sử dụng 2 khóa độc lập (2-key 3DES, với K1 = K3) có độ dài khóa hiệu lực về mặt lý thuyết chống Meet-in-the-Middle là bao nhiêu bit?",
    "options": [
      "A. 56 bit",
      "B. 80 bit đến 112 bit",
      "C. 168 bit",
      "D. 128 bit"
    ],
    "ans": 1,
    "exp": "Với 2 khóa K1 và K2, tổng số bit khóa là 112 bit. Tuy nhiên, trước các biến thể tấn công Meet-in-the-Middle tiên tiến, NIST đánh giá mức an toàn thực tế của 2-key 3DES chỉ còn khoảng 80-112 bit."
  },
  {
    "id": 24,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Biến thể 3DES sử dụng 3 khóa độc lập hoàn toàn (3-key 3DES: K1 != K2 != K3) có tổng độ dài khóa thực và độ an toàn chống vét cạn là:",
    "options": [
      "A. Khóa 168 bit (tính cả parity là 192 bit), độ an toàn hiệu lực 112 bit",
      "B. Khóa 128 bit, độ an toàn 128 bit",
      "C. Khóa 256 bit, độ an toàn 256 bit",
      "D. Khóa 64 bit, độ an toàn 56 bit"
    ],
    "ans": 0,
    "exp": "3 khóa 56-bit tạo thành không gian 168 bit khóa thực (192 bit gồm parity). Nhưng do tấn công Meet-in-the-Middle, mức độ an toàn hiệu lực tối đa của 3-key 3DES là 112 bit."
  },
  {
    "id": 25,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Cuộc tấn công \"Sweet32\" (công bố năm 2016) nhằm vào DES và 3DES dựa trên điểm yếu cốt tử nào?",
    "options": [
      "A. Kích thước khóa 56-bit bị bẻ khóa",
      "B. Kích thước khối (Block size) chỉ có 64-bit, gây va chạm khối theo nghịch lý ngày sinh nhật sau khi mã hóa khoảng 2^32 khối (32 GB dữ liệu)",
      "C. Lỗi tràn bộ nhớ đệm trong mã C của OpenSSL",
      "D. S-Box bị rò rỉ khóa bí mật qua âm thanh quạt tản nhiệt"
    ],
    "ans": 1,
    "exp": "Tấn công Sweet32 (CVE-2016-2183) chứng minh với các thuật toán khối 64-bit như 3DES và Blowfish trong kết nối TLS/VPN, sau khoảng 2^32 khối (32 GB) truyền tải, va chạm bản mã chắc chắn xảy ra, cho phép kẻ thù khôi phục cookie HTTP bản rõ."
  },
  {
    "id": 26,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Tiền thân trực tiếp của thuật toán DES do hãng IBM phát triển vào đầu thập niên 1970 có tên là gì?",
    "options": [
      "A. Lucifer",
      "B. Enigma",
      "C. Rijndael",
      "D. RSA"
    ],
    "ans": 0,
    "exp": "Thuật toán Lucifer do Horst Feistel và nhóm nghiên cứu tại IBM phát triển năm 1971 chính là nền tảng nguyên mẫu trực tiếp được chọn lọc và tinh chỉnh để trở thành chuẩn DES năm 1977."
  },
  {
    "id": 27,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Cơ quan nào của chính phủ Hoa Kỳ đã tham gia điều chỉnh kích thước khóa từ 64/128-bit xuống 56-bit và tinh chỉnh các hộp S-Box của DES vào năm 1976?",
    "options": [
      "A. FBI",
      "B. NSA (National Security Agency)",
      "C. NASA",
      "D. CIA"
    ],
    "ans": 1,
    "exp": "NSA đã trực tiếp phối hợp với NBS (nay là NIST) để rút ngắn khóa xuống 56-bit và bí mật điều chỉnh các bảng S-Box để chống lại kỹ thuật thám mã vi sai mà thời điểm đó chưa được công bố công khai ra thế giới."
  },
  {
    "id": 28,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Năm 1998, tổ chức Electronic Frontier Foundation (EFF) đã chế tạo cỗ máy nổi tiếng nào để bẻ khóa DES trong 56 giờ?",
    "options": [
      "A. Deep Blue",
      "B. EFF Deep Crack",
      "C. Quantum Leap",
      "D. Titan Supercomputer"
    ],
    "ans": 1,
    "exp": "Cỗ máy EFF Deep Crack được chế tạo với kinh phí chỉ khoảng $250.000, sử dụng 1.856 chip ASIC tùy chỉnh, vét cạn toàn bộ không gian khóa DES trong vòng chưa đầy 3 ngày, chứng minh dứt điểm rằng DES đã hoàn toàn lỗi thời."
  },
  {
    "id": 29,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Theo khuyến nghị chính thức của Viện Tiêu chuẩn và Kỹ thuật Quốc gia Hoa Kỳ (NIST), thuật toán 3DES bị loại bỏ hoàn toàn (deprecate/disallow) khỏi mọi ứng dụng từ năm nào?",
    "options": [
      "A. Năm 2005",
      "B. Năm 2010",
      "C. Hết năm 2023",
      "D. Năm 2050"
    ],
    "ans": 2,
    "exp": "NIST Special Publication 800-131A Rev. 2 chính thức cấm hoàn toàn việc sử dụng Triple-DES trong mọi hệ thống chính phủ Mỹ sau ngày 31/12/2023 để chuyển đổi hoàn toàn sang AES."
  },
  {
    "id": 30,
    "algo": "des",
    "algoName": "DES",
    "badgeClass": "badge-sym",
    "q": "Bài học kiến trúc quan trọng nhất mà DES để lại cho thế hệ mật mã học hiện đại là gì?",
    "options": [
      "A. Mật mã khối nên dùng khóa càng ngắn càng tốt để tiết kiệm năng lượng",
      "B. Cấu trúc mạng Feistel cho phép giải mã đối xứng tuyệt đẹp, nhưng kích thước khối 64-bit và khóa 56-bit là quá nhỏ so với năng lực tính toán hiện đại",
      "C. Không bao giờ được dùng phép toán XOR trong mật mã",
      "D. Không nên chuẩn hóa các thuật toán mã hóa"
    ],
    "ans": 1,
    "exp": "DES đặt nền móng cho toàn bộ ngành mật mã học hiện đại với cấu trúc Feistel và thiết kế S-Box mẫu mực, nhưng giới hạn 64-bit khối và 56-bit khóa đã thúc đẩy cuộc thi chuẩn hóa AES ra đời năm 1997."
  },
  {
    "id": 31,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Thuật toán AES (Advanced Encryption Standard) nguyên bản có tên gọi là gì và do ai sáng lập?",
    "options": [
      "A. Lucifer do Horst Feistel thiết kế",
      "B. Rijndael do hai nhà mật mã học Bỉ Vincent Rijmen và Joan Daemen thiết kế",
      "C. RSA do Ron Rivest, Adi Shamir và Leonard Adleman thiết kế",
      "D. Keccak do nhóm tác giả Guido Bertoni thiết kế"
    ],
    "ans": 1,
    "exp": "AES được phát triển từ thuật toán Rijndael do hai chuyên gia mật mã học người Bỉ Vincent Rijmen và Joan Daemen sáng tạo, đã chiến thắng cuộc thi chuẩn hóa quốc tế do NIST tổ chức năm 2001."
  },
  {
    "id": 32,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Khối dữ liệu (Block size) chuẩn của thuật toán AES có kích thước cố định là bao nhiêu bit?",
    "options": [
      "A. 64 bit",
      "B. 128 bit (16 bytes)",
      "C. 192 bit",
      "D. 256 bit"
    ],
    "ans": 1,
    "exp": "Trong chuẩn AES của NIST, kích thước khối LUÔN CỐ ĐỊNH là 128 bit (16 bytes), bất kể độ dài khóa sử dụng là 128, 192 hay 256 bit."
  },
  {
    "id": 33,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Số vòng lặp (Rounds) của các biến thể AES-128, AES-192 và AES-256 lần lượt là bao nhiêu?",
    "options": [
      "A. 8, 10, 12 vòng",
      "B. 10, 12, 14 vòng",
      "C. 12, 14, 16 vòng",
      "D. 16, 16, 16 vòng"
    ],
    "ans": 1,
    "exp": "AES điều chỉnh số vòng tùy theo độ dài khóa: AES-128 thực hiện 10 vòng, AES-192 thực hiện 12 vòng, và AES-256 thực hiện 14 vòng lặp."
  },
  {
    "id": 34,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Dữ liệu 128-bit (16 bytes) trong AES được sắp xếp vào Ma trận trạng thái (State Matrix 4x4) theo thứ tự nào?",
    "options": [
      "A. Theo hàng ngang (Row-major: từ trái sang phải, từng hàng từ trên xuống dưới)",
      "B. Theo cột (Column-major: từ trên xuống dưới ở cột 0, rồi sang cột 1, cột 2, cột 3)",
      "C. Theo đường chéo chính và đường chéo phụ",
      "D. Xếp ngẫu nhiên theo chỉ mục của bảng S-box"
    ],
    "ans": 1,
    "exp": "AES sắp xếp 16 byte vào ma trận 4 hàng × 4 cột theo thứ tự ưu tiên cột (Column-major): Byte 0-3 là cột 0, Byte 4-7 là cột 1, Byte 8-11 là cột 2, Byte 12-15 là cột 3."
  },
  {
    "id": 35,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Một vòng chuẩn (Standard Round) của AES gồm 4 bước biến đổi theo đúng thứ tự nào sau đây?",
    "options": [
      "A. AddRoundKey ➔ SubBytes ➔ ShiftRows ➔ MixColumns",
      "B. SubBytes ➔ ShiftRows ➔ MixColumns ➔ AddRoundKey",
      "C. MixColumns ➔ SubBytes ➔ ShiftRows ➔ AddRoundKey",
      "D. ShiftRows ➔ MixColumns ➔ SubBytes ➔ AddRoundKey"
    ],
    "ans": 1,
    "exp": "Thứ tự thực thi trong mỗi vòng chuẩn AES là: (1) SubBytes (thế byte phi tuyến), (2) ShiftRows (dịch chuyển hàng), (3) MixColumns (trộn cột khuếch tán), và (4) AddRoundKey (XOR với khóa con của vòng)."
  },
  {
    "id": 36,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Điểm khác biệt DUY NHẤT ở Vòng cuối cùng (Final Round: Vòng 10 của AES-128) so với các vòng chuẩn trước đó là gì?",
    "options": [
      "A. Bỏ qua bước SubBytes",
      "B. Bỏ qua bước ShiftRows",
      "C. Bỏ qua bước MixColumns",
      "D. Bỏ qua bước AddRoundKey"
    ],
    "ans": 2,
    "exp": "Vòng cuối cùng của AES chỉ gồm 3 bước: SubBytes, ShiftRows và AddRoundKey (hoàn toàn bỏ qua bước MixColumns) để cấu trúc giải mã có thể hoàn toàn đối xứng với cấu trúc mã hóa."
  },
  {
    "id": 37,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Trong bước ShiftRows của AES, các hàng 0, 1, 2, 3 của ma trận trạng thái được dịch vòng sang trái bao nhiêu byte?",
    "options": [
      "A. Hàng 0 không dịch, hàng 1 dịch 1 byte, hàng 2 dịch 2 byte, hàng 3 dịch 3 byte",
      "B. Mỗi hàng đều dịch sang trái 1 byte",
      "C. Hàng 0 dịch 1 byte, hàng 1 dịch 2 byte, hàng 2 dịch 3 byte, hàng 3 dịch 4 byte",
      "D. Các hàng dịch sang phải theo thứ tự ngẫu nhiên"
    ],
    "ans": 0,
    "exp": "Quy tắc ShiftRows: Hàng 0 giữ nguyên (dịch 0), Hàng 1 dịch vòng trái 1 byte, Hàng 2 dịch vòng trái 2 byte, và Hàng 3 dịch vòng trái 3 byte."
  },
  {
    "id": 38,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Bước SubBytes trong AES thực hiện phép toán nào trên từng byte của ma trận trạng thái?",
    "options": [
      "A. XOR trực tiếp với khóa bí mật",
      "B. Tìm phần tử nghịch đảo nhân trong trường Galois GF(2^8) kết hợp phép biến đổi Affine",
      "C. Dịch bit sang trái 4 vị trí",
      "D. Đổi chỗ byte đầu và byte cuối"
    ],
    "ans": 1,
    "exp": "SubBytes là thành phần phi tuyến duy nhất của AES: mỗi byte được ánh xạ sang nghịch đảo nhân của nó trong trường hữu hạn GF(2^8) modulo P(x) = x^8 + x^4 + x^3 + x + 1, sau đó nhân với ma trận Affine và cộng vector hằng số."
  },
  {
    "id": 39,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Bước MixColumns trong AES coi mỗi cột của ma trận trạng thái là một đa thức bậc 3 và nhân với đa thức cố định nào modulo x^4 + 1?",
    "options": [
      "A. c(x) = {02}x^3 + {03}x^2 + {01}x + {01}",
      "B. c(x) = {03}x^3 + {01}x^2 + {01}x + {02}",
      "C. c(x) = x^4 + 1",
      "D. c(x) = {01}x^3 + {01}x^2 + {01}x + {01}"
    ],
    "ans": 1,
    "exp": "Mỗi cột 4 byte được nhân ma trận với ma trận tuần hoàn có các hệ số [02, 03, 01, 01], tương đương phép nhân đa thức c(x) = {03}x^3 + {01}x^2 + {01}x + {02} modulo x^4 + 1 trong GF(2^8)."
  },
  {
    "id": 40,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Trước khi bước vào Vòng lặp thứ 1 (Round 1), AES thực hiện bước tiền xử lý khởi tạo nào?",
    "options": [
      "A. Thực hiện một lần SubBytes ban đầu",
      "B. Thực hiện phép AddRoundKey với khóa con ban đầu W[0..3] (Pre-round AddRoundKey)",
      "C. Thực hiện MixColumns 2 lần",
      "D. Xóa sạch ma trận trạng thái"
    ],
    "ans": 1,
    "exp": "AES bắt đầu bằng một bước AddRoundKey trắng (Round 0) XOR bản rõ với 16 byte khóa gốc đầu tiên để đảm bảo mọi bước sau đó đều phụ thuộc vào khóa bí mật ngay lập tức."
  },
  {
    "id": 41,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Thuật toán mở rộng khóa (Key Expansion) của AES-128 sinh ra tổng cộng bao nhiêu từ 32-bit (words) và bao nhiêu bytes khóa?",
    "options": [
      "A. 32 từ (128 bytes)",
      "B. 44 từ (176 bytes)",
      "C. 52 từ (208 bytes)",
      "D. 60 từ (240 bytes)"
    ],
    "ans": 1,
    "exp": "AES-128 có 10 vòng + 1 bước khởi tạo = 11 khóa vòng, mỗi khóa vòng cần 16 bytes (4 từ 32-bit). Do đó Key Expansion sinh ra tổng cộng 11 × 4 = 44 từ (176 bytes)."
  },
  {
    "id": 42,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Trong thuật toán Key Expansion của AES, hàm RotWord thực hiện thao tác nào trên từ 4-byte [b0, b1, b2, b3]?",
    "options": [
      "A. Đổi thứ tự thành [b3, b2, b1, b0]",
      "B. Dịch vòng sang trái 1 byte thành [b1, b2, b3, b0]",
      "C. Dịch vòng sang phải 1 byte thành [b3, b0, b1, b2]",
      "D. XOR 4 byte với nhau"
    ],
    "ans": 1,
    "exp": "RotWord nhận 1 từ 4 byte [b0, b1, b2, b3] và xoay vòng sang trái 1 vị trí, cho ra kết quả [b1, b2, b3, b0]."
  },
  {
    "id": 43,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Hằng số vòng Rcon[j] trong khâu mở rộng khóa AES có giá trị byte đầu tiên ở vòng 1 (j=1) là bao nhiêu?",
    "options": [
      "A. 0x00",
      "B. 0x01",
      "C. 0x02",
      "D. 0x1B"
    ],
    "ans": 1,
    "exp": "Rcon[j] là từ 4-byte [rc_j, 0x00, 0x00, 0x00]. Tại j=1, rc_1 = 0x01; tại j=2, rc_2 = 0x02; tại j=3, rc_3 = 0x04; tăng lũy thừa của 2 trong trường Galois GF(2^8)."
  },
  {
    "id": 44,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Đa thức bất khả quy (Irreducible polynomial) được chọn làm chuẩn cho trường hữu hạn GF(2^8) trong AES là gì?",
    "options": [
      "A. m(x) = x^8 + x^4 + x^3 + x + 1 (tương ứng 0x11B)",
      "B. m(x) = x^8 + x^7 + x^2 + 1",
      "C. m(x) = x^8 + 1",
      "D. m(x) = x^8 + x^6 + x^5 + x + 1"
    ],
    "ans": 0,
    "exp": "Rijndael sử dụng đa thức bất khả quy m(x) = x^8 + x^4 + x^3 + x + 1 (biểu diễn nhị phân là 100011011 hay hex 0x11B) để định nghĩa các phép toán nhân và chia trong GF(2^8)."
  },
  {
    "id": 45,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Trong quá trình giải mã AES, bước biến đổi ngược tương ứng của SubBytes là gì?",
    "options": [
      "A. RevSubBytes",
      "B. InvSubBytes (sử dụng bảng S-Box nghịch đảo)",
      "C. MixSubBytes",
      "D. NegSubBytes"
    ],
    "ans": 1,
    "exp": "InvSubBytes áp dụng bảng S-Box nghịch đảo để hoàn trả từng byte về giá trị gốc trước khi thế affine và nghịch đảo Galois."
  },
  {
    "id": 46,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Chế độ hoạt động ECB (Electronic Codebook) trong AES bị nghiêm cấm sử dụng trong các hệ thống bảo mật hiện đại vì lý do gì?",
    "options": [
      "A. Tốc độ mã hóa quá chậm",
      "B. Không dùng Vector khởi tạo (IV), các khối bản rõ giống nhau luôn sinh ra các khối bản mã giống hệt nhau, làm lộ cấu trúc dữ liệu (hiện tượng chim cánh cụt ECB Penguin)",
      "C. Không thể giải mã trên máy tính 64-bit",
      "D. Yêu cầu khóa phải dài hơn 512 bit"
    ],
    "ans": 1,
    "exp": "Chế độ ECB mã hóa độc lập từng khối. Nếu dữ liệu có các khối lặp lại (như nền trắng của ảnh), bản mã cũng sẽ lặp lại y hệt, để lộ toàn bộ đường nét của bức ảnh (minh họa nổi tiếng bằng ảnh Tux Penguin)."
  },
  {
    "id": 47,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Trong chế độ mã hóa CBC (Cipher Block Chaining), khối bản rõ đầu tiên P1 được xử lý như thế nào trước khi đưa vào hàm mã hóa AES?",
    "options": [
      "A. Được nén bằng thuật toán Gzip",
      "B. Được XOR với một Vector khởi tạo ngẫu nhiên (IV - Initialization Vector)",
      "C. Được nhân với khóa bí mật",
      "D. Được đảo ngược tất cả các byte"
    ],
    "ans": 1,
    "exp": "Trong CBC: C1 = E_K(P1 ⊕ IV). Các khối tiếp theo được XOR với bản mã của khối trước: Ci = E_K(Pi ⊕ C_{i-1}). Điều này đảm bảo các khối giống nhau vẫn sinh ra bản mã hoàn toàn khác biệt."
  },
  {
    "id": 48,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Yêu cầu quan trọng nhất đối với Vector khởi tạo (IV) trong chế độ AES-CBC là gì?",
    "options": [
      "A. IV bắt buộc phải được giữ bí mật tuyệt đối như khóa",
      "B. IV phải là số ngẫu nhiên hoặc giả ngẫu nhiên không thể đoán trước (Unpredictable) và không bao giờ tái sử dụng với cùng một khóa",
      "C. IV bắt buộc phải toàn số 0",
      "D. IV phải ngắn hơn 4 byte"
    ],
    "ans": 1,
    "exp": "IV không cần giữ bí mật (có thể gửi công khai cùng bản mã), nhưng bắt buộc phải ngẫu nhiên và không đoán trước được để ngăn chặn các kiểu tấn công phân tích mẫu và tấn công bản rõ đã chọn."
  },
  {
    "id": 49,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Chế độ mã hóa CTR (Counter Mode) biến đổi mã khối AES thành mã dạng nào và có ưu điểm vượt trội gì?",
    "options": [
      "A. Biến thành mã bất đối xứng",
      "B. Biến thành mã dòng (Stream cipher), cho phép tính toán song song (Parallelizable) và truy cập ngẫu nhiên dữ liệu",
      "C. Biến thành hàm băm một chiều",
      "D. Tự động loại bỏ hoàn toàn khóa bí mật"
    ],
    "ans": 1,
    "exp": "CTR mã hóa giá trị bộ đếm (Counter + Nonce) rồi XOR với bản rõ. Do các khối counter độc lập, các CPU đa nhân có thể mã hóa/giải mã song song hàng loạt khối cùng lúc với tốc độ cực nhanh."
  },
  {
    "id": 50,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Chế độ AES-GCM (Galois/Counter Mode) được coi là tiêu chuẩn vàng trong các giao thức TLS 1.3 và VPN hiện nay vì nó cung cấp tính năng gì?",
    "options": [
      "A. Chỉ nén dữ liệu",
      "B. Mã hóa có xác thực (Authenticated Encryption with Associated Data - AEAD), vừa bảo mật vừa chứng thực tính toàn vẹn thông điệp bằng GMAC",
      "C. Tự động sinh khóa ngẫu nhiên mỗi 5 giây",
      "D. Khả năng chống lại máy tính lượng tử vô điều kiện"
    ],
    "ans": 1,
    "exp": "AES-GCM là chuẩn AEAD kết hợp chế độ đếm CTR với hàm xác thực GHASH trên trường Galois GF(2^128). Nó đảm bảo dữ liệu vừa được giữ bí mật, vừa không thể bị kẻ tấn công sửa đổi hay chèn ép bit."
  },
  {
    "id": 51,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Điều gì sẽ xảy ra nếu một Nonce (Number used once) bị tái sử dụng với cùng một khóa bí mật trong chế độ AES-GCM?",
    "options": [
      "A. Không ảnh hưởng gì",
      "B. Phá hủy hoàn toàn tính toàn vẹn: kẻ tấn công có thể khôi phục khóa xác thực GHASH và giả mạo bản tin tùy ý",
      "C. Thuật toán tự động chuyển sang DES",
      "D. Bản mã bị biến thành chuỗi rỗng"
    ],
    "ans": 1,
    "exp": "Tái sử dụng Nonce trong GCM là lỗ hổng thảm họa (Nonce reuse disaster): kẻ tấn công có thể giải phương trình đa thức trên GF(2^128) để tìm ra khóa xác thực H, từ đó giải mã và làm giả chữ ký GMAC của toàn bộ hệ thống."
  },
  {
    "id": 52,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Tấn công Padding Oracle (như lỗ hổng POODLE nổi tiếng) khai thác điểm yếu của mô hình nào trong các ứng dụng web cũ?",
    "options": [
      "A. Sử dụng chế độ AES-CBC kết hợp cơ chế báo lỗi đệm (padding error) chi tiết mà không có xác thực toàn vẹn (MAC-then-Encrypt)",
      "B. Sử dụng khóa AES-256 quá dài",
      "C. Sử dụng chế độ AES-GCM",
      "D. Không bật JavaScript trên trình duyệt"
    ],
    "ans": 0,
    "exp": "Padding Oracle dựa vào việc máy chủ phản hồi lỗi padding khác với lỗi giải mã thông thường. Kẻ tấn công gửi các khối bản mã chỉnh sửa và lần lượt khôi phục từng byte bản rõ mà không cần biết khóa AES."
  },
  {
    "id": 53,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Tập lệnh phần cứng nào được tích hợp sẵn trên các bộ vi xử lý Intel và AMD hiện đại để tăng tốc mã hóa AES gấp hàng chục lần và chống rò rỉ kênh kề (Side-channel)?",
    "options": [
      "A. SSE2",
      "B. AES-NI (AES New Instructions)",
      "C. AVX-512",
      "D. CUDA"
    ],
    "ans": 1,
    "exp": "Tập lệnh AES-NI cung cấp các lệnh phần cứng trực tiếp trên CPU (như AESENC, AESDEC) giúp thực hiện các vòng AES với độ trễ tối thiểu và thời gian thực thi không phụ thuộc vào dữ liệu, loại bỏ hoàn toàn tấn công Cache-timing."
  },
  {
    "id": 54,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Khái niệm \"Hiệu ứng tuyết lở\" (Avalanche Effect) trong AES đảm bảo điều gì sau chỉ 2 đến 3 vòng lặp?",
    "options": [
      "A. Tốc độ CPU tăng gấp đôi",
      "B. Chỉ thay đổi đúng 1 bit ở bản rõ hoặc khóa sẽ làm xấp xỉ 50% số bit của ma trận trạng thái bị đảo lộn ngẫu nhiên",
      "C. Bản mã luôn có dung lượng nhỏ hơn bản rõ",
      "D. Khóa tự động xóa khỏi bộ nhớ"
    ],
    "ans": 1,
    "exp": "Nhờ sự kết hợp giữa tính phi tuyến của SubBytes và tính khuếch tán cực mạnh của ShiftRows và MixColumns, sự thay đổi 1 bit sẽ lan truyền ra toàn bộ 128 bit trạng thái chỉ sau 2 vòng lặp."
  },
  {
    "id": 55,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Khi phân tích thám mã kênh kề (Side-channel Attack) trên các thiết bị nhúng chạy AES không có bảo vệ, tin tặc thường đo lường yếu tố vật lý nào?",
    "options": [
      "A. Trọng lượng của vi mạch",
      "B. Tiêu thụ năng lượng (DPA - Differential Power Analysis) hoặc bức xạ điện từ (EM) trong lúc thực hiện bước SubBytes",
      "C. Màu sắc đèn LED nguồn",
      "D. Độ dài dây cáp kết nối"
    ],
    "ans": 1,
    "exp": "DPA đo mức tiêu thụ dòng điện siêu nhỏ khi CPU tính toán phép thế S-Box trong SubBytes. Vì mức tiêu thụ năng lượng phụ thuộc vào số bit 1 (Hamming weight) của dữ liệu, kẻ tấn công có thể khôi phục khóa bí mật."
  },
  {
    "id": 56,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Tính đến nay, cuộc tấn công tốt nhất trên lý thuyết vào thuật toán AES-128 đầy đủ 10 vòng là gì?",
    "options": [
      "A. Đã bị bẻ gãy hoàn toàn trong 1 giây",
      "B. Tấn công Biclique với độ phức tạp tính toán khoảng 2^126.1 (nhanh hơn vét cạn 2^128 khoảng 4 lần nhưng hoàn toàn không khả thi trong thực tế)",
      "C. Phân tích nhân tử lớn",
      "D. Tấn công từ điển Rainbow Table"
    ],
    "ans": 1,
    "exp": "Tấn công Biclique của Bogdanov và cộng sự (2011) chỉ cải thiện độ phức tạp từ 2^128 xuống 2^126.1 (vẫn cần hàng tỷ tỷ năm tính toán trên các siêu máy tính mạnh nhất). Về mặt thực tế, AES vẫn an toàn tuyệt đối."
  },
  {
    "id": 57,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Thuật toán AES-256 được đánh giá như thế nào trước nguy cơ xuất hiện của Máy tính lượng tử chạy Thuật toán Grover?",
    "options": [
      "A. Bị bẻ khóa ngay lập tức",
      "B. Thuật toán Grover giảm độ phức tạp từ N xuống căn bậc hai của N, khiến AES-256 có độ an toàn lượng tử tương đương 2^128 (vẫn an toàn tuyệt đối)",
      "C. Máy tính lượng tử không thể xử lý dữ liệu của AES",
      "D. Cần phải tăng số vòng lên 1000 vòng"
    ],
    "ans": 1,
    "exp": "Thuật toán Grover trên máy tính lượng tử tìm kiếm khóa trong O(2^(k/2)). Với AES-256, độ an toàn giảm xuống 2^128 phép toán - mức độ an toàn hoàn toàn đủ để chống chịu máy tính lượng tử trong nhiều thập kỷ tới."
  },
  {
    "id": 58,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Quy tắc đệm dữ liệu PKCS#7 (chuẩn đệm phổ biến nhất cho AES-CBC) xử lý khối cuối cùng như thế nào nếu khối đó đang thiếu 5 byte?",
    "options": [
      "A. Thêm 5 byte có giá trị ngẫu nhiên",
      "B. Thêm 5 byte, mỗi byte đều có giá trị bằng 0x05",
      "C. Thêm 5 byte có giá trị bằng 0x00",
      "D. Cắt bỏ khối cuối cùng"
    ],
    "ans": 1,
    "exp": "Quy tắc PKCS#7: nếu thiếu k byte (1 <= k <= 16), ta sẽ đệm k byte có giá trị đúng bằng k. Ví dụ thiếu 5 byte thì đệm: 0x05 0x05 0x05 0x05 0x05. Nếu dữ liệu vừa khít 16 byte, ta phải đệm thêm một khối mới gồm 16 byte 0x10."
  },
  {
    "id": 59,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Trong hệ điều hành Windows và macOS, AES được sử dụng trong các tính năng bảo mật ổ đĩa nào sau đây?",
    "options": [
      "A. Windows Defender và Apple Pay",
      "B. BitLocker (Windows) và FileVault 2 (macOS)",
      "C. Task Manager và Activity Monitor",
      "D. Notepad và TextEdit"
    ],
    "ans": 1,
    "exp": "BitLocker trên Windows sử dụng AES-XTS (128 hoặc 256 bit), và FileVault trên macOS cũng sử dụng AES-XTS để mã hóa toàn bộ ổ đĩa phần cứng, bảo vệ dữ liệu chống trộm cắp máy tính."
  },
  {
    "id": 60,
    "algo": "aes",
    "algoName": "AES",
    "badgeClass": "badge-sym",
    "q": "Tại sao AES được lựa chọn làm chuẩn mật mã mã hóa đối xứng toàn cầu thay thế hoàn toàn DES?",
    "options": [
      "A. Vì AES là thuật toán do chính phủ Mỹ bí mật phát triển",
      "B. Vì AES chiến thắng cuộc thi mở công khai quốc tế kéo dài 4 năm của NIST, sở hữu hiệu năng phần cứng/phần mềm xuất sắc, thiết kế toán học thanh lịch và không gian khóa khổng lồ (tối thiểu 2^128)",
      "C. Vì AES không cần dùng khóa bí mật",
      "D. Vì AES có mã nguồn ngắn nhất trong tất cả các thuật toán"
    ],
    "ans": 1,
    "exp": "Cuộc thi mở do NIST tổ chức từ 1997 đến 2001 đã kiểm tra công khai hàng loạt thuật toán ứng viên (RC6, Serpent, Twofish, MARS, Rijndael). Rijndael đã chứng minh độ an toàn vượt trội, tốc độ cao trên cả chip 8-bit lẫn 64-bit và chính thức trở thành FIPS PUB 197."
  },
  {
    "id": 61,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Thuật toán RSA được công bố lần đầu tiên vào năm nào và bởi những tác giả nào tại Học viện MIT?",
    "options": [
      "A. 1970 bởi Horst Feistel",
      "B. 1977 bởi Ron Rivest, Adi Shamir và Leonard Adleman",
      "C. 1991 bởi Phil Zimmermann",
      "D. 2001 bởi Vincent Rijmen"
    ],
    "ans": 1,
    "exp": "Thuật toán RSA mang tên ghép của ba chữ cái đầu của các tác giả: Ron Rivest, Adi Shamir và Leonard Adleman, được công bố chính thức vào năm 1977 tại MIT."
  },
  {
    "id": 62,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Độ bảo mật của thuật toán RSA dựa trên độ khó của bài toán toán học nào?",
    "options": [
      "A. Bài toán tính logarit rời rạc (Discrete Logarithm)",
      "B. Bài toán phân tích thừa số nguyên tố của các số nguyên dương cực lớn (Integer Factorization)",
      "C. Bài toán xếp ba lô (Knapsack Problem)",
      "D. Bài toán đường đi ngắn nhất đồ thị"
    ],
    "ans": 1,
    "exp": "RSA dựa trên tính chất \"hàm một chiều có cửa bẫy\": Nhân hai số nguyên tố lớn p và q thành n = p*q thì cực dễ, nhưng khi chỉ cho biết số n hàng nghìn chữ số thì việc tìm lại p và q là bài toán nan giải đối với máy tính cổ điển."
  },
  {
    "id": 63,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Cặp khóa trong thuật toán RSA gồm những thành phần nào?",
    "options": [
      "A. Khóa bí mật (Private Key) và Khóa xác thực (Verify Key)",
      "B. Khóa công khai Public Key (e, n) và Khóa bí mật Private Key (d, n)",
      "C. Khóa phiên Session Key và Vector IV",
      "D. Khóa mã hóa K1 và Khóa giải mã K2 ngẫu nhiên"
    ],
    "ans": 1,
    "exp": "Cặp khóa RSA gồm: Khóa công khai (e, n) được chia sẻ cho mọi người để mã hóa hoặc kiểm tra chữ ký; và Khóa bí mật (d, n) bắt buộc giữ kín tuyệt đối để giải mã hoặc tạo chữ ký."
  },
  {
    "id": 64,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Trong bước sinh khóa RSA, nếu ta chọn hai số nguyên tố p = 61 và q = 53 thì Modulus n và hàm Euler Phi φ(n) bằng bao nhiêu?",
    "options": [
      "A. n = 3233 và φ(n) = 3120",
      "B. n = 3120 và φ(n) = 3233",
      "C. n = 114 và φ(n) = 112",
      "D. n = 3233 và φ(n) = 3232"
    ],
    "ans": 0,
    "exp": "Ta có n = p * q = 61 * 53 = 3233. Hàm Euler Phi: φ(n) = (p - 1) * (q - 1) = 60 * 52 = 3120."
  },
  {
    "id": 65,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Số mũ công khai e trong RSA phải thỏa mãn điều kiện toán học nào đối với φ(n)?",
    "options": [
      "A. e phải là ước số của φ(n)",
      "B. 1 < e < φ(n) và ước chung lớn nhất gcd(e, φ(n)) = 1 (nguyên tố cùng nhau với φ(n))",
      "C. e bắt buộc phải lớn hơn n",
      "D. e phải là số chẵn"
    ],
    "ans": 1,
    "exp": "Số e phải nguyên tố cùng nhau với φ(n) (tức gcd(e, φ(n)) = 1). Nếu điều kiện này thỏa mãn, mới tồn tại duy nhất nghịch đảo modulo d của e theo modulo φ(n)."
  },
  {
    "id": 66,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Giá trị số mũ công khai e nào được sử dụng phổ biến nhất trong thực tế (chuẩn X.509, TLS, HTTPS)?",
    "options": [
      "A. e = 3",
      "B. e = 17",
      "C. e = 65537 (0x10001 = 2^16 + 1)",
      "D. e = 256"
    ],
    "ans": 2,
    "exp": "Số Fermat F4 = 65537 (0x10001) chỉ chứa 2 bit 1 trong biểu diễn nhị phân (10000000000000001), giúp thuật toán tính lũy thừa nhanh với chỉ 17 phép nhân mà vẫn chống được các đòn tấn công Coppersmith vào e nhỏ."
  },
  {
    "id": 67,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Số mũ bí mật d được tính toán như thế nào từ e và φ(n)?",
    "options": [
      "A. d = (e * φ(n)) + 1",
      "B. d là nghịch đảo modulo: (d * e) ≡ 1 (mod φ(n)), được tìm bằng thuật toán Euclid mở rộng",
      "C. d = φ(n) - e",
      "D. d = n / e"
    ],
    "ans": 1,
    "exp": "d là phần tử nghịch đảo nhân của e trong vành Z_φ(n), thỏa mãn phương trình d*e + k*φ(n) = 1. Thuật toán Euclid mở rộng (Extended Euclidean Algorithm) tìm ra d với thời gian cực nhanh O(log φ(n))."
  },
  {
    "id": 68,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Công thức mã hóa thông điệp số M thành bản mã C và giải mã C thành M trong RSA là gì?",
    "options": [
      "A. Mã hóa: C = (M * e) mod n; Giải mã: M = (C * d) mod n",
      "B. Mã hóa: C = M^e mod n; Giải mã: M = C^d mod n",
      "C. Mã hóa: C = M ⊕ e; Giải mã: M = C ⊕ d",
      "D. Mã hóa: C = e^M mod n; Giải mã: M = d^C mod n"
    ],
    "ans": 1,
    "exp": "Công thức kinh điển của RSA: Bản mã C = (M^e) mod n. Khi giải mã, người giữ khóa bí mật d tính: M = (C^d) mod n. Theo định lý Euler, (M^e)^d ≡ M^(1 + k*φ(n)) ≡ M (mod n)."
  },
  {
    "id": 69,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Điều kiện bắt buộc về độ lớn của bản rõ số M trước khi đưa vào hàm mã hóa C = M^e mod n là gì?",
    "options": [
      "A. M phải là số nguyên tố",
      "B. 0 ≤ M < n (M bắt buộc phải nhỏ hơn Modulus n)",
      "C. M phải lớn hơn n",
      "D. M bắt buộc phải là số âm"
    ],
    "ans": 1,
    "exp": "Không gian thông điệp của RSA là vành số nguyên modulo n (Z_n). Do đó, khối bản rõ M phải thỏa mãn 0 <= M < n. Nếu thông điệp dài hơn n, nó phải được chia nhỏ thành nhiều khối hoặc mã hóa lai ghép (Hybrid Encryption)."
  },
  {
    "id": 70,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Thuật toán nào được sử dụng để tính lũy thừa modulo khổng lồ C = M^e mod n một cách nhanh chóng mà không làm tràn bộ nhớ?",
    "options": [
      "A. Thuật toán sắp xếp nổi bọt (Bubble Sort)",
      "B. Thuật toán Bình phương và Nhân liên tiếp (Square-and-Multiply / Binary Exponentiation)",
      "C. Thuật toán Dijkstra",
      "D. Thuật toán vét cạn Brute-force"
    ],
    "ans": 1,
    "exp": "Square-and-Multiply phân tích số mũ e thành dạng nhị phân, thực hiện phép bình phương và nhân có lấy modulo ở từng bước, giảm độ phức tạp từ O(e) xuống O(log e), tránh tính toán số khổng lồ M^e."
  },
  {
    "id": 71,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Định lý số dư Trung Hoa (Chinese Remainder Theorem - CRT) được áp dụng trong RSA để làm gì?",
    "options": [
      "A. Tăng kích thước khóa",
      "B. Tăng tốc độ giải mã và ký số RSA lên gấp khoảng 4 lần bằng cách tính modulo p và modulo q độc lập",
      "C. Khắc phục lỗ hổng máy tính lượng tử",
      "D. Tự động tìm lại các số nguyên tố p và q"
    ],
    "ans": 1,
    "exp": "Thay vì tính C^d mod n trực tiếp với số n 2048-bit, RSA-CRT tính riêng M_p = C^(d_p) mod p và M_q = C^(d_q) mod q với các số 1024-bit, rồi ghép nghiệm. Do độ phức tạp tính lũy thừa là O(L^3), việc chia đôi kích thước giúp tăng tốc độ khoảng 4 lần."
  },
  {
    "id": 72,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Tính chất \"đồng cấu nhân\" (Multiplicative Homomorphism) của RSA thô (Textbook RSA) thể hiện qua công thức nào?",
    "options": [
      "A. E(M1 + M2) = E(M1) + E(M2)",
      "B. E(M1 * M2 mod n) = (E(M1) * E(M2)) mod n",
      "C. E(M1 ^ M2) = E(M1) ^ E(M2)",
      "D. E(M1 - M2) = E(M1) - E(M2)"
    ],
    "ans": 1,
    "exp": "Ta có (M1^e mod n) * (M2^e mod n) = (M1*M2)^e mod n. Do đó tích bản mã của hai thông điệp chính là bản mã của tích hai thông điệp đó. Tính chất này nguy hiểm vì cho phép kẻ tấn công chỉnh sửa bản mã (Malleability)."
  },
  {
    "id": 73,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Để ngăn chặn tính biến đổi (Malleability) và các đòn tấn công chọn bản mã vào RSA thô, chuẩn mật mã hiện đại bắt buộc phải áp dụng kỹ thuật đệm nào?",
    "options": [
      "A. Đệm toàn bộ bằng các số 0",
      "B. Chuẩn đệm ngẫu nhiên OAEP (Optimal Asymmetric Encryption Padding - PKCS#1 v2.1)",
      "C. Không cần đệm",
      "D. Đệm bằng khoảng trắng ASCII"
    ],
    "ans": 1,
    "exp": "RSA-OAEP kết hợp cấu trúc mạng Feistel 2 vòng với các hàm băm mở rộng (MGF1) để hòa trộn thông điệp với một hạt giống ngẫu nhiên (seed), loại bỏ hoàn toàn tính chất đại số đồng cấu và đạt mức an toàn IND-CCA2."
  },
  {
    "id": 74,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Trong ứng dụng Chữ ký số (Digital Signature) bằng RSA, quá trình ký và xác thực diễn ra như thế nào?",
    "options": [
      "A. Người gửi ký bằng Public Key, người nhận xác thực bằng Private Key",
      "B. Người gửi tính băm H(M) rồi ký bằng Private Key của mình: S = H(M)^d mod n; người nhận xác thực bằng Public Key: S^e mod n == H(M)",
      "C. Người gửi và người nhận dùng chung một khóa bí mật đối xứng",
      "D. Người gửi gửi kèm mật khẩu tài khoản"
    ],
    "ans": 1,
    "exp": "Chữ ký số: Chỉ duy nhất chủ sở hữu Private Key (d) mới tính được S = H(M)^d mod n. Bất kỳ ai cũng có thể dùng Public Key (e) để tính S^e mod n và so sánh với giá trị băm H(M) của tài liệu, chứng minh người ký và tính toàn vẹn."
  },
  {
    "id": 75,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Tại sao trong thực tế người ta KHÔNG BAO GIỜ dùng RSA để mã hóa trực tiếp các tệp tin lớn (như file video 1 GB)?",
    "options": [
      "A. Vì RSA chỉ có thể mã hóa được văn bản tiếng Anh",
      "B. Vì RSA tính toán lũy thừa số lớn cực kỳ chậm so với mã hóa đối xứng (chậm hơn AES hàng nghìn lần) và kích thước thông điệp bị giới hạn bởi n",
      "C. Vì file lớn sẽ làm hỏng khóa bí mật",
      "D. Vì thuật toán RSA không hỗ trợ giải mã file video"
    ],
    "ans": 1,
    "exp": "Mã hóa bất đối xứng chậm hơn mã hóa đối xứng từ 1.000 đến 10.000 lần. Vì vậy các hệ thống thực tế dùng Mô hình lai (Hybrid Encryption): dùng RSA để mã hóa và trao đổi Khóa phiên (Session Key AES), sau đó dùng AES để mã hóa tệp tin dữ liệu."
  },
  {
    "id": 76,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Tấn công Wiener (Wiener's Attack) chứng minh rằng việc chọn số mũ bí mật d quá nhỏ sẽ dẫn đến hậu quả gì?",
    "options": [
      "A. Tốc độ mã hóa bị giảm sút",
      "B. Nếu d < (1/3) * n^(1/4), kẻ tấn công có thể khôi phục lại hoàn toàn d trong thời gian đa thức bằng kỹ thuật liên phân số (Continued Fractions)",
      "C. Khiến cho p và q bị đổi chỗ",
      "D. Làm cho n biến thành số chẵn"
    ],
    "ans": 1,
    "exp": "Michael J. Wiener (1990) chứng minh: nếu cố tình chọn d nhỏ để giải mã nhanh mà d < 1/3 * n^0.25, kẻ tấn công dùng khai triển liên phân số của e/n sẽ tìm ra chính xác d chỉ trong tích tắc."
  },
  {
    "id": 77,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Lỗ hổng tấn công Bleichenbacher (công bố 1998) nhằm vào cơ chế giải mã RSA nào?",
    "options": [
      "A. RSA-OAEP",
      "B. Chuẩn đệm PKCS#1 v1.5 trong SSL/TLS (Tấn công Million-Message Attack dựa trên phản hồi lỗi giải mã đệm)",
      "C. RSA khóa 4096-bit",
      "D. Thuật toán kiểm tra số nguyên tố Miller-Rabin"
    ],
    "ans": 1,
    "exp": "Bleichenbacher phát hiện nếu máy chủ phản hồi khác nhau khi bản rõ giải mã có tiền tố đệm PKCS#1 v1.5 (0x00 0x02) hay không, kẻ tấn công có thể gửi hàng triệu truy vấn để giải mã thông điệp mà không cần khóa bí mật."
  },
  {
    "id": 78,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Thuật toán sàng lọc trường số chung (GNFS - General Number Field Sieve) là gì trong ngữ cảnh của RSA?",
    "options": [
      "A. Thuật toán sinh số ngẫu nhiên lượng tử",
      "B. Thuật toán cổ điển hiệu quả nhất hiện nay dùng để phân tích số nguyên n thành thừa số nguyên tố p và q",
      "C. Thuật toán mã hóa dòng nhanh hơn AES",
      "D. Thuật toán tạo chữ ký số"
    ],
    "ans": 1,
    "exp": "GNFS là thuật toán phân tích số nguyên mạnh nhất trên máy tính cổ điển với độ phức tạp bán đa thức sub-exponential. Chính nhờ sự tiến bộ của GNFS mà các khóa RSA 512-bit và 768-bit đã lần lượt bị phân tích thành công."
  },
  {
    "id": 79,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Hiện nay, kích thước khóa RSA tối thiểu được NIST và các tiêu chuẩn quốc tế khuyến nghị sử dụng là bao nhiêu bit?",
    "options": [
      "A. 512 bit",
      "B. 1024 bit",
      "C. Tối thiểu 2048 bit (hoặc 3072, 4096 bit cho mức bảo mật cao hơn)",
      "D. 128 bit"
    ],
    "ans": 2,
    "exp": "Khóa RSA 1024-bit đã bị NIST loại bỏ từ năm 2013 do nguy cơ bị các cỗ máy siêu máy tính phân tích. Tiêu chuẩn hiện nay bắt buộc dùng tối thiểu RSA 2048-bit (tương đương 112-bit bảo mật đối xứng) hoặc 3072/4096-bit (tương đương 128-bit bảo mật)."
  },
  {
    "id": 80,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Trong quá trình sinh cặp số nguyên tố lớn p và q, phương pháp nào thường được máy tính sử dụng để kiểm tra tính nguyên tố?",
    "options": [
      "A. Thử chia lần lượt cho tất cả các số từ 2 đến n",
      "B. Thuật toán kiểm tra tính nguyên tố xác suất Miller-Rabin (kết hợp với Fermat Primality Test)",
      "C. Vẽ đồ thị parabol",
      "D. Đếm số lượng ước số bằng thuật toán Dijkstra"
    ],
    "ans": 1,
    "exp": "Thử chia số 1024-bit là bất khả thi. Thuật toán Miller-Rabin lặp lại nhiều vòng kiểm tra xác suất: chỉ sau 40-50 vòng thử với các cơ số ngẫu nhiên, xác suất một hợp số vượt qua kiểm tra nhỏ hơn 2^(-100), đủ độ tin cậy tuyệt đối cho an ninh mạng."
  },
  {
    "id": 81,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Nếu kẻ tấn công phát hiện hai chứng chỉ số RSA khác nhau có cùng Modulus n nhưng dùng số mũ công khai khác nhau (e1, e2) thỏa mãn gcd(e1, e2) = 1, họ có thể khai thác bằng:",
    "options": [
      "A. Tấn công Modulus chung (Common Modulus Attack)",
      "B. Tấn công Rainbow Table",
      "C. Tấn công Sweet32",
      "D. Tấn công POODLE"
    ],
    "ans": 0,
    "exp": "Tấn công Common Modulus: Nếu cùng một thông điệp M được mã hóa bằng (e1, n) và (e2, n) với gcd(e1, e2) = 1, kẻ tấn công dùng định lý Bezout tìm r, s sao cho r*e1 + s*e2 = 1, từ đó tính (C1^r * C2^s) mod n = M mà không cần bất kỳ khóa bí mật nào."
  },
  {
    "id": 82,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Lỗi thực thi ngẫu nhiên (Fault Injection Attack) trong phép tính giải mã RSA-CRT của thiết bị thẻ thông minh (Smartcard) có thể dẫn tới hậu quả gì?",
    "options": [
      "A. Thiết bị chỉ khởi động lại mà không ảnh hưởng gì",
      "B. Kẻ tấn công chỉ cần 1 chữ ký sai lệch để tìm ra chính xác thừa số nguyên tố p thông qua phép tính gcd(S_fault - S_correct, n)",
      "C. Thẻ thông minh bị xóa hoàn toàn dữ liệu",
      "D. Tăng gấp đôi tốc độ xử lý của chip"
    ],
    "ans": 1,
    "exp": "Tấn công Bellcore (Boneh-DeMillo-Lipton): Nếu một xung laser hoặc biến thiên điện áp làm sai lệch phép tính modulo p nhưng modulo q vẫn đúng, ta có S_fault^e - H(M) là bội số của q nhưng không phải p. Khi đó gcd(S_fault^e - H(M), n) sẽ lập tức cho ra chính xác thừa số q!"
  },
  {
    "id": 83,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Thuật toán Shor (Shor's Algorithm) trên Máy tính lượng tử đe dọa trực tiếp RSA như thế nào?",
    "options": [
      "A. Không có ảnh hưởng nào đối với RSA",
      "B. Tìm chu kỳ hàm số và phân tích thừa số nguyên tố n trong thời gian đa thức O((log n)^3), phá vỡ hoàn toàn RSA bất kể độ dài khóa",
      "C. Chỉ bẻ khóa được khóa ngắn hơn 512 bit",
      "D. Tự động chuyển đổi RSA thành mã hóa đối xứng"
    ],
    "ans": 1,
    "exp": "Peter Shor (1994) chứng minh máy tính lượng tử lý tưởng với thuật toán Shor có thể phân tích thừa số nguyên tố trong thời gian đa thức (thay vì thời gian bán đa thức cực chậm của siêu máy tính cổ điển), đe dọa xóa bỏ hoàn toàn nền tảng an toàn của RSA."
  },
  {
    "id": 84,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Phong trào Mật mã học hậu lượng tử (Post-Quantum Cryptography - PQC) của NIST ra đời nhằm mục đích gì đối với các hệ thống RSA?",
    "options": [
      "A. Cấm sử dụng máy tính lượng tử",
      "B. Tìm kiếm và chuẩn hóa các thuật toán khóa công khai mới (dựa trên lưới Lattice, mã sửa sai, hàm băm) để thay thế RSA trước kỷ nguyên lượng tử",
      "C. Tăng kích thước khóa RSA lên 100.000 bit",
      "D. Chuyển đổi toàn bộ Internet sang dùng lại DES"
    ],
    "ans": 1,
    "exp": "NIST đã chuẩn hóa các thuật toán PQC mới như ML-KEM (Kyber) cho trao đổi khóa và ML-DSA (Dilithium) cho chữ ký số để sẵn sàng thay thế RSA và ECC trước khi máy tính lượng tử quy mô lớn xuất hiện."
  },
  {
    "id": 85,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Hai số nguyên tố p và q trong RSA không được quá gần nhau (|p - q| không được quá nhỏ) vì nếu quá gần nhau sẽ bị tấn công bởi phương pháp nào?",
    "options": [
      "A. Phương pháp phân tích Fermat (Fermat's Factorization Method)",
      "B. Phép nhân ma trận Strassen",
      "C. Tấn công từ điển",
      "D. Thuật toán tìm kiếm nhị phân"
    ],
    "ans": 0,
    "exp": "Fermat chứng minh n = x^2 - y^2 = (x - y)(x + y). Nếu p và q xấp xỉ nhau, x = (p + q)/2 sẽ chỉ lớn hơn sqrt(n) một chút. Kẻ tấn công chỉ cần thử vài chục giá trị x bắt đầu từ ceil(sqrt(n)) là tìm ra y = sqrt(x^2 - n) và bẻ khóa n lập tức."
  },
  {
    "id": 86,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Giao thức bảo mật Transport Layer Security (TLS/HTTPS) phiên bản 1.3 đã loại bỏ tính năng nào liên quan đến RSA?",
    "options": [
      "A. Loại bỏ hoàn toàn chữ ký số RSA",
      "B. Loại bỏ cơ chế trao đổi khóa bằng mã hóa RSA thuần túy (Static RSA Key Exchange) để bắt buộc đạt tính năng Bí mật chuyển tiếp (PFS - Perfect Forward Secrecy) qua ECDHE",
      "C. Không cho phép máy chủ dùng chứng chỉ RSA",
      "D. Loại bỏ mã hóa AES"
    ],
    "ans": 1,
    "exp": "Trong TLS 1.2 trở về trước, nếu khóa bí mật RSA của máy chủ bị lộ sau 5 năm, kẻ địch ghi âm toàn bộ lưu lượng cũ có thể giải mã được hết. TLS 1.3 cấm dùng RSA để trao đổi khóa, chỉ cho phép dùng RSA để xác thực chữ ký (Authentication)."
  },
  {
    "id": 87,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Ký hiệu hàm số Carmichael λ(n) trong RSA có quan hệ như thế nào với hàm số Euler φ(n)?",
    "options": [
      "A. λ(n) = φ(n) / 2",
      "B. Với n = p*q, λ(n) = Bội chung nhỏ nhất lcm(p - 1, q - 1), là giá trị chuẩn xác nhất để tính số mũ bí mật d nhỏ nhất",
      "C. λ(n) luôn lớn hơn φ(n)",
      "D. λ(n) = p + q"
    ],
    "ans": 1,
    "exp": "Hàm Carmichael λ(n) = lcm(p-1, q-1) là chu kỳ nhỏ nhất thỏa mãn a^λ(n) ≡ 1 (mod n). Tiêu chuẩn PKCS#1 v2.1 hiện đại khuyến nghị tính d ≡ e^(-1) (mod λ(n)) thay vì mod φ(n)."
  },
  {
    "id": 88,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Tấn công kênh kề đo thời gian (Timing Attack) của Paul Kocher (1996) trên RSA dựa vào hiện tượng gì?",
    "options": [
      "A. Múi giờ trên máy tính nạn nhân bị sai lệch",
      "B. Thời gian thực thi của thuật toán Square-and-Multiply phụ thuộc vào việc bit của khóa bí mật d là 0 (chỉ bình phương) hay 1 (bình phương VÀ nhân)",
      "C. Đồng hồ đo tần số thạch anh bị nhiễu sóng",
      "D. Độ trễ của cáp quang Internet"
    ],
    "ans": 1,
    "exp": "Nếu phép nhân modulo chỉ được gọi khi bit của d bằng 1, vòng lặp xử lý bit 1 sẽ tốn thời gian hơn bit 0. Bằng cách đo thời gian phản hồi siêu chính xác, kẻ tấn công suy đoán được từng bit của khóa bí mật d."
  },
  {
    "id": 89,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Giải pháp nào giúp các thư viện mật mã hiện đại (OpenSSL, Libgcrypt) triệt tiêu hoàn toàn tấn công đo thời gian trên RSA?",
    "options": [
      "A. Làm mờ mật mã (Cryptographic Blinding) và thực thi thời gian không đổi (Constant-time execution)",
      "B. Tắt tính năng kết nối mạng",
      "C. Đổi số nguyên tố p và q liên tục sau mỗi 10 giây",
      "D. Nhân thông điệp với số 0"
    ],
    "ans": 0,
    "exp": "Kỹ thuật Blinding nhân bản rõ với một số ngẫu nhiên r^e trước khi đưa vào hàm giải mã/ký số C' = C * r^e mod n, tính M' = (C')^d mod n, sau đó chia cho r để thu được M. Thời gian tính toán trở nên ngẫu nhiên hóa hoàn toàn, vô hiệu hóa Timing Attack."
  },
  {
    "id": 90,
    "algo": "rsa",
    "algoName": "RSA",
    "badgeClass": "badge-asym",
    "q": "Khẳng định nào sau đây là ĐÚNG NHẤT về vai trò lịch sử của thuật toán RSA?",
    "options": [
      "A. RSA là thuật toán mật mã khối đầu tiên được chuẩn hóa bởi NIST",
      "B. RSA là hiện thực hóa thành công đầu tiên trên thế giới của khái niệm Mật mã khóa công khai, giải quyết triệt để bài toán phân phối khóa mà không cần kênh truyền bí mật trước đó",
      "C. RSA là thuật toán hàm băm được sáng chế bởi NSA",
      "D. RSA đã bị phá hoàn toàn và không còn website nào sử dụng"
    ],
    "ans": 1,
    "exp": "Trước RSA (và Diffie-Hellman), hai người muốn liên lạc bí mật bắt buộc phải gặp nhau trao đổi chìa khóa trước. RSA đã cách mạng hóa toàn cầu khi chứng minh hai người lạ chưa từng gặp nhau vẫn có thể liên lạc an toàn qua môi trường Internet công cộng."
  },
  {
    "id": 91,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Thuật toán băm MD5 (Message-Digest algorithm 5) do nhà khoa học mật mã nào sáng lập và vào năm nào?",
    "options": [
      "A. Horst Feistel năm 1970",
      "B. Ronald Rivest năm 1991",
      "C. Satoshi Nakamoto năm 2008",
      "D. Whitfield Diffie năm 1976"
    ],
    "ans": 1,
    "exp": "MD5 được thiết kế bởi Giáo sư Ronald Rivest (chữ R trong RSA) tại MIT vào năm 1991 để thay thế thuật toán tiền nhiệm MD4 sau khi MD4 bộc lộ các điểm yếu bảo mật."
  },
  {
    "id": 92,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Độ dài đầu ra (Hash digest output) cố định của thuật toán MD5 là bao nhiêu bit?",
    "options": [
      "A. 64 bit",
      "B. 128 bit (tương đương 16 bytes, biểu diễn thành 32 ký tự Hex)",
      "C. 160 bit",
      "D. 256 bit"
    ],
    "ans": 1,
    "exp": "MD5 luôn luôn tạo ra giá trị băm có độ dài cố định chính xác là 128 bit (16 bytes), thường được biểu diễn dưới dạng một chuỗi gồm 32 ký tự thập lục phân (Hexadecimal)."
  },
  {
    "id": 93,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Trong quá trình xử lý, MD5 chia nhỏ thông điệp đầu vào thành các khối (Blocks) có kích thước là bao nhiêu bit?",
    "options": [
      "A. 64 bit",
      "B. 128 bit",
      "C. 256 bit",
      "D. 512 bit (16 từ 32-bit)"
    ],
    "ans": 3,
    "exp": "MD5 xử lý dữ liệu theo cấu trúc Merkle–Damgård với từng khối đầu vào có kích thước 512 bit (tương đương 64 bytes hoặc 16 từ 32-bit)."
  },
  {
    "id": 94,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Trạng thái nội bộ (Internal State) của thuật toán MD5 được lưu trữ trong mấy thanh ghi và mỗi thanh ghi dài bao nhiêu bit?",
    "options": [
      "A. 2 thanh ghi 64-bit",
      "B. 4 thanh ghi 32-bit (A, B, C, D tổng cộng 128 bit)",
      "C. 8 thanh ghi 32-bit",
      "D. 1 thanh ghi 128-bit duy nhất"
    ],
    "ans": 1,
    "exp": "MD5 duy trì 4 biến trạng thái 32-bit: A, B, C, D với các giá trị khởi tạo hằng số nổi tiếng (A=0x67452301, B=0xefcdab89, C=0x98badcfe, D=0x10325476)."
  },
  {
    "id": 95,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Quy tắc đệm dữ liệu (Padding) trong MD5 yêu cầu độ dài thông điệp sau khi đệm (trước khi cộng 64-bit độ dài) phải thỏa mãn điều kiện nào?",
    "options": [
      "A. Chia hết cho 512",
      "B. Đồng dư với 448 modulo 512 (Length ≡ 448 mod 512)",
      "C. Chia hết cho 128",
      "D. Bằng đúng 1024 bit"
    ],
    "ans": 1,
    "exp": "MD5 đệm một bit 1 (byte 0x80) và các bit 0 sao cho độ dài thông điệp đạt tới đúng 448 mod 512 bit. 64 bit còn lại ở cuối khối sẽ dùng để lưu độ dài gốc của thông điệp ban đầu (448 + 64 = 512 bit)."
  },
  {
    "id": 96,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Trong MD5, 64-bit biểu diễn độ dài thông điệp ban đầu ở phần đệm được lưu trữ theo thứ tự byte nào?",
    "options": [
      "A. Big-Endian (Byte có trọng số lớn nhất đứng trước)",
      "B. Little-Endian (Byte có trọng số nhỏ nhất đứng trước)",
      "C. Middle-Endian",
      "D. Không quan trọng thứ tự"
    ],
    "ans": 1,
    "exp": "Khác với họ SHA (dùng Big-Endian), MD5 sử dụng chuẩn Little-Endian (vốn phổ biến trên kiến trúc vi xử lý x86 của Intel) cho cả dữ liệu đệm và các biến trạng thái."
  },
  {
    "id": 97,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Thuật toán nén MD5 thực hiện tổng cộng bao nhiêu vòng lặp lớn (Rounds) và bao nhiêu bước biến đổi (Steps)?",
    "options": [
      "A. 16 vòng, mỗi vòng 4 bước",
      "B. 4 vòng lớn, mỗi vòng gồm 16 bước biến đổi (Tổng cộng 64 bước)",
      "C. 10 vòng, mỗi vòng 10 bước",
      "D. 64 vòng lớn, mỗi vòng 4 bước"
    ],
    "ans": 1,
    "exp": "Hàm nén MD5 gồm đúng 4 vòng lặp. Mỗi vòng lặp thực hiện 16 phép biến đổi trên 4 thanh ghi A, B, C, D, tương ứng với tổng cộng 64 bước tính toán cho mỗi khối 512-bit."
  },
  {
    "id": 98,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Bốn hàm logic phi tuyến F, G, H, I được áp dụng lần lượt trong 4 vòng của MD5 là những hàm nào?",
    "options": [
      "A. Toàn bộ là phép nhân ma trận",
      "B. F=(X∧Y)∨(¬X∧Z); G=(X∧Z)∨(Y∧¬Z); H=X⊕Y⊕Z; I=Y⊕(X∨¬Z)",
      "C. Cả 4 vòng đều dùng hàm XOR: X⊕Y⊕Z",
      "D. Các phép biến đổi bảng S-Box"
    ],
    "ans": 1,
    "exp": "Mỗi vòng của MD5 sử dụng một hàm bit luận lý cơ bản khác nhau: Vòng 1 dùng F (lựa chọn bit), Vòng 2 dùng G, Vòng 3 dùng H (XOR chẵn lẻ), và Vòng 4 dùng I."
  },
  {
    "id": 99,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Bảng 64 hằng số T[i] (với i từ 1 đến 64) trong MD5 được sinh ra từ hàm toán học nào?",
    "options": [
      "A. T[i] = floor(2^32 × |sin(i)|) với i tính theo đơn vị radian",
      "B. Căn bậc 2 của các số nguyên tố",
      "C. Dãy số Fibonacci",
      "D. Các số ngẫu nhiên do NSA cung cấp"
    ],
    "ans": 0,
    "exp": "Ronald Rivest sử dụng công thức T[i] = floor(2^32 * abs(sin(i))) với i từ 1 đến 64 radian để sinh ra 64 số nguyên 32-bit giả ngẫu nhiên, chứng minh thuật toán không cài cắm bất kỳ \"cửa sau\" (backdoor) nào."
  },
  {
    "id": 100,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Tại sao MD5 không có thao tác \"giải mã\" (decrypt)?",
    "options": [
      "A. Vì thuật toán bị mất chìa khóa giải mã",
      "B. Vì hàm băm là hàm một chiều (One-way function), nén vô hạn thông tin đầu vào thành 128 bit cố định nên xảy ra hiện tượng mất mát thông tin không thể đảo ngược",
      "C. Vì chính phủ cấm viết code giải mã MD5",
      "D. Vì MD5 sử dụng khóa bất đối xứng"
    ],
    "ans": 1,
    "exp": "Hàm băm hoạt động theo nguyên lý lỗ chim bồ câu (Pigeonhole Principle): có vô số thông điệp khác nhau cùng ánh xạ về 2^128 giá trị băm. Do đó về mặt toán học không thể đảo ngược từ 128 bit về thông điệp gốc."
  },
  {
    "id": 101,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Khái niệm \"Tấn công va chạm\" (Collision Attack) trong mật mã học có nghĩa là gì?",
    "options": [
      "A. Tìm lại thông điệp ban đầu từ giá trị băm cho trước (Preimage Attack)",
      "B. Tìm ra hai thông điệp khác nhau bất kỳ M1 != M2 sao cho Hash(M1) == Hash(M2)",
      "C. Tấn công làm sập máy chủ web",
      "D. Đo mức tiêu thụ điện của bộ vi xử lý"
    ],
    "ans": 1,
    "exp": "Tấn công va chạm là việc tìm ra 2 dữ liệu đầu vào khác nhau bất kỳ (M1 != M2) nhưng lại sinh ra cùng một giá trị băm đầu ra H(M1) = H(M2). Một hàm băm mật mã bắt buộc phải có tính chống va chạm."
  },
  {
    "id": 102,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Theo lý thuyết Nghịch lý ngày sinh nhật (Birthday Paradox), để tìm thấy một va chạm trên không gian băm 128-bit của MD5 bằng phương pháp ngẫu nhiên cần bao nhiêu phép thử?",
    "options": [
      "A. 2^128 phép thử",
      "B. 2^64 phép thử (căn bậc 2 của 2^128)",
      "C. 2^32 phép thử",
      "D. 128 phép thử"
    ],
    "ans": 1,
    "exp": "Nghịch lý ngày sinh nhật chỉ ra rằng xác suất tìm thấy 2 người trùng ngày sinh đạt > 50% chỉ cần sqrt(N) phần tử. Với hàm băm 128-bit, ngưỡng an toàn lý thuyết tối đa chống va chạm chỉ là 2^(128/2) = 2^64 phép thử."
  },
  {
    "id": 103,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Nhà khoa học nào đã gây chấn động hội nghị mật mã quốc tế CRYPTO 2004 khi công bố tìm ra va chạm thực tế đầu tiên của MD5 chỉ trong vài giờ tính toán?",
    "options": [
      "A. Adi Shamir",
      "B. GS. Vương Tiểu Vân (Wang Xiaoyun) và các cộng sự tại Đại học Sơn Đông",
      "C. Bruce Schneier",
      "D. Whitfield Diffie"
    ],
    "ans": 1,
    "exp": "GS. Vương Tiểu Vân (Đại học Sơn Đông) và cộng sự đã công bố kỹ thuật thám mã vi sai đột phá, tìm thấy các cặp va chạm MD5 hoàn chỉnh chỉ mất vài giờ trên máy tính bàn, phá hủy hoàn toàn tính chống va chạm của MD5."
  },
  {
    "id": 104,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Năm 2008, một nhóm các nhà nghiên cứu bảo mật đã sử dụng cụm 200 máy chơi game PlayStation 3 khai thác va chạm MD5 để thực hiện cuộc tấn công nổi tiếng nào?",
    "options": [
      "A. Đào toàn bộ Bitcoin trên thế giới",
      "B. Tạo ra một Cơ quan cấp phát chứng chỉ SSL/TLS giả mạo (Rogue CA Certificate) được tất cả trình duyệt tin cậy",
      "C. Bẻ khóa mật khẩu của Lầu Năm Góc",
      "D. Xóa sổ hệ thống mạng Internet"
    ],
    "ans": 1,
    "exp": "Alexander Sotirov và nhóm nghiên cứu đã tạo ra 2 chứng chỉ X.509 khác nhau có cùng mã băm MD5, khiến cơ quan cấp chứng chỉ ký hợp pháp lên chứng chỉ bình thường, nhưng kẻ tấn công tráo đổi sang chứng chỉ CA giả mạo để mạo danh bất kỳ website nào."
  },
  {
    "id": 105,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Mã độc mạng phức tạp nào được phát hiện năm 2012 đã sử dụng kỹ thuật va chạm MD5 tiền tố đã chọn (Chosen-prefix Collision) để mạo danh chữ ký số của Microsoft Windows Update?",
    "options": [
      "A. WannaCry",
      "B. Mã độc Flame (Flamer)",
      "C. ILOVEYOU",
      "D. Morris Worm"
    ],
    "ans": 1,
    "exp": "Mã độc gián điệp mạng khét tiếng Flame đã sử dụng tấn công va chạm tiền tố đã chọn trên MD5 để giả mạo chứng chỉ số Microsoft Code Signing, lây nhiễm vào các máy tính thông qua cơ chế cập nhật Windows Update giả."
  },
  {
    "id": 106,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Phương pháp tấn công nào thường được tin tặc sử dụng để tìm lại mật khẩu ban đầu từ mã băm MD5 thu được trong các vụ rò rỉ dữ liệu?",
    "options": [
      "A. Tấn công giả mạo DNS (DNS Spoofing)",
      "B. Tra cứu Bảng cầu vồng (Rainbow Table) và vét cạn kết hợp từ điển (Dictionary / Brute-force)",
      "C. Tấn công tràn bộ đệm thanh ghi CPU (Buffer Overflow)",
      "D. Tấn công từ chối dịch vụ phân tán (DDoS)"
    ],
    "ans": 1,
    "exp": "Vì MD5 tính toán quá nhanh và không có muối (salt), kẻ tấn công dùng Rainbow Table chứa hàng tỷ chuỗi băm tính sẵn để tra ngược mật khẩu trong 1 mili-giây."
  },
  {
    "id": 107,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Biện pháp nào giúp bảo vệ an toàn khi lưu trữ mật khẩu thay vì chỉ băm MD5 thông thường?",
    "options": [
      "A. Đổi tất cả ký tự mật khẩu thành chữ in hoa trước khi băm",
      "B. Băm MD5 hai lần liên tiếp (md5(md5(pass)))",
      "C. Thêm chuỗi muối ngẫu nhiên duy nhất (Salt) và sử dụng các hàm băm chậm chuyên dụng (bcrypt, Argon2, PBKDF2)",
      "D. Cắt ngắn mã băm MD5 còn 16 ký tự"
    ],
    "ans": 2,
    "exp": "Thêm Salt ngẫu nhiên triệt tiêu hoàn toàn hiệu quả của Rainbow Table. Đồng thời, phải dùng các thuật toán tiêu tốn tài nguyên (KDFs) như Argon2, bcrypt để chống lại sức mạnh tính toán song song của GPU."
  },
  {
    "id": 108,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Ngày nay, trường hợp DUY NHẤT nào mà MD5 vẫn có thể được chấp nhận sử dụng tương đối an toàn là gì?",
    "options": [
      "A. Ký số chứng thư SSL/TLS cho tên miền ngân hàng",
      "B. Kiểm tra tính toàn vẹn ngẫu nhiên của tệp tin tải về (File Checksum) chống lỗi đường truyền mạng",
      "C. Lưu trữ mật khẩu người dùng trong cơ sở dữ liệu",
      "D. Sinh khóa bí mật mã hóa trong giao thức VPN"
    ],
    "ans": 1,
    "exp": "MD5 không an toàn trước kẻ tấn công chủ đích (malicious tampering), nhưng vẫn hữu ích và nhẹ nhàng khi dùng làm checksum kiểm tra xem tệp tải về có bị đứt gãy hay lỗi bit ngẫu nhiên do mạng hay không."
  },
  {
    "id": 109,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Tốc độ tính toán quá nhanh của MD5 (hàng tỷ hash/giây trên card đồ họa GPU) là một ưu điểm hay nhược điểm trong việc lưu trữ mật khẩu?",
    "options": [
      "A. Là ưu điểm tuyệt vời giúp người dùng đăng nhập nhanh hơn",
      "B. Là một nhược điểm chí mạng, vì kẻ tấn công có thể thử hàng tỷ mật khẩu mỗi giây để bẻ khóa toàn bộ cơ sở dữ liệu rò rỉ",
      "C. Không có ảnh hưởng gì",
      "D. Giúp tiết kiệm dung lượng ổ cứng của server"
    ],
    "ans": 1,
    "exp": "Đối với việc lưu trữ mật khẩu, hàm băm lý tưởng bắt buộc phải CHẬM và tốn bộ nhớ (Memory-hard) như Argon2 để hạn chế tốc độ đoán mật khẩu của hacker. Tốc độ cao của MD5 biến nó thành thảm họa an ninh khi lộ dữ liệu."
  },
  {
    "id": 110,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Tại sao việc áp dụng lặp lại nhiều lần MD5 như md5(md5(password)) hoặc md5(sha1(password)) vẫn KHÔNG được coi là an toàn?",
    "options": [
      "A. Vì làm như vậy sẽ gây hỏng dữ liệu mật khẩu",
      "B. Vì nó không bổ sung tính chất tốn bộ nhớ (Memory-hardness) và các công cụ bẻ khóa hiện đại (như Hashcat) vẫn có thể tính toán hàng trăm triệu lần thử mỗi giây",
      "C. Vì làm tăng dung lượng mã băm lên gấp đôi",
      "D. Vì trình duyệt web không hỗ trợ băm 2 lần"
    ],
    "ans": 1,
    "exp": "Băm lặp lại vài lần chỉ làm chậm hacker vài micro-giây. Các GPU hiện đại với Hashcat có thể chạy các quy tắc nested hash này cực nhanh. Tiêu chuẩn quốc tế yêu cầu sử dụng hàm KDF chuẩn như Argon2id, PBKDF2 với hàng trăm nghìn vòng lặp."
  },
  {
    "id": 111,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Tiêu chuẩn quốc tế RFC 6151 do tổ chức IETF ban hành năm 2011 đã đưa ra tuyên bố gì về thuật toán MD5?",
    "options": [
      "A. Khuyến nghị nâng cấp MD5 thành thuật toán mã hóa mặc định",
      "B. Chính thức cảnh báo MD5 đã bị phá vỡ về mặt bảo mật và nghiêm cấm sử dụng MD5 trong bất kỳ cơ chế chữ ký số hay chứng thực an toàn nào",
      "C. Khuyên người dùng tăng độ dài chuỗi băm lên 512 bit",
      "D. Khẳng định MD5 an toàn hơn SHA-256"
    ],
    "ans": 1,
    "exp": "RFC 6151 (Updated Security Considerations for the MD5 Algorithm) kết luận rõ: MD5 không còn an toàn và không bao giờ được phép sử dụng trong các giao thức cần tính chống va chạm như SSL/TLS, S/MIME, IPsec."
  },
  {
    "id": 112,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Hai file PDF hoàn toàn khác nhau (ví dụ: một hợp đồng mua bán nhà trị giá 1 tỷ và một hợp đồng 100 tỷ) có thể sinh ra cùng một mã băm MD5 không?",
    "options": [
      "A. Tuyệt đối không bao giờ xảy ra",
      "B. Hoàn toàn có thể tạo ra được nhờ kỹ thuật tấn công va chạm tiền tố đã chọn (Chosen-prefix collision)",
      "C. Chỉ xảy ra nếu hai file có cùng dung lượng và cùng nội dung văn bản",
      "D. Chỉ xảy ra trên hệ điều hành Linux"
    ],
    "ans": 1,
    "exp": "Các nhà nghiên cứu đã chứng minh bằng công cụ HashClash: họ có thể tạo ra 2 tệp PDF có nội dung hiển thị hoàn toàn khác nhau nhưng có mã băm MD5 giống hệt nhau, cho phép hoán đổi hợp đồng sau khi đã được ký số bằng MD5!"
  },
  {
    "id": 113,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Chuỗi băm MD5 của chuỗi rỗng \"\" (Empty string) có giá trị thập lục phân là gì?",
    "options": [
      "A. 00000000000000000000000000000000",
      "B. d41d8cd98f00b204e9800998ecf8427e",
      "C. ffffffffffffffffffffffffffffffff",
      "D. e3b0c44298fc1c149afbf4c8996fb924"
    ],
    "ans": 1,
    "exp": "Giá trị băm MD5 của chuỗi rỗng là d41d8cd98f00b204e9800998ecf8427e. Đây là giá trị tham chiếu chuẩn mực được các lập trình viên sử dụng để kiểm tra tính đúng đắn của thư viện MD5."
  },
  {
    "id": 114,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Kiến trúc Merkle–Damgård được áp dụng trong MD5 biến đổi một hàm nén một chiều xử lý khối kích thước cố định thành hàm băm có khả năng xử lý:",
    "options": [
      "A. Chỉ các tệp tin có kích thước đúng 512 bit",
      "B. Thông điệp đầu vào có độ dài tùy ý bất kỳ",
      "C. Tối đa 100 ký tự",
      "D. Chỉ dữ liệu hình ảnh"
    ],
    "ans": 1,
    "exp": "Kiến trúc Merkle–Damgård chia nhỏ thông điệp dài tùy ý thành các khối cố định và tuần tự đưa qua hàm nén lặp (Iterative compression function), đảm bảo tính an toàn của toàn bộ hàm băm nếu hàm nén thành phần an toàn."
  },
  {
    "id": 115,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Khái niệm \"Độ an toàn tiền ảnh thứ nhất\" (First Preimage Resistance) của hàm băm có nghĩa là gì?",
    "options": [
      "A. Dễ dàng tìm lại mật khẩu",
      "B. Khi cho trước một giá trị băm H, về mặt tính toán là bất khả thi để tìm ra bất kỳ thông điệp M nào sao cho Hash(M) = H",
      "C. Hai thông điệp giống nhau có mã băm giống nhau",
      "D. Tốc độ băm nhanh hơn 1 giây"
    ],
    "ans": 1,
    "exp": "Preimage resistance (tính một chiều): Cho trước giá trị hash h, kẻ tấn công không thể tìm lại bản rõ ban đầu m sao cho hash(m) = h. Dù MD5 đã mất tính chống va chạm, tính chống tiền ảnh của nó vẫn chưa bị bẻ khóa hoàn toàn."
  },
  {
    "id": 116,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Khái niệm \"Độ an toàn tiền ảnh thứ hai\" (Second Preimage Resistance / Weak Collision Resistance) có nghĩa là gì?",
    "options": [
      "A. Khi cho trước thông điệp M1, bất khả thi để tìm ra một thông điệp M2 khác (M1 != M2) sao cho Hash(M1) == Hash(M2)",
      "B. Cho phép tìm ra 2 thông điệp trùng nhau tùy ý",
      "C. Băm 2 lần liên tiếp",
      "D. Băm 2 tệp tin cùng lúc"
    ],
    "ans": 0,
    "exp": "Second Preimage Resistance: Cho trước bản rõ m1, kẻ thù không thể tìm ra bản rõ m2 khác mà có cùng giá trị băm. Điều này khó hơn nhiều so với việc tự do chọn cả 2 bản rõ (Collision Attack)."
  },
  {
    "id": 117,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Trong MD5, mỗi bước biến đổi sử dụng phép toán nào sau đây để đảm bảo giá trị thanh ghi luôn nằm trong giới hạn 32-bit?",
    "options": [
      "A. Phép chia lấy nguyên cho 1000",
      "B. Phép cộng Modulo 2^32 (Addition modulo 2^32, bỏ qua phần tràn số)",
      "C. Phép nhân với số âm",
      "D. Phép căn bậc hai"
    ],
    "ans": 1,
    "exp": "Các máy tính 32-bit thực hiện phép cộng không dấu modulo 2^32 cực kỳ tự nhiên và hiệu quả: bất kỳ khi nào tổng vượt quá 0xFFFFFFFF, phần bit tràn thứ 33 sẽ tự động bị bỏ qua."
  },
  {
    "id": 118,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Thao tác xoay bit dịch vòng trái (Circular Left Shift) với các số bước khác nhau (s) ở mỗi bước của MD5 có tác dụng gì?",
    "options": [
      "A. Giúp lưu trữ vào đĩa cứng",
      "B. Đảm bảo các bit dữ liệu được xáo trộn và khuếch tán nhanh chóng sang các vị trí bit khác nhau trong từ 32-bit",
      "C. Giảm kích thước file tải xuống",
      "D. Mã hóa khóa công khai"
    ],
    "ans": 1,
    "exp": "Phép xoay bit trái kết hợp với phép cộng phi tuyến modulo 2^32 làm cho các bit hòa trộn phức tạp, tạo ra hiệu ứng khuếch tán (diffusion) giữa các bit liền kề."
  },
  {
    "id": 119,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Mật khẩu \"123456\" có mã băm MD5 nổi tiếng là gì?",
    "options": [
      "A. 00000000000000000000000000000000",
      "B. e10adc3949ba59abbe56e057f20f883e",
      "C. 21232f297a57a5a743894a0e4a801fc3",
      "D. 5f4dcc3b5aa765d61d8327deb882cf99"
    ],
    "ans": 1,
    "exp": "Mã băm MD5 của \"123456\" là e10adc3949ba59abbe56e057f20f883e. Chuỗi này nằm ở đầu trong mọi bảng tra cứu Rainbow Table trên thế giới."
  },
  {
    "id": 120,
    "algo": "md5",
    "algoName": "MD5",
    "badgeClass": "badge-hash",
    "q": "Khuyên cáo tối thượng của ngành an toàn thông tin hiện nay về thuật toán MD5 là gì?",
    "options": [
      "A. Tiếp tục sử dụng vì nó rất nhẹ và chạy nhanh",
      "B. Tuyệt đối không sử dụng MD5 cho bất kỳ mục đích an ninh hay bảo mật nào (mật khẩu, chữ ký số, chứng chỉ); thay thế hoàn toàn bằng SHA-256, SHA-3 hoặc Argon2",
      "C. Chỉ dùng MD5 trên điện thoại di động",
      "D. Kết hợp MD5 với mật khẩu ngắn"
    ],
    "ans": 1,
    "exp": "MD5 đã chết về mặt mật mã học (cryptographically broken). Bất kỳ hệ thống mới nào hiện nay đều bắt buộc phải loại bỏ MD5 và chuyển sang các chuẩn băm an toàn hiện đại như SHA-256, SHA-3, hoặc Argon2 cho mật khẩu."
  },
  {
    "id": 121,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Thuật toán băm SHA-256 thuộc họ thuật toán nào và do cơ quan nào ban hành thiết kế?",
    "options": [
      "A. Họ SHA-1 do IBM thiết kế",
      "B. Họ SHA-2 do Cơ quan An ninh Quốc gia Hoa Kỳ (NSA) thiết kế và NIST ban hành chuẩn FIPS 180-2",
      "C. Họ MD5 do Ronald Rivest sáng lập",
      "D. Họ SHA-3 do các nhà nghiên cứu Bỉ sáng lập"
    ],
    "ans": 1,
    "exp": "SHA-256 thuộc gia đình thuật toán SHA-2 (gồm SHA-224, SHA-256, SHA-384, SHA-512) do NSA thiết kế và được Viện Tiêu chuẩn và Kỹ thuật Quốc gia Mỹ (NIST) công bố chuẩn hóa vào năm 2001."
  },
  {
    "id": 122,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Kích thước đầu ra cố định của mã băm SHA-256 là bao nhiêu bit và biểu diễn bằng bao nhiêu ký tự Hex?",
    "options": [
      "A. 128 bit (32 ký tự Hex)",
      "B. 256 bit (32 bytes, tương đương 64 ký tự Hexadecimal)",
      "C. 512 bit (128 ký tự Hex)",
      "D. 160 bit (40 ký tự Hex)"
    ],
    "ans": 1,
    "exp": "Đúng như tên gọi của nó, SHA-256 sinh ra giá trị băm có độ dài cố định 256 bit (32 bytes). Khi biểu diễn dạng chuỗi thập lục phân (Hex), nó gồm đúng 64 ký tự."
  },
  {
    "id": 123,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Kích thước khối dữ liệu đầu vào (Block size) được xử lý trong mỗi chu trình lặp của SHA-256 là bao nhiêu?",
    "options": [
      "A. 128 bit",
      "B. 256 bit",
      "C. 512 bit (chia thành 16 từ 32-bit: W0 đến W15)",
      "D. 1024 bit"
    ],
    "ans": 2,
    "exp": "SHA-256 phân chia dữ liệu đầu vào thành các khối chuẩn 512 bit (16 từ 32-bit, tương đương 64 bytes) để đưa vào quy trình lập lịch thông điệp và nén lặp."
  },
  {
    "id": 124,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Giá trị băm SHA-256 nổi tiếng của chuỗi rỗng \"\" (Empty String) bắt đầu bằng các ký tự nào sau đây?",
    "options": [
      "A. 0000000000000000...",
      "B. d41d8cd98f00b204...",
      "C. e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "D. ffffffffffffffff..."
    ],
    "ans": 2,
    "exp": "Mã băm SHA-256 của chuỗi rỗng là hằng số e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855, xuất hiện thường xuyên trong Git, Bitcoin và an ninh mạng."
  },
  {
    "id": 125,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Trong bước đệm dữ liệu (Padding) của SHA-256, 64 bit ở cuối khối dùng để ghi thông tin gì và theo thứ tự byte nào?",
    "options": [
      "A. Ghi số ngẫu nhiên theo Little-Endian",
      "B. Ghi độ dài của thông điệp gốc ban đầu (tính theo số bit) theo thứ tự Big-Endian",
      "C. Ghi khóa bí mật của người gửi",
      "D. Ghi thời gian hiện tại"
    ],
    "ans": 1,
    "exp": "Quy tắc đệm SHA-256: Thêm bit 1 (0x80), các bit 0 cho đến khi độ dài đồng dư 448 mod 512, sau đó ghi độ dài thông điệp gốc (tính bằng bit) ở 64 bit cuối cùng theo chuẩn Big-Endian."
  },
  {
    "id": 126,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Tám hằng số trạng thái khởi tạo ban đầu H0, H1, ..., H7 của SHA-256 được lấy từ nguồn gốc toán học nào?",
    "options": [
      "A. 32 bit phần thập phân đầu tiên của căn bậc hai của 8 số nguyên tố đầu tiên (2, 3, 5, 7, 11, 13, 17, 19)",
      "B. Các số ngẫu nhiên do NSA bí mật tạo ra",
      "C. Dãy số lượng giác sin và cos",
      "D. Số Pi (3.14159...)"
    ],
    "ans": 0,
    "exp": "Ví dụ: sqrt(2) = 1.41421356... Phần thập phân nhân 2^32 lấy phần nguyên cho ra đúng 0x6a09e667 (H0). Cách chọn toán học này chứng minh không có cửa sau trong các giá trị khởi tạo."
  },
  {
    "id": 127,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Bảng 64 hằng số nén K0 đến K63 sử dụng trong 64 bước lặp của SHA-256 được lấy từ đâu?",
    "options": [
      "A. 32 bit phần thập phân của căn bậc ba của 64 số nguyên tố đầu tiên (2, 3, 5, ..., 311)",
      "B. Bảng S-box của thuật toán DES",
      "C. Đa thức bất khả quy của AES",
      "D. Dãy số Fibonacci"
    ],
    "ans": 0,
    "exp": "Hằng số Kt được lấy từ 32 bit đầu phần lẻ của căn bậc ba của 64 số nguyên tố đầu tiên (từ cbrt(2) = 0x428a2f98 đến cbrt(311) = 0xc67178f2). Đây là các con số \"nothing-up-my-sleeve\" minh bạch."
  },
  {
    "id": 128,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Trong khâu Lập lịch thông điệp (Message Schedule), 16 từ ban đầu (W0..W15) của khối được mở rộng thành bao nhiêu từ 32-bit?",
    "options": [
      "A. 32 từ",
      "B. 48 từ",
      "C. 64 từ (W0 đến W63)",
      "D. 128 từ"
    ],
    "ans": 2,
    "exp": "16 từ 32-bit ban đầu của khối thông điệp được mở rộng thành mảng 64 từ W[0..63] thông qua công thức xoay dịch bit với các hàm sigma σ0 và σ1."
  },
  {
    "id": 129,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Thuật toán nén của SHA-256 thực hiện tổng cộng bao nhiêu vòng lặp (vòng nén) cho mỗi khối 512-bit?",
    "options": [
      "A. 16 vòng",
      "B. 32 vòng",
      "C. 64 vòng lặp",
      "D. 80 vòng"
    ],
    "ans": 2,
    "exp": "Mỗi khối 512-bit chạy qua đúng 64 vòng nén liên tiếp. Ở mỗi vòng t (0 <= t <= 63), thuật toán nạp từ mở rộng W[t] và hằng số K[t] tương ứng."
  },
  {
    "id": 130,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Hai hàm luận lý bit cốt lõi Ch (Choose) và Maj (Majority) trong vòng nén SHA-256 có công thức là gì?",
    "options": [
      "A. Ch(x,y,z) = x + y + z; Maj(x,y,z) = x * y * z",
      "B. Ch(x,y,z) = (x ∧ y) ⊕ (¬x ∧ z); Maj(x,y,z) = (x ∧ y) ⊕ (x ∧ z) ⊕ (y ∧ z)",
      "C. Ch = x ⊕ y ⊕ z; Maj = x ∧ y ∧ z",
      "D. Cả hai hàm đều dùng bảng tra cứu S-Box"
    ],
    "ans": 1,
    "exp": "Ch(x,y,z) chọn bit của y nếu x=1, chọn bit của z nếu x=0. Maj(x,y,z) trả về bit chiếm đa số trong 3 bit x, y, z. Cả hai hàm đều tạo ra các đặc tính phi tuyến mạnh mẽ."
  },
  {
    "id": 131,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Trong mạng lưới Blockchain của Bitcoin, thuật toán đồng thuận Bằng chứng công việc (Proof of Work) sử dụng SHA-256 như thế nào?",
    "options": [
      "A. Băm mật khẩu người gửi tiền một lần",
      "B. Băm hai lần liên tiếp (Double SHA-256: SHA256(SHA256(BlockHeader))) và tìm số Nonce sao cho giá trị băm nhỏ hơn Mục tiêu độ khó (Target)",
      "C. Dùng SHA-256 để nén file giao dịch zip",
      "D. Dùng SHA-256 để sinh khóa công khai RSA"
    ],
    "ans": 1,
    "exp": "Các thợ đào Bitcoin liên tục thay đổi số Nonce và tính SHA256(SHA256(Block_Header)) hàng nghìn tỷ lần mỗi giây để tìm ra mã băm có số lượng bit 0 nhất định ở đầu (thỏa mãn Difficulty Target)."
  },
  {
    "id": 132,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Tại sao Satoshi Nakamoto lại thiết kế Bitcoin sử dụng băm hai lần Double-SHA256 (SHA-256d)?",
    "options": [
      "A. Vì làm tăng độ dài mã băm lên 512 bit",
      "B. Để phòng chống triệt để cuộc tấn công mở rộng độ dài (Length Extension Attack)",
      "C. Để làm cho máy tính chạy chậm lại",
      "D. Để tương thích với thẻ nhớ USB"
    ],
    "ans": 1,
    "exp": "Áp dụng SHA-256 hai lần liên tiếp (SHA-256(SHA-256(x))) triệt tiêu hoàn toàn điểm yếu tấn công mở rộng độ dài (Length Extension Attack) vốn là đặc trưng của kiến trúc Merkle–Damgård."
  },
  {
    "id": 133,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Tấn công mở rộng độ dài (Length Extension Attack) trên SHA-256 cho phép kẻ tấn công làm được gì nếu hệ thống dùng cơ chế băm ngây thơ Hash(Secret || Message)?",
    "options": [
      "A. Tìm ra chính xác Secret Key",
      "B. Nối thêm dữ liệu tùy ý vào sau Message và tính được chữ ký băm hợp lệ mới mà hoàn toàn KHÔNG cần biết Secret Key",
      "C. Xóa sạch dữ liệu trên máy chủ",
      "D. Làm sập đường truyền mạng Internet"
    ],
    "ans": 1,
    "exp": "Vì mã băm chính là trạng thái thanh ghi cuối cùng của hàm nén, kẻ tấn công có thể lấy mã băm đó làm trạng thái khởi tạo cho khối dữ liệu nối thêm tiếp theo mà không cần biết Secret ban đầu."
  },
  {
    "id": 134,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Giải pháp chuẩn mực quốc tế nào được thiết kế để khắc phục triệt để lỗ hổng Length Extension Attack của SHA-256 khi xác thực API và Web Token (JWT)?",
    "options": [
      "A. Băm thêm 10 lần",
      "B. Sử dụng cơ chế HMAC-SHA256 (Hash-based Message Authentication Code)",
      "C. Mã hóa bằng DES",
      "D. Cắt ngắn chuỗi băm còn 128 bit"
    ],
    "ans": 1,
    "exp": "HMAC-SHA256 lồng 2 lớp băm: HMAC(K, M) = SHA256((K ⊕ opad) || SHA256((K ⊕ ipad) || M)). Cấu trúc lồng ghép với hai chuỗi đệm ipad (0x36) và opad (0x5C) ngăn chặn hoàn toàn Length Extension Attack."
  },
  {
    "id": 135,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Mức độ an toàn chống tấn công tiền ảnh (Preimage resistance) và chống va chạm (Collision resistance) lý thuyết của SHA-256 lần lượt là:",
    "options": [
      "A. 128 bit và 64 bit",
      "B. 256 bit và 128 bit (cần tương ứng 2^256 và 2^128 phép toán)",
      "C. 512 bit và 256 bit",
      "D. 64 bit và 32 bit"
    ],
    "ans": 1,
    "exp": "Để tìm tiền ảnh (đoán ngược bản rõ): cần 2^256 phép thử. Để tìm va chạm (theo Birthday Paradox): cần 2^(256/2) = 2^128 phép thử. Con số 2^128 lớn tới mức vượt xa tổng năng lực tính toán của toàn bộ nhân loại hiện nay."
  },
  {
    "id": 136,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Tính đến nay, đã có bất kỳ công bố khoa học nào chứng minh tìm được một vụ va chạm thực tế (Collision) trên SHA-256 đầy đủ chưa?",
    "options": [
      "A. Đã bị tìm thấy va chạm từ năm 2005",
      "B. Chưa từng có ai tìm được va chạm trên SHA-256; nó vẫn an toàn tuyệt đối",
      "C. Google đã công bố va chạm năm 2017",
      "D. Đã bị hacker phá vỡ hoàn toàn"
    ],
    "ans": 1,
    "exp": "Google mới chỉ công bố va chạm thực tế trên SHA-1 (dự án SHAttered năm 2017). Đối với SHA-256, cho đến nay chưa từng có bất kỳ ai tìm ra va chạm và nó vẫn là trụ cột bảo mật vững chắc của toàn cầu."
  },
  {
    "id": 137,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Hệ thống quản lý phiên bản mã nguồn phân tán Git đã bắt đầu chuyển đổi từ mã băm SHA-1 sang thuật toán nào từ phiên bản 2.29?",
    "options": [
      "A. MD5",
      "B. SHA-256",
      "C. DES",
      "D. RSA"
    ],
    "ans": 1,
    "exp": "Sau khi SHA-1 bị Google chứng minh va chạm năm 2017, dự án Git đã phát triển cơ chế chuyển đổi định dạng Object Hash từ SHA-1 160-bit sang SHA-256 256-bit để đảm bảo tính toàn vẹn tuyệt đối của mã nguồn."
  },
  {
    "id": 138,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Tại sao thuật toán SHA-512 (thuộc họ SHA-2) đôi khi lại chạy NHANH HƠN SHA-256 trên các máy tính hiện đại?",
    "options": [
      "A. Vì SHA-512 có ít vòng lặp hơn",
      "B. Vì SHA-512 sử dụng các từ 64-bit, tận dụng tối đa thanh ghi và tập lệnh số nguyên 64-bit của CPU hiện đại (x86_64, ARM64)",
      "C. Vì SHA-512 nén dữ liệu tốt hơn",
      "D. Vì SHA-512 không cần dùng bước đệm"
    ],
    "ans": 1,
    "exp": "SHA-256 tính toán trên các thanh ghi 32-bit. Trên CPU 64-bit, SHA-512 xử lý mỗi phép toán trên 64 bit cùng lúc, nén 1024 bit mỗi khối (gấp đôi SHA-256), nên đạt thông lượng MB/s cao hơn đáng kể."
  },
  {
    "id": 139,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Điểm khác biệt căn bản về mặt kiến trúc giữa chuẩn SHA-3 (Keccak) và SHA-2 (SHA-256) là gì?",
    "options": [
      "A. SHA-3 dùng kiến trúc Bọt biển (Sponge Construction) thay vì kiến trúc Merkle–Damgård của SHA-2, giúp kháng tự nhiên tấn công Length Extension",
      "B. SHA-3 không sử dụng phép toán logic",
      "C. SHA-3 chỉ có thể chạy trên máy tính lượng tử",
      "D. SHA-3 có độ dài đầu ra ngắn hơn SHA-256"
    ],
    "ans": 0,
    "exp": "SHA-3 (Keccak) chiến thắng cuộc thi của NIST năm 2012 nhờ kiến trúc Sponge độc đáo (gồm 2 pha Hấp thụ Absorb và Vắt Squeeze), hoàn toàn độc lập và không chịu ảnh hưởng bởi các điểm yếu cấu trúc của Merkle-Damgård."
  },
  {
    "id": 140,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Hiện tượng \"Hiệu ứng tuyết lở\" (Avalanche Effect) trong SHA-256 thể hiện như thế nào khi ta so sánh mã băm của \"apple\" và \"Apple\"?",
    "options": [
      "A. Hai mã băm chỉ khác nhau đúng 1 ký tự",
      "B. Hai mã băm hoàn toàn khác biệt ngẫu nhiên, không còn bất kỳ dấu vết tương đồng nào",
      "C. Hai mã băm giống hệt nhau",
      "D. Mã băm của \"Apple\" ngắn hơn"
    ],
    "ans": 1,
    "exp": "Chỉ cần đổi 1 bit (chữ 'a' mã 0x61 thành 'A' mã 0x41), các phép xoay bit và hàm nén 64 vòng sẽ khuếch tán ra toàn bộ 256 bit đầu ra, khiến hai chuỗi kết quả hoàn toàn khác biệt ngẫu nhiên."
  },
  {
    "id": 141,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Hai hàm xoay bit viết hoa Sigma0 (Σ0) và Sigma1 (Σ1) trong vòng nén SHA-256 thực hiện phép toán gì trên từ 32-bit x?",
    "options": [
      "A. Phép cộng với hằng số K",
      "B. Phép XOR giữa ba phép xoay vòng phải (ROTR) với các số bước khác nhau: ROTR(x, a) ⊕ ROTR(x, b) ⊕ ROTR(x, c)",
      "C. Phép nhân với số nguyên tố",
      "D. Phép chuyển đổi thành xâu Hex"
    ],
    "ans": 1,
    "exp": "Ví dụ Σ0(x) = ROTR(x, 2) ⊕ ROTR(x, 13) ⊕ ROTR(x, 22). Các phép xoay bit với các số bước nguyên tố cùng nhau tạo nên sự xáo trộn bit cực kỳ đồng đều trên toàn bộ 32 bit."
  },
  {
    "id": 142,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Hai biến tạm T1 và T2 trong mỗi vòng nén 64 bước của SHA-256 được tính toán như thế nào?",
    "options": [
      "A. T1 = h + Σ1(e) + Ch(e,f,g) + K_t + W_t; T2 = Σ0(a) + Maj(a,b,c)",
      "B. T1 = a + b + c; T2 = d + e + f",
      "C. T1 = W_t ⊕ K_t; T2 = a ⊕ b",
      "D. T1 = h * K_t; T2 = a * W_t"
    ],
    "ans": 0,
    "exp": "Tại mỗi bước lặp, T1 tổng hợp từ thanh ghi h, hàm Sigma1, hàm Choose, hằng số Kt và từ thông điệp Wt. T2 tổng hợp từ hàm Sigma0 và hàm Majority. Sau đó d mới = d + T1, và a mới = T1 + T2."
  },
  {
    "id": 143,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Sau khi hoàn thành 64 bước nén của một khối 512-bit, các biến trạng thái a..h được cập nhật vào H0..H7 như thế nào?",
    "options": [
      "A. Ghi đè trực tiếp H0 = a, H1 = b, ...",
      "B. Cộng dồn modulo 2^32: H0 = H0 + a, H1 = H1 + b, ..., H7 = H7 + h (Cấu trúc Davies–Meyer)",
      "C. Nhân H0 với a",
      "D. Xóa sạch H0..H7 để xử lý khối tiếp theo"
    ],
    "ans": 1,
    "exp": "Theo mô hình Davies–Meyer, giá trị trạng thái sau 64 bước được cộng dồn (modulo 2^32) với giá trị trạng thái trước khi vào khối. Phép cộng chuyển tiếp này biến hàm mã khối thành hàm băm một chiều không thể đảo ngược."
  },
  {
    "id": 144,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Chuẩn chứng chỉ số SSL/TLS phổ biến nhất hiện nay trên Internet cho các trang web ngân hàng và thương mại điện tử là:",
    "options": [
      "A. md5WithRSAEncryption",
      "B. sha256WithRSAEncryption hoặc ECDSA with SHA-256",
      "C. desWithSHA1",
      "D. plainTextAuth"
    ],
    "ans": 1,
    "exp": "Toàn bộ hạ tầng chứng chỉ số PKI hiện đại đã chuẩn hóa việc sử dụng SHA-256 kết hợp chữ ký số RSA hoặc đường cong elip ECDSA để bảo vệ an toàn cho kết nối HTTPS toàn cầu."
  },
  {
    "id": 145,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Trong công nghệ chữ ký số hiện đại, tại sao người ta không ký trực tiếp lên toàn bộ văn bản 500 MB mà lại ký lên mã băm SHA-256 của nó?",
    "options": [
      "A. Vì SHA-256 làm tệp tin biến mất",
      "B. Vì mã hóa bất đối xứng rất chậm và kích thước thông điệp bị giới hạn; băm văn bản thành 256-bit đại diện duy nhất giúp việc ký số diễn ra tức thì và an toàn tuyệt đối",
      "C. Vì chữ ký số không hỗ trợ tệp lớn hơn 10 KB",
      "D. Vì luật pháp quy định chỉ được ký trên mã băm"
    ],
    "ans": 1,
    "exp": "Mô hình Hash-and-Sign: Mã băm 256-bit là \"dấu vân tay số\" độc nhất vô nhị của tệp tin. Ký lên chuỗi 256-bit này vừa nhanh trong vài mili-giây, vừa đảm bảo nếu tệp 500 MB bị thay đổi dù chỉ 1 bit thì chữ ký số sẽ lập tức không hợp lệ."
  },
  {
    "id": 146,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Kỹ thuật băm SHA-256 có bị ảnh hưởng trực tiếp bởi Máy tính lượng tử chạy Thuật toán Shor giống như RSA hay không?",
    "options": [
      "A. Có, SHA-256 bị bẻ khóa hoàn toàn bởi thuật toán Shor",
      "B. KHÔNG, vì SHA-256 không dựa trên bài toán phân tích thừa số nguyên tố hay logarit rời rạc. Thuật toán Grover lượng tử chỉ giảm độ an toàn từ 2^256 xuống 2^128 (vẫn an toàn tuyệt đối)",
      "C. Máy tính lượng tử làm cho SHA-256 chạy nhanh hơn",
      "D. SHA-256 sẽ tự động tăng lên SHA-1024"
    ],
    "ans": 1,
    "exp": "Thuật toán Shor chỉ phá hủy mật mã bất đối xứng (RSA, ECC). Với hàm băm như SHA-256, máy tính lượng tử chỉ có thể dùng thuật toán Grover để tăng tốc tìm kiếm vét cạn với căn bậc hai (còn 2^128 phép tính), vẫn vượt xa mọi khả năng bẻ khóa thực tế."
  },
  {
    "id": 147,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Trong JSON Web Token (JWT), thuật ngữ \"HS256\" trong Header {\"alg\": \"HS256\"} đại diện cho thuật toán nào?",
    "options": [
      "A. Hardware SHA-256",
      "B. HMAC sử dụng hàm băm SHA-256 (HMAC-SHA256) với một khóa bí mật chia sẻ chung",
      "C. Hyper Security 256-bit",
      "D. RSA với SHA-256"
    ],
    "ans": 1,
    "exp": "HS256 là viết tắt của HMAC using SHA-256, phương thức ký xác thực token phổ biến nhất trên các ứng dụng web và API ngày nay để bảo vệ tính toàn vẹn của Payload người dùng."
  },
  {
    "id": 148,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Trong cây băm Merkle Tree (được sử dụng rộng rãi trong Git và Blockchain), các nút lá và nút cha được tính toán bằng SHA-256 như thế nào?",
    "options": [
      "A. Nút cha được tính bằng cách băm nối chuỗi hai nút con: Parent = SHA256(Left_Child || Right_Child)",
      "B. Nút cha bằng tổng số học của hai nút con",
      "C. Nút cha được chọn ngẫu nhiên",
      "D. Nút cha lưu trữ toàn bộ nội dung của các nút con"
    ],
    "ans": 0,
    "exp": "Cây Merkle Tree cho phép kiểm tra tính toàn vẹn của một giao dịch trong hàng triệu giao dịch chỉ bằng cách kiểm tra log(N) nút băm dẫn lên Merkle Root (SPV Proof trong Bitcoin)."
  },
  {
    "id": 149,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Số lượng khả năng đầu ra của SHA-256 (2^256) lớn tới mức nào trong vũ trụ?",
    "options": [
      "A. Tương đương số lượng hạt cát trên toàn Trái Đất",
      "B. Xấp xỉ khoảng 1.15 × 10^77, lớn hơn cả tổng số lượng nguyên tử ước tính trong toàn bộ vũ trụ quan sát được (~10^80)",
      "C. Tương đương dân số thế giới",
      "D. Tương đương số ngôi sao trong dải Ngân Hà"
    ],
    "ans": 1,
    "exp": "2^256 ≈ 1.1579 × 10^77 là một con số khổng lồ vô tận. Xác suất để hai thông điệp ngẫu nhiên bị va chạm trùng mã băm SHA-256 nhỏ hơn cả xác suất một thiên thạch đâm trúng bạn đúng vào lúc bạn trúng số độc đắc 10 lần liên tiếp."
  },
  {
    "id": 150,
    "algo": "sha",
    "algoName": "SHA-256",
    "badgeClass": "badge-hash",
    "q": "Khẳng định nào sau đây tổng kết chính xác nhất vị thế của SHA-256 trong nền kinh tế số và an ninh mạng hiện đại?",
    "options": [
      "A. SHA-256 là thuật toán lỗi thời sắp bị khai tử",
      "B. SHA-256 là \"xương sống\" bảo vệ tính toàn vẹn cho hạ tầng Web (HTTPS/TLS), mã nguồn phần mềm (Git), giao dịch tiền tệ phi tập trung (Bitcoin) và xác thực người dùng trên toàn cầu",
      "C. SHA-256 chỉ dùng để mã hóa mật khẩu máy tính",
      "D. SHA-256 đã bị thay thế hoàn toàn bởi MD5"
    ],
    "ans": 1,
    "exp": "SHA-256 là tiêu chuẩn hàm băm mật mã thành công và được tin cậy nhất trong lịch sử máy tính. Nó bảo vệ hàng nghìn tỷ đô la giao dịch tài chính, lưu lượng web toàn cầu và là thước đo chuẩn mực cho an toàn thông tin hiện đại."
  }
];
if (typeof window !== 'undefined') {
  window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
}
