import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
//import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/http/http.service';
//import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit {
  topDeals:any[]=[];
  cart: any;
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.getTopDeals();
  }

  getTopDeals(){
    this.http.getDetailsFromServer('top-deals').subscribe((response:any)=>{
      if(response && response.length > 0){
        this.topDeals = response;
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  addToCart(product:any){
   this.cart.addSelectItemToCart(product);
  }
}
