import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TtsService }                             from './../services/tts.service';

@Component({
  selector: 'failure',
  template: require('./failure.component.html'),
  styles: [require('./failure.component.css')],
  directives: [],
  providers: [TtsService]
})
export class FailureComponent {

  private failText: string;
  @Output() flowController = new EventEmitter<string>();
  @Input() results: number;

  constructor(private TtsService: TtsService) {
    if (this.results < 0.30) {
      this.failText = "Just stop, your cut off.";
    } else {
      this.failText = "You need to take a lap bro!";
    }
    this.TtsService.getTts(this.failText);
  }

  tryAgain() {
    this.flowController.emit('record');
  }

}