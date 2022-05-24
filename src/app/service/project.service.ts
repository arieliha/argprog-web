import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { Project } from '../Project';
import { Observable, ObservedValueOf, of } from 'rxjs';

const httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/project'
  constructor(
    private http: HttpClient

  ) { }

  getProjects(): Observable<Project[]>{
    // const tasks = of(TASKS);
    const url = `${this.apiUrl}/traer`    
    return this.http.get<Project[]>(url)
  }

  deleteProject(pr: Project): Observable<Project>{
    const url = `${this.apiUrl}/borrar/${pr.id}`
    return this.http.delete<Project>(url)
  }

  updateProject (pr: Project): Observable<Project> {
    const url = `${this.apiUrl}/editar/${pr.id}`
    return this.http.put<Project>(url, pr, httpOptions)

  }
  addProject(pr: Project): Observable<Project>{
    const url = `${this.apiUrl}/crear`
    return this.http.post<Project>(url, pr, httpOptions)
  }
}