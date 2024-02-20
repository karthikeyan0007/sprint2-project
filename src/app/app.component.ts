import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShopownerService } from './shopowner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopowner-module';
constructor(private shopownerService: ShopownerService){
  this.getShopownerDetails();
}

  register(registerForm: NgForm){
    this.shopownerService.registerShopowner(registerForm.value).subscribe(
      (resp: any)=>{
        console.log(resp);
        registerForm.reset();
        this.getShopownerDetails();

      },(err: any)=>{
        console.log(err);
      }
    );
  }

  getShopownerDetails(){
    this.shopownerService.getShopowner().subscribe(
      (resp)=>{
        console.log(resp);
        this.shopownerDetails=resp;
      }, (err)=>{
        console.log(err);
      }
    );
  }

  shopownerDetails= null as any;

  deleteShopowner(shopowner: any){
    this.shopownerService.deleteShopowner(shopowner.sid).subscribe(
      (resp)=>{
        console.log(resp);
        this.getShopownerDetails();
      },(err)=>{
        console.log(err);
      }
    );
  }
 
  shopownerToUpdate={
    sid: "",
    shop_name: "",
    owner_name: "",
    ph_number:"",
    pwd:""
  };

  edit(shopowner: any){
    this.shopownerToUpdate=shopowner;
  }
  updateShopowner(){
    this.shopownerService.updateShopowner(this.shopownerToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{
        console.log(err);
      }
    );
  }
  
}
