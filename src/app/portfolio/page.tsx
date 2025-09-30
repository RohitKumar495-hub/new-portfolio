'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Daily Drop",
    category: "Website",
    image: "/dailydrop.png",
    link: "https://daily-drop-full-stack-by11.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio",
    category: "Website",
    image: "/portfolio.png",
    link: "https://new-portfolio-steel-mu.vercel.app/",
  },
  {
    id: 3,
    title: "Chatty",
    category: "Website",
    image: "/dailydrop.png",
    link: "https://chatty.com",
  },
  {
    id: 4,
    title: "Halwiz",
    category: "Freelancing",
    image: "/dailydrop.png",
    link: "https://halwiz.com",
  },
  {
    id: 5,
    title: "Soss",
    category: "Website",
    image: "/dailydrop.png",
    link: "https://soss.com",
  },
];

const categories = ["All", "Website", "Freelancing"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-12 px-6 mb-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 uppercase">
          My <span className="text-yellow-400">Portfolio</span>
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-lg font-medium transition-colors duration-300 cursor-pointer ${
                filter === cat ? "text-yellow-400" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-md overflow-hidden shadow-lg bg-gray-900 hover:shadow-yellow-400/40 transition-shadow duration-300 cursor-pointer"
              >
                {/* Skeleton Loader */}
                {!loadedImages[project.id] && (
                  <div className="w-full h-60 bg-gray-700 animate-pulse" />
                )}

                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={`w-full h-60 object-cover transition-opacity duration-500 ${
                    loadedImages[project.id] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoadingComplete={() =>
                    setLoadedImages((prev) => ({ ...prev, [project.id]: true }))
                  }
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-yellow-400 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-black">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
