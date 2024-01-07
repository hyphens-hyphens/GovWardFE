import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-map-ads',
    templateUrl: './map-ads.component.html',
    styleUrls: ['./map-ads.component.scss']
})
export class MapAdsComponent implements OnInit {
    title: string = 'google-maps'
    ide?: HTMLElement
    map?: google.maps.Map;
    service: google.maps.places.PlacesService;
    infoWindow: google.maps.InfoWindow;
    keysearch: string = "";
    //
    currentPlaceSelected?: CurrentPlaceSelect;
    private marker: google.maps.Marker | undefined;

    //
    ngOnInit(): void {
        const loader = new Loader(
            {
                apiKey: environment.tokenGoogleMap,
                version: "weekly",
                libraries: ["places"],
            },

        )
        //const idne: HTMLElement | null = document.getElementById("map");

        loader.load().then(async () => {
            const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

            //10.762895626501159, 106.68246709300097
            this.map = new Map(document.getElementById("map") as HTMLElement, {
                center: { lat: 10.764483718998617, lng: 106.68246709300097 },
                zoom: 17,
            });

            this.selectSearch();

            this.locationOnClickHandle();

            this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
                console.log(
                    "event", event
                )
                this.handleClick(event);
            });
        });
    }

    locationOnClickHandle() {
        google.maps.event.addListener(this.map, 'click', (event: google.maps.MapMouseEvent) => {
            const clickedLocation = event.latLng;

            // Remove the previous marker, if it exists
            if (this.marker) {
                this.marker.setMap(null); // Remove marker from the map
            }

            // Create a new marker at the clicked location
            this.marker = new google.maps.Marker({
                position: clickedLocation,
                map: this.map,
            });

            // Retrieve the latitude and longitude of the clicked position
            const lat = clickedLocation.lat();
            const lng = clickedLocation.lng();
            const a = clickedLocation.toJSON();

            console.log('clickedLocation', a);

        });
    }


    public focusToLocation(latitude: number, longitude: number): void {
        if (this.map) {
            if (this.marker) {
                this.marker.setMap(null); // Remove marker from the map
            }
            const newPosition = new google.maps.LatLng(latitude, longitude);
            // Create a new marker at the clicked location


            this.marker = new google.maps.Marker({
                position: newPosition,
                map: this.map,
                icon: this.generateIconDefault()
            });
            this.map.panTo(newPosition);
        }
    }

    private handleClick(event: google.maps.MapMouseEvent): void {
        const location = event.latLng;
        console.log(`${location.lat()}, ${location.lng()}`)
        const placesService = new google.maps.places.PlacesService(this.map!);
        placesService.findPlaceFromQuery(
            {
                query: `${location.lat()}, ${location.lng()}`,
                fields: ['name', 'formatted_address']
            },
            (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    const place = results[0];
                    if (place) {
                        const placeName = place.name;
                        const placeAddress = place.formatted_address;
                        this.showInfoWindow(location, placeName);

                        console.log(place)
                    }
                    else {
                        console.log(results)
                    }
                }
            }
        );
    }

    private showInfoWindow(location: google.maps.LatLng, name: string): void {
        this.infoWindow?.setContent(`<strong>${name}</strong>`);
        this.infoWindow?.setPosition(location);
        this.infoWindow?.open(this.map);
    }
    generateIconDefault() {
        const icon = {
            url: './assets/media/icons/duotune/art/art003.svg',
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25),
        };
        return icon;
    }

    public selectSearch() {
        // Create the search box and link it to the UI element.
        const input = document.getElementById("pac-input") as HTMLInputElement;
        const searchBox = new google.maps.places.SearchBox(input);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        this.map.addListener("bounds_changed", () => {
            searchBox.setBounds(this.map.getBounds() as google.maps.LatLngBounds);
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

    public searchPlace() {
        const sydney = new google.maps.LatLng(10.810464, 106.686571);

        this.infoWindow = new google.maps.InfoWindow();

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

    public createMarker(place: google.maps.places.PlaceResult) {
        if (!place.geometry || !place.geometry.location) return;
        var icon = {
            url: './assets/media/avatars/300-3.jpg', // Replace with the path to your custom image
            scaledSize: new google.maps.Size(50, 50), // Adjust the size as needed
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(25, 25) // Position of the marker
        };
        const marker = new google.maps.Marker();
        marker.setMap(this.map);
        marker.setIcon(icon);
        marker.setTitle("PhatNVN");
        marker.setPosition(place.geometry.location);
        google.maps.event.addListener(marker, "click", () => {
            this.infoWindow.setContent("abc");
            this.infoWindow.open(this.map);
            console.log("marker in here")
        });


    }

    test(): void {
        // //const hcmus = { center: { lat: 10.764483718998617, lng: 106.68246709300097 } }
        // const hcmusLocation = new google.maps.LatLng(10.764483718998617, 106.68246709300097);
        // const hcmusPlace: google.maps.places.PlaceResult = {
        //     geometry: { location: hcmusLocation },
        // };
        // this.createMarker(hcmusPlace);
        this.focusToLocation(10.764483718998617, 106.68246709300097)
    }
}

// export const mapIcon {
//     default = {
//         url: './assets/media/icons/duotune/art/art003.svg',
//         size: new google.maps.Size(71, 71),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(17, 34),
//         scaledSize: new google.maps.Size(25, 25),
//     };
// }
export class CurrentPlaceSelect {
    lat: number;
    lng: number;
}