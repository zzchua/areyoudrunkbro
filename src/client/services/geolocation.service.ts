import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

const GEOLOCATION_ERRORS = {
	'unsupportedBrowser': 'Browser does not support location services',
	'permissionDenied': 'You have rejected access to your location',
	'positionUnavailable': 'Unable to determine your location',
	'timeout': 'Service timeout'
};

@Injectable()
export class GeolocationService {

    // location returned as an observable:
    // available attributes: coordinates:latitude, longitude, accuracy, altitude, heading, timestamp, speed
    public getLocation(): Observable<any> {
        return Observable.create(observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(
                    (position) => {
                        observer.next(position);
                        observer.complete();
                    },
                    (error) => {
                        switch (error.code) {
                            case 1: 
                                observer.error(GEOLOCATION_ERRORS['permissionDenied']);
                                break;
                            case 2:
                                observer.error(GEOLOCATION_ERRORS['positionUnavailable']);
                                break;
                            case 3:
                                observer.error(GEOLOCATION_ERRORS['timeout']);
                                break;
                        }
                    }
                );
            } else {
                observer.error(GEOLOCATION_ERRORS['unsupportedBrowser']);
            }
        });
    }
}