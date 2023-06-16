import React from "react";

const cartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default cartContext;
