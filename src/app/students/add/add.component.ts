import { Component, OnInit } from '@angular/core';
import {Student} from '../../Model/student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  students: Student[];
  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.students = [
      new Student()
    ];
  }
  addStudentItem() {
    this.students.push(
      new Student()
    );
  }
  deleteStudent(student: Student) {
    const index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }
  saveStudents() {
     this.studentService.saveStudentesNotes(this.students).subscribe(
       (response) => console.log(response)
     );
  }
}
