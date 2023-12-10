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
  map: google.maps.Map;
  service: google.maps.places.PlacesService;
  infowindow: google.maps.InfoWindow;
  
  ngOnInit(): void {
    const loader = new Loader(
      {
        apiKey: "AIzaSyD1jYr2uzhkAsZQm4Cnz64xEAr2K9pte8A",
        version: "weekly", 
        libraries: ["places"]
      },
     
    )
    const idne: HTMLElement | null = document.getElementById("map");
      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        
        this.map = new Map(document.getElementById("map") as HTMLElement, {
          center: {lat:10.810464, lng: 106.686571 },
          zoom: 14,
        });
        this.searchPlace();
      });
    

  }
 
   searchPlace()  {
    const sydney = new google.maps.LatLng(10.810464, 106.686571);
  
    this.infowindow = new google.maps.InfoWindow();
  
    const request = {
      query: "154 dong hung thuan 5",
      fields: ["name", "geometry"],
    };

     // const {PlacesService} = await google.maps.places('Places') ;
    this.service = new google.maps.places.PlacesService(this.map);
    this.service.findPlaceFromQuery(
      request,
      (
        results: google.maps.places.PlaceResult[] | null,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          for (let i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
  
          this.map.setCenter(results[0].geometry!.location!);
        }
      }
    );
  }
  
  createMarker(place: google.maps.places.PlaceResult) {
    if (!place.geometry || !place.geometry.location) return;
  
    const marker = new google.maps.Marker();
    marker.setMap(this.map);
    marker.setPosition(place.geometry.location);
     google.maps.event.addListener(marker, "click", () => {
      this.infowindow.setContent(place.name || "");
      this.infowindow.open(this.map);
    }); 
  }
}
