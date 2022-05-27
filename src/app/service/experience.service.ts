import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { Experience } from '../Experience';
import { Observable, ObservedValueOf, of } from 'rxjs';

const httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = 'https://protected-forest-18948.herokuapp.com/experience'
  constructor(
    private http: HttpClient

  ) { }

  getExperience(): Observable<Experience[]>{
    // const tasks = of(TASKS);
    const url = `${this.apiUrl}/traer`    
    return this.http.get<Experience[]>(url)
  }

  deleteExperience(exp: Experience): Observable<Experience>{
    const url = `${this.apiUrl}/borrar/${exp.id}`
    return this.http.delete<Experience>(url)
  }

  updateExperience (exp: Experience): Observable<Experience> {
    const url = `${this.apiUrl}/editar/${exp.id}`
    return this.http.put<Experience>(url, exp, httpOptions)

  }
  addExperience(exp: Experience): Observable<Experience>{
    const url = `${this.apiUrl}/crear`
    return this.http.post<Experience>(url, exp, httpOptions)
  }
}