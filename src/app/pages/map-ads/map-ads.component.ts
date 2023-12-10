import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';



@Component({
  selector: 'app-map-ads',
  templateUrl: './map-ads.component.html',
  styleUrls: ['./map-ads.component.scss']
})
export class MapAdsComponent implements OnInit {
  title = 'google-maps'
   ide : HTMLElement 
  ngOnInit(): void {
    const loader = new Loader(
      {
        apiKey: "AIzaSyD1jYr2uzhkAsZQm4Cnz64xEAr2K9pte8A",
        version: "weekly", 
      },
     
    )
    const idne: HTMLElement | null = document.getElementById("map");
      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        new Map(document.getElementById("map") as HTMLElement, {
          center: {lat:10.810464, lng: 106.686571 },
          zoom: 14,
        });
      });
    

  }

}
