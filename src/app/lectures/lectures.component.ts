import { Component, OnInit } from '@angular/core';
import {Lecture} from "../lectures/lecture";
import {Room} from "../rooms/room";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {

  public lectures: Lecture[];
  public newLecture: Lecture;
  public rooms: Room[];

  constructor() {
  }

  ngOnInit() {
    this.newLecture = new Lecture();
    this.lectures = [
      {id: 1, name: "Soziale Kompetenzen", abbreviation: "SKP", room: new Room()}
    ];
    this.rooms = [
      {
        id: 1, number: 206, building: 'A'
      },{
        id: 2, number: 207, building: 'A'
      },{
        id: 3, number: 208, building: 'A'
      },{
        id: 4, number: 209, building: 'A'
      },{
        id: 5, number: 210, building: 'A'
      },
    ];
  }

  public createLecture(lecture: Lecture): void {
    if(!lecture.name || !lecture.abbreviation || !lecture.room) {
      alert('Bitte alle Felder ausfüllen');
    }
    this.newLecture.id = this.lectures[this.lectures.length-1].id + 1;
    this.lectures.push(lecture);
    this.newLecture = new Lecture();
  }
}
