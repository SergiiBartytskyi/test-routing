const PaymentInfo = ({ payment }) => {
  return (
    <div>
      <p>Amount: {payment.amount}</p>
      <p>Number: {payment.cardNumber}</p>
      <p>Owner: {payment.cardOwner}</p>
      <p>Type: {payment.cardType}</p>
      <p>Description: {payment.description}</p>
    </div>
  );
};
export default PaymentInfo;
