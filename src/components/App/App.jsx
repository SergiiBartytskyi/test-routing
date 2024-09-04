import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../Page/HomePage";
import PaymentsPage from "../../Page/PaymentsPage";
import PaymentDetailsPage from "../../Page/PaymentDetailsPage";
import NotFoundPage from "../../Page/NotFoundPage";
import BankInfo from "../BankInfo";
import PaymentReceipt from "../PaymentReceipt";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.container}>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
          <Route path="bank" element={<BankInfo />} />
          <Route path="receipt" element={<PaymentReceipt />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
