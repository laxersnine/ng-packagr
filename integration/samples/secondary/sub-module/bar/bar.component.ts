import { Component } from '@angular/core';
import { SHARED_MAGIC_STUFF } '@sample/secondary-lib/shared-module';

@Component({
  selector: 'bar-component',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {

  public message = SHARED_MAGIC_STUFF;
}
