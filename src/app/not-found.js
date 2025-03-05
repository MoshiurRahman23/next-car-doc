import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-[90%] mx-auto text-center">
      <Image
        src="https://freefrontend.com/assets/img/html-css-404-page-templates/Pure-CSS-404-Error-Page.gif"
        width={1000}
        height={500}
        alt="not found page"
        className="w-full"
      />
      {/* <h2>Not Found</h2>
      <p>Could not find requested resource</p> */}
      <Link href="/">
        <button className="btn btn-outline my-5">Return Home</button>
      </Link>
    </div>
  );
}
