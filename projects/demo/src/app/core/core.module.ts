import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    SharedModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.')
    }
  }
  // public static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: CoreModule,
  //     providers: []
  //   }
  // }
}
