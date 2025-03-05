"use client";

import Image from "next/image";

import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    content:
      "React Hooks allow you to use state and lifecycle methods in functional components. The most common hooks include useState, useEffect, and useContext...",
  },
  {
    id: 2,
    title: "Tailwind CSS: The Future of Styling",
    content:
      "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs quickly and efficiently. It helps developers create responsive and maintainable UI components...",
  },
  {
    id: 3,
    title: "Next.js 15: What’s New?",
    content:
      "Next.js 15 introduces many performance improvements and new features, including better server-side rendering, faster image optimizations, and built-in support for streaming SSR...",
  },
];

// <div className="min-h-screen bg-gray-100 p-6">
//   <div className="max-w-3xl mx-auto">
//     <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//       Blog Page
//     </h1>
//     {blogs.map((blog) => (
//       <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h2 className="text-xl font-semibold text-gray-900 mb-2">
//           {blog.title}
//         </h2>
//         <p className="text-gray-700">
//           {expanded === blog.id
//             ? blog.content
//             : blog.content.slice(0, 100) + "..."}
//         </p>
//         <button
//           onClick={() => setExpanded(expanded === blog.id ? null : blog.id)}
//           className="mt-3 text-blue-600 hover:underline"
//         >
//           {expanded === blog.id ? "Read Less" : "Read More"}
//         </button>
//       </div>
//     ))}
//   </div>
// </div>

const BlogPage = () => {
  const [expanded, setExpanded] = useState(null);
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-4">
        Exploring the Beauty of Nature
      </h1>

      {/* Blog Image */}
      <div className="w-full h-64 relative mb-4">
        <Image
          src="https://images.unsplash.com/photo-1740619061019-38581c1c293a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Nature scenery"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Blog Content */}
      <p className="text-lg text-gray-700 leading-relaxed">
        Nature has always been a source of inspiration for humankind. The beauty
        of lush green forests, majestic mountains, and serene rivers brings a
        sense of peace and wonder. Exploring nature allows us to disconnect from
        the digital world and reconnect with our inner selves. Whether it’s a
        walk in the park or a hike in the mountains, embracing nature helps
        rejuvenate the soul.
      </p>
      <h1 className="text-3xl font-bold text-center py-7 text-gray-800 mb-6">
        Blog Page
      </h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {blog.title}
          </h2>
          <p className="text-gray-700">
            {expanded === blog.id
              ? blog.content
              : blog.content.slice(0, 100) + "..."}
          </p>
          <button
            onClick={() => setExpanded(expanded === blog.id ? null : blog.id)}
            className="mt-3 text-blue-600 hover:underline"
          >
            {expanded === blog.id ? "Read Less" : "Read More"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
