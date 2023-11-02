import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{

  products = [
    {
      id: 1,
      nom: 'Huile de Massage',
      description: "Pour vos soin de la peau, La peau représente la première barrière du corps humain contre les agressions extérieures comme la pollution, les poussières, le froid ou le soleil. C’est pourquoi il est primordial de prendre soin de sa peau au quotidien. Et pour ce faire, plusieurs solutions s’offrent à vous. Nettoyage, hydratation, exfoliation, écran solaire, démaquillant, sommeil, alimentation équilibrée" ,
      prix: 1000,
      imageUrl: 'https://img.freepik.com/photos-gratuite/composition-du-produit-soin-peau_23-2148761389.jpg?w=1060&t=st=1698922062~exp=1698922662~hmac=253f35a8dc828e89b1a5181dbdee9fb6f3a31fb4e271e51917d7cd2d9be5a4a1'
    },
    {
      id: 2,
      nom: 'Nourriture',
      description: "Manger des fruits au petit-déjeuner, un rituel que chacun de nous devrait adopter au quotidien pour rester en pleine forme. Faciles à préparer et plein de vitamines,  ils vous donneront toute l'énergie nécessaire pour profiter pleinement de la journée. On ne se lassera jamais de dire que le petit-déjeuner reste le repas le plus important de votre journée ! Alors, partez du bon pied ",
      prix: 1200,
      imageUrl: 'https://img.freepik.com/photos-gratuite/panier-fruits-contient-abondance-varietes-saines-generees-par-ia_188544-13371.jpg?size=626&ext=jpg&uid=R112515192&ga=GA1.1.302796039.1697125308&semt=ais'
    },
    {
      id: 3,
      nom: 'Palettes de maquillages',
      description: "Lorsque vous vous maquillez, devez-vous commencer par le teint ou les yeux ? Le make-up des lèvres, c’est au début ou à la fin ? Le démaquillage : facultatif ou systématique ? Autant de questions que nous nous sommes toutes posées. Voici donc, étape par étape, le rituel de maquillage à adopter.",
      prix: 800,
      imageUrl: 'https://img.freepik.com/photos-gratuite/close-up-collection-produits-maquillage-beaute_23-2148620012.jpg?size=626&ext=jpg&uid=R112515192&ga=GA1.1.302796039.1697125308&semt=sph'
    },
    {
      id: 4,
      nom: 'Soin bébé',
      description: 'On se préoccupe de la santé de vos bébé aussi avec notre games ',
      prix: 1500,
      imageUrl: 'https://img.freepik.com/photos-gratuite/theme-bleu-douche-bebe_53876-138074.jpg?size=626&ext=jpg&uid=R112515192&ga=GA1.1.302796039.1697125308&semt=ais'
    },
    {
      id: 5,
      nom: 'Game pour Homme',
      description: "Vos Hommes méritent ce qu'il y'a de mieux et nous pouvons vous les procurer",
      prix: 1900,
      imageUrl: 'https://img.freepik.com/photos-gratuite/vue-dessus-articles-soins-personnels-masculins_23-2150347104.jpg?size=626&ext=jpg&uid=R112515192&ga=GA1.1.302796039.1697125308&semt=ais'
    },
    {
      id: 6,
      nom: 'Parfum',
      description: 'Decouvrer nos parfum attractive qui peuvent faire chavirer le coeur de vos hommes à chaque jeux de regards',
      prix: 9500,
      imageUrl: 'https://img.freepik.com/photos-gratuite/parfum-frais-fleur-pourpre-dans-bouteille-verre-ai-generative_188544-9642.jpg?size=626&ext=jpg&uid=R112515192&ga=GA1.1.302796039.1697125308&semt=sph'
    },
    {
      id: 7,
      nom: 'collier boucle ',
      description: 'Les accessoires aussi font partie de l habillement de la femme',
      prix: 1500,
      imageUrl: 'https://img.freepik.com/vecteurs-libre/bijoux-accessoires-ensemble-realiste_1284-16770.jpg?size=626&ext=jpg&uid=R112515192&ga=GA1.1.302796039.1697125308&semt=sph'
    },
    {
      id: 8,
      nom: 'Accessoires',
      description: 'le besoin de bien decorer sa maison',
      prix: 1500,
      imageUrl: 'https://img.freepik.com/photos-gratuite/decoration-maison-interieur_169016-1452.jpg?size=626&ext=jpg&uid=R112515192&ga=GA1.1.302796039.1697125308&semt=ais'
    },
    {
      id: 9,
      nom: 'pack lavage',
      description: 'Nos maison doivent nous refléter',
      prix: 1500,
      imageUrl: 'https://img.freepik.com/photos-gratuite/cuisine-propre-necessite-bonne-hygiene-equipement-vaisselle-genere-par-ia_24640-99801.jpg?size=626&ext=jpg&uid=R112515192&ga=GA1.1.302796039.1697125308&semt=ais'
    },
    {
      id: 10,
      nom: 'Légumes',
      description: 'Des légumes frais pour faciliter la digestion',
      prix: 1500,
      imageUrl: 'https://img.freepik.com/photos-gratuite/legume-vue-face_140725-103355.jpg?size=626&ext=jpg&uid=R112515192&ga=GA1.1.302796039.1697125308&semt=sph'
    },
    {
      id: 11,
      nom: 'Savon dur',
      description: 'Nos savons éliminent 99% des microbes',
      prix: 1500,
      imageUrl: 'https://img.freepik.com/photos-premium/illustration-savon-fait-main-surface-lisse-rectangulaire-blanc-cremeux_945369-17938.jpg?size=626&ext=jpg&uid=R112515192&ga=GA1.1.302796039.1697125308&semt=sph'
    },
    {
      id: 12,
      nom: 'Shampoing à base de Jojoba',
      description: 'Nos shampoings pour soigner vos cheuveux cassants ',
      prix: 1500,
      imageUrl: 'https://img.freepik.com/vecteurs-libre/commercialisation-huile-jojoba-realiste_52683-57267.jpg?size=626&ext=jpg&uid=R112515192&ga=GA1.1.302796039.1697125308&semt=ais'
    },

  ];

  ngOnInit(): void {
    if(!localStorage.getItem('produits')){
      localStorage.setItem('produits', JSON.stringify(this.products));
    }
  }

}
