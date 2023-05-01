import { NgModule } from '@angular/core';
import { PhotoGridComponent } from './photo-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    imports: [MatGridListModule],
    exports: [PhotoGridComponent, MatGridListModule],
    declarations: [PhotoGridComponent],
    providers: [],
 })
export class PhotoGridModule{}