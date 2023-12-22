import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [CookieService]
})
export class HeaderComponent {

  constructor(private router: Router, private cookieService: CookieService) {}

  logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['start']);
  }

}
