import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss']
})
export class PushComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getDetails();

    // this.getCustomers().then((data) => {
    //   console.log(data);
    // }).then(() => {
    //   this.getProducts().then((data) => {
    //     console.log(data);
    //   });
    // });

    // this.getCustomers().then((data) => {
    //   console.log(data);
    // });
    // this.getProducts().then((data) => {
    //   console.log(data);
    // });
  }

  getDetails() {
    setTimeout(() => {
      console.log('Getting customers');
      setTimeout(() => {
        console.log('Getting orders');
        setTimeout(() => {
          console.log('Getting products');
        }, 4000);
      }, 1000);
    }, 1000);
  }

  getCustomers() {
    const promise = new Promise((resolve, reject) => {
      console.log('Getting Customers');
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve('John');
        } else {
          reject('Cant get customers');
        }
      }, 1000);
    });
    return promise;
  }

  getProducts() {
    const promise = new Promise((resolve, reject) => {
      console.log('Getting Car');
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve('Ford Figo');
        } else {
          reject('Cant get car');
        }
      }, 1000);
    });
    return promise;
  }
}
