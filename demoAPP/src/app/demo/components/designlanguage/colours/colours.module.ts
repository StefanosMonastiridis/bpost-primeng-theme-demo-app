import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColoursComponent } from './colours.component';
import { ColoursRoutingModule } from './colours-routing.module';




@NgModule({
	imports: [
		CommonModule,
        ColoursRoutingModule
	
		],
	declarations: [ColoursComponent]
})
export class ColoursModule { }