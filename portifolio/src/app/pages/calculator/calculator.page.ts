import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
  standalone: true,
  imports: [SharedModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CalculatorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
