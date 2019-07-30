import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import {MatSidenavModule} from '@angular/material/sidenav';
// AuthService


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
