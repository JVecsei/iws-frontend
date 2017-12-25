import { Component, OnInit } from '@angular/core';
import {Lecture} from "../lectures/lecture";
import {Room} from "../rooms/room";

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {

  public lectures: Lecture[];
  public newLecture: Lecture;

  constructor() {
  }

  ngOnInit() {
    this.newLecture = new Lecture();
    this.lectures = [
      {id: 1, name: "Soziale Kompetenzen", abbreviation: "SKP", room: new Room()}
    ]
  }

  public createLecture(lecture: Lecture): void {
    if(!lecture.name || lecture.abbreviation) {
      alert('Bitte alle Felder ausfüllen');
    }
    this.newLecture.id = this.lectures[this.lectures.length-1].id + 1;
    this.lectures.push(lecture);
    this.newLecture = new Lecture();
  }
}
