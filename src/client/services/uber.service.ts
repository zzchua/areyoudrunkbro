import { Http, Headers, RequestOptions, Response }      from '@angular/http';
import { Injectable }                                   from '@angular/core';
import { Observable }                                   from 'rxjs/Observable';
import { Constants }                                    from './../constants';


@Injectable()
export class UberService {

    constructor(private http:Http) {}

    callAsr(audioFile:any) {
        let body = {
            audioFile: audioFile,
            encoding: 'audio/wav'
        }
        let headers = new Headers({'Authorization':'Basic ' + Constants.appSecret, 'Accept': 'application/json'})
        let bodyString = JSON.stringify(body);
        this.http.post(Constants.asrUrl, bodyString, headers)
            .map((response: Response) => {
                return this.responseCallBack(response);
            });
    }


    responseCallBack(response: Response){
        let resJson = response.json();
        console.log(resJson);
    }

}