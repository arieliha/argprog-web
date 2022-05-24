import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../Project';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-project-item',
  templateUrl: './add-project-item.component.html',
  styleUrls: ['./add-project-item.component.css']
})


export class AddProjectItemComponent implements OnInit {

  public model: Project;
  public isupdate: boolean = false;
  faPencilAlt = faPencilAlt;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  @Input() project: Project;
  @Input() final: number;
  @Input() begin: number;
  // @Input() isupdate: boolean;
  @Output() onDeleteProject: EventEmitter<Project> = new EventEmitter();
  @Output() onUpdateProject: EventEmitter<Project> = new EventEmitter();
  @Output() onArrowUp: EventEmitter<Project> = new EventEmitter();
  @Output() onArrowDown: EventEmitter<Project> = new EventEmitter();

  faTimes = faTimes;
  faCheckSquare = faCheckSquare;
  constructor() { }

  ngOnInit(): void {

    this.model = this.project;
    
  
  }

  onUpdate() {

    this.isupdate = !this.isupdate;
  }
  onDelete(){
      this.onDeleteProject.emit(this.model);
  }
  
  onUp(){
    this.onArrowUp.emit(this.model);
  }
  
  onDown(){
    this.onArrowDown.emit(this.model);
  }

  onSubmit(){
    this.isupdate = false;
    this.onUpdateProject.emit(this.model);
    
}

}
