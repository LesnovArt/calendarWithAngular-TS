import { Component, OnInit } from "@angular/core";
import { TeamComponent } from "../team/team.component";
import { TeamFooterComponent } from "../team-footer/team-footer.component";

@Component({
  selector: "calendar-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  team = new TeamComponent();
  teamFooter = new TeamFooterComponent();
  constructor() {}

  ngOnInit(): void {}
}
