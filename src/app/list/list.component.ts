import { Component, OnInit, Input } from '@angular/core'
import { ToDosService } from '../to-dos.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() stage = null
  todos = []

  constructor(private todoService: ToDosService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodosByStage(this.stage)
  }
}
