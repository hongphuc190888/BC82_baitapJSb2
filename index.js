const khuVucA = "A";
const khuVucB = "B";
const khuVucC = "C";
const khuVucX = "X";
function kiemTraKhuVuc(khuVucc) {
  console.log(khuVucc);
  switch (khuVucc) {
    case khuVucX:
      return 0;
    case khuVucA:
      return 2;
    case khuVucB:
      return 1;
    case khuVucC:
      return 0.5;
  }
}
const doiTuong1 = "1";
const doiTuong2 = "2";
const doiTuong3 = "3";
const doituong0 = "0";
function kiemTraDoiTuong(doiTuong) {
  console.log(doiTuong);
  switch (doiTuong) {
    case doituong0:
      return 0;
    case doiTuong1:
      return 2;
    case doiTuong2:
      return 1.5;
    case doiTuong3:
      return 1;
  }
}
function kiemTraDiemHopLe(diem) {
  return !isNaN(diem) && diem >= 0 && diem <= 10;
}

document.querySelector(".btn-primary").onclick = function () {
  let diemToan = document.getElementById("diemToan").value * 1;
  let diemVan = document.getElementById("diemVan").value * 1;
  let diemAnh = document.getElementById("diemAnh").value * 1;
  let diemChuan = document.getElementById("diemChuan").value * 1;
  console.log(diemToan);
  console.log(diemVan);
  console.log(diemAnh);
  // Kiểm tra nếu bất kỳ điểm nào không hợp lệ
  if (
    !kiemTraDiemHopLe(diemToan) ||
    !kiemTraDiemHopLe(diemVan) ||
    !kiemTraDiemHopLe(diemAnh)
  ) {
    alert("Vui lòng nhập điểm hợp lệ từ 0 đến 10!");
    return;
  }

  alert("Điểm hợp lệ! Tiếp tục tính toán...");

  let khuVuc = document.getElementById("khuVuc").value;
  console.log(khuVuc);
  let doiTuong = document.getElementById("doiTuong").value;
  console.log(doiTuong);
  let diemCongKhuVuc = kiemTraKhuVuc(khuVuc);
  console.log(diemCongKhuVuc);
  let diemCongDoiTuong = kiemTraDoiTuong(doiTuong);
  console.log(diemCongDoiTuong);
  let diemTong3Mon = diemToan + diemAnh + diemVan;
  console.log(diemTong3Mon);
  let diemTongKet = diemTong3Mon + diemCongKhuVuc + diemCongDoiTuong;
  console.log(diemTongKet);
  if (diemTongKet < diemChuan) {
    document.getElementById("ketQua").innerHTML = `Kết Quả Là Bạn Đã Rớt`;
  } else {
    document.getElementById("ketQua").innerHTML = `Kết Quả Là Bạn Đã Đậu`;
  }
};

// Bài 2
// 5 trường hợp sử dụng các mức diện có mệnh giá khác nhau
function kiemTraMucDienTieuThu(soDien) {
  // TH1: Mức điện từ 0 - 50Kw
  if (soDien <= 50) {
    return (tongTienDien = soDien * 500);
  } else if (soDien <= 100) {
    return (tongTienDien = 50 * 500 + (soDien - 50) * 650);
  } else if (soDien <= 200) {
    return (tongTienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850);
  } else if (soDien <= 350) {
    return (tongTienDien =
      50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100);
  } else {
    50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  }
}
function kiemTraThang(thang) {
  return isNaN(thang) || thang < 1 || thang > 12;
}

document.querySelector(".btn-ketqua2").onclick = function () {
  let soDien = document.getElementById("soDien").value * 1;
  let hoTen = document.getElementById("hoTen").value;
  let thang = document.getElementById("thang").value * 1;

  if (kiemTraThang(thang)) {
    alert("Vui lòng nhập tháng hợp lệ từ 1 đến 12!");
    return;
  }

  alert("Điểm hợp lệ! Tiếp tục tính toán...");
  console.log(soDien);
  console.log(hoTen);
  // tính tổng
  let tongTienDien = kiemTraMucDienTieuThu(soDien);
  console.log(tongTienDien);
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Tổng tiền điện tháng ${thang} của ${hoTen} là: ${tongTienDien.toLocaleString(
    "vn-vi",
    {
      style: "currency",
      currency: "VND",
    }
  )} `;
  //   // giá các mức Kw
  //   let gia50KwDauTien = kiemTraMucDienTieuThu(soDien);
  //   let gia50KwKe = kiemTraMucDienTieuThu(soDien);
  //   let gia100KwKe = kiemTraMucDienTieuThu(soDien);
  //   let gia150kwKe = kiemTraMucDienTieuThu(soDien);
  //   let giaTu150KwTroDi = kiemTraMucDienTieuThu(soDien);
};

//Bài 3
function kiemTraThuNhapChiuThue(thuNhapChiuThue) {
  if (thuNhapChiuThue <= 60e6) {
    return (phanTramThue = 0.05);
  } else if (thuNhapChiuThue >= 60e6 && thuNhapChiuThue <= 12e7) {
    return (phanTramThue = 0.1);
  } else if (thuNhapChiuThue >= 12e7 && thuNhapChiuThue <= 21e7) {
    return (phanTramThue = 0.15);
  } else if (thuNhapChiuThue >= 21e7 && thuNhapChiuThue <= 384e6) {
    return (phanTramThue = 0.2);
  } else if (thuNhapChiuThue >= 384e6 && thuNhapChiuThue <= 624e6) {
    return (phanTramThue = 0.25);
  } else if (thuNhapChiuThue >= 624e6 && thuNhapChiuThue <= 960e6) {
    return (phanTramThue = 0.3);
  } else {
    return (phanTramThue = 0.35);
  }
}
document.querySelector(".btn-dark").onclick = function () {
  let thuNhap = document.getElementById("thuNhap").value * 1;
  let hoTen1 = document.getElementById("hoTen1").value;
  let phuThuoc = document.getElementById("phuThuoc").value * 1;
  let tienTru4tr = 4e6;
  let tienTru1tr6 = 1.6e6;
  let thuNhapChiuThue = 0;

  thuNhapChiuThue = thuNhap - tienTru4tr - phuThuoc * tienTru1tr6;
  console.log(thuNhapChiuThue);
  let phanTramThue = kiemTraThuNhapChiuThue(thuNhapChiuThue);
  let tienDongThue = thuNhapChiuThue * phanTramThue;
  console.log(tienDongThue);
  document.getElementById(
    "ketQua3"
  ).innerHTML = `${hoTen1} phải đóng ${tienDongThue.toLocaleString("vn-vi", {
    currency: "VND",
    style: "currency",
  })}`;
};

// Bài 4
//  onchange
function doanhNghiep() {
  let loaiKHDN = document.getElementById("loaiKhachHang").value;
  // vùng hiển thị
  let ketNoiDN = document.getElementById("ketNoiDN");
  if (loaiKHDN === "Doanh Nghiệp") {
    ketNoiDN.innerHTML = `<div class="mb-3">
                  <label for="ketNoi" class="form-label">Số Kết Nối</label>
                  <input type="number" class="form-control" name="" id="ketNoi" aria-describedby="helpId"
                      placeholder=" Nhập số kết nối" />
              </div>`;
  } else {
    ketNoiDN.innerHTML = "";
  }
}
// xét điều kiện
const nhaDan = "Nhà Dân";
const doanhNghiep1 = "Doanh Nghiệp";

function kiemTraLoaiKH(loaiKH) {
  switch (loaiKH) {
    case nhaDan:
      return (phiXuLyHoaDon = 4.5);
    case doanhNghiep1:
      return (phiXuLyHoaDon = 15);
  }
}
// phí DVCB
function kiemTraPhiDVCBNhaDan(loaiKH) {
  switch (loaiKH) {
    case nhaDan:
      return (phiDVCOBanND = 20.5);
    case doanhNghiep1:
      return (phiDVCOBanND = 0);
  }
}
function kiemTraPhiDVCBDoanhNghiep(loaiKH) {
  if (loaiKH == doanhNghiep1 && ketNoi <= 10) {
    return (phiDVCOBan = 75);
  } else if (loaiKH == doanhNghiep1 && ketNoi >= 10) {
    return (phiDVCOBan = 75 + (ketNoi - 10) * 5);
  } else {
    return (phiDVCOBan = 0);
  }
}
// phí kênh cao cấp
function kiemTraPhiThueKenhCC(loaiKH) {
  switch (loaiKH) {
    case nhaDan:
      return (phikenhCaoCap = 7.5);
    case doanhNghiep1:
      return (phikenhCaoCap = 50);
  }
}
// kiểm tra giá trị nếu không có yêu cầu nguồi dùng nhập vào
function kiemTraGiaTriMSKH(maKh) {
  return maKh <= 0 || maKh >= 100000000;
}
document.querySelector(".btn-danger").onclick = function () {
  let loaiKH = document.getElementById("loaiKhachHang").value;
  let maKH = document.getElementById("khachHang").value * 1;
  let soLuongCaoCap = document.getElementById("caoCap").value * 1;
  console.log(loaiKH);
  console.log(maKH);
  console.log(soLuongCaoCap);

  if (kiemTraGiaTriMSKH(maKH)) {
    alert("Nhập vào MSKH");
    return;
  }
  alert("Tiếp tục nhập giá trị khác ");

  let loaiKHDN = document.getElementById("loaiKhachHang").value;
  if (loaiKHDN === "Doanh Nghiệp") {
    let ketNoi = document.getElementById("ketNoi").value * 1;
    console.log(ketNoi);
  }

  // phí
  let phiXuLyHoaDon = kiemTraLoaiKH(loaiKH);

  let phiDVCOBanDN = kiemTraPhiDVCBDoanhNghiep(loaiKH);

  let phikenhCaoCap = kiemTraPhiThueKenhCC(loaiKH);
  let phiDVCOBanND = kiemTraPhiDVCBNhaDan(loaiKH);

  let giaTienKenhCC = phikenhCaoCap * soLuongCaoCap;
  console.log(giaTienKenhCC);

  //tính tiền
  let ketQua4 = phiDVCOBanDN + phiXuLyHoaDon + giaTienKenhCC + phiDVCOBanND;
  console.log(ketQua4);
  document.getElementById(
    "ketQua4"
  ).innerHTML = ` Mã số Khách Hàng ${maKH}; Tiền Cáp ${ketQua4}`;
};
