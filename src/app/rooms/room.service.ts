import { Injectable } from '@angular/core';
import {SettingsService} from "../settings/settings.service";
import {Lecture} from "../lectures/lecture";
import {HttpClient} from "@angular/common/http";
import {Room} from "./room";

@Injectable()
export class RoomService {

  constructor(private settingsService: SettingsService, private http: HttpClient) { }

  public getAll() {
    return this.http.get<Room[]>(this.settingsService.roomsUrl);
  }

  public save(lecture: Lecture) {
    return this.http.post(this.settingsService.roomsUrl, lecture);
  }

}
