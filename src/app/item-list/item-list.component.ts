import {Component, OnInit} from '@angular/core';
import {ItemService} from './item.service';
import {Item} from './item';


@Component({
  selector: 'app-item-list',
  templateUrl : './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ItemService]
})

export class ItemListComponent implements OnInit {
  items : Item [];

  selectedItem : Item;

  constructor(private service: ItemService){}

  ngOnInit(){
    this.items = this.service.getItems();
  }

  selectItem(item : Item){
    this.selectedItem = item;
    // Add clicked date
    this.selectedItem.date=new Date();
    
  }

  incrPrice(){
    this.selectedItem.price=this.selectedItem.price+100;
  }
  decrPrice(){
    this.selectedItem.price=this.selectedItem.price-100;
  }

}