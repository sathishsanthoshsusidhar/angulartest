import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-expensive-detail',
  templateUrl: './expensive-detail.component.html',
  styleUrls: ['./expensive-detail.component.css']
})
export class ExpensiveDetailComponent implements OnInit {
  category: string;
  constructor() { }

  ngOnInit() {
  }
  addCategory(): any {

  }

}
