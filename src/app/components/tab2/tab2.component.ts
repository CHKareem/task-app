import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css'],
})
export class Tab2Component implements OnInit {

  attrVal:any='';
   buttonsLink: any[] = [
  {
    date:'2021-8-1',icon:'description',ul:'/tab3'
  },
  {
    date:'2021-8-2',icon:'description',ul:'/tab2'
  },
  {
    date:'2021-8-3',icon:'description',ul:'/tab3'
  },
  {
    date:'2021-8-4',icon:'description',ul:'/tab2'
  },
  {
    date:'2021-8-5',icon:'description',ul:''
  },
  {
    date:'2021-8-6',icon:'description',ul:''
  },
  {
    date:'2021-8-7',icon:'description',ul:''
  },
  {
    date:'2021-8-8',icon:'description',ul:''
  },
  {
    date:'2021-8-9',icon:'description',ul:''
  },
  {
    date:'2021-8-10',icon:'description',ul:'/tab2'
  }];

  years:any[]=[
    {
      value:'2021Y-0',viewValue:'2021Y'
    },
    {
      value:'2020Y-1',viewValue:'2020Y'
    },
    {
      value:'2019Y-2',viewValue:'2019Y'
    }
  ];

  months:any[]=[
    {
      value:'AUG-0',viewValue:'AUG'
    },
    {
      value:'SEP-1',viewValue:'SEP'
    },
    {
      value:'OCT-2',viewValue:'OCT'
    }
  ];

  setVal(e:number){
    //this.attrVal = this.buttonsLink.map(t=> t.ul);
   this.attrVal = document.getElementsByClassName('data')[e].getAttribute("data-id");
   document.getElementsByClassName("objs")[0].setAttribute("data",this.attrVal);
  // this.attrVal= document.getElementsByClassName("objs")[0].getAttribute("data");
}

  constructor() { 

  }

  ngOnInit() {
    
  }

}
