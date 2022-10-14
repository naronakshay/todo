import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'first_project';
  list:any[]=[];
  list1:any[]=[];
   add(item:String,d:any)
    {
      
this.list.push({item});
this.list1.push({d});
console.log(this.list)
console.log(this.list1)

  }
  remove(i:number)
  {
this.list.splice(i,1);
  }


}
