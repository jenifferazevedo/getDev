import { Component, OnInit } from '@angular/core';
import { LinkedinService } from '../services/linkedin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public token: {};

  constructor(private linkdeInService: LinkedinService) {}

  ngOnInit(): void {}
}
