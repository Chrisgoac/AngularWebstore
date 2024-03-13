import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../models/products.model';
import { Categories } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: Products[] = [
    new Products(1, "Smartphone X", "High-performance smartphone with advanced features.", "https://technostore.es/wp-content/uploads/smartphone_v3_3.jpg", 500, new Categories(1, "Electronics"), false),
    new Products(2, "Wireless Headphones", "Premium wireless headphones with noise cancellation.", "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo3-wireless/pdp/product-carousel/black/pc-solo3-black-thrqtr-left.jpg", 150, new Categories(1, "Electronics"), false),
    new Products(3, "Running Shoes", "Comfortable running shoes with advanced cushioning technology.", "https://www.rebelsport.co.nz/globalassets/2.-rebel-sport/004.-site-assets/inspo/what-to-wear-when-running/running-shoes-image-mob.jpg", 100, new Categories(2, "Sportswear"), false),
    new Products(4, "Smart Watch", "Sleek smartwatch with fitness tracking and heart rate monitor.", "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1679295047.83578982!400x400!85.png", 200, new Categories(1, "Electronics"), false),
    new Products(5, "Coffee Maker", "High-quality coffee maker with programmable settings.", "https://m.media-amazon.com/images/I/71uLuTiXQlL._AC_SL1500_.jpg", 80, new Categories(3, "Kitchen Appliances"), false),
    new Products(6, "Portable Speaker", "Compact portable speaker with Bluetooth connectivity.", "https://www.jbl.es/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfe329ac6/JBL_BOOMBOX3_WIFI_HERO_37919_x4.png?sw=680&sh=680", 70, new Categories(1, "Electronics"), false),
    new Products(7, "Laptop", "Powerful laptop with high-resolution display and fast processor.", "https://via.placeholder.com/150", 1000, new Categories(1, "Electronics"), false),
    new Products(8, "Gaming Console", "State-of-the-art gaming console for immersive gaming experience.", "https://via.placeholder.com/150", 400, new Categories(1, "Electronics"), false),
    new Products(9, "Hiking Backpack", "Durable hiking backpack with multiple compartments and padded straps.", "https://via.placeholder.com/150", 120, new Categories(4, "Outdoor Gear"), false),
    new Products(10, "Digital Camera", "Professional digital camera with high-resolution sensor and 4K video recording.", "https://via.placeholder.com/150", 800, new Categories(1, "Electronics"), false),
    new Products(11, "Blender", "Versatile blender for making smoothies, soups, and sauces.", "https://via.placeholder.com/150", 60, new Categories(3, "Kitchen Appliances"), false),
    new Products(12, "Fitness Tracker", "Activity tracker with heart rate monitoring and sleep tracking features.", "https://via.placeholder.com/150", 150, new Categories(1, "Electronics"), false)
  ];

  getProducts(): Observable<Products[]> {
    return of(this.products);
  }

  editProduct(product: Products): Observable<Products> {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
      return of(this.products[index]);
    } else {
      return new Observable<Products>((observer) => {
        observer.error(new Error('Producto no encontrado'));
      });
    }
  }

}
