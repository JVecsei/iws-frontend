import {Injectable} from '@angular/core';

@Injectable()
export class SettingsService {

  public lecturesUrl: string;
  public roomsUrl: string;
  public studentsUrl: string;

  constructor() {
    let storedSettings = localStorage.getItem('settings');
    if(storedSettings) {
      let storedSettingsJson = JSON.parse(storedSettings);
      Object.assign(this, storedSettingsJson);
    } else {
      this.setDefaultUrls();
    }
  }

  public setDefaultUrls(): void {
    let baseUrl = "http://localhost:8080";
    this.lecturesUrl = baseUrl + "/lectures";
    this.roomsUrl = baseUrl + "/rooms";
    this.studentsUrl = baseUrl + "/students";
    this.persistSettings();
  }

  public persistSettings() {
    localStorage.setItem('settings', JSON.stringify(this));
  }


}
