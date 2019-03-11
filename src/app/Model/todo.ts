export class Todo {
  id: number;
  title: string;
  content: string;
  state: string;


  constructor(
              title: string = '',
              content: string = '',
              state: string = '') {
    this.title = title;
    this.content = content;
    this.state = state;
  }
}
