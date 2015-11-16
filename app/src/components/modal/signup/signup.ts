import { Component, CORE_DIRECTIVES } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';
import { Modal } from '../modal';
import { SessionFactory } from '../../../services/session';


@Component({
  selector: 'm-modal-signup',
  directives: [ CORE_DIRECTIVES, ROUTER_DIRECTIVES, Modal ],
  template: `
    <m-modal [hidden]="hidden" *ng-if="!session.isLoggedIn()">
      <div class="mdl-card__title">
        <img src="/assets/logos/small.png" (click)="close()"/>
      </div>
      <div class="mdl-card__supporting-text">
        Sign-up to claim 100 free views on the content of your choice. Earn viral reach and money for your energy online.
      </div>
      <div class="mdl-card__supporting-text">
        <button class="mdl-button mdl-button--raised mdl-button--colored" [router-link]="['/Register']">Signup</button>
        <button class="mdl-button mdl-button--raised mdl-button--colored" [router-link]="['/Login']">Login</button>
      </div>

      <div class="mdl-card__supporting-text m-modal-signup-apps">
        <a href="https://geo.itunes.apple.com/us/app/minds-com/id961771928?mt=8&amp;uo=6">
          <img src="http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.png">
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.minds.mobile" align="center">
          <img alt="Android app on Google Play" src="https://developer.android.com/images/brand/en_app_rgb_wo_45.png">
        </a>
      </div>

      <div class="mdl-card__supporting-text">
        <span class="m-modal-signup-skip" (click)="close()">Maybe later</span>
      </div>
    </div>
  `
})

export class SignupModal {

  hidden : boolean = false;
  session = SessionFactory.build();

  constructor(public router : Router){
    this.router.subscribe((route) => {
      switch(route){
        case 'register':
        case 'login':
        case 'forgot-password':
          this.hidden = true;
          break;
        default:
          this.hidden = false;
      }
    });
  }

  close(){
    this.hidden = true;
  }

}
