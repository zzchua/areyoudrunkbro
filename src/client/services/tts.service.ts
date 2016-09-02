import { Http, Headers, RequestOptionsArgs, Response, URLSearchParams }      from '@angular/http';
import { Injectable }                                   from '@angular/core';
import { Observable }                                   from 'rxjs';
import { Constants }                                    from './../constants';



@Injectable()
export class TtsService {

    constructor(private http: Http) { }

    getTts(text: string) :any {
        // let params: URLSearchParams = new URLSearchParams();
        // params.set('text', text);
        // params.set('voice', "AustinBadGuy");
        
        // let headers: Headers = new Headers();
        // headers.append('Authorization', 'Basic ' + Constants.appSecret);
        // headers.append('Accept', 'blob');
        
        // let requestOptionsArgs = {
        //     search: params,
        //     headers: headers
        // }
        // return this.http.get(Constants.TTS_ENDPOINT, requestOptionsArgs)
        //     .map((response: Response) => {
        //         console.dir(response);
        //        this.parseTts(response);
        //     });
        let xhttp: XMLHttpRequest = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let theWindow: any = window;
                let audio = new theWindow.Audio();
                let blobUrl = window.URL.createObjectURL(xhttp.response);
                audio.src = blobUrl;
                audio.play();   
            }
        };
        let query: string = "?text=" + encodeURIComponent(text) + '&voice=' + encodeURIComponent("Caleb");
        xhttp.open("GET", Constants.TTS_ENDPOINT + query, true);
        xhttp.setRequestHeader("Authorization", "Basic " + Constants.appSecret);
        xhttp.responseType = "blob";
        xhttp.send();
    }   
}