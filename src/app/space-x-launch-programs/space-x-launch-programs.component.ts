import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-space-x-launch-programs',
  templateUrl: './space-x-launch-programs.component.html',
  styleUrls: ['./space-x-launch-programs.component.css'],
})
export class SpaceXLaunchProgramsComponent implements OnInit {
  yearSelected:any="";
  launchSelected:any="";
  landSelected:any="";

  yearArray = [
    {year:'2006',active:false},
    {year:'2007',active:false},
    {year:'2008',active:false},
    {year:'2009',active:false},
    {year:'2010',active:false},
    {year:'2011',active:false},
    {year:'2012',active:false},
    {year:'2013',active:false},
    {year:'2014',active:false},
    {year:'2015',active:false},
    {year:'2016',active:false},
    {year:'2017',active:false},
    {year:'2018',active:false},
    {year:'2019',active:false},
    {year:'2020',active:false}
  ];

  launchArray = [
    {value:'True',active:false},
    {value:'false',active:false}
  ];

  landArray = [
    {value:'True',active:false},
    {value:'false',active:false}
  ]

  launchDetailArray: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://api.spaceXdata.com/v3/launches?limit=12')
      .subscribe((response) => {
        this.launchDetailArray = response;
        console.log(this.launchDetailArray);
      });
  }

  yearSelect(item: any){
    this.yearSelected="";
    if(!item.active){
      this.yearSelected=item.year
      this.yearArray.forEach(element=>{
        element.active=false;
      })
    }
    let index=this.yearArray.indexOf(item);
    item.active=!item.active;
    this.yearArray.splice(index,1,item);
    this.updateData();
  }

  launchSelect(item: any){
    this.launchSelected="";
    if(!item.active){
      this.launchSelected=item.value
      this.launchArray.forEach(element=>{
        element.active=false;
      })
    }
    let index=this.launchArray.indexOf(item);
    item.active=!item.active;
    this.launchArray.splice(index,1,item);
    this.updateData();
  }

  landSelect(item: any){
    this.landSelected="";
    if(!item.active){
      this.landSelected=item.value
      this.landArray.forEach(element=>{
        element.active=false;
      })
    }
    let index=this.landArray.indexOf(item);
    item.active=!item.active;
    this.landArray.splice(index,1,item);
    this.updateData();
  }

  updateData(){
    if(this.yearSelected!="" && this.launchSelected!="" && this.landSelected!=""){
      this.http
      .get(`https://api.spaceXdata.com/v3/launches?limit=12&launch_success=${this.launchSelected}&land_success=${this.landSelected}&launch_year=${this.yearSelected}`)
      .subscribe((response) => {
        this.launchDetailArray = response;
        console.log(this.launchDetailArray);
      });

    }
    else if(this.yearSelected!="" && this.launchSelected!="" && this.landSelected==""){
      this.http
      .get(`https://api.spaceXdata.com/v3/launches?limit=12&launch_success=${this.launchSelected}&launch_year=${this.yearSelected}`)
      .subscribe((response) => {
        this.launchDetailArray = response;
        console.log(this.launchDetailArray);
      });
      
    }
    else if(this.yearSelected!="" && this.launchSelected=="" && this.landSelected!=""){
      this.http
      .get(`https://api.spaceXdata.com/v3/launches?limit=12&land_success=${this.landSelected}&launch_year=${this.yearSelected}`)
      .subscribe((response) => {
        this.launchDetailArray = response;
        console.log(this.launchDetailArray);
      });
      
    }
    else if(this.yearSelected=="" && this.launchSelected!="" && this.landSelected!=""){
      this.http
      .get(`https://api.spaceXdata.com/v3/launches?limit=12&launch_success=${this.launchSelected}&land_success=${this.landSelected}`)
      .subscribe((response) => {
        this.launchDetailArray = response;
        console.log(this.launchDetailArray);
      });
      
    }
    else if(this.yearSelected!="" && this.launchSelected=="" && this.landSelected==""){
      this.http
      .get(`https://api.spaceXdata.com/v3/launches?limit=12&launch_year=${this.yearSelected}`)
      .subscribe((response) => {
        this.launchDetailArray = response;
        console.log(this.launchDetailArray);
      });
      
    }
    else if(this.yearSelected=="" && this.launchSelected!="" && this.landSelected==""){
      this.http
      .get(`https://api.spaceXdata.com/v3/launches?limit=12&launch_success=${this.launchSelected}`)
      .subscribe((response) => {
        this.launchDetailArray = response;
        console.log(this.launchDetailArray);
      });
      
    }
    else if(this.yearSelected=="" && this.launchSelected=="" && this.landSelected!=""){
      this.http
      .get(`https://api.spaceXdata.com/v3/launches?limit=12&land_success=${this.landSelected}`)
      .subscribe((response) => {
        this.launchDetailArray = response;
        console.log(this.launchDetailArray);
      });
    }
    else if(this.yearSelected=="" && this.launchSelected=="" && this.landSelected==""){
      this.http
      .get('https://api.spaceXdata.com/v3/launches?limit=12')
      .subscribe((response) => {
        this.launchDetailArray = response;
        console.log(this.launchDetailArray);
      });      
    }
  }

}
