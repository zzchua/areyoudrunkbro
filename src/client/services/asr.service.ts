import { Http, Headers, RequestOptions, Response }      from '@angular/http';
import { Injectable }                                   from '@angular/core';
import { Observable }                                   from 'rxjs';
import { Constants }                                    from './../constants';
import 'rxjs/add/operator/map';



@Injectable()
export class AsrService {

    constructor(private http: Http) { }

    callAsr(audioBlob: Blob): Observable<any> {
        return Observable.create(observer => {
            let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();
            formData.append("audioFile", audioBlob);
            formData.append("encoding", "audio/wav");
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open('POST', Constants.asrUrl, true);
            xhr.setRequestHeader('Authorization', `Basic RWtoYU1PeHFXUXdLd2VEWTpWa2doNnpkbHFXQWx5Y3V1`);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.send(formData);
        });
    }


    responseCallBack(response: any) {
        let resJson = response.json();
        console.log(resJson);
        return resJson;
    }

}