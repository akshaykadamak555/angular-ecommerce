import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileContainerComponent } from './components/mobile-container/mobile-container.component';
import { MobileCardComponent } from './components/mobile-card/mobile-card.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    MobileContainerComponent,
    MobileCardComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule
  ],
  providers: [ApiService]
})
export class MobileModule { }
