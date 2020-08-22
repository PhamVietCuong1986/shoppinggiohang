"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sanphamgiohang_1 = require("./sanphamgiohang");
var QuanLyGioHang = /** @class */ (function () {
    function QuanLyGioHang() {
        this.CacSanPhamTrongGioHang = sanphamgiohang_1.SanPhamGioHang[] = [];
    }
    QuanLyGioHang.prototype.addSanPhamTrongGioHang = function (motSanPham, soluong) { };
    QuanLyGioHang.prototype.updateSanPhamTrongGioHang = function (motSanPham, soluong) { };
    ;
    QuanLyGioHang.prototype.kiemTraTrangThaiSanPham = function () { };
    QuanLyGioHang.prototype.tinhSoLuong = function () { return; };
    QuanLyGioHang.prototype.tinhGia = function () { return; };
    QuanLyGioHang.prototype.hienThiGioHang = function () { return; };
    return QuanLyGioHang;
}());
