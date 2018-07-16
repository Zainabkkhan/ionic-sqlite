import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imageUrl:any
  constructor(public navCtrl: NavController,private camera:Camera) {

  }
takePicture()
{
  var options: CameraOptions =
  {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE

  }

    this.camera.getPicture(options).then((imageData)=>
     {
       this.imageUrl = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
 alert("Error..."+err);
});
   }
   getImage()
   {
     var options: CameraOptions =
     {
       quality: 100,
       destinationType: this.camera.DestinationType.DATA_URL,
       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
       saveToPhotoAlbum:false

     }

       this.camera.getPicture(options).then((imageData)=>
        {
          this.imageUrl = 'data:image/jpeg;base64,' + imageData;
   }, (err) => {
    // Handle error
    alert("Error..."+err);
   });
      }
      cropImage()
      {
        var options: CameraOptions =
        {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          saveToPhotoAlbum:false,
          allowEdit:true,
          targetWidth:200,
          targetHeight:200

        }

          this.camera.getPicture(options).then((imageData)=>
           {
             this.imageUrl = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
       // Handle error
       alert("Error..."+err);
      });
         }
         loginPage()
         {
           this.navCtrl.push(LoginPage);
         }

}
