import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Model/product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000';

  // Ajouter un produit à la liste des produits
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/product`, product);
  }

  // Récupérer tous les produits
  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/product`);
  }
  

  // Ajouter un produit au panier (cart) dans db.json
  addToCart(product: Product): Observable<any> {
    const url = `${this.apiUrl}/cart`; // Endpoint pour ajouter au panier
    return this.http.post<any>(url, product);
  }
  
   // Récupérer les éléments du panier (cart) depuis db.json
   getCartItems(): Observable<Product[]> {
    const url = `${this.apiUrl}/cart`; // Endpoint pour récupérer les éléments du panier
    return this.http.get<Product[]>(url);
  }

  // Récupérer un produit par son ID
  getProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl}/product/${id}`; // Endpoint pour récupérer un produit par son ID
    return this.http.get<Product>(url);
  }

  // Supprimer un produit par son ID
  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/product/${id}`; // Endpoint pour supprimer un produit
    return this.http.delete<void>(url);
  }
  
  }



