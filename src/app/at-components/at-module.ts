import * as  pag from './ATGrid/at-grid-pagination/at-grid-pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtGridComponent } from './ATGrid/at-grid/at-grid.component';


@NgModule({
    imports: [CommonModule],
    exports: [AtGridComponent],
    declarations: [AtGridComponent, pag.AtGridPaginationComponent],// pagging component should not exposed to app module
    providers: [],
    
})
export class AtModule { }
