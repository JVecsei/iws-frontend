import {Component, OnInit} from '@angular/core';
import {Student} from "../students/student";
import {Room} from "./room";
import {RoomService} from "./room.service";
import {Lecture} from "../lectures/lecture";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  public rooms: Room[];
  public newRoom: Room;

  constructor(private roomService: RoomService, private toastr: ToastsManager) {
  }

  ngOnInit() {
    this.newRoom = new Room();
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
      this.reloadRooms();
      this.toastr.success("Erfolgreich gespeichert!");
    });
    this.newRoom = new Room();
  }

  public deleteRoom(room: Room, event: any): void {
    event.preventDefault();
    this.roomService.delete(room).subscribe(v => {
      this.reloadRooms();
      this.toastr.success("Erfolgreich gelöscht!");
    }, error => {
      this.toastr.error("Konnte nicht gelöscht werden!");
    });
  }

}
