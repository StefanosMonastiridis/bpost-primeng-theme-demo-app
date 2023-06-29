import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypoDemoComponent } from './typodemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: TypoDemoComponent }
	])],
	exports: [RouterModule]
})
export class TypoDemoRoutingModule { }
