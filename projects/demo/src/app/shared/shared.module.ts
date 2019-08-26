import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@ngx-commons/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [
    MatSidenavModule,
    CommonModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class SharedModule { }
