import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileCardComponent } from './components/mobile-card/mobile-card.component';
import { MobileContainerComponent } from './components/mobile-container/mobile-container.component';

const routes: Routes = [
  {path: '', component: MobileContainerComponent},
  {path: 'mobile-card', component: MobileCardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
