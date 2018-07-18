import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestParkingComponent } from './request-parking/request-parking.component';
import { MySpotsComponent } from './my-spots/my-spots.component';
import { ParkingHistoryComponent } from './parking-history/parking-history.component';
import { ParkingRoutingModule } from './parking-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    CommonModule,
    ParkingRoutingModule,
    CollapseModule.forRoot(),
  ],
  declarations: [RequestParkingComponent, MySpotsComponent, ParkingHistoryComponent]
})
export class ParkingModule { }
