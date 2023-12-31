import { Component, OnInit } from '@angular/core';
//import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-view-product-details-category',
  templateUrl: './view-product-details-category.component.html',
  styleUrls: ['./view-product-details-category.component.scss']
})
export class ViewProductDetailsCategoryComponent implements OnInit {
  topdealsbycategory:any;
  cart: any;
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.getTopDealsByCategory()
  }

  getTopDealsByCategory(){
     this.http.getDetailsFromServer('top-deals-by-category').subscribe((response:any)=>{
      if(response && response.length > 0){
        this.topdealsbycategory = response ;
      }
     })
  }

  addToCart(product:any){
    this.cart.addSelectItemToCart(product);
   }
}