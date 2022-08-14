import { Component } from '@angular/core';
import { MessgeServiceService } from './services/messge-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng_playground_v3';
  constructor(public messageService: MessgeServiceService) {
    this.messageService.message = 'Eric is here';
  }
}
