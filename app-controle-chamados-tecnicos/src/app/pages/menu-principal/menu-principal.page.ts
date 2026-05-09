import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessaoService } from '../../services/sessao.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(
    private router: Router,
    public sessaoService: SessaoService
  ) { }

  ngOnInit() {
  }

  sair() {
    this.sessaoService.limparSessao();
    this.router.navigate(['/login']);
  }
}
