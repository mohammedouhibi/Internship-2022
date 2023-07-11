import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { UserContainerComponent } from './user-container/user-container.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DialogComponent } from './user-container/dialog/dialog.component';

import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { DeleteDialogComponent } from './user-container/delete-dialog/delete-dialog.component';
import { Router , RouterModule, Routes } from '@angular/router';
import AddDialogComponent from './user-container/add-dialog/add-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './auth.interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PwComponent } from './profile/pw/pw.component';
import { VoitComponent } from './voit/voit.component';
import { ContComponent } from './cont/cont.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { VracComponent } from './vrac/vrac.component';
import { ChangePwdComponent } from './user-container/change-pwd/change-pwd.component';


const appRoutes: Routes= [
  {path: 'Admin', component:UserContainerComponent },
  {path: 'Profile', component:ProfileComponent },
  {path: 'Data/Voit', component:VoitComponent },
  {path: 'Data/Cont', component:ContComponent },
  {path: 'Data/Vrac', component:VracComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    NavbarComponent,
    SidebarComponent,
    DialogComponent,
    DeleteDialogComponent,
    AddDialogComponent,
    LoginComponent,
    ProfileComponent,
    PwComponent,
    VoitComponent,
    ContComponent,
    VracComponent,
    ChangePwdComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent,
    UserContainerComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  entryComponents: [
    DialogComponent

  ]
})
export class AppModule { }
