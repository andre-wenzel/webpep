import { Injectable } from '@angular/core';
import { DashboardItem } from './dashboard-models';

@Injectable({
  providedIn: 'root'
})
export class PepDataService {
  dashboardItems: DashboardItem[];

  constructor() { }

  getDashboardItem(): DashboardItem[] {
    this.dashboardItems = [];
    this.dashboardItems.push({id: "id1", label: "asd"} as DashboardItem);
    this.dashboardItems.push({id: "id2", label: "asd"} as DashboardItem);
    this.dashboardItems.push({id: "id3", label: "asd"} as DashboardItem);
    this.dashboardItems.push({id: "id4", label: "asd"} as DashboardItem);
    this.dashboardItems.push({id: "id5", label: "asd"} as DashboardItem);
    this.dashboardItems.push({id: "id6", label: "asd"} as DashboardItem);
    this.dashboardItems.push({id: "id7", label: "asd"} as DashboardItem);
    this.dashboardItems.push({id: "id8", label: "asd"} as DashboardItem);
    this.dashboardItems.push({id: "id9", label: "asd"} as DashboardItem);
    this.dashboardItems.push({id: "id10", label: "asd"} as DashboardItem);
    return this.dashboardItems;
  }
}
