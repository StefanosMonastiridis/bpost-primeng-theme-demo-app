import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColoursComponent } from './colours.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ColoursComponent }
	])],
	exports: [RouterModule]
})
export class ColoursRoutingModule { }
