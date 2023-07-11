import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/users.service';
import { DialogData } from '../dialog/dialog.component';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent  {

  constructor(public dialogRef: MatDialogRef<ChangePwdComponent>,private usersService:UsersService, private _snackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  public closeDialog(){this.dialogRef.close()}

  public changePw(pws: {newPassword:string,newPasswordConfirm:string}): void
  {
    if((pws.newPassword==pws.newPasswordConfirm)&&(pws.newPassword.length>=8)){
    this.usersService.changePwAdmin(pws.newPassword, this.data.id.toString()).subscribe({
      next: (res:any) => this.closeDialog(), 
      error: (res:any) =>this._snackBar.open("mot de passe incorrect!")._dismissAfter(3000)
    })
    } else{
      this._snackBar.open("Confirmer nouvelle mot de passe!")._dismissAfter(3000);
    }
  }

}
