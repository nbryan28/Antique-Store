import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  OpenLink(url: string) {
    this.router.navigate([url]);
  }

  OpenLinkRefresh() {
   window.location.href = "https://localhost:4200/catalog";
  }
}
