import { Component, OnInit } from "@angular/core";
import { TeamNameComponent } from "../team-name/team-name.component";
import { TeamEmployerComponent } from "../team-employer/team-employer.component";

@Component({
  selector: "table-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
})
export class TeamComponent implements OnInit {
  teamName = new TeamNameComponent();
  teamEmployer = new TeamEmployerComponent();

  constructor() {}

  ngOnInit(): void {}
}
