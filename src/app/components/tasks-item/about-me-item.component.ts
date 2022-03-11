import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AboutMe } from '../../AboutMe';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me-item',
  templateUrl: './about-me-item.component.html',
  styleUrls: ['./about-me-item.component.css']
})
export class AboutMeItemComponent implements OnInit {

  @Input() aboutme: AboutMe;
  @Output() onDeleteAboutMe: EventEmitter<AboutMe> = new EventEmitter();

  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(ame: AboutMe){
      console.log(ame);
      this.onDeleteAboutMe.emit(ame);

  }

}
