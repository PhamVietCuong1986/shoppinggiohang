import { SanPham } from './sanpham';

export class QuanLyHang {
    private hang : SanPham[] = [];// dung de hung du lieu tu API

    constructor() {
        // vi khong co , khong dung PHP nen tao sp thu cong
        var sanpham1 = new SanPham(1,"Op Iphone","san pham op den tu Nhat Ban Lorem",40000,true,"/images/1.jpg")
        this.addSanPham(sanpham1); // dung ham goi sanpham1 de lay vao du lieu mang {hang}

        var sanpham2 = new SanPham(2,"Op SamSung","san pham op den tu han quoc Lorem",40000,true,"/images/2.jpg")
        this.addSanPham(sanpham2);  

        var sanpham3 = new SanPham(3,"Op Android","san pham op den tu Apple Lorem",200000,true,"/images/2.jpg")
        this.addSanPham(sanpham3);  
        
    }

    getCacSanPham() : SanPham[]{
            return [];
        }
    getSanPhamById() : SanPham {
            var motSanPham = new SanPham(1,"sp1","mo ta",9000,true,"images/1.jpg");
            return motSanPham
        }
        // dug de day du lieu hung tu API
        //dua du lieu vao trong mang {hang} khai bao private tren
    
    addSanPham(sp:SanPham) : void {
        // this.hang.push(sp);// cach 1
        // cach 2 
        this.hang[this.hang.length] = sp;
        console.log(this.hang)
    };

    showSanPham() : String {
            return " ";
        }   
}