import { Component, Input, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PhotoService } from 'src/app/services/photos.service';
import { catchError, filter, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css'],
  providers: [PhotoService]
})
export class PhotoGridComponent implements OnInit{

  @Input()
  searchText!: string;

  photoObservable!: Observable<any>;
  photos: any;
  data: any;
  nextPage: any;
  previousPage: any;

  currentPage = 1;
  totalPages: any;

  currentPagScope = 1;
  secondPagScope: any;
  thirdPagScope: any;

  apiUrl: string = `${environment.apiUrl}/curated/?per_page=10`

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.loadPhotos()
  }

  searchPhotos(filterValue: any) {
    this.apiUrl = `${environment.apiUrl}/search?query=${filterValue}&per_page=10`
    this.photoService.getPhotos(this.apiUrl).subscribe((results) => {
      this.photos = results.photos;
      this.totalPages = results.total_results / 10 + 1
      this.nextPage = results.next_page ? results.next_page : ""
      this.previousPage = results.prev_page ? results.prev_page : ""
      this.currentPagScope = 1
      this.secondPagScope = this.currentPagScope + 1
      this.thirdPagScope = this.currentPagScope + 2
      sessionStorage.setItem('searchText', filterValue)
    })
  }

  loadNextPage() {
    this.photoService.getPhotos(this.nextPage).subscribe((results) => {
      this.photos = results.photos;
      this.nextPage = results.next_page ? results.next_page : ""
      this.previousPage = results.prev_page
      this.currentPagScope = this.currentPagScope + 1
      this.secondPagScope = this.secondPagScope + 1
      this.thirdPagScope = this.thirdPagScope + 1
    })
  }

  loadPreviousPage() {
    this.photoService.getPhotos(this.previousPage).subscribe((results) => {
      this.photos = results.photos;
      this.nextPage = results.next_page ? results.next_page : ""
      this.previousPage = results.prev_page
      this.currentPagScope = this.currentPagScope - 1
      this.secondPagScope = this.secondPagScope - 1
      this.thirdPagScope = this.thirdPagScope - 1
    })
  }

  loadPhotos(){
    if (sessionStorage.getItem("searchText") == null) {
      this.photoService.getPhotos(this.apiUrl).subscribe((results) => {
        this.photos = results.photos;
        this.totalPages = results.total_results / 10 + 1
        this.nextPage = results.next_page ? results.next_page : ""
        this.previousPage = results.prev_page ? results.prev_page : ""
        this.secondPagScope = this.currentPagScope + 1;
        this.thirdPagScope = this.secondPagScope + 1;
      })
    } else {
      this.searchPhotos(sessionStorage.getItem("searchText"))
    }
  }
}
