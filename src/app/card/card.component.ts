import { Component, OnInit, Input, Output } from '@angular/core'
import { ToDosService } from '../to-dos.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() todo = null

  constructor(private todoService: ToDosService) {}

  ngOnInit() {}

  onClickColorChange(color) {
    this.todoService.changeColor(this.todo.id, color)
  }
}
