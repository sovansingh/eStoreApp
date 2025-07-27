import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSearch,
  faUserCircle,
  faHeart,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { CategoryStoreItem } from '../services/category/categories.storeItem';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;

  constructor(public categoryStore: CategoryStoreItem) {}
}
