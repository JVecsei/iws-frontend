import {Component, OnInit} from '@angular/core';
import {Student} from "../students/student";
import {Room} from "./room";
import {RoomService} from "./room.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  public rooms: Room[];
  public newRoom: Room;
  private savedSuccessfully: boolean;

  constructor(private roomService: RoomService) {
  }

  ngOnInit() {
    this.newRoom = new Room();
    this.savedSuccessfully = false;
    this.reloadRooms();
  }

  private reloadRooms() {
    this.roomService.getAll().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  public createRoom(room: Room): void {
    if (!room.name) {
      alert('Bitte alle Felder ausfüllen');
    }
    this.roomService.save(room).subscribe(s => {
      this.savedSuccessfully = true;
      this.reloadRooms();
    });
    this.newRoom = new Room();
  }

}
