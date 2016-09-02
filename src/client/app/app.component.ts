import { Component, OnInit, ViewEncapsulation }     from '@angular/core';
import { RecordComponent}       from './../record/record.component';
import { SuccessComponent}       from './../success/success.component';
import { FailureComponent}       from './../failure/failure.component';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  encapsulation: ViewEncapsulation.None,
  directives: [RecordComponent, SuccessComponent, FailureComponent]
})
export class AppComponent { 
    private stateSet:string;
    results:number;

    constructor() {}

    ngOnInit() {
      this.stateSet = "record";
    }

    setState(toChange:string){
      console.log('changing state to: ' + toChange);
      this.stateSet = toChange;
    }

    setResult(res:number) {
      this.results = res;
    }
 }
