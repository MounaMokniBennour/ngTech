export class Student {
  name: string;
  firstname: string;
  note: number;
  constructor(name: string = '',
              firstname: string = '',
              note: number = 0) {
    this.name = name;
    this.firstname = firstname;
    this.note = note;
  }
}
