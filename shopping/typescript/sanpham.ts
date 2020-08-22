export class SanPham {
    private _id: number;
    private _ten: string;
    private _mota: string;
    private _gia: number;
    private _tinhtrang: boolean;
    private _anh: string;

    
    //get
    
    public get id() : number {
        return this._id;
    }
    // set
    
    public set id(v : number) {
        this._id= v;
    }
     //get
    
     public get ten() : string {
        return this._ten;
    }
    // set
    
    public set ten(v : string) {
        this._mota= v;
    }
    //get
    
    public get mota() : string {
        return this._mota;
    }
    // set
    
    public set mota(v : string) {
        this._mota= v;
    }
    //get
    
    public get gia() : number {
        return this._gia;
    }
    // set
    
    public set gia(v : number) {
        this._gia= v;
    }
    //get
    
    public get tinhtrang() : boolean {
        return this._tinhtrang;
    }
    // set
    
    public set tinhtrang(v : boolean) {
        this._tinhtrang= v;
    }
    //get
    
    public get anh() : string {
        return this._anh;
    }
    // set
    
    public set anh(v : string) {
        this._anh= v;
    }

    constructor(id:number,ten:string,mota:string,gia:number,tinhtrang:boolean,anh:string) {
        this.id = id;
        this.ten = ten;
        this.mota = mota;
        this.gia = gia;
        this.tinhtrang = tinhtrang;
        this.anh = anh;
    }

    
}