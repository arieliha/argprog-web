import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AboutMe } from '../../AboutMe';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me-item',
  templateUrl: './about-me-item.component.html',
  styleUrls: ['./about-me-item.component.css']
})


export class AboutMeItemComponent implements OnInit {

  public model: AboutMe;
  @Input() aboutme: AboutMe;
  @Input() isupdate: boolean;
  @Output() onDeleteAboutMe: EventEmitter<AboutMe> = new EventEmitter();
  @Output() onUpdateAboutMe: EventEmitter<AboutMe> = new EventEmitter();


  faTimes = faTimes;
  faCheckSquare = faCheckSquare;
  constructor() { }

  ngOnInit(): void {

    this.model = this.aboutme;
    
  
  }
  onDelete(ame: AboutMe){
      console.log(ame);
      this.onDeleteAboutMe.emit(ame);

  }

  onSubmit(){
    console.log(this.model);
    this.onUpdateAboutMe.emit(this.model);

}

}
