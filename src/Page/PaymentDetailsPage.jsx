import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getPaymentById } from "../payments-api";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";
import { Suspense, useEffect, useRef, useState } from "react";
import PaymentInfo from "../components/PaymentInfo";

const PaymentsDetailsPage = () => {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  const backLinkRef = useRef(location.state ?? "/payments");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchDataById = async () => {
      try {
        setError(false);
        setLoading(true);

        const data = await getPaymentById(paymentId, { signal });
        setPayment(data);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(true);
        }
        toast.error("This didn't work.");
      } finally {
        setLoading(false);
      }
    };

    fetchDataById();

    return () => {
      controller.abort();
    };
  }, [paymentId]);

  return (
    <div>
      <h1>Payments Details Page</h1>

      <Link to={backLinkRef.current}>Go back</Link>

      {payment && <PaymentInfo payment={payment} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}

      <ul>
        <li>
          <NavLink to="bank">Bank</NavLink>
        </li>
        <li>
          <NavLink to="receipt">Receipt</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage!!!</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
export default PaymentsDetailsPage;
