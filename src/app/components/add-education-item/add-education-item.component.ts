import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Education } from '../../Education';


@Component({
  selector: 'app-add-education-item',
  templateUrl: './add-education-item.component.html',
  styleUrls: ['./add-education-item.component.css']
})


export class AddEducationItemComponent implements OnInit {

  public model: Education;
  public isupdate: boolean = false;
  faPencilAlt = faPencilAlt;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  @Input() education: Education;
  @Input() final: number;
  @Input() begin: number;
  // @Input() isupdate: boolean;
  @Output() onDeleteEducation: EventEmitter<Education> = new EventEmitter();
  @Output() onUpdateEducation: EventEmitter<Education> = new EventEmitter();
  @Output() onArrowUp: EventEmitter<Education> = new EventEmitter();
  @Output() onArrowDown: EventEmitter<Education> = new EventEmitter();

  faTimes = faTimes;
  faCheckSquare = faCheckSquare;
  constructor() { }

  ngOnInit(): void {

    this.model = this.education;
    
  
  }

  onUpdate() {

    this.isupdate = !this.isupdate;
  }
  onDelete(){
      this.onDeleteEducation.emit(this.model);

  }
  
  onUp(){
    this.onArrowUp.emit(this.model);

  }
  
  onDown(){
    this.onArrowDown.emit(this.model);

  }

  onSubmit(){
    this.isupdate = false;
    this.onUpdateEducation.emit(this.model);
    

}

}
