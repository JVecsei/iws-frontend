import {Component, OnInit} from '@angular/core';
import {Student} from "./student";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: Student[];
  public newStudent: Student;

  constructor() {
  }

  ngOnInit() {
    this.newStudent = new Student();
    this.students = [
      {id: 1, name: "Hello my friend", lectures: []}
    ]
  }

  public createStudent(student: Student): void {
    if(!student.name) {
      alert('Bitte alle Felder ausfüllen');
    }
    this.newStudent.id = this.students[this.students.length-1].id + 1;
    this.students.push(student);
    this.newStudent = new Student();
  }

}
