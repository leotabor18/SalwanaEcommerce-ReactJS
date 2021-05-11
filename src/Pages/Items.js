import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Cart/Header";
import ItemsList from "../components/Items/ItemsList";
import { CartContext } from "../contextAPI/Context";
import "./Items.css";

function Items() {
  const [items, setItems] = useContext(CartContext).item;

  const removeItems = (id) => {
    setItems(items.filter((list) => list.id !== id && list));
  };
  return (
    <Container className="items">
      <Header title="My Items" />
      <hr />
      {items.length === 0 ? (
        <p className="empty">There's no item here</p>
      ) : (
        items.map((list) => {
          return (
            <ItemsList
              key={list.id}
              id={list.id}
              name={list.name}
              price={list.price}
              description={list.description}
              url={list.url}
              removeItems={removeItems}
            />
          );
        })
      )}
    </Container>
  );
}

export default Items;
