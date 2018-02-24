import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  id;
  toggle: Boolean = false;
  list: Array<any> = [];
  constructor(private service: TodoService) {

  }
  ngOnInit() {
    this.service.getService()
      .subscribe((res) => {
        this.list = res.json();
      });
  }
  onClick(user, checkBox) {
    user.completed = checkBox.checked;
  }
}
