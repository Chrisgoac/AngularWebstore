import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-product',
  template: `
    <button (click)="toggleFavorite()">
      <span *ngIf="!isFavorite">Marcar como favorito</span>
      <span *ngIf="isFavorite">Quitar de favoritos</span>
    </button>
  `
})
export class FavoriteProductComponent {
  @Input() isFavorite: boolean = false;
  @Output() favoriteChanged = new EventEmitter<boolean>();

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.favoriteChanged.emit(this.isFavorite);
  }
}
