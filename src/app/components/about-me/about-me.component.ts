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
      this.aboutme = ame.sort((a,b) => a.order_about_me - b.order_about_me);
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
    const tmp = this.aboutme[index + 1];
    const tmporder = this.aboutme[index + 1].order_about_me;
    const tmporderindex = this.aboutme[index].order_about_me;

    if (tmp) {
    this.aboutme[index +1] = this.aboutme[index];
    this.aboutme[index +1].order_about_me = tmporder;

    this.aboutme[index] = tmp;
    this.aboutme[index].order_about_me = tmporderindex;
    

    this.aboutMeService.updateAboutme(this.aboutme[index]).subscribe(x => {
      if (x){
      this.aboutMeService.updateAboutme(this.aboutme[index + 1]).subscribe(y => {
        // if (y) {alert ("Cambios guardados")}
      });
    }
    });
    }
    }
  }

  moveUp (ame: AboutMe){
    const index = this.aboutme.findIndex(x => x.id === ame.id);
    
    if (this.aboutme.length > 1 && index > 0){
    const tmp = this.aboutme[index - 1];
    const tmporder = this.aboutme[index - 1].order_about_me;
    const tmporderindex = this.aboutme[index].order_about_me;
    if (tmp) {
    this.aboutme[index -1] = this.aboutme[index];
    this.aboutme[index -1].order_about_me = tmporder;
    this.aboutme[index] = tmp;
    this.aboutme[index].order_about_me = tmporderindex;

    this.aboutMeService.updateAboutme(this.aboutme[index]).subscribe(x => {
      if (x){
      this.aboutMeService.updateAboutme(this.aboutme[index - 1]).subscribe(y => {
        // if (y) {alert ("Cambios guardados")}
      });
    }
    });
    }
    }
  }

  addAboutMe(ame: AboutMe) {
    console.log(ame);
    if(this.aboutme.length > 0) {
      ame.order_about_me = this.aboutme[this.aboutme.length - 1].order_about_me + 1;
    } else {
      ame.order_about_me = 1;
    }
    this.aboutMeService.addAboutMe(ame).subscribe((a) => {
      this.aboutme.push(a);
    })

  }

}
