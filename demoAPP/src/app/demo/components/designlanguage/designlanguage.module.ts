import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons/icons.component';
import {DesignLanguageRoutingModule } from './designlanguage-routing.module';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
	imports: [
		CommonModule,
		DesignLanguageRoutingModule,
		InputTextModule
	],
    declarations: [IconsComponent]
	
})
export class DesignLanguageModule { }
