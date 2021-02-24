import axios from "axios";
import { IResponse } from "@/interfaces/IResponse";
import { ICheckout } from "@/interfaces/ICheckout";
import { ICreditCard } from "@/interfaces/ICheckout";
import { encodeData } from "@/utils/RandomUtil";

// this function should be a stripe or any other getway lib that generates a token to be sent to the backend.
// that's the right way to process it, so we don't keep any credit card information, just validate the token
// complete the transaction and done !
const generateCreditCardToken = (creditCard: ICreditCard) => {
  return encodeData(creditCard.cardNumber.toString());
};

export const processCheckout = async (
  checkout: ICheckout
): Promise<IResponse<ICheckout>> => {
  return axios.post("order", {
    ...checkout,
    creditCard: checkout.creditCard
      ? generateCreditCardToken(checkout.creditCard)
      : null
  });
};
