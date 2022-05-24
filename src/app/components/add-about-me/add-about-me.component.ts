import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AboutMe } from '../../AboutMe';
import { UiService } from '../../service/ui.service';

@Component({
  selector: 'add-about-me',
  templateUrl: './add-about-me.component.html',
  styleUrls: ['./add-about-me.component.css']
})
export class AddAboutMeComponent implements OnInit {
  @Output() onAddAboutMe: EventEmitter<AboutMe> = new EventEmitter();
  id: number = 0;
  title: string = "";
  description: string = "";
  order_about_me: number = 0;
  subscription: Subscription;
  showAddAboutMe = true;
  constructor(

    private uiService: UiService

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
    
    if(this.description.length === 0){
      alert("Por favor agrega una descripción");
      return
    }
    const {id, title, description, order_about_me} = this
    const newAboutMe = {id, title, description, order_about_me}

    this.onAddAboutMe.emit(newAboutMe);
    this.resetForm();

    
  }
resetForm() {
  
  this.title = "";
  this.description = "";  
}
}
