import {Component, OnInit} from '@angular/core';
import {Lecture} from "../lectures/lecture";
import {Room} from "../rooms/room";
import {Observable} from "rxjs/Observable";
import {LectureService} from "./lecture.service";
import {RoomService} from "../rooms/room.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {

  public lectures: Lecture[];
  public newLecture: Lecture;
  public rooms: Room[];

  constructor(private lectureService: LectureService, private roomService: RoomService, private toastr: ToastsManager) {
  }

  ngOnInit() {
    this.newLecture = new Lecture();
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
      this.toastr.success("Erfolgreich gespeichert!");
    });
    this.newLecture = new Lecture();
  }

  public deleteLecture(lecture: Lecture, event: any): void {
    event.preventDefault();
    this.lectureService.delete(lecture).subscribe(v => {
      this.reloadLectures();
      this.toastr.success("Erfolgreich gelöscht!");
    }, e => {
      this.toastr.error("Konnte nicht gelöscht werden!");
    });
  }
}
