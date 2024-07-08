/* eslint-disable no-unused-vars */
import { useState } from "react";
import luxuryTimePieceData from "../../data/luxuryTimePieceData";
import smartWatchData from "../../data/smartwatchData";
import sportsData from "../../data/sportsData";
import CheckoutModal from "../section2/actionButtons/CheckoutModal";
import Small from "./item/small/Small";
import Big from "./item/big/Big";

export default function Items() {
  const [ispay, setIsPay] = useState(false);
  const [addCart, setAddCart] = useState(0);
  const countCartAdd = () => {
    setAddCart(addCart + 1);
  };
  const countCartMinus = () => {
    if (addCart >= 0) {
      setAddCart(addCart - 1);
    }
    if (addCart < 0) {
      return 0;
    }
  };

  return (
    <div>
      <div>
        <Small />
      </div>
      {/* bigger screens */}
      <div>
        <Big />
      </div>
    </div>
  );
}
