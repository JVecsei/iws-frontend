import {Injectable} from '@angular/core';
import {SettingsService} from "../settings/settings.service";
import {Lecture} from "../lectures/lecture";
import {HttpClient} from "@angular/common/http";
import {Room} from "./room";

@Injectable()
export class RoomService {

  constructor(private settingsService: SettingsService, private http: HttpClient) {
  }

  public getAll() {
    return this.http.get<Room[]>(this.settingsService.roomsUrl);
  }

  public delete(room: Room) {
    return this.http.delete(`${this.settingsService.roomsUrl}/${room.id}`)
  }

  public save(room: Room) {
    return this.http.post(this.settingsService.roomsUrl, room);
  }

}
