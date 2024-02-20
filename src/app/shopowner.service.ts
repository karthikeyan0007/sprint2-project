import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopownerService {
  API="http://localhost:8080";
  public registerShopowner(shopownerData: any){
    return this.http.post(this.API + '/registerShopowner' , shopownerData);
  }

  public getShopowner(){
    return this.http.get(this.API+'/getShopowner');
  }

  public deleteShopowner(sid:any){
    return this.http.delete(this.API+'/deleteShopowner?sid=' +sid);
  }

  public updateShopowner(shopowner: any){
    return this.http.put(this.API +'/updateShopowner', shopowner);
  }
  constructor(private http: HttpClient) { }
}
