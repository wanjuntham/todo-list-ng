import { Component, OnInit, Input, Output } from '@angular/core'
import { ToDosService } from '../to-dos.service'
import { UserService,swAPI } from '../user.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() todo = null
   user = {}

  constructor(
    private todoService: ToDosService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const x = this.userService.getUserById(this.todo.userID)
    x.subscribe(res => {
      this.user = res as swAPI
    })
  }

  onClickColorChange(color) {
    this.todoService.changeColor(this.todo.id, color)
  }
}
