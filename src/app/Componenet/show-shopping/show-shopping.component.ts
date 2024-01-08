import { Component } from '@angular/core';
import { Product } from 'src/app/Model/product/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-show-shopping',
  templateUrl: './show-shopping.component.html',
  styleUrls: ['./show-shopping.component.css']
})
export class ShowShoppingComponent {
  cartItems: Product[] = [];
  constructor(private productService: ProductService) {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.productService.getCartItems().subscribe((items: Product[]) => {
      this.cartItems = items;
    });
  }
/*
  buyItem(item: Product): void {
    // Appel de la méthode addToCart du service pour acheter l'élément
    this.productService.addToCart(item).subscribe(() => {
      // Après avoir acheté l'élément, rechargez les éléments du panier pour afficher la mise à jour
      this.loadCartItems();
    });
  }
  */
}
