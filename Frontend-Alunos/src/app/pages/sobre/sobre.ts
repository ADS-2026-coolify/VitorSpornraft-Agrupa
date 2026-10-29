import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './sobre.html',
  styleUrls: ['./sobre.css']
})
export class SobreComponent {}