import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons/icons.component';
import { ColoursComponent } from './colours/colours.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'colours', data: { breadcrumb: 'Colours' }, component: ColoursComponent },
        { path: 'typography', data: { breadcrumb: 'Typography' }, loadChildren: () => import('./typography/typodemo.module').then(m => m.TypoDemoModule) },
        { path: 'spacing', data: { breadcrumb: 'Spacing' }, loadChildren: () => import('./spacing/spacing.module').then(m => m.SpacingModule) },
        { path: 'icons', data: { breadcrumb: 'Icons' }, component: IconsComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class DesignLanguageRoutingModule { }
