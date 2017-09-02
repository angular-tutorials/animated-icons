import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-5">
      <div class="row">
        <div class="col text-center" *ngFor="let set of iconSets">
          <button (click)="set.animate = !set.animate" class="btn btn-outline-primary">
            {{set.animate ? 'Disable' : 'Enable'}} {{set.label}}
          </button>
          <h1 class="mt-5" [style.color]="set.color">
            <animated-icon [icons]="set.icons" [animate]="set.animate" [delay]="set.delay"></animated-icon>
          </h1>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  iconSets = [
    {
      animate: true,
      delay: 1000,
      color: 'green',
      label: 'charging',
      icons: [
        'fa fa-battery-0',
        'fa fa-battery-1',
        'fa fa-battery-2',
        'fa fa-battery-3',
        'fa fa-battery-4',
      ]
    }, {
      animate: true,
      delay: 500,
      color: 'red',
      label: 'heating',
      icons: [
        'fa fa-thermometer-0',
        'fa fa-thermometer-1',
        'fa fa-thermometer-2',
        'fa fa-thermometer-3',
        'fa fa-thermometer-4',
      ]
    }, {
      animate: true,
      delay: 300,
      color: 'blue',
      label: 'waiting',
      icons: [
        'fa fa-hourglass-start',
        'fa fa-hourglass-half',
        'fa fa-hourglass-end',
      ]
    }
  ]

}
