import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private http = inject(HttpClient);
  private config = inject(ConfigService);

  private API = this.config.getApi('finalizacao');

  downloadPdf(id: number): Observable<Blob> {
    return this.http.get(`${this.API}/${id}/pdf`, {
      responseType: 'blob'
    });
  }
}