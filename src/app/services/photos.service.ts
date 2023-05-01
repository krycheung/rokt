import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PhotoData } from '../models/photos-data.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class PhotoService {

    apiUrl: string = `${environment.apiUrl}/curated/?per_page=10`

    constructor(private httpClient: HttpClient) {}

    //TODO: Hide api key
    getPhotos(): Observable<PhotoData> {
        let headers = new HttpHeaders().set('Authorization', 'eZji5h1Ie55Dxk7FCdycI0hZdLwp4Or5twRaTTj5mYCJ3W87Wvr2K19M');
        return this.httpClient.get<PhotoData>(this.apiUrl, {headers: headers})
        .pipe(
            catchError((err) => {
                return throwError(() => err)
            })
        )
    }
}