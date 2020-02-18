import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent  {

  @Input("selectedItemDetail") itemDetail;
   private _price :number;

  @Input()
  set price(price:number){
    this._price = price*100;
  }
  get price():number{
      return this._price;
  }
  changeLog: string[]  = [];
  ngOnChanges(priceChange : {[key : string] : SimpleChange}){
    let diff: string[] = [];
    for(let val in priceChange){
      console.log(val, priceChange[val]);
      if(val==="price" && !priceChange[val].isFirstChange()){
      let newPrice = JSON.stringify(priceChange[val].currentValue);
      let oldPrice = JSON.stringify(priceChange[val].previousValue);
      diff.push(`${val} changed from ${oldPrice} to ${newPrice}` );
      }
    }
    this.changeLog.push(diff.join(', '));
  };
}