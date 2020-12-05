import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechTableComponent } from './tech-table/tech-table.component';

const routes: Routes = [{ path: "", component: TechTableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
