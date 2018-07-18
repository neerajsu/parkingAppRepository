import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-parking',
  templateUrl: './request-parking.component.html',
  styleUrls: ['./request-parking.component.scss']
})
export class RequestParkingComponent implements OnInit {

  constructor() { }

  isFindSpotCollapsed = false;
  findButtonText = 'Find Parking Spots';
  isSelectSpotCollapsed = true;

  collapsed(event: any): void {
    // console.log(event);
    this.findButtonText = 'Show filters';
    this.isSelectSpotCollapsed = false;
  }

  expanded(event: any): void {
    // console.log(event);
    this.findButtonText = 'Find Parking Spots';
    this.isSelectSpotCollapsed = true;
  }

  ngOnInit() {
  }

}
