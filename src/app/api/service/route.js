import { authOptions } from "@/lib/authOptions";
import dbConnection, { collectionNamesObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);
  if (session) {
    const email = session?.user?.email;
    const bookingCollection = dbConnection(
      collectionNamesObj.bookingCollection
    );
    const result = await bookingCollection.find({ email }).toArray();
    // console.log(session);
    return NextResponse.json(result);
  }

  return NextResponse.json({});
};

export const POST = async (req) => {
  const body = await req.json();
  const bookingCollection = dbConnection(collectionNamesObj.bookingCollection);
  const result = await bookingCollection.insertOne(body);

  return NextResponse.json(result);
};
