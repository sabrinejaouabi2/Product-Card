import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, throwError } from 'rxjs';
import { Product } from 'src/app/Model/product/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  cartItems: Product[] = []; // Ajout de la variable cartItems

  
  successMessage: string = '';


  constructor(private productService: ProductService,private router: Router) {}
  ngOnInit(): void {

    this.productService.getAllProduct().subscribe((data: Product[]) => {
      this.products = data;
    });
  }


  loadCartItems(): void {
    this.productService.getCartItems().subscribe((items: Product[]) => {
      this.cartItems = items;
    });
  }
  loadProducts(): void {
    this.productService.getAllProduct().subscribe((items: Product[]) => {
      this.products = items;
    });
  }
  
  
  /*

  addToCart(product: Product): void {
    const productExistsInCart = this.cartItems.find((item) => item.idProduct === product.idProduct);

    if (productExistsInCart) {
      // Si le produit est déjà dans le panier, affichez une alerte
      alert('Product already exists in the cart!');
    } else {
  
    
      this.productService.addToCart(product).subscribe((response) => {
        // Gérer la réponse ou mettre à jour la liste de produits dans le panier
        this.router.navigate(['/ShopingCard']); // Remplacez '/autre-page' par le chemin de la page de destination
  
      });
    }
*/
addToCart(product: Product): void {
  this.productService.getCartItems().pipe(
    switchMap((items: Product[]) => {
      const productExistsInCart = items.find((item) => item.id === product.id);
      if (productExistsInCart) {
        // Si le produit existe déjà dans le panier, rejeter l'ajout
        return throwError('Product already exists in the cart!');
      } else {
        // Si le produit n'est pas dans le panier, l'ajouter
        return this.productService.addToCart(product);
      }
    })
  ).subscribe(
    () => {
      // Mettre à jour les éléments du panier après l'ajout
      this.loadCartItems();
      this.router.navigate(['/ShopingCard']);
    },
    (error) => {
      console.error('Error adding to cart:', error);
      alert('Error adding to cart: ' + error);
    }
  );
}

deleteProduct(id: number): void {
  this.productService.deleteProduct(id).subscribe(
    () => {
      // Suppression réussie, recharger la liste des produits après suppression
      this.loadProducts();
    },
    (error) => {
      console.error('Error deleting product:', error);
      // Afficher une alerte ou un message d'erreur en cas d'échec de la suppression
      alert('Error deleting product: ' + error);
    }
  );
}
}