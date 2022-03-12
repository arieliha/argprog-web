import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../../service/aboutme.service';
import { AboutMe } from '../../AboutMe';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutme: AboutMe[] = [];
  isUpdate: boolean = false;
  faPencilAlt = faPencilAlt;
  
  constructor(


    private aboutMeService: AboutMeService
  ) { }

  ngOnInit(): void {
    // Like Promise
    this.aboutMeService.getAboutMe().subscribe(ame => {
      this.aboutme = ame;
    });
  }

  onUpdate() {
    this.isUpdate = !this.isUpdate;
  }
  deleteAboutMe(ame: AboutMe){
    this.aboutMeService.deleteAboutMe(ame).subscribe(() => { 
      this.aboutme = this.aboutme.filter(a => { 
        console.log("delete aboutme " + ame.id)
        return a.id !== ame.id});
    });
  }
  updateAboutMe (ame: AboutMe){
    
    console.log(ame);
    this.aboutMeService.updateAboutme(ame).subscribe();
  }

  addAboutMe(ame: AboutMe) {
    console.log(ame);
    this.aboutMeService.addAboutMe(ame).subscribe((a) => {
      this.aboutme.push(a);
    })

  }

}
