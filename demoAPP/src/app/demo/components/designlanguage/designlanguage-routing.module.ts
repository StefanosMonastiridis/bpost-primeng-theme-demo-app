import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons/icons.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'colours', data: { breadcrumb: 'Colours' }, loadChildren: () => import('./colours/colours.module').then(m => m.ColoursModule) },
        { path: 'typography', data: { breadcrumb: 'Typography' }, loadChildren: () => import('./typography/typodemo.module').then(m => m.TypoDemoModule) },
        { path: 'spacing', data: { breadcrumb: 'Spacing' }, loadChildren: () => import('./spacing/spacing.module').then(m => m.SpacingModule) },
        { path: 'icons', data: { breadcrumb: 'Icons' }, component: IconsComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class DesignLanguageRoutingModule { }
