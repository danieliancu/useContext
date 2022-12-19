import React from "react";

import { CurrencyContext } from "./cur";

const DATA = [
  {
    id: "1",
    title: "The Road to React",
    price: 19.99
  },
  {
    id: "2",
    title: "The Road to GraphQL",
    price: 29.99
  }
];

const App = ({ list }) => {
  const [currency, setCurrency] = React.useState("$");

  return (
    <CurrencyContext.Provider value={currency}>
      <button onClick={() => setCurrency("£")}>Pounds</button>
      <button onClick={() => setCurrency("$")}>Dollar</button>
      <br />
      <Books list={DATA} />
    </CurrencyContext.Provider>
  );
};

const Books = ({ list }) => {
  return <Book item={list} />;
};

const Book = ({ item }) => {
  const currency = React.useContext(CurrencyContext);

  return item.map((items) => {
    return (
      <li
        style={{
          border: "1px solid grey",
          display: "inline-block",
          margin: "10px",
          padding: "10px"
        }}
      >
        {items.id}. {items.title}
        <br />
        <strong>
          {items.price} {currency}
        </strong>
      </li>
    );
  });
};

export default App;
