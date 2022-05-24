import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Education } from 'src/app/Education';
import { UiService } from '../../service/ui.service';

@Component({
  selector: 'add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  @Output() onAddEducation: EventEmitter<Education> = new EventEmitter();
  id: number = 0;
  title: string = "";
  institute: string = "";
  period: string = "";
  description: string = "";
  order_education: number = 0;
  subscription: Subscription;
  showEducation = true;
  constructor(

    private uiService: UiService

  ) { 

    // this.subscription = this.uiService.onToggle().subscribe(value => {this.showAddAboutMe = value})
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.title.length === 0){
      alert("Por favor agrega un Título");
      return
    }

    if(this.institute.length === 0){
      alert("Por favor agrega un Instituto");
      return
    }
    
    if(this.period.length === 0){
      alert("Por favor agrega un Período");
      return
    }

    if(this.description.length === 0){
      alert("Por favor agrega una Descripción");
      return
    }
    const {id, title, institute, period, description, order_education} = this
    const newEducation = {id, title, institute, period, description, order_education}

    this.onAddEducation.emit(newEducation);
    this.resetForm();

    
  }
resetForm() {
  this.title = "";
  this.institute = "";
  this.period = "";
  this.description = "";  
}
}
