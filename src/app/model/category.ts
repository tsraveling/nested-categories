export class Category {

  private static currentIndex = 0;

  name: string;
  children: [Category] = [];
  parentCategory: Category = null;
  id: number;

  constructor(parent: Category) {
    this.parentCategory = parent;
    this.id = Category.currentIndex;
    Category.currentIndex ++;
  }
}
