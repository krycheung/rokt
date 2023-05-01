import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotoGridComponent } from './widgets/photo-grid/photo-grid.component';
// import { MatGridListModule } from '@angular/material/grid-list';
import { PhotoGridModule } from './widgets/photo-grid/photo-grid.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    ,
    HttpClientModule,
    PhotoGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
