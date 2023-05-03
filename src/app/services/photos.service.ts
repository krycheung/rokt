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

    constructor(private httpClient: HttpClient) {}

    getPhotos(url: string): Observable<PhotoData> {
        let headers = new HttpHeaders().set('Authorization', environment.apiKey);
        return this.httpClient.get<PhotoData>(url, {headers: headers})
        .pipe(
            catchError((err) => {
                return throwError(() => err)
            })
        )
    }

}