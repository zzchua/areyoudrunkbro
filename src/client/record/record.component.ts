import { Component, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { WordsToSay }                                             from './../services/wordstosay.service';
import {AsrService}                                               from './../services/asr.service';
import { TtsService }                                             from './../services/tts.service';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
var Recorder = require('./../../../vendor/recorder.js');
var score = require('fuzzy-string-matching');

@Component({
  selector: 'record',
  template: require('./record.component.html'),
  styles: [require('./record.component.css')],
  providers: [WordsToSay, AsrService, TtsService]
})
export class RecordComponent implements OnInit, AfterViewInit {
  private audioContext: any;
  private test: any;
  private recorder: any;
  private nav: any;
  private wind: any;
  private recordState: boolean;
  private buttonText: string;
  private audioFile: any;
  private quote: string;
  private score: number;
  @Output() flowController = new EventEmitter<string>();
  @Output() confidenceResult = new EventEmitter<number>();


  constructor(private wordsToSay: WordsToSay, private asrService: AsrService, private ttsService: TtsService) {
    this.quote = this.wordsToSay.quotes[Math.floor(Math.random() * this.wordsToSay.quotes.length)];
  }


  ngOnInit() {
    // hacky way to get around typescript
    this.wind = window;
    this.nav = navigator;
    this.recordState = false;
    this.buttonText = "Check Your Sobriety";
    this.audioContext = new AudioContext;
    // this.ttsService.getTts('You drunk bro? Repeat the phrase and we shall see...', 'AustinBadGuy');
    this.sayPhrase();
  }

  sayPhrase() {

    this.ttsService.getTts('You drunk bro?\\pau=700\\ Repeat the phrase below...' );
  }


  ngAfterViewInit() {
    // webkit shim
    try {
      this.wind.AudioContext = this.wind.AudioContext || this.wind.AudioContext.webkitAudioContext;
      this.nav.getUserMedia = this.nav.getUserMedia || this.nav.webkitGetUserMedia;
      this.wind.URL = this.wind.URL || this.wind.webkitURL;
      console.log('Audio context set up.');
      console.log('navigator.getUserMedia ' + (this.nav.getUserMedia ? 'available.' : 'not present!'));
    } catch (e) {
      alert('No web audio support in this browser');
    }
    this.nav.getUserMedia(
      { audio: true },
      (stream) => {
        let input = this.audioContext.createMediaStreamSource(stream);
        console.log('Media stream created.');
        this.recorder = new Recorder(input);
        console.log('Recorder initialised.');
      },
      (e) => {
        console.log('No live audio input: ' + e);
      }
    );
  }

  toggleRecording() {
    if (this.recordState) {
      // set to stop recording:
      this.recordState = false;
      this.recorder && this.recorder.stop();
      this.buttonText = "Are You Drunk Bro?";
      console.log('Stopped recording.');
      // export or send the wave:
      this.exportWAV();
      this.recorder.clear();
      document.getElementById('record').hidden = true;
      document.getElementById('drake').hidden =false;
      
    } else {
      // set to start recording:
      this.recordState = true;
      this.recorder && this.recorder.record();
      this.buttonText = "I'm Done Talking";
      console.log('Recording...');

    }
  }

  exportWAV() {
    this.recorder.exportWAV((blob: Blob) => {
      this.audioFile = blob;
      console.log(blob);
      this.asrService.callAsr(blob).subscribe(
        (response) => {
          var res = response.results[0].utterance.toLowerCase();
          var quote = this.quote.toLowerCase();
          this.score = score(this.quote, response.results[0].utterance);
          console.log(this.score);
          document.getElementById('analyze').hidden = false;
          document.getElementById('drake').hidden = true;
          document.getElementById('record').setAttribute('disabled', 'true');
          document.getElementById('record').hidden = true;
        },
        (err) => console.log('error ' + err)
      );
    });
  }

  proceed() {
    this.confidenceResult.emit(this.score);
    if (this.score > 0.5) {
      this.flowController.emit('success');
    } else {
      this.flowController.emit('failure');
    }
  }

}