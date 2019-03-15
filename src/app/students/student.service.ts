import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  link = 'http://localhost:3000/api/Students';
  constructor(
    private http: HttpClient
  ) { }
  saveStudentesNotes(students) {
    return this.http.post(this.link, students);
  }
}
