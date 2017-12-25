import { Component, OnInit } from '@angular/core';
import {Student} from "../students/student";
import {Room} from "./room";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  public rooms: Room[];
  public newRoom: Room;

  constructor() {
  }

  ngOnInit() {
    this.newRoom = new Room();
    this.rooms = [
      {id: 1, building: "A", number: 211}
    ]
  }

  public createRoom(room: Room): void {
    if(!room.building || room.number) {
      alert('Bitte alle Felder ausfüllen');
    }
    this.newRoom.id = this.rooms[this.rooms.length-1].id + 1;
    this.rooms.push(room);
    this.newRoom = new Room();
  }

}
