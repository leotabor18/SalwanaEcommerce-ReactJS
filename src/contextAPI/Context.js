import { createContext, useState } from "react";
import Product_1 from "../images/158412976_246440757114538_4851897253874091708_n.jpg";
import Product_2 from "../images/178608092_280330457058901_7442775062384891508_n.jpg";
import Product_3 from "../images/178716620_280330560392224_4469238909668274743_n.jpg";
import Product_4 from "../images/178780739_280330550392225_452561558091222903_n.jpg";
import Product_5 from "../images/178873634_280331367058810_8338333396480785993_n.jpg";
import Product_6 from "../images/178992854_280330630392217_7437995124476137889_n.jpg";
import Product_7 from "../images/179244883_280330520392228_2525835067916262188_n.jpg";
import Product_8 from "../images/179279743_280330683725545_6020527829287590955_n.jpg";
import Product_9 from "../images/179346966_280330437058903_2091418982500057277_n.jpg";
import Product_10 from "../images/179495897_280330633725550_3553480013363395401_n.jpg";
import Product_11 from "../images/179669935_280331383725475_6309688449946363352_n.jpg";
import Product_12 from "../images/179830643_280331377058809_4495317277524329779_n.jpg";
import Product_13 from "../images/179863050_280330447058902_4017933566529887944_n.jpg";
import Product_14 from "../images/179951710_280330710392209_6006641932176512194_n.jpg";
import Product_15 from "../images/180142738_280330693725544_1574024770004044018_n.jpg";
import Product_16 from "../images/180208468_280330603725553_720183951444557245_n.jpg";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const ProductList = [
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      url: Product_1,
      rate: 5,
      quantity: 0,
    },
    {
      _id: 2,
      name: "Product 2",
      price: 150,
      url: Product_2,
      rate: 5,
      quantity: 0,
    },
    {
      _id: 3,
      name: "Product 3",
      price: 120,
      url: Product_3,
      rate: 4,
      quantity: 0,
    },
    {
      _id: 4,
      name: "Product 4",
      price: 130,
      url: Product_4,
      rate: 3,
      quantity: 0,
    },
    {
      _id: 5,
      name: "Product 5",
      price: 100,
      url: Product_5,
      rate: 5,
      quantity: 0,
    },
    {
      _id: 6,
      name: "Product 6",
      price: 110,
      url: Product_6,
      rate: 5,
      quantity: 0,
    },
    {
      _id: 7,
      name: "Product 7",
      price: 125,
      url: Product_7,
      rate: 5,
      quantity: 0,
    },
    {
      _id: 8,
      name: "Product 8",
      price: 120,
      url: Product_8,
      rate: 5,
      quantity: 0,
    },
    {
      _id: 9,
      name: "Product 9",
      price: 120,
      url: Product_9,
      rate: 4,
      quantity: 0,
    },
    {
      _id: 10,
      name: "Product 10",
      price: 140,
      url: Product_10,
      rate: 4,
      quantity: 0,
    },
    {
      _id: 11,
      name: "Product 11",
      price: 120,
      url: Product_11,
      rate: 3,
      quantity: 0,
    },
    {
      _id: 12,
      name: "Product 12",
      price: 135,
      url: Product_12,
      rate: 5,
      quantity: 0,
    },
    {
      _id: 13,
      name: "Product 13",
      price: 100,
      url: Product_13,
      rate: 3,
      quantity: 0,
    },
    {
      _id: 14,
      name: "Product 14",
      price: 120,
      url: Product_14,
      rate: 5,
      quantity: 0,
    },
    {
      _id: 15,
      name: "Product 15",
      price: 150,
      url: Product_15,
      rate: 4,
      quantity: 0,
    },
    {
      _id: 16,
      name: "Product 16",
      price: 100,
      url: Product_16,
      rate: 3,
      quantity: 0,
    },
  ];
  const [cart, setCart] = useState([]);
  const [list, setList] = useState(ProductList);
  const [item, setItem] = useState([]);
  const context = {
    cart: [cart, setCart],
    list: [list, setList],
    item: [item, setItem],
  };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};
