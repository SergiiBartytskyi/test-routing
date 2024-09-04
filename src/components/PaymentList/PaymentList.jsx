import PaymentCard from "../PaymentCard/PaymentCard";
import css from "./PaymentList.module.css";

const PaymentList = ({ payments }) => {
  return (
    <ul className={css.list}>
      {payments.map((payment) => (
        <li key={payment.id}>
          <PaymentCard payment={payment} />
        </li>
      ))}
    </ul>
  );
};

export default PaymentList;
