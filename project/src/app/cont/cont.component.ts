import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { NativeDateAdapter, MatDateFormats } from '@angular/material/core';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { DatePipe } from '@angular/common';



export class AppDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
if (displayFormat === 'input') {
let day: string = date.getDate().toString();
day = +day < 10 ? '0' + day : day;
let month: string = (date.getMonth() + 1).toString();
month = +month < 10 ? '0' + month : month;
let year = date.getFullYear();
return `${day}-${month}-${year}`;
}
return date.toDateString();
}}

export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
   dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
 },
 display: {
   dateInput: 'input',
   monthYearLabel: { year: 'numeric', month: 'numeric' },
   dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric'
   },
   monthYearA11yLabel: { year: 'numeric', month: 'long' },
 }
};

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
  
})
export class ContComponent  {

  constructor(public dataService: DataService) { }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  date1!: string;
  date2!: string;
  selected=""+1;
  sens="I";
  tab!: string[][];
  searched:boolean=false;
  error: boolean=false;
 
  public onClickSubmit(search: any){
    console.log("joke");
    if ((this.range.controls.start!=null)&&(this.range.controls.end!=null)){
      
      this.date1=this.range.value.start?.getDay()+"/"+this.range.value.start?.getMonth()+"/"+this.range.value.start?.getFullYear();
      this.date2=this.range.value.end?.getDay()+"/"+this.range.value.end?.getMonth()+"/"+this.range.value.end?.getFullYear();
     
      this.dataService.getCont({"date1":this.date1,"date2":this.date2,"port":search.port,"sens":search.sens}).subscribe({
        next: (res: any)=>{this.tab=res;this.searched=true;this.error=false},
        error: (res: any) => {this.error=true}
      })
    }
    else{this.error=true}
  }

}
