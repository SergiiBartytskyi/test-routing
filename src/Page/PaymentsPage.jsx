import { useState, useEffect } from "react";
import PaymentList from "../components/PaymentList/PaymentList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";
import { getPayments } from "../payments-api";

const PaymentsPage = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);

        const data = await getPayments({ signal });
        setPayments(data);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(true);
        }
        toast.error("This didn't work.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Payments Page</h1>
      {payments.length > 0 && <PaymentList payments={payments} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default PaymentsPage;
