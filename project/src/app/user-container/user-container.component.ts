import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Users } from '../users';
import { UsersService } from '../users.service';
import AddDialogComponent from './add-dialog/add-dialog.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
  
})
export class UserContainerComponent implements OnInit {


  public allUsers: Users[]=[];
  
  constructor (private usersService: UsersService,public dialog: MatDialog ){}
  

  ngOnInit(): void {
    this.getAllUsers();
    
  }

  public getAllUsers(): void {
    this.usersService.getUsers().subscribe({
     next: (v: Users[]) => this.allUsers= v,
     error:  (e: HttpErrorResponse) => alert(e.message)
    }
    );
  }
  


  openDialog(user: Users): void {
    console.log(user.port);
    const dialogRef = this.dialog.open( DialogComponent, { width: '600px' ,
    data: { selectedUser: user
    }
  });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllUsers();
    });
  }

  openDeleteDialog(user: Users): void {
    const dialogRef = this.dialog.open( DeleteDialogComponent, { width: '400px' ,
    data: { selectedUser: user}});
    dialogRef.afterClosed().subscribe(result => {
      this.getAllUsers();
    });
  }

  openAddDialog(): void{
    const dialogRef = this.dialog.open( AddDialogComponent, { width: '600px' , data:{ add: "add"} });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllUsers();
    });
  }

  openPasswordDialog(id: number): void {
    const dialogRef = this.dialog.open( ChangePwdComponent, { width: '600px' ,
    data: { id: id
    }});
  }
}
