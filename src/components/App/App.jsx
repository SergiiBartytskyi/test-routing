import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import css from "./App.module.css";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../Page/HomePage"));
const PaymentsPage = lazy(() => import("../../Page/PaymentsPage"));
const PaymentDetailsPage = lazy(() => import("../../Page/PaymentDetailsPage"));
const NotFoundPage = lazy(() => import("../../Page/NotFoundPage"));
const BankInfo = lazy(() => import("../BankInfo"));
const PaymentReceipt = lazy(() => import("../PaymentReceipt"));

const App = () => {
  return (
    <div className={css.container}>
      <Navigation />

      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
            <Route path="bank" element={<BankInfo />} />
            <Route path="receipt" element={<PaymentReceipt />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
