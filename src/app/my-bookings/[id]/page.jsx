import BookingUpdateForm from "@/components/forms/BookingUpdateForm";
import { headers } from "next/headers";

const UpdateBookinPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(
    `https://next-car-doc.vercel.app/api/my-bookings/${p.id}`,
    {
      headers: new Headers(headers()),
    }
  );
  const data = await res.json();
  return (
    <div>
      <BookingUpdateForm data={data} />
    </div>
  );
};

export default UpdateBookinPage;
