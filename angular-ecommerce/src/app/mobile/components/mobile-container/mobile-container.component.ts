import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-mobile-container',
  templateUrl: './mobile-container.component.html',
  styleUrls: ['./mobile-container.component.scss'],
})
export class MobileContainerComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  mobilesList: any;

  ngOnInit(): void {
    this.getMobilesList();
  }

  getMobilesList(): void {
    this.apiService.getMobiles().subscribe((response) => {
      this.mobilesList = response;
      console.log('response', response);
    });
  }
}
