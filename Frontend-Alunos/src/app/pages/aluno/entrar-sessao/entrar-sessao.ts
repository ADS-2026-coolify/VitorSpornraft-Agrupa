import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../shared/header/header';

@Component({
  selector: 'app-entrar-sessao',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './entrar-sessao.html',
  styleUrls: ['./entrar-sessao.css']
})
export class EntrarSessaoComponent {
  sessionId = '';
  error = false;

  
  constructor(private router: Router) { }


  entrar(): void {
    if (!this.sessionId.trim()) {
      this.error = true;
      return;
    }

    this.error = false;

    this.router.navigate(['/aluno/validar'], {
      queryParams: { hash: this.sessionId }
    });
  }
}
