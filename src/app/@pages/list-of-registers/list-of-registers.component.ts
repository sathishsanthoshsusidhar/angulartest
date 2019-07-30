import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AppServiceService } from './../../services/app-service.service';
import { Observable } from 'rxjs';
import { Iregistration } from 'src/app/registration';


@Component({
  selector: 'app-list-of-registers',
  templateUrl: './list-of-registers.component.html',
  styleUrls: ['./list-of-registers.component.css'],
})
export class ListOfRegistersComponent implements OnInit {
  listRegData: any;
  displayedColumns: string[] = ['username', 'email', 'password'];
  // dataSource = ELEMENT_DATA;
  constructor(private regData: AppServiceService) { }

  ngOnInit() {
    this.getRegData().subscribe(
      arg => this.listRegData = arg
    );
  }
  getRegData(): any {
    return this.regData.getRegisterList();
  }

}
