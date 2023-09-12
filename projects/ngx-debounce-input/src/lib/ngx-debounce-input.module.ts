import { NgModule } from '@angular/core';
import { DebounceInputDirective } from './debounce-input.directive';

@NgModule({
  declarations: [DebounceInputDirective],
  exports: [DebounceInputDirective],
})
export class NgxDebounceInputModule {}
