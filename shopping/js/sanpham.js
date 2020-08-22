"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanPham = void 0;
var SanPham = /** @class */ (function () {
    function SanPham(id, ten, mota, gia, tinhtrang, anh) {
        this.id = id;
        this.ten = ten;
        this.mota = mota;
        this.gia = gia;
        this.tinhtrang = tinhtrang;
        this.anh = anh;
    }
    Object.defineProperty(SanPham.prototype, "id", {
        //get
        get: function () {
            return this._id;
        },
        // set
        set: function (v) {
            this._id = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "ten", {
        //get
        get: function () {
            return this._ten;
        },
        // set
        set: function (v) {
            this._mota = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "mota", {
        //get
        get: function () {
            return this._mota;
        },
        // set
        set: function (v) {
            this._mota = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "gia", {
        //get
        get: function () {
            return this._gia;
        },
        // set
        set: function (v) {
            this._gia = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "tinhtrang", {
        //get
        get: function () {
            return this._tinhtrang;
        },
        // set
        set: function (v) {
            this._tinhtrang = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "anh", {
        //get
        get: function () {
            return this._anh;
        },
        // set
        set: function (v) {
            this._anh = v;
        },
        enumerable: false,
        configurable: true
    });
    return SanPham;
}());
exports.SanPham = SanPham;
