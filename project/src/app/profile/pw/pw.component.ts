import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-pw',
  templateUrl: './pw.component.html',
  styleUrls: ['./pw.component.css']
})
export class PwComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PwComponent>,private usersService:UsersService, private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  public closeDialog(){this.dialogRef.close()}

    public changePw(pws:any){
      if(pws.newPassword==pws.newPasswordConfirm)
      {
        this.usersService.changePw(pws.oldPassword,pws.newPassword).subscribe({
          next: (res:any) => this.closeDialog(), 
          error: (res:any) =>this._snackBar.open("mot de passe incorrect!")._dismissAfter(3000)
        })
      }else
      {
        this._snackBar.open("Confirmer nouvelle mot de passe!")._dismissAfter(3000);
      }
    }
}
