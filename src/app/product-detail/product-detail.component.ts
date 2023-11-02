import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent implements OnInit {

  idProduit = 0;
  currentProduct:any;
  db:any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // On essaie de récupérer l'ID qui se trouve dans l'URL
    this.idProduit = +this.route.snapshot.params['id'];

    //recuperer notre localStorage
    this.db = JSON.parse(localStorage.getItem('produits') || '[]');

    //Recuperer dans notre local storage le produit qui a l'idProduit(id qui ce trouve au niveau de l'url)
    this.currentProduct = this.db.find((element:any) => element.id == this.idProduit);

  }


}
