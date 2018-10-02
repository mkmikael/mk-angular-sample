import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'adquirente-show',
  templateUrl: './adquirente-show.component.html',
  styleUrls: ['./adquirente-show.component.css']
})
export class AdquirenteShowComponent implements OnInit {

  items: MenuItem[];
  cars: Car[];
  cols: any[];
  val: string;

  ngOnInit(): void {
    this.items = [
      { label: 'Stats', icon: 'fa fa-fw fa-bar-chart' },
      { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
      { label: 'Documentation', icon: 'fa fa-fw fa-book' },
      { label: 'Support', icon: 'fa fa-fw fa-support' },
      { label: 'Social', icon: 'fa fa-fw fa-twitter' }
    ];
    this.cars = [
      { vin: 'asdasdasd', year: 2018, brand: 'VW', color: 'Orange Black' },
      { vin: 'asdasdasd', year: 2018, brand: 'Audi', color: 'Black' }
    ];
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  } // ngOnInit

}
