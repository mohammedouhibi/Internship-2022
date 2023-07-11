import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from './users';

interface AuthenticationRequest{
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiServerUrl=environment.apiBaseUrl;
  public currentUser: Users= <Users>{};
  public token:string="";
  public authenticated: boolean = false;



  constructor(private http: HttpClient) { }

  public getCurrentUser(): Observable<Users>
  {
    return this.http.get<Users>(`${this.apiServerUrl}/profile/user`)
  }

  authenticationRequest: AuthenticationRequest={username: "",password: ""};

  login(username: string, password: string) {
    this.authenticationRequest.username=username;
    this.authenticationRequest.password=password;
    localStorage.setItem('token',"");
    
    return this.http.post<AuthenticationRequest>(this.apiServerUrl + `/login`,this.authenticationRequest).pipe(map((res:any) => {
        localStorage.setItem('token',res.jwt);
        this.currentUser=res.user;
        this.setAuthenticated();
      }));
  }

  setAuthenticated(){
    console.log("token is:"+localStorage.getItem('token'));
    if ((localStorage.getItem('token')=="")||(localStorage.getItem('token')==null)){this.authenticated= false} 
    else {this.authenticated= true;}
  }


  public disconnect(){
    this.currentUser= <Users>{};
    localStorage.setItem('token',"");
    this.setAuthenticated();
  }
 
}
