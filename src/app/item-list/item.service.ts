import {Item} from './item';

export class ItemService{

private items : Item[] = [
  {id:1,name:'Item 1', detail: 'Details for Item 1',price:3000},
  {id:2,name:'Item 2', detail: 'Details for Item 2',price:4000},
  {id:3,name:'Item 3', detail: 'Details for Item 3',price:5000},
  {id:4,name:'Item 4', detail: 'Details for Item 4',price:6000},
  {id:5,name:'Item 5', detail: 'Details for Item 5',price:7000},
  {id:6,name:'Item 6', detail: 'Details for Item 6',price:8000},

];

constructor(
){}

getItems(){
    return this.items;
}
}