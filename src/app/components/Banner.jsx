import dbConnection, { collectionNamesObj } from "@/lib/dbConnect";
// import Image from "next/image";

const BannerPage = async () => {
  const serviceCollection = dbConnection(collectionNamesObj.servicesCollection);
  const data = await serviceCollection.find({}).toArray();
  return (
    <div className="container mx-auto">
      <div className="carousel w-full">
        {data?.map((item, index) => {
          return (
            <div
              style={{
                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)),url(/assets/images/banner/${
                  index + 1
                }.jpg)`,
              }}
              key={index}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat"
            >
              <div className="h-full w-full flex items-center pl-36">
                <div className="w-2/4">
                  <h2 className="text-5xl font-bold text-white space-y-10">
                    {item.title}
                  </h2>
                  <p className="text-white my-5">
                    {item.description.slice(0, 100)}
                  </p>
                  <button className="btn btn-primary mr-6 ">
                    Discover More
                  </button>
                  <button className="btn btn-primary btn-outline">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerPage;
