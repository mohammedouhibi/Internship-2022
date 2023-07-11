import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.apiServerUrl}/Admin/all`);
  }

  public addUsers(user: Users): Observable<Users>{
    return this.http.post<Users>(`${this.apiServerUrl}/Admin/add`,user);
  }

  public updateUsers(user: Users): Observable<Users>{
    return this.http.put<Users>(`${this.apiServerUrl}/Admin/update`,user);
  }

  public deleteUsers(id: number): Observable<void>{
    
    return this.http.delete<void>(`${this.apiServerUrl}/Admin/delete/${id}`);
  }
  public updateCurrentUser(user:Users): Observable<Users>{
    return this.http.post<Users>(`${this.apiServerUrl}/Profile/update`,user);
  }

  public changePw(oldPassword:string,newPassword:string): Observable<void>
  {
    return this.http.post<any>(`${this.apiServerUrl}/Profile/password`,{"oldPassword":oldPassword,"newPassword":newPassword});
  }

  public changePwAdmin(newPassword:string, id:string): Observable<void>{
    console.log("id is:"+id);
    return this.http.post<any>(`${this.apiServerUrl}/Admin/password`,{"newPassword":newPassword,"id":id});
  }
}
