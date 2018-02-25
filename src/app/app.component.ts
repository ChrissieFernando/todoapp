import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 list: Array<any> = [];
  id: Number;
  toggle: Boolean = false;
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
  onRemove(user) {
    const index = this.list.indexOf(user);
    this.list.splice(index, 1);
  }
  onEdit(user) {
    user.disabled = false;
   user.toggle = !user.toggle;
   user.save = 'save';
    this.id = user.id;
  }

  onSave(user, title, checkBox) {
    user.save = 'updated';
    user.title = title.value;
    user.disabled = true;
    user.completed = checkBox.checked;
  }
}
