import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacingComponent } from './spacing.component';
import { SpacingRoutingModule } from './spacing-routing.module';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';



@NgModule({
	imports: [
		CommonModule,
		SpacingRoutingModule,
		MessagesModule,
		MessageModule,
		RippleModule,
		ToastModule,
		TagModule
		],
	declarations: [SpacingComponent]
})
export class SpacingModule { }
