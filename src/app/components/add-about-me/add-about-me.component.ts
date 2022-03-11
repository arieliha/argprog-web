import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AboutMe } from '../../AboutMe';
import { UiService } from '../../service/ui.service';

@Component({
  selector: 'app-add-about-me',
  templateUrl: './add-about-me.component.html',
  styleUrls: ['./add-about-me.component.css']
})
export class AddAboutMeComponent implements OnInit {
  @Output() onAddAboutMe: EventEmitter<AboutMe> = new EventEmitter();
  id: number = 0;
  fullname: string = "";
  title: string = "";
  picfile: string = "";
  description: string = "";
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
    if(this.fullname.length === 0){
      alert("Please add a name!");
      return
    }

    const {id, fullname, title, picfile, description} = this
    const newAboutMe = {id, fullname, title, picfile, description}

    this.onAddAboutMe.emit(newAboutMe);

    
  }
}
