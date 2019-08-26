import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MultiselectDemoComponent } from './multiselect-demo.component';

const multiSelectRoutes: Routes = [
    { path: '', component: MultiselectDemoComponent }
]
@NgModule({
    imports: [
        RouterModule.forChild(multiSelectRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MultiselectRoutingModule { }