import {Component} from "@angular/core";
import { NavigationComponent } from "../navigation/navigation.component";
import { TableComponent } from "../table/table.component";
import { PopupWindowComponent } from "../popup-window/popup-window.component";
import { VacationFormComponent } from "../vacation-form/vacation-form.component";
import { SpinnerComponent } from "../spinner/spinner.component";
import { ErrorComponent } from "../error/error.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})

export class CalendarComponent{
  navigation = new NavigationComponent();
  table = new TableComponent();
  popupWindow = new PopupWindowComponent();
  vacationForm = new VacationFormComponent();
  Spinner = new SpinnerComponent();
  Error = new ErrorComponent();
}

