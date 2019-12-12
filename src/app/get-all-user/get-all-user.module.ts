import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetAllUserPageRoutingModule } from './get-all-user-routing.module';

import { GetAllUserPage } from './get-all-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetAllUserPageRoutingModule
  ],
  declarations: [GetAllUserPage]
})
export class GetAllUserPageModule {}
