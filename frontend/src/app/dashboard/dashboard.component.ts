import { Component, OnInit, Output } from '@angular/core';
import { PepDataService } from '../pep-data.service';
import { DashboardItem } from '../dashboard-models'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public items: DashboardItem[];
  
  constructor(private pepDataService: PepDataService ) { }

  ngOnInit() {
    this.items = this.pepDataService.getDashboardItem();
  }
}


