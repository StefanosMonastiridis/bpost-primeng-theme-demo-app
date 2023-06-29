import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypoDemoComponent } from './typodemo.component';
import { TypoDemoRoutingModule } from './typodemo-routing.module';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';



@NgModule({
	imports: [
		CommonModule,
		TypoDemoRoutingModule,
		MessagesModule,
		MessageModule,
		RippleModule,
		ToastModule
		],
	declarations: [TypoDemoComponent]
})
export class TypoDemoModule { }
