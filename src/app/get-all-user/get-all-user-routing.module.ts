import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetAllUserPage } from './get-all-user.page';

const routes: Routes = [
  {
    path: '',
    component: GetAllUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetAllUserPageRoutingModule {}
