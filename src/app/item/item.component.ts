import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route:ActivatedRoute) {}
  stages = ['backlog', 'wip', 'completed']
  userId = null
  
  ngOnInit() {
    const UserID = parseInt(this.route.snapshot.params.UserID)
  }

}
