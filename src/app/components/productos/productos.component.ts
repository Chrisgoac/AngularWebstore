import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  totalProducts: number = 0;
  itemsPerPage: number = 5;
  currentPage: number = 1;
  searchText: string = '';
  selectedCategory: string = '';
  priceRange: number[] = [0, 1000];
  quantity: number = 1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  onFavoriteChanged(isFavorite: boolean, product: Products): void {
    product.isFavorite = isFavorite;
    this.productService.editProduct(product).subscribe(updatedProduct => {
      console.log('Producto actualizado:', updatedProduct);
    });
  }

  agregarAlCarrito(producto: any): void {
    this.productService.agregarAlCarrito(producto);
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products: Products[]) => {
      this.products = products;
      this.applyFilters();
    });
  }

  changeQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      let matchesSearchText = true;
      let matchesCategory = true;
      let matchesPriceRange = true;

      // Filter by search text
      if (this.searchText) {
        const searchTextLower = this.searchText.toLowerCase();
        matchesSearchText = product.name.toLowerCase().includes(searchTextLower) ||
          product.description.toLowerCase().includes(searchTextLower);
      }

      // Filter by category
      if (this.selectedCategory) {
        matchesCategory = product.category.name === this.selectedCategory;

      }

      // Filter by price range
      const productPrice = product.price;
      matchesPriceRange = productPrice >= this.priceRange[0] && productPrice <= this.priceRange[1];

      return matchesSearchText && matchesCategory && matchesPriceRange;
    });

    this.totalProducts = this.filteredProducts.length;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  addToCart(product: Products): void {
    // Implement cart functionality here
    console.log('Product added to cart:', product);
  }

  toggleFavorite(product: Products): void {
    product.isFavorite = !product.isFavorite;
    // Update product's favorite status in the database or wherever it's stored
  }
}
