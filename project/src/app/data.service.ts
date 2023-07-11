import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getVoit(search: any): Observable<string[][]>{
    return this.http.post<string[][]>(`${this.apiServerUrl}/Data/Voit`,{"annee":search.annee,"port":search.port,"sens":search.sens});
  }

public getCont(search: any): Observable<string[][]>{
  return this.http.post<string[][]>(`${this.apiServerUrl}/Data/Cont`,{"date1":search.date1,"date2":search.date2,"port":search.port,"sens":search.sens})

}
   
public getVrac(search: any): Observable<string[][]>{
  console.log(search.port)
  return this.http.post<string[][]>(`${this.apiServerUrl}/Data/Vrac`,{"date1":search.date1,"date2":search.date2,"port":search.port,"sens":search.sens})
}
}