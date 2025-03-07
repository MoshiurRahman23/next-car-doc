import Image from "next/image";
import Link from "next/link";
import React from "react";

const serviceDetailPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(
    `https://next-car-doc.vercel.app/api/service/${p.id}`
  );
  const data = await res.json();
  return (
    <div className="container mx-auto">
      <section className="flex justify-center">
        <figure className="relative">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            width={1137}
            height={300}
            alt={"banner"}
          />
          <div className="transparent-layer overlay-bg absolute w-full h-full border-2 border-red-400 top-0">
            <div className="w-full h-full font-bold text-2xl flex items-center ps-16">
              <div>
                <h1 className="text-white font-semibold">{data?.title}</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <section className="container mx-auto grid grid-cols-12 gap-4 mt-4">
        {/* Left Side */}
        <div className="col-span-9 space-y-4">
          <Image
            className="w-full"
            src={data?.img}
            width={400}
            height={280}
            alt={data?.title}
          />
          <h1 className="font-bold text-3xl">{data?.title}</h1>
          <p className="text-justify">{data?.description}</p>
        </div>
        {/* Right Side */}
        <div className="col-span-3 space-y-4">
          <Link href={`/pick/${data._id}`}>
            <button className="w-full text-white h-9 bg-orange-500">
              Checkout
            </button>
          </Link>
          <p className="text-center text-xl font-bold">
            Price: $ {data?.price}
          </p>
        </div>
      </section>
    </div>
  );
};

export default serviceDetailPage;
