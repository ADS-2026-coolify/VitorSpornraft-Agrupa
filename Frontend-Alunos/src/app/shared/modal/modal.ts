import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],
})
export class ModalComponent {
  @Input() show = false;

  @Input() title = '';
  @Input() message = '';
  @Input() highlightText = '';

  @Input() icon = 'bi-info-circle-fill';
  @Input() color = '#5ec555';

  @Input() confirmText = 'OK';
  @Input() cancelText?: string;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm(): void {
    this.confirm.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
