import { Component } from '@angular/core';

@Component({
  selector: 'app-html-render',
  templateUrl: './html-render.component.html',
  styleUrls: ['./html-render.component.scss']
})
export class HtmlRenderComponent {

  test: any;
  gg: any = false;
  render() {
    this.test;
    this.gg = true;
    debugger
  }
}
