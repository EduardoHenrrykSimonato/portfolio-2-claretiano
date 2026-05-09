import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      const hasOverlay = document.querySelector('ion-alert, ion-action-sheet, ion-popover, ion-modal, ion-select-popover');
      if (hasOverlay) return;
      this.router.navigate(['/menu-principal']);
    }
  }
}
