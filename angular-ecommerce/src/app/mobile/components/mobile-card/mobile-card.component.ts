import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent implements OnChanges {
  @Input() mobileList: any;

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }
}
