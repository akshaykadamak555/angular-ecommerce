import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import("./mobile/mobile.module").then(m => m.MobileModule)},
  {path: "laptop", loadChildren: () => import("./laptop/laptop.module").then(m => m.LaptopModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
