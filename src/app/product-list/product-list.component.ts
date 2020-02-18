import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  isHidden= true;

  share() {
    window.alert('The product has been shared!');
  }
  getPrice(price, discount){
    return price - (price * (discount/100));
  }

  toggleDesc(product){
    console.log(product);
    if(product.showDesc) {
      product.showDesc = false;
    } else{
      product.showDesc= true;
    }

  }
}
