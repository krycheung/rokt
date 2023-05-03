import { NgModule } from '@angular/core';
import { PhotoGridComponent } from './photo-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [HttpClientModule, MatGridListModule, CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, BrowserAnimationsModule, FormsModule],
    exports: [PhotoGridComponent, MatGridListModule, MatFormFieldModule, MatIconModule],
    declarations: [PhotoGridComponent],
    providers: [],
 })
export class PhotoGridModule{}