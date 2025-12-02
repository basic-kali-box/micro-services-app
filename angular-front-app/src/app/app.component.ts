import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Invoice App</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Customers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Bills</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="mt-3">
        <h1>Welcome to Invoice Management System</h1>
        <p>This is a simplified Angular Frontend.</p>
        <p>Use the Gateway (port 8888) to access services:</p>
        <ul>
            <li><a href="http://localhost:8888/CUSTOMER-SERVICE/customers">Customers</a></li>
            <li><a href="http://localhost:8888/INVENTORY-SERVICE/products">Products</a></li>
            <li><a href="http://localhost:8888/BILLING-SERVICE/fullBill/1">Bill 1</a></li>
        </ul>
      </div>
    </div>
  `,
    styles: []
})
export class AppComponent {
    title = 'angular-front-app';
}
