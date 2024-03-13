import { Categories } from "./categories.model";

export class Products {
    private _id: number;
    private _name: string;
    private _description: string;
    private _image: string;
    private _price: number;
    private _category: Categories;
    private _isFavorite: boolean;
  
    constructor(id: number, name: string, description: string, image: string, price: number, category: Categories, isFavorite: boolean) {
      this._id = id;
      this._name = name;
      this._description = description;
      this._image = image;
      this._price = price;
      this._category = category;
      this._isFavorite = isFavorite;
    }
  
    get id(): number {
      return this._id;
    }
  
    set id(id: number) {
      this._id = id;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(name: string) {
      this._name = name;
    }
  
    get description(): string {
      return this._description;
    }
  
    set description(description: string) {
      this._description = description;
    }
  
    get image(): string {
      return this._image;
    }
  
    set image(image: string) {
      this._image = image;
    }
  
    get price(): number {
      return this._price;
    }
  
    set price(price: number) {
      this._price = price;
    }
  
    get category(): Categories {
      return this._category;
    }
  
    set category(category: Categories) {
      this._category = category;
    }
  
    get isFavorite(): boolean {
      return this._isFavorite;
    }
  
    set isFavorite(isFavorite: boolean) {
      this._isFavorite = isFavorite;
    }
}
  

  