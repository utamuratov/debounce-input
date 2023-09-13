# NgxDebounceInput

[DEMO](https://stackblitz.com/edit/stackblitz-starters-mkgg2r?file=src%2Fapp%2Fapp.component.ts)

# Installation

Use this following command to install:

```bash
npm i ngx-debounce-input
```

# Usage

```
import { NgxDebounceInputDirective } from 'ngx-debounce-input';

@NgModule({
  ...,
  imports: [NgxDebounceInputDirective], // Or import NgxDebounceInputModule
})
export class FeatureModule {}
```

\*\*Your Angular version should be >= 16.

# Using

`HTML` template:

```
<!-- delay 1s after user's input (default) -->
<input ngxDebounceInput (search)="doSmth($event)" />
<!-- delay 2s after user's input -->
<input ngxDebounceInput [debounceTime]="2000" (search)="doSmth($event)" />
```
