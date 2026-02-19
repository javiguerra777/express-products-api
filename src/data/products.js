import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const products = [
  {
    name: "Easter Eggs",
    description: "A collection of colorful Easter eggs, perfect for your Easter celebrations.",
    price: 19.99,
    imagePath: path.join(__dirname, "../assets/easter-eggs.jpg")
  },
  {
    name: "Makeup",
    description: "A set of premium makeup products for all skin types.",
    price: 29.99,
    imagePath: path.join(__dirname, "../assets/makeup.jpg")
  },
  {
    name: "Podium",
    description: "An elegant podium for presentations and speeches.",
    price: 49.99,
    imagePath: path.join(__dirname, "../assets/podium.jpg")
  },
  {
    name: "Running Shoes",
    description: "Comfortable and durable running shoes for all terrains.",
    price: 79.99,
    imagePath: path.join(__dirname, "../assets/running-shoes.jpg")
  }
];
