import {Component, OnInit} from '@angular/core';
import {CategoryComponent} from './category/category.component';
import {Category} from './model/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Nested Categories';
  rootCategory: Category;

  constructor() {}

  ngOnInit() {
    this.rootCategory = new Category(null);
    this.rootCategory.name = 'Home';
  }
}
