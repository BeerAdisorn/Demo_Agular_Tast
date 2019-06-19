import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  private Name:string;
  private Age:number;
  private Email:string;

  // dictionary
  private address:{
    street:string,
    city:string,
    province:string,
    postcode:string
  }

  // Array
  private skill:string[];

  constructor() { }

  ngOnInit() {
    this.Name = "Adisorn Nakyim"
    this.Age = 21;
    this.Email = "adisorn.nak@cpc.ac.th"    
    this.address = {
      street: "19/316",
      city: "Bang Ya Phraek",
      province: "Samut Prakan",
      postcode: "10130"
    }
    this.skill = ["Android","SQL","HTML","CSS"]

  }
}
