//https://ionicframework.com/docs/angular/your-first-app/2-taking-photos
import { Injectable } from '@angular/core';


import {Camera, CameraResultType, CameraSource} from '@capacitor/camera'


@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  //public photos: Photo[] = [];

  constructor() { }

  public async addNewToGallery(): Promise<Photo> {
    // Take a photo

    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Prompt, 
      width:800,
      quality: 70,
      correctOrientation: true 

    });
    

    return {
        filetype: capturedPhoto.format,
        webviewPath: capturedPhoto.webPath
    };
  }
}

export interface Photo {
  filetype: string;
  webviewPath: string;
}
