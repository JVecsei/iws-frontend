import {Component, OnInit} from '@angular/core';
import {Student} from "./student";
import {Lecture} from "../lectures/lecture";
import {Room} from "../rooms/room";
import {StudentService} from "./student.service";
import {LectureService} from "../lectures/lecture.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: Student[];
  public lectures: Lecture[];
  public newStudent: Student;

  constructor(private studentService: StudentService, private lectureService: LectureService, private toastr: ToastsManager) {
  }

  ngOnInit() {
    this.newStudent = new Student();
    this.reloadStudents();
    this.reloadLectures();
  }

  private reloadStudents() {
    this.studentService.getAll().subscribe(students => {
      this.students = students;
    });
  }

  private reloadLectures() {
    this.lectureService.getAll().subscribe(lectures => {
      this.lectures = lectures;
    });
  }

  public createStudent(student: Student): void {
    if (!student.name) {
      alert('Bitte alle Felder ausfüllen');
    }
    this.studentService.save(student).subscribe(v => {
      this.reloadStudents();
      this.reloadLectures();
      this.toastr.success("Erfolgreich gespeichert!");
    });
    this.newStudent = new Student();
  }

  public getLectures(student: Student): string {
    let lecturesToString = [];
    student.lectures.forEach(lecture => {
      lecturesToString.push(lecture.name + " (" + lecture.abbreviation + ")");
    });
    return lecturesToString.join(", ");
  }

  public deleteStudent(student: Student, event: any): void {
    event.preventDefault();
    this.studentService.delete(student).subscribe(v => {
      this.reloadStudents();
      this.toastr.success("Erfolgreich gelöscht!");
    }, error => {
      this.toastr.error("Konnte nicht gelöscht werden!");
    });
  }

}
