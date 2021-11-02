import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SimulatorComponent} from "./components/simulator/simulator.component";
import {UpdateComponent} from "./components/update/update.component";

const routes: Routes = [
  {path: 'simulator',component: SimulatorComponent},
  {path: 'update',component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
