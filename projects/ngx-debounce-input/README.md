# NgxDebounceInput

[DEMO](https://stackblitz.com/edit/stackblitz-starters-mkgg2r?file=src%2Fapp%2Fapp.component.ts)

# Installation

Use this following command to install:

```bash
npm i ngx-debounce-input
```

# Usage

```
import { NgxDebounceInputModule } from 'ngx-debounce-input';

@NgModule({
  ...,
  imports: [NgxDebounceInputModule],
})
export class FeatureModule {}
```

If Your Angular version is higher than 14 You can also import `NgxDebounceInputModule` to your standalone component.

# Using

`HTML` template:

```
<!-- delay 1s after user's input (default) -->
<input ngxDebounceInput (search)="doSmth($event)" />
<!-- delay 2s after user's input -->
<input ngxDebounceInput [debounceTime]="2000" (search)="doSmth($event)" />
```
