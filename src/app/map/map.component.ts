import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ApiService } from '../service/api.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent {

   country: any = {};

  constructor(private apiService: ApiService) {

  }

  setCountryData(event: any) {

    this.apiService.setCountryData(event.target.id).subscribe( (res: any) => {

         this.country = {
        ...res,
      };

    });
  }

}




