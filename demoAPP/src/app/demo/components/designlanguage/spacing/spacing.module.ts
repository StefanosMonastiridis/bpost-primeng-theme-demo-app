import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacingComponent } from './spacing.component';
import { SpacingRoutingModule } from './spacing-routing.module';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';



@NgModule({
	imports: [
		CommonModule,
		SpacingRoutingModule,
		MessagesModule,
		MessageModule,
		RippleModule,
		ToastModule
		],
	declarations: [SpacingComponent]
})
export class SpacingModule { }
