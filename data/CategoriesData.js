import Category from "../models/Category";

export const CATEGORIES = [
  new Category(1, "Action", require("../assets/images/action.jpeg")),
  new Category(2, "Äventyr", require("../assets/images/adventure.jpeg")),
  new Category(3, "Thriller", require("../assets/images/thrillers.jpeg")),
  new Category(4, "Skräck", require("../assets/images/horror.jpeg")),
  new Category(5, "Drama", require("../assets/images/drama.jpeg")),
];

export const SPORT_CATEGORIES = [
  new Category(6, "Fotboll", require("../assets/images/no-image.png")),
  new Category(7, "Hockey", require("../assets/images/no-image.png")),
  new Category(8, "Basket", require("../assets/images/no-image.png")),
  new Category(9, "Skidskytte", require("../assets/images/no-image.png")),
];

export const DOCUMENTARY_CATEGORIES = [
  new Category(10, "Populära", require("../assets/images/no-image.png")),
];
