import { Component } from '@angular/core';
import { IonicModule, IonMenu } from '@ionic/angular';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [SharedModule],
})
export class AppComponent { 
  constructor() {}
}
