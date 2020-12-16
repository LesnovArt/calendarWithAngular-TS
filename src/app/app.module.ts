import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { VacationFormComponent } from './vacation-form/vacation-form.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorComponent } from './error/error.component';
import { TeamComponent } from './team/team.component';
import { TeamFooterComponent } from './team-footer/team-footer.component';
import { TeamNameComponent } from './team-name/team-name.component';
import { TeamEmployerComponent } from './team-employer/team-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavigationComponent,
    TableComponent,
    PopupWindowComponent,
    VacationFormComponent,
    SpinnerComponent,
    ErrorComponent,
    TeamComponent,
    TeamFooterComponent,
    TeamNameComponent,
    TeamEmployerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
