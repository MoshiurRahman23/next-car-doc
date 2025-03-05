import dbConnection, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

export const DELETE = async (resizeBy, { params }) => {
  const bookingCollection = dbConnection(collectionNamesObj.bookingCollection);
  const p = await params;
  const query = { _id: new ObjectId(p.id) };

  const session = await getServerSession(authOptions);
  const currentBooking = await bookingCollection.findOne(query);

  const isOwnerOk = session?.user?.email == currentBooking.email;
  if (isOwnerOk) {
    const deleteResponse = await bookingCollection.deleteOne(query);

    revalidatePath("/my-bookings");
    return NextResponse.json(deleteResponse);
  } else {
    return NextResponse.json(
      { message: "Forbidden Action" },
      {
        status: 401,
      }
    );
  }
};

export const GET = async (req, { params }) => {
  const p = await params;
  const serviceCollection = dbConnection(collectionNamesObj.servicesCollection);
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });

  return NextResponse.json(data);
};
