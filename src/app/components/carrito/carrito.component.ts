import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Inicializar el carrito con los productos guardados en el servicio
    this.productosEnCarrito = this.productService.productosEnCarrito;
    console.log(this.productosEnCarrito)
  }

  quitarDelCarrito(producto: any): void {
    this.productService.quitarProductoDeCarrito(producto);
  }
  
}
