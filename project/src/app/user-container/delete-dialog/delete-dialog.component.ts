import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from 'src/app/users';
import { UsersService } from 'src/app/users.service';



export interface DialogData {
  selectedUser:Users;
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  constructor(private usersService: UsersService,
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {console.log(data.selectedUser.username)}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClickSubmit(id: number){
    this.usersService.deleteUsers(id).subscribe(() => console.log("user deleted"));
    this.dialogRef.close();

  }

}
