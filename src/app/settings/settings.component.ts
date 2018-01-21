import {Component, OnInit} from '@angular/core';
import {SettingsService} from "./settings.service";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import {LectureService} from "../lectures/lecture.service";
import {StudentService} from "../students/student.service";
import {RoomService} from "../rooms/room.service";
import {Observable} from 'rxjs/Rx'
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public newSettings;
  public savedSuccessfully;
  private _successAlertCloser: Subject<Boolean> = new Subject();

  constructor(private settingsService: SettingsService,
              private lectureService: LectureService,
              private roomService: RoomService,
              private studentService: StudentService,
              private toastr: ToastsManager) {
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
    this.testUrls();
  }

  public saveSettings(settings) {
    this.settingsService.roomsUrl = settings.rooms;
    this.settingsService.studentsUrl = settings.students;
    this.settingsService.lecturesUrl = settings.lectures;
    this.savedSuccessfully = true;
    this._successAlertCloser.next(true);
    this.settingsService.persistSettings();
    this.testUrls();
  }

  public reset() {
    this.settingsService.setDefaultUrls();
    location.reload(true);
  }

  public testUrls(): void {
    this.toastr.clearAllToasts();
    this.roomService.getAll().subscribe(rooms => {
      this.toastr.success("URL für RoomService erreichbar!");
    }, error => {
      this.toastr.error("URL für RoomService nicht erreichbar!");
    });
    this.studentService.getAll().subscribe(rooms => {
      this.toastr.success("URL für StudentService erreichbar!");
    }, error => {
      this.toastr.error("URL für StudentService nicht erreichbar!");
    });
    this.lectureService.getAll().subscribe(rooms => {
      this.toastr.success("URL für LectureService erreichbar!");
    }, error => {
      this.toastr.error("URL für LectureService nicht erreichbar!");
    });
  }

}
