import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from 'src/app/users';
import { UsersService } from 'src/app/users.service';
import { DialogComponent } from '../dialog/dialog.component';




@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export default class AddDialogComponent {

  constructor(private usersService: UsersService,
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClickSubmit(user :Users){
    user.role= + user.role;
    user.enabled= + user.enabled;
    this.usersService.addUsers(user).subscribe(() => console.log("user added"));
    this.dialogRef.close();
  }

}
