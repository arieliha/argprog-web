import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { Education } from '../Education';
import { Observable, ObservedValueOf, of } from 'rxjs';

const httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = 'https://protected-forest-18948.herokuapp.com/education'
  constructor(
    private http: HttpClient

  ) { }

  getEducation(): Observable<Education[]>{
    // const tasks = of(TASKS);
    const url = `${this.apiUrl}/traer`    
    return this.http.get<Education[]>(url)
  }

  deleteEducation(education: Education): Observable<Education>{
    const url = `${this.apiUrl}/borrar/${education.id}`
    return this.http.delete<Education>(url)
  }

  updateEducation (education: Education): Observable<Education> {
    const url = `${this.apiUrl}/editar/${education.id}`
    return this.http.put<Education>(url, education, httpOptions)

  }
  addEducation(education: Education): Observable<Education>{
    const url = `${this.apiUrl}/crear`
    return this.http.post<Education>(url, education, httpOptions)
  }
}