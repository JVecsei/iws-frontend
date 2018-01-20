import { Injectable } from '@angular/core';
import {SettingsService} from "../settings/settings.service";
import {Lecture} from "../lectures/lecture";
import {HttpClient} from "@angular/common/http";
import {Student} from "./student";

@Injectable()
export class StudentService {

  constructor(private settingsService: SettingsService, private http: HttpClient) { }

  public getAll() {
    return this.http.get<Student[]>(this.settingsService.studentsUrl);
  }

  public save(student: Student) {
    return this.http.post(this.settingsService.studentsUrl, student);
  }
}
