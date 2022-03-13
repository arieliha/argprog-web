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
  // isUpdate: boolean = false;
  
  
  constructor(


    private aboutMeService: AboutMeService
  ) { }

  ngOnInit(): void {
    // Like Promise
    this.aboutMeService.getAboutMe().subscribe(ame => {
      this.aboutme = ame;
    });
  }

  // onUpdate() {
  //   this.isUpdate = !this.isUpdate;
  // }
  deleteAboutMe(ame: AboutMe){
    this.aboutMeService.deleteAboutMe(ame).subscribe(() => { 
      this.aboutme = this.aboutme.filter(a => { 
        console.log("delete aboutme " + ame.id)
        return a.id !== ame.id});
    });
  }
  updateAboutMe (ame: AboutMe){
    
    this.aboutMeService.updateAboutme(ame).subscribe((r) => {
      if (r) {alert ("Cambios guardados")}
    });
  }

  moveDown (ame: AboutMe){
    const index = this.aboutme.findIndex(x => x.id === ame.id);
    
    if (this.aboutme.length > 1 && index < this.aboutme.length -1){
    const tmp = this.aboutme[index + 1]
    if (tmp) {
    this.aboutme[index +1] = this.aboutme[index];
    this.aboutme[index] = tmp;
    }
    }
  }

  moveUp (ame: AboutMe){
    const index = this.aboutme.findIndex(x => x.id === ame.id);
    
    if (this.aboutme.length > 1 && index > 0){
    const tmp = this.aboutme[index - 1]
    if (tmp) {
    this.aboutme[index -1] = this.aboutme[index];
    this.aboutme[index] = tmp;
    }
    }
  }

  addAboutMe(ame: AboutMe) {
    console.log(ame);
    this.aboutMeService.addAboutMe(ame).subscribe((a) => {
      this.aboutme.push(a);
    })

  }

}
