import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css']
})
export class Tab3Component implements OnInit {

  attrVal:any= '';
  buttonsLink = [
    {
      date:'2021-8-1',icon:'description',color:'orange',status:'processing',datetime:'2021-8-1  12:00',ul:'/tab3'
    },
    {
      date:'2021-8-2',icon:'description',color:'orange',status:'processing',datetime:'2021-8-2  13:00',ul:'/tab2'
    },
    {
      date:'2021-8-3',icon:'description',color:'green',status:'accept',datetime:'2021-8-3  14:00',ul:''
    },
    {
      date:'2021-8-4',icon:'description',color:'green',status:'accept',datetime:'2021-8-4  15:00',ul:''
    },
    {
      date:'2021-8-5',icon:'description',color:'orange',status:'processing',datetime:'2021-8-5  16:00',ul:''
    },
    {
      date:'2021-8-6',icon:'description',color:'green',status:'accept',datetime:'2021-8-6  17:00',ul:''
    },
    {
      date:'2021-8-7',icon:'description',color:'orange',status:'processing',datetime:'2021-8-7  18:00',ul:''
    },
    {
      date:'2021-8-8',icon:'description',color:'green',status:'accept',datetime:'2021-8-8  19:00',ul:''
    },
    {
      date:'2021-8-9',icon:'description',color:'orange',status:'processing',datetime:'2021-8-9  20:00',ul:''
    },
    {
      date:'2021-8-10',icon:'description',color:'orange',status:'processing',datetime:'2021-8-10  11:00',ul:''
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

      setVal(e:number){
        //this.attrVal = this.buttonsLink.map(t=> t.ul);
       this.attrVal = document.getElementsByClassName('data')[e].getAttribute("data-id");
       document.getElementsByClassName("objs")[0].setAttribute("data",this.attrVal);
      // this.attrVal= document.getElementsByClassName("objs")[0].getAttribute("data");
  }
  constructor() { }

  ngOnInit() {
  }

}