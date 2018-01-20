import {Component, OnInit} from '@angular/core';
import {Lecture} from "../lectures/lecture";
import {Room} from "../rooms/room";
import {Observable} from "rxjs/Observable";
import {LectureService} from "./lecture.service";
import {RoomService} from "../rooms/room.service";

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {

  public lectures: Lecture[];
  public newLecture: Lecture;
  public rooms: Room[];
  private savedSuccessfully: boolean;

  constructor(private lectureService: LectureService, private roomService: RoomService) {
  }

  ngOnInit() {
    this.newLecture = new Lecture();
    this.savedSuccessfully = false;
    this.reloadRooms();
    this.reloadLectures();
  }

  private reloadRooms() {
    this.roomService.getAll().subscribe(
      rooms => {
        this.rooms = rooms;
      }
    )
  }

  private reloadLectures() {
      this.lectureService.getAll().subscribe(lectures => {
        this.lectures = lectures;
      });
  }

  public createLecture(lecture: Lecture): void {
    if (!lecture.name || !lecture.abbreviation || !lecture.room) {
      alert('Bitte alle Felder ausfüllen');
    }
    this.lectureService.save(lecture).subscribe(v => {
      this.reloadLectures();
      this.reloadRooms();
      this.savedSuccessfully = true;
    });
    this.newLecture = new Lecture();
  }
}
