import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';
import { IonMenu } from '@ionic/angular';

interface Page {
  name: string,
  path: string
}

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [SharedModule],
})
export class HomePage { 
  Pages : Page[] = [
    {name: 'Calculadora', path:'/calculator'},
    {name: 'Conversor de datas', path:'/date-converter'},
  ]
  constructor() {}
}
