import MyBookingsTable from "@/components/tables/MyBookingsTable";
import { headers } from "next/headers";

const fetchMyBookings = async () => {
  const res = await fetch("https://next-car-doc.vercel.app/api/service", {
    headers: new Headers(headers()),
  });
  const d = await res.json();
  return d;
};

const myBookingPage = async () => {
  const data = await fetchMyBookings();
  return (
    <div>
      <MyBookingsTable data={data} />
    </div>
  );
};

export default myBookingPage;
