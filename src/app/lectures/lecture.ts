import {Room} from "../rooms/room";

export class Lecture {
  public id: number;
  public name: string;
  public abbreviation: string;
  public room: Room;


  public toString(): String {
    return this.abbreviation;
  }
}
