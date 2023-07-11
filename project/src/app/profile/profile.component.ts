import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../authentication.service';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { PwComponent } from './pw/pw.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public mode: boolean=false;
  public user: Users= <Users>{};
  constructor(public authenticationService:AuthenticationService, public usersService: UsersService, private _snackBar:MatSnackBar,public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.authenticationService.getCurrentUser();
  }

  public onClickSubmit(user: Users){
    user.id=this.authenticationService.currentUser.id;
    this.usersService.updateCurrentUser(user).subscribe({
      next: (res: any) => {this.authenticationService.login(user.username,user.password).subscribe({
        next: (res:any) => {this._snackBar.open("succes")._dismissAfter(3000); this.mode=false;}, 
        error: (e:Error) => this._snackBar.open(e.message)._dismissAfter(3000)}) },
      error: (res:any) => this._snackBar.open("Mot de passe incorrecte ou nom d'utilisateur existant")._dismissAfter(3000)
    })
  
  }

  passwordDialog(): void {
    const dialogRef = this.dialog.open( PwComponent, { width: '600px' ,
    data: { username: this.authenticationService.currentUser.username
    }});
  }

}
