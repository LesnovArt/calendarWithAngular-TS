import { Component } from '@angular/core';
import { CalendarComponent } from "../app/calendar/calendar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calendar = new CalendarComponent();
}


