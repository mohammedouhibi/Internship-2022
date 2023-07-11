import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Users } from '../users';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  
  username!: string;
  password!: string;
  error: boolean=false;
  
    constructor(private elementRef: ElementRef, public authentcationService: AuthenticationService ) {}
    
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = '#eee';
    }

   
 
  login()
  {
    this.authentcationService.login(this.username,this.password).subscribe((result) => {
    
      this.error=false;
    }, () => {
      this.error=true;
    });
  }

  
}
