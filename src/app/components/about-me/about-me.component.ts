import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../../service/aboutme.service';
import { AboutMe } from '../../AboutMe';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutme: AboutMe[] = [];
  
  constructor(


    private aboutMeService: AboutMeService
  ) { }

  ngOnInit(): void {
    // Like Promise
    this.aboutMeService.getAboutMe().subscribe(ame => {
      this.aboutme = ame;
    });
  }
  deleteAboutMe(ame: AboutMe){
    this.aboutMeService.deleteAboutMe(ame).subscribe(() => { 
      this.aboutme = this.aboutme.filter(a => { 
        console.log("delete aboutme " + ame.id)
        return a.id !== ame.id});
    });
  }
  // toggleReminder(ame: AboutMe){
    // ame.reminder = !ame.reminder;
    // console.log(task.reminder);
    // this.aboutMeService.updateAboutme(ame).subscribe();
  // }

  addAboutMe(ame: AboutMe) {
    console.log(ame);
    this.aboutMeService.addAboutMe(ame).subscribe((a) => {
      this.aboutme.push(a);
    })

  }

}
