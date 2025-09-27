import { Component, OnInit } from '@angular/core';
import { BeautyService } from '../beauty.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-beauty',
  template: `
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Raleway:wght@600&display=swap" rel="stylesheet">
  
<div class="site-content">
<div id="site">
<div class="row">
<div class="column" *ngFor="let l of list">
<div class="content">
    <div id="products">
    <div class="img">
    <img src={{l.image}} alt="Beauty" class="center"></div>
    <div class="product-description" data-name="beauty" data-price="500">
          <h3 class="product-name">{{l.bname}}</h3>
          <p class="product-price"><b>&#x20B9;{{l.cost}}</b></p>

          <div style="text-align:center;font-family: 'Raleway', sans-serif;">
              <label for="qty-1">Quantity </label>
              <input type="text" name="qty-1" id="qty-1" class="qty" value="1" />
            </div><br>
            <p><a href=""class="button"style=" text-align: center;"[routerLink]="['/cart']" (click)="addToCart(l,l.cost)">Add to cart</a>
            </p>
    </div>

    </div> </div> </div> 
 
    </div> </div>

  `,
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit {

  constructor(private service: BeautyService,private cartService: CartService,private route: ActivatedRoute) { }
list: any=[];
  ngOnInit(): void {
    this.gotBeauty()
  }
gotBeauty(){
  this.service.getBeauty().subscribe((res:any)=>{
    this.list= Object.keys(res).map(e=>res[e])
    console.warn(this.list)
  })
}
addToCart(l,cost) {
  this.cartService.addToCart(l,cost);
  window.alert('Your product has been added to the cart!');
}
}
