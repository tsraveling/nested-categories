import {Component, OnInit, Input} from '@angular/core';
import {Category} from '../model/category';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: Category;
  currentlyEditing = false;
  addChildName: string = null;

  constructor() { }

  ngOnInit() {
    if (this.category.name === null) {
      this.category.name = '';
      this.currentlyEditing = true;
    }
  }

  startAddingChild() {
    this.addChildName = '';
  }

  finishAddingChild() {

    if (this.addChildName === null || this.addChildName.length < 1) {
      this.addChildName = null;
      return;
    }

    const newCategory = new Category(this.category);
    newCategory.name = this.addChildName;

    this.category.children.push(newCategory);

    this.addChildName = null;
  }

  startEditing() {
    this.currentlyEditing = true;
  }

  endEditing() {
    if (this.category.name.length < 1) {
      return false;
    }
    this.currentlyEditing = false;
  }

  hitDelete() {
    this.category.parentCategory.children = this.category.parentCategory.children.filter(cat => cat.id !== this.category.id);
  }

  onAddChildKeyup(event) {
    if (event.key === 'Enter') {
      this.finishAddingChild();
    }
  }

  onKeyup(event) {
    if (event.key === 'Enter') {
      this.endEditing();
    }
  }
}
