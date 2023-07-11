import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-voit',
  templateUrl: './voit.component.html',
  styleUrls: ['./voit.component.css']
})
export class VoitComponent  {

  constructor(public dataService: DataService) { }
  selected = ""+1;
  sens="I";
  tab!: string[][];
  searched:boolean=false;

  public onClickSubmit(search: any){
    

    if (search.annee>=2020){
      this.dataService.getVoit(search).subscribe({
        next: (res: any)=>{this.tab=res;this.searched=true;},
        error: (res: any) => {}
      })
    }
  }
}
