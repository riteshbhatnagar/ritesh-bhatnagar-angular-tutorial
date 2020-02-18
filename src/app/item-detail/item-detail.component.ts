import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent  {

  @Input("selectedItem") item;
  private _price :number;

  @Input("id")
  set price(price:number){
    this._price = price*100;
  }
  get price():number{
      return this._price;
  }
}