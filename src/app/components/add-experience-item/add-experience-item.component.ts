import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experience } from '../../Experience';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-experience-item',
  templateUrl: './add-experience-item.component.html',
  styleUrls: ['./add-experience-item.component.css']
})


export class AddExperienceItemComponent implements OnInit {

  public model: Experience;
  public isupdate: boolean = false;
  faPencilAlt = faPencilAlt;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  @Input() experience: Experience;
  @Input() final: number;
  @Input() begin: number;
  // @Input() isupdate: boolean;
  @Output() onDeleteExperience: EventEmitter<Experience> = new EventEmitter();
  @Output() onUpdateExperience: EventEmitter<Experience> = new EventEmitter();
  @Output() onArrowUp: EventEmitter<Experience> = new EventEmitter();
  @Output() onArrowDown: EventEmitter<Experience> = new EventEmitter();

  faTimes = faTimes;
  faCheckSquare = faCheckSquare;
  constructor() { }

  ngOnInit(): void {

    this.model = this.experience;
    
  
  }

  onUpdate() {

    this.isupdate = !this.isupdate;
  }
  onDelete(){
      this.onDeleteExperience.emit(this.model);
  }
  
  onUp(){
    this.onArrowUp.emit(this.model);
  }
  
  onDown(){
    this.onArrowDown.emit(this.model);
  }

  onSubmit(){
    this.isupdate = false;
    this.onUpdateExperience.emit(this.model);
    
}

}
