import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1={carId:1, carName:"Corolla", brandId:1, DailyPrice:450};
  car2={carId:2, carName:"Civic", brandId:2, DailyPrice:350};
  car3={carId:3, carName:"Megane", brandId:3, DailyPrice:450};
  car4={carId:4, carName:"Egea", brandId:4, DailyPrice:450};

  cars = [this.car1, this.car2,this.car3, this.car4,];

  constructor() { }

  ngOnInit(): void {
  }

}
