import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from 'src/app/users';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';



export interface DialogData {
  selectedUser:Users;
}

 
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {

  
 
  constructor(private router: Router,
    private usersService: UsersService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  selected="" + this.data.selectedUser.port;
  default=''+this.data.selectedUser.port;
  onNoClick(): void {
    this.dialogRef.close();
  }
  role=this.data.selectedUser.role==1;
  enabled=this.data.selectedUser.enabled==1;
  
  onClickSubmit(updated :Users){
    updated.role= + updated.role;
    updated.enabled= + updated.enabled;
    console.log(this.selected);
    console.log(updated.port);
    this.usersService.updateUsers(updated).subscribe(() => console.log("user updated"));
    this.dialogRef.close();

    
  }

}
