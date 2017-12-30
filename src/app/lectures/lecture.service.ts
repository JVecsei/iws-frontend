import { Injectable } from '@angular/core';
import {SettingsService} from "../settings/settings.service";
import {HttpClient} from "@angular/common/http";
import {Lecture} from "./lecture";

@Injectable()
export class LectureService {

  constructor(private settingsService: SettingsService, private http: HttpClient) { }

  public getAll() {
    return this.http.get<Lecture[]>(this.settingsService.lecturesUrl);
  }

  public save(lecture: Lecture) {
    return this.http.post(this.settingsService.lecturesUrl, lecture);
  }

}
