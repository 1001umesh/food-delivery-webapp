type Product = {
  id?: number;
  title?: string;
  description?: string;
  image: string;
  price?: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};

type Products = Product[];

export const featureProducts: Products = [
  {
    id: 1,
    title: "Chicken Thali",
    description:
      "Traditional Nepali thali with rice, dal, chicken curry, vegetables, pickle and yogurt.",
    image: "/temp/food1.png",
    price: 450,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 120 },
      { title: "Large", additionalPrice: 240 },
    ],
  },
  {
    id: 2,
    title: "Veg Thali",
    description:
      "Healthy vegetarian thali with rice, dal, vegetable curry and achar.",
    image: "/temp/food2.png",
    price: 350,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 100 },
      { title: "Large", additionalPrice: 200 },
    ],
  },
  {
    id: 3,
    title: "Chicken Momo",
    description:
      "Steamed dumplings stuffed with minced chicken served with spicy achar.",
    image: "/temp/food3.webp",
    price: 220,
    options: [
      { title: "Half Plate", additionalPrice: 0 },
      { title: "Full Plate", additionalPrice: 110 },
      { title: "Family Pack", additionalPrice: 220 },
    ],
  },
  {
    id: 4,
    title: "Buff Momo",
    description: "Juicy buff momo served with tomato sesame dipping sauce.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    price: 200,
    options: [
      { title: "Half Plate", additionalPrice: 0 },
      { title: "Full Plate", additionalPrice: 100 },
      { title: "Family Pack", additionalPrice: 200 },
    ],
  },
  {
    id: 5,
    title: "Veg Momo",
    description: "Vegetarian dumplings filled with cabbage, carrot and spices.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    price: 180,
    options: [
      { title: "Half Plate", additionalPrice: 0 },
      { title: "Full Plate", additionalPrice: 90 },
      { title: "Family Pack", additionalPrice: 180 },
    ],
  },
  {
    id: 6,
    title: "Chicken Chowmein",
    description: "Stir fried noodles with chicken, vegetables and soy sauce.",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
    price: 240,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 100 },
      { title: "Large", additionalPrice: 200 },
    ],
  },
  {
    id: 7,
    title: "Veg Chowmein",
    description: "Noodles cooked with fresh vegetables and Nepali spices.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
    price: 200,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 90 },
      { title: "Large", additionalPrice: 180 },
    ],
  },
  {
    id: 8,
    title: "Chicken Burger",
    description: "Juicy chicken burger with lettuce, tomato and special sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    price: 250,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Double", additionalPrice: 120 },
      { title: "Combo", additionalPrice: 220 },
    ],
  },
  {
    id: 9,
    title: "Veg Burger",
    description: "Crispy vegetable patty burger with fresh salad.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    price: 200,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Double", additionalPrice: 100 },
      { title: "Combo", additionalPrice: 200 },
    ],
  },
  {
    id: 10,
    title: "Cheese Pizza",
    description:
      "Classic pizza topped with mozzarella cheese and tomato sauce.",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4fe24",
    price: 500,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 180 },
      { title: "Large", additionalPrice: 360 },
    ],
  },
  {
    id: 11,
    title: "Chicken Pizza",
    description: "Pizza topped with grilled chicken and melted cheese.",
    image: "https://images.unsplash.com/photo-1601924582975-7e62c7b9f1a2",
    price: 550,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 200 },
      { title: "Large", additionalPrice: 400 },
    ],
  },
  {
    id: 12,
    title: "Paneer Pizza",
    description: "Pizza with paneer cubes, vegetables and mozzarella.",
    image: "https://images.unsplash.com/photo-1548365328-9f547fb0953b",
    price: 520,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 190 },
      { title: "Large", additionalPrice: 380 },
    ],
  },
  {
    id: 13,
    title: "French Fries",
    description: "Crispy golden french fries served with ketchup.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    price: 150,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 60 },
      { title: "Large", additionalPrice: 120 },
    ],
  },
  {
    id: 14,
    title: "Cold Coffee",
    description: "Refreshing iced coffee blended with milk and sugar.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
    price: 180,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Large", additionalPrice: 60 },
      { title: "Extra Cream", additionalPrice: 40 },
    ],
  },
  {
    id: 15,
    title: "Chocolate Milkshake",
    description: "Creamy chocolate milkshake topped with whipped cream.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    price: 200,
    options: [
      { title: "Regular", additionalPrice: 0 },
      { title: "Large", additionalPrice: 70 },
      { title: "Extra Chocolate", additionalPrice: 50 },
    ],
  },
];

 export type MenuItem={
  id:number,
  category:string,
  name: string,
  price:string,
  description:string,
  image:string

}


export const menu:MenuItem[]=[
  {
    id: 1,
    category: "Main Course",
    name: "Grilled Pork Chop",
    price: "Rs 999",
    description:
      "Juicy pork chop served with mashed potatoes and sautéed seasonal vegetables",
    image: "/temp/menu1.webp"
  },

  {
    id: 2,
    category: "Breakfast",
    name: "Egg & Cheese Toast",
    price: "Rs 500",
    description:
      "Two slices of toast with melted cheese, sunny side up eggs, and a side of fresh fruits",
    image: "/temp/menu2.png"
  },
  {
    id: 3,
    category: "Soup",
    name: "Crema di Funghi",
    price: "Rs 450",
    description:
      "A luxurious mushroom cream soup featuring wild and cultivated mushrooms, extra virgin olive oil, and fresh parsley",
    image: "/temp/menu3.png"
  },
  {
    id: 4,
    category: "Salads",
    name: "Caesar Salad",
    price: "Rs 550",
    description:
      "Mixed lettuce tossed with savory Caesar dressing, topped with grilled chicken, crispy bacon, house-made croutons, and Parmesan",
    image: "/temp/salad.jpg"
  },
  {
    id: 5,
    category: "Starters",
    name: "Roasted Mustang Potatoes",
    price: "Rs 350",
    description:
      "Tender Mustang potatoes roasted with aromatic Himalayan spices",
    image: "/temp/menu5.png"
  },
 
  {
    id: 6,
    category: "Burgers",
    name: "Crispy Chicken Burger",
    price: "Rs 499",
    description:
      "Golden-brown chicken patty topped with creamy coleslaw and melted cheese. Served with fries and gherkins",
    image: "/temp/offerProduct.png"
  },
  {
    id: 7,
    category: "Pizza",
    name: "Margherita Pizza",
    price: "Rs 699",
    description:
      "Classic pizza topped with fresh tomato sauce, mozzarella, and basil leaves",
    image: "/temp/menu6.png"
  },
  {
    id: 8,
    category: "Pasta",
    name: "Spaghetti alla Carbonara",
    price: "Rs 899",
    description:
      "Al dente spaghetti tossed in creamy carbonara sauce with chicken, bacon, and Parmesan",
    image: "/temp/pasta1.png"
  },
  {
    id: 9,
    category: "Desserts",
    name: "Chocolate Brownie à la Mode",
    price: "Rs 399",
    description: "Warm chocolate brownie served with vanilla ice cream",
    image: "/temp/menu8.png"
  },

]