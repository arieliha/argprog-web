import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../../Project';
// import { UiService } from '../../service/ui.service';

@Component({
  selector: 'add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  @Output() onAddProject: EventEmitter<Project> = new EventEmitter();
  id: number = 0;
  title: string = "";
  date: string = "";
  description: string = "";
  link: string = "";
  order_project: number = 0;
  subscription: Subscription;
  showAddProject = true;
  constructor(

    // private uiService: UiService

  ) { 

    // this.subscription = this.uiService.onToggle().subscribe(value => {this.showAddAboutMe = value})
  }

  ngOnInit(): void {
  }

  onSubmit(){
    

    if(this.title.length === 0){
      alert("Por favor agrega un título");
      return
    }

    if(this.date.length === 0){
      alert("Por favor agrega una fecha");
      return
    }
    
    if(this.description.length === 0){
      alert("Por favor agrega una descripción");
      return
    }
    
    if(this.link.length === 0){
      alert("Por favor agrega un enlace");
      return
    }
    const {id, title, date, description, link, order_project} = this
    const newProject = {id, title, date, description, link, order_project}

    this.onAddProject.emit(newProject);
    this.resetForm();

    
  }
resetForm() {
  this.title = "";
  this.date = "";
  this.description = "";
  this.link = "";
 
}
}
