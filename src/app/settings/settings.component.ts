import {Component, OnInit} from '@angular/core';
import {SettingsService} from "./settings.service";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public newSettings;
  public savedSuccessfully;
  private _successAlertCloser: Subject<Boolean> = new Subject();

  constructor(private settingsService: SettingsService) {
    this.newSettings = {};
    this.savedSuccessfully = false;
    this._successAlertCloser.debounceTime(3000).subscribe(() => {
      this.savedSuccessfully = false;
    });
  }

  ngOnInit() {
    this.newSettings.rooms = this.settingsService.roomsUrl;
    this.newSettings.students = this.settingsService.studentsUrl;
    this.newSettings.lectures = this.settingsService.lecturesUrl;
  }

  public saveSettings(settings) {
    this.settingsService.roomsUrl = settings.rooms;
    this.settingsService.studentsUrl = settings.students;
    this.settingsService.lecturesUrl = settings.lectures;
    this.savedSuccessfully = true;
    this._successAlertCloser.next(true);
    this.settingsService.persistSettings();
  }

  public reset() {
    this.settingsService.setDefaultUrls();
    location.reload(true);
  }

}
