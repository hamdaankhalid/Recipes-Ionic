import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'schnitzle',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Bräu_Schnitzel.JPG/1280px-Breitenlesau_Krug_Bräu_Schnitzel.JPG',
      ingredients: ['French Fries', 'Chicken', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tagliatelle_al_ragù_%28image_modified%29.jpg/500px-Tagliatelle_al_ragù_%28image_modified%29.jpg',
      ingredients: ['Spaghetti', 'Beef', 'Tomatoes']
    }
  ]
  constructor() { }

  getAllRecipes(){
    // return copy
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    // return copy
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  }
  }
}
