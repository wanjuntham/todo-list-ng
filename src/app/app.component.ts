import { Component } from '@angular/core'
import { ToDosService } from './to-dos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stages = ['backlog', 'wip', 'completed']
  constructor() {}

  ngOnInit() {}
}
