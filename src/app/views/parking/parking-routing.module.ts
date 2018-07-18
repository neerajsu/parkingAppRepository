import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestParkingComponent } from './request-parking/request-parking.component';
import { MySpotsComponent } from './my-spots/my-spots.component';
import { ParkingHistoryComponent } from './parking-history/parking-history.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Parking'
    },
    children: [
      {
        path: 'request-parking',
        component: RequestParkingComponent,
        data: {
          title: 'Request Parking'
        }
      },
      {
        path: 'my-spots',
        component: MySpotsComponent,
        data: {
          title: 'My Spots'
        },
      },
      {
        path: 'parking-history',
        component: ParkingHistoryComponent,
        data: {
          title: 'Parking History'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingRoutingModule { }
