import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/Model/product/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: Product = new Product();
  successMessage: string = '';


  constructor(private productService: ProductService) {}

/*
  add(f: NgForm) {
    if (f.valid) {
      console.log("Formulaire valide et soumis avec succès !");
      console.log("Product: ", this.product);
    }
*/
add(f: NgForm) {
  if (f.valid) {
    this.productService.addProduct(this.product).subscribe({
      next: () => {
        this.product = new Product(); // Réinitialiser le formulaire après l'ajout du produit
        f.reset(); // Réinitialiser le formulaire
        this.successMessage = 'Product successfully added'; // Affichage du message

        console.log("Formulaire valide et soumis avec succès !");

      },
      error: (err) => {
        console.error('Error adding product:', err);
        // Gérer les erreurs ici, afficher un message d'erreur ou effectuer d'autres actions si nécessaire
      }
    });
  }
}

   }


