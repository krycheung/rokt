import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PhotoService } from 'src/app/services/photos.service';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css'],
  providers: [PhotoService]
})
export class PhotoGridComponent implements OnInit{

  photoObservable!: Observable<any>;
  photos: any;
  data: any;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.LoadPhotos()
    // this.photoService
  }

  LoadPhotos(){
    this.photoService.getPhotos().subscribe((results) => {
      this.data = results.photos;
      console.log('JSON Response = ', JSON.stringify(results));
    })
    // this.photoObservable = this.photoService.getPhotos().pipe(
    //   tap(photo => {
    //     console.log('photo', photo)
    //   }),
    //   catchError((err, _) => throwError(err))
    // );
  }
}
