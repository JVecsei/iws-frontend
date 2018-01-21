import {Injectable} from '@angular/core';

@Injectable()
export class SettingsService {

  public lecturesUrl: string;
  public roomsUrl: string;
  public studentsUrl: string;

  constructor() {
    let storedSettings = localStorage.getItem('settings');
    if (storedSettings) {
      let storedSettingsJson = JSON.parse(storedSettings);
      Object.assign(this, storedSettingsJson);
    } else {
      this.setDefaultUrls();
    }
  }

  public setDefaultUrls(): void {
    this.lecturesUrl = "http://localhost:8070/lectures";
    this.roomsUrl = "http://localhost:8080/rooms";
    this.studentsUrl = "http://localhost:8090/students";
    this.persistSettings();
  }

  public persistSettings() {
    localStorage.setItem('settings', JSON.stringify(this));
  }

}
