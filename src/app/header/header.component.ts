import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <nav class="">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap "
            >SignalStore</span
          >
        </a>

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
          >
            <li>
              <a href="/products" class="block py-2 px-3" aria-current="page"
                >Productos</a
              >
            </li>
            <li>
              <a href="/cart" class="block py-2 px-3">Carrito</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: ``,
})
export class HeaderComponent {}
