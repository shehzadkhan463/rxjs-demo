import { Component, OnInit } from '@angular/core';
import { Car } from '../employee.model';

@Component({
  selector: 'app-pull',
  templateUrl: './pull.component.html',
  styleUrls: ['./pull.component.scss']
})
export class PullComponent implements OnInit {

  cars: Car[];
  filteredCars: Car[];
  constructor() {
    this.cars = [
      { name: 'Ford Figo', price: 15509.44 },
      { name: 'Toyota Fortuner', price: 19745.74 },
      { name: 'Mercedes-Benz M-Class', price: 11567.01 },
      { name: 'Ford Mustang', price: 11523.12 },
      { name: 'Lexus RX Hybrid', price: 21600.65 },
    ];
  }
  ngOnInit() {
  }
  filterCars(): void {
    this.cars.filter(car => car.price > 15000)
      .map(car => car.name + ': $' + car.price)
      .forEach(result => console.log('result', result));
  }

}
