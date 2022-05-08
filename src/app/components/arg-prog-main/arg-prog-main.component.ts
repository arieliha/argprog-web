import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../../service/aboutme.service';
import { ExperienceService } from '../../service/experience.service';
import { AboutMe } from '../../AboutMe';
import { Experience } from '../../Experience';
import { LocationStrategy } from '@angular/common';



@Component({
  selector: 'app-arg-prog-main',
  templateUrl: './arg-prog-main.component.html',
  styleUrls: ['./arg-prog-main.component.css']
})
export class ArgProgMainComponent implements OnInit {
  aboutme: AboutMe[] = [];
  experiences: Experience[] = [];
  // isUpdate: boolean = false;


  constructor(
    private location: LocationStrategy,
    private aboutMeService: AboutMeService,
    private experienceService: ExperienceService
  ) { 
    history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
    history.pushState(null, null, window.location.href);
});  
  }

  ngOnInit(): void {
    // Like Promise
    this.aboutMeService.getAboutMe().subscribe(ame => {
      this.aboutme = ame.sort((a, b) => a.order_about_me - b.order_about_me);
        this.experienceService.getExperience().subscribe(exp => {
          this.experiences = exp.sort((a,b) => a.order_experience - b.order_experience);
      });
    });
  }

  // onUpdate() {
  //   this.isUpdate = !this.isUpdate;
  // }
  addExperience(exp: Experience) {
    console.log(exp);
    if (this.experiences.length > 0) {
      exp.order_experience = this.experiences[this.experiences.length - 1].order_experience + 1;
    } else {
      exp.order_experience = 1;
    }
    this.experienceService.addExperience(exp).subscribe((a) => {
      this.experiences.push(a);
    })
  }
  addAboutMe(ame: AboutMe) {
    console.log(ame);
    if (this.aboutme.length > 0) {
      ame.order_about_me = this.aboutme[this.aboutme.length - 1].order_about_me + 1;
    } else {
      ame.order_about_me = 1;
    }
    this.aboutMeService.addAboutMe(ame).subscribe((a) => {
      this.aboutme.push(a);
    })
  }
  updateExperience(exp: Experience) {

    this.experienceService.updateExperience(exp).subscribe((r) => {
      if (r) { alert("Cambios guardados") }
    });
  }
  updateAboutMe(ame: AboutMe) {

    this.aboutMeService.updateAboutme(ame).subscribe((r) => {
      if (r) { alert("Cambios guardados") }
    });
  }
  deleteExperience(exp: Experience) {
    this.experienceService.deleteExperience(exp).subscribe(() => {
      this.experiences = this.experiences.filter(a => {
        console.log("delete aboutme " + exp.id)
        return a.id !== exp.id
      });
    });
  }
  deleteAboutMe(ame: AboutMe) {
    this.aboutMeService.deleteAboutMe(ame).subscribe(() => {
      this.aboutme = this.aboutme.filter(a => {
        console.log("delete aboutme " + ame.id)
        return a.id !== ame.id
      });
    });
  }

  moveUp(ame: AboutMe) {
    const index = this.aboutme.findIndex(x => x.id === ame.id);

    if (this.aboutme.length > 1 && index > 0) {
      const tmp = this.aboutme[index - 1];
      const tmporder = this.aboutme[index - 1].order_about_me;
      const tmporderindex = this.aboutme[index].order_about_me;
      if (tmp) {
        this.aboutme[index - 1] = this.aboutme[index];
        this.aboutme[index - 1].order_about_me = tmporder;
        this.aboutme[index] = tmp;
        this.aboutme[index].order_about_me = tmporderindex;

        this.aboutMeService.updateAboutme(this.aboutme[index]).subscribe(x => {
          if (x) {
            this.aboutMeService.updateAboutme(this.aboutme[index - 1]).subscribe(y => {
              // if (y) {alert ("Cambios guardados")}
            });
          }
        });
      }
    }
  }
  moveUpExp(exp: Experience) {
    const index = this.experiences.findIndex(x => x.id === exp.id);

    if (this.experiences.length > 1 && index > 0) {
      const tmp = this.experiences[index - 1];
      const tmporder = this.experiences[index - 1].order_experience;
      const tmporderindex = this.experiences[index].order_experience;
      if (tmp) {
        this.experiences[index - 1] = this.experiences[index];
        this.experiences[index - 1].order_experience = tmporder;
        this.experiences[index] = tmp;
        this.experiences[index].order_experience = tmporderindex;

        this.experienceService.updateExperience(this.experiences[index]).subscribe(x => {
          if (x) {
            this.experienceService.updateExperience(this.experiences[index - 1]).subscribe(y => {
              // if (y) {alert ("Cambios guardados")}
            });
          }
        });
      }
    }
  }
  moveDown(ame: AboutMe) {
    const index = this.aboutme.findIndex(x => x.id === ame.id);

    if (this.aboutme.length > 1 && index < this.aboutme.length - 1) {
      const tmp = this.aboutme[index + 1];
      const tmporder = this.aboutme[index + 1].order_about_me;
      const tmporderindex = this.aboutme[index].order_about_me;

      if (tmp) {
        this.aboutme[index + 1] = this.aboutme[index];
        this.aboutme[index + 1].order_about_me = tmporder;

        this.aboutme[index] = tmp;
        this.aboutme[index].order_about_me = tmporderindex;


        this.aboutMeService.updateAboutme(this.aboutme[index]).subscribe(x => {
          if (x) {
            this.aboutMeService.updateAboutme(this.aboutme[index + 1]).subscribe(y => {
              // if (y) {alert ("Cambios guardados")}
            });
          }
        });
      }
    }
  }

  moveDownExp(exp: Experience) {
    const index = this.experiences.findIndex(x => x.id === exp.id);

    if (this.experiences.length > 1 && index < this.experiences.length - 1) {
      const tmp = this.experiences[index + 1];
      const tmporder = this.experiences[index + 1].order_experience;
      const tmporderindex = this.experiences[index].order_experience;

      if (tmp) {
        this.experiences[index + 1] = this.experiences[index];
        this.experiences[index + 1].order_experience = tmporder;

        this.experiences[index] = tmp;
        this.experiences[index].order_experience = tmporderindex;


        this.experienceService.updateExperience(this.experiences[index]).subscribe(x => {
          if (x) {
            this.experienceService.updateExperience(this.experiences[index + 1]).subscribe(y => {
              // if (y) {alert ("Cambios guardados")}
            });
          }
        });
      }
    }
  }

}
