import PaymentCard from "../PaymentCard/PaymentCard";
import css from "./PaymentList.module.css";

const PaymentList = ({ payments }) => {
  return (
    <div>
      <ul className={css.list}>
        {payments.map((payment) => (
          <li key={payment.id}>
            <PaymentCard payment={payment} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
