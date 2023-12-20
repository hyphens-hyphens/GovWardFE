import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';


@Component({
    selector: 'app-map-ads',
    templateUrl: './map-ads.component.html',
    styleUrls: ['./map-ads.component.scss']
})
export class MapAdsComponent implements OnInit {
    title = 'google-maps'
    ide: HTMLElement
    map: google.maps.Map;
    service: google.maps.places.PlacesService;
    infowindow: google.maps.InfoWindow;
    keysearch: string
    ngOnInit(): void {
        const loader = new Loader(
            {
                apiKey: "AIzaSyBArSGmaIAsNmA-hzgeX-Lk_7DpmgH-PsQ",
                version: "weekly",
                libraries: ["places"],

            },

        )
        const idne: HTMLElement | null = document.getElementById("map");
        loader.load().then(async () => {
            const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

            this.map = new Map(document.getElementById("map") as HTMLElement, {
                center: { lat: 10.810464, lng: 106.686571 },
                zoom: 14,
            });
            this.selectSearch();
        });


    }
    selectSearch() {
        // Create the search box and link it to the UI element.
        const input = document.getElementById("pac-input") as HTMLInputElement;
        const searchBox = new google.maps.places.SearchBox(input);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        this.map.addListener("bounds_changed", () => {
            searchBox.setBounds(this.map.getBounds() as google.maps.LatLngBounds);
            console.log('select search')
        });
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();

            if (places?.length == 0) {
                return;
            }
            let markers: google.maps.Marker[] = [];
            // Clear out the old markers.
            markers.forEach((marker) => {
                marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.
            const bounds = new google.maps.LatLngBounds();

            places?.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                const icon = {
                    url: place.icon as string,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25),
                };

                // Create a marker for each place.
                const marker = new google.maps.Marker({

                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
                marker.setMap(this.map);
                markers.push(
                    marker
                );

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            this.map.fitBounds(bounds);
        });
    }
    searchPlace() {
        const sydney = new google.maps.LatLng(10.810464, 106.686571);

        this.infowindow = new google.maps.InfoWindow();

        const request = {
            query: this.keysearch,
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
        marker.setPosition(place.geometry?.location);
        google.maps.event.addListener(marker, "click", () => {
            this.infowindow.setContent("abc");
            this.infowindow.open(this.map);
            console.log("marker in here")
        });
    }
}
