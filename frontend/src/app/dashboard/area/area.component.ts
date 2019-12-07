import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardItem } from '../../dashboard-models';
import { PepDataService } from 'src/app/pep-data.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  item: DashboardItem;

  constructor(
    private route: ActivatedRoute,
    private pepDataService: PepDataService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get("id");
      console.log(this.pepDataService.getDashboardItem().find(e => e.id === id));
  })}
}
