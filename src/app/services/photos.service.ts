import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PhotoData } from '../models/photos-data.model';
import { environment } from 'src/environments/environment';

export class PhotoService {
    constructor(private httpClient: HttpClient) {}

    getPhotos(): Observable<PhotoData> {
        return this.httpClient.get<PhotoData>(`${environment.apiUrl}/curated/?per_page=10`)
    }
}