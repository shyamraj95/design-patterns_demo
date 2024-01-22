import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-icon',
  styleUrls: ['./svg-icon.component.scss'],
  standalone:true,
  template: `
    <svg>
      // SVG elements don't have properties, therefore attribute binding is needed
      <use attr.xlink:href="assets/Icons/icon-sprite.svg#{{icon}}"></use>
    </svg>
  `
})
export class SvgIconComponent {
  @Input() icon: string='';
}

/* 
example:
<svg-icon icon="table_rows"></svg-icon>

style example:
  svg-icon {
    fill: red;
  }
Generate
https://icomoon.io/app/#/select/image  
  */