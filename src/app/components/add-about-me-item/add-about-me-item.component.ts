import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AboutMe } from '../../AboutMe';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-about-me-item',
  templateUrl: './add-about-me-item.component.html',
  styleUrls: ['./add-about-me-item.component.css']
})


export class AddAboutMeItemComponent implements OnInit {

  public model: AboutMe;
  public isupdate: boolean = false;
  faPencilAlt = faPencilAlt;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  @Input() aboutme: AboutMe;
  @Input() final: number;
  @Input() begin: number;
  // @Input() isupdate: boolean;
  @Output() onDeleteAboutMe: EventEmitter<AboutMe> = new EventEmitter();
  @Output() onUpdateAboutMe: EventEmitter<AboutMe> = new EventEmitter();
  @Output() onArrowUp: EventEmitter<AboutMe> = new EventEmitter();
  @Output() onArrowDown: EventEmitter<AboutMe> = new EventEmitter();

  faTimes = faTimes;
  faCheckSquare = faCheckSquare;
  constructor() { }

  ngOnInit(): void {

    this.model = this.aboutme;
    
  
  }

  onUpdate() {

    this.isupdate = !this.isupdate;
  }
  onDelete(){
      this.onDeleteAboutMe.emit(this.model);

  }
  
  onUp(){
    this.onArrowUp.emit(this.model);

  }
  
  onDown(){
    this.onArrowDown.emit(this.model);

  }

  onSubmit(){
    this.isupdate = false;
    this.onUpdateAboutMe.emit(this.model);
    

}

}
