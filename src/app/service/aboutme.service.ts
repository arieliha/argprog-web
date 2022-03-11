import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { AboutMe } from '../AboutMe';
import { Observable, ObservedValueOf, of } from 'rxjs';

const httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  private apiUrl = 'http://localhost:8080/aboutme'
  constructor(
    private http: HttpClient

  ) { }

  getAboutMe(): Observable<AboutMe[]>{
    // const tasks = of(TASKS);
    const url = `${this.apiUrl}/traer`    
    return this.http.get<AboutMe[]>(url)
  }

  deleteAboutMe(aboutme: AboutMe): Observable<AboutMe>{
    const url = `${this.apiUrl}/borrar/${aboutme.id}`
    return this.http.delete<AboutMe>(url)
  }

  updateAboutme (aboutme: AboutMe): Observable<AboutMe> {
    const url = `${this.apiUrl}/${aboutme.id}`
    return this.http.put<AboutMe>(url, aboutme, httpOptions)

  }
  addAboutMe(aboutme: AboutMe): Observable<AboutMe>{
    const url = `${this.apiUrl}/crear`
    return this.http.post<AboutMe>(url, aboutme, httpOptions)
  }
}

