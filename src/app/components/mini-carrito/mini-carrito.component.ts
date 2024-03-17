import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mini-carrito',
  templateUrl: './mini-carrito.component.html',
  styleUrls: ['./mini-carrito.component.css']
})
export class MiniCarritoComponent implements OnInit{
  productosEnCarrito: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productosEnCarrito = this.productService.productosEnCarrito;
  }
}
