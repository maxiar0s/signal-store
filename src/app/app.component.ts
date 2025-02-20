import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header></app-header>
      <main class="">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [],
})
export class AppComponent {}
