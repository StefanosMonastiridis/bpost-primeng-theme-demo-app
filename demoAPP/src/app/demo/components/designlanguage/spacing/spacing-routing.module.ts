import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpacingComponent } from './spacing.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: SpacingComponent }
	])],
	exports: [RouterModule]
})
export class SpacingRoutingModule { }
