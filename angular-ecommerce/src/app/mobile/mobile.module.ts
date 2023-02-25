import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileContainerComponent } from './components/mobile-container/mobile-container.component';
import { MobileCardComponent } from './components/mobile-card/mobile-card.component';
import { ApiService } from './services/api.service';
import {  HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MobileContainerComponent,
    MobileCardComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [ApiService]
})
export class MobileModule { }
