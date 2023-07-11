import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import { UsersService } from './users.service';
import { MatIcon } from '@angular/material/icon';
import { DialogComponent } from './user-container/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public title = 'project';
  constructor (public dialog: MatDialog, public authentcationService: AuthenticationService,  ){}

  ngOnInit(): void {
    
    this.authentcationService.getCurrentUser().subscribe({
      next: (res: Users) => {this.authentcationService.currentUser=res;
                           this.authentcationService.setAuthenticated()},
      error: (e :any) => {this.authentcationService.currentUser= <Users> {};
      console.log("startup:"+localStorage.getItem('token'));
                            localStorage.setItem('token',"");

    }
    });
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open( DialogComponent, {
      width: '250px',
      data: {empty: ""},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
}



}