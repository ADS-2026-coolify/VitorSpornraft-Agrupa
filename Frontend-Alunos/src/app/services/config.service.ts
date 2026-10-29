import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private apiUrl!: string;

  loadConfig(): void {
    const { hostname, port, origin } = window.location;

    if (port === '4200') {
      // Desenvolvimento local (ng serve): backend roda direto na porta 8080
      this.apiUrl = `http://${hostname}:8080`;
    } else {
      // Producao (Coolify): o Nginx encaminha /api para o backend
      this.apiUrl = `${origin}/api`;
    }

    console.log('API configurada:', this.apiUrl);
  }

  getApi(path: string): string {
    if (!this.apiUrl) {
      throw new Error('Configuração ainda não carregada!');
    }
    return `${this.apiUrl}/${path}`;
  }
}
