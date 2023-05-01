import { NgModule } from '@angular/core';
import { PhotoGridComponent } from './photo-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common'

@NgModule({
    imports: [MatGridListModule, CommonModule],
    exports: [PhotoGridComponent, MatGridListModule],
    declarations: [PhotoGridComponent],
    providers: [],
 })
export class PhotoGridModule{}