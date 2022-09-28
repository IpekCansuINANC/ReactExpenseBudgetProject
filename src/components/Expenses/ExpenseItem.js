import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // anlık title değişmesi için state kullandık.
  //useState'e değişecek olan değeri verdik.
  //useState iki değer döndürdü. 1. variable, 2. function
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    //setTitle ile yeni değeri verdik.
    setTitle("Updated!");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
