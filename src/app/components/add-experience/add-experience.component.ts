import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experience } from '../../Experience';
// import { UiService } from '../../service/ui.service';

@Component({
  selector: 'add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  @Output() onAddExperience: EventEmitter<Experience> = new EventEmitter();
  id: number = 0;
  
  title: string = "";
  company: string = "";
  period: string = "";
  description: string = "";
  order_experience: number = 0;
  subscription: Subscription;
  showAddExperience = true;
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

    if(this.company.length === 0){
      alert("Por favor agrega una Empresa");
      return
    }
    
    if(this.period.length === 0){
      alert("Por favor agrega un perìodo");
      return
    }
    
    if(this.description.length === 0){
      alert("Por favor agrega una descripción");
      return
    }
    const {id, title, company, period, description, order_experience} = this
    const newExperience = {id, title, company, period, description, order_experience}

    this.onAddExperience.emit(newExperience);
    this.resetForm();

    
  }
resetForm() {
  this.title = "";
  this.company = "";
  this.period = "";
  this.description = "";
 
}
}
