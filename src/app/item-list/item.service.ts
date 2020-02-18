import {Item} from './item';

export class ItemService{

private items : Item[] = [
  {id:1,name:'Item 1', detail: 'Details for Item 1'},
  {id:2,name:'Item 2', detail: 'Details for Item 2'},
  {id:3,name:'Item 3', detail: 'Details for Item 3'},
  {id:4,name:'Item 4', detail: 'Details for Item 4'},
  {id:5,name:'Item 5', detail: 'Details for Item 5'},
  {id:6,name:'Item 6', detail: 'Details for Item 6'},

];

constructor(
){}

getItems(){
    return this.items;
}
}