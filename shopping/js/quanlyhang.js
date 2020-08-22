"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuanLyHang = void 0;
var sanpham_1 = require("./sanpham");
var QuanLyHang = /** @class */ (function () {
    function QuanLyHang() {
        this.hang = []; // dung de hung du lieu tu API
        // vi khong co , khong dung PHP nen tao sp thu cong
        var sanpham1 = new sanpham_1.SanPham(1, "Op Iphone", "san pham op den tu Nhat Ban Lorem", 40000, true, "/images/1.jpg");
        this.addSanPham(sanpham1); // dung ham goi sanpham1 de lay vao du lieu mang {hang}
        var sanpham2 = new sanpham_1.SanPham(2, "Op SamSung", "san pham op den tu han quoc Lorem", 40000, true, "/images/2.jpg");
        this.addSanPham(sanpham2);
        var sanpham3 = new sanpham_1.SanPham(3, "Op Android", "san pham op den tu Apple Lorem", 200000, true, "/images/2.jpg");
        this.addSanPham(sanpham3);
    }
    QuanLyHang.prototype.getCacSanPham = function () {
        return [];
    };
    QuanLyHang.prototype.getSanPhamById = function () {
        var motSanPham = new sanpham_1.SanPham(1, "sp1", "mo ta", 9000, true, "images/1.jpg");
        return motSanPham;
    };
    // dug de day du lieu hung tu API
    //dua du lieu vao trong mang {hang} khai bao private tren
    QuanLyHang.prototype.addSanPham = function (sp) {
        // this.hang.push(sp);// cach 1
        // cach 2 
        this.hang[this.hang.length] = sp;
        console.log(this.hang);
    };
    ;
    QuanLyHang.prototype.showSanPham = function () {
        return " ";
    };
    return QuanLyHang;
}());
exports.QuanLyHang = QuanLyHang;
