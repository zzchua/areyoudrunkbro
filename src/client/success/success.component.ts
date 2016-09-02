import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TtsService }                             from './../services/tts.service';

@Component({
  selector: 'success',
  template: require('./success.component.html'),
  styles: [require('./success.component.css')],
  providers:[TtsService]
})
export class SuccessComponent {

    @Input() results:number;
    private successText: string; 
    
    @Output() flowController = new EventEmitter<string>();

    constructor(private TtsService: TtsService) {
      this.successText = "You passed, get another round!";
      this.TtsService.getTts(this.successText);
    }

    onInit() {
    }

    tryAgain() {
      this.flowController.emit('record');
    }

}