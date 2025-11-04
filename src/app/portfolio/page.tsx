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
    description:
      "An e-commerce web app for daily essentials with user authentication, cart, and payments.",
    tech: ["React.js", "TailwindCSS", "Redux", "Express", "MongoDB", "Node.js", "Stripe"],
  },
  {
    id: 2,
    title: "Portfolio",
    category: "Website",
    image: "/portfolio.png",
    link: "https://new-portfolio-steel-mu.vercel.app/",
    description:
      "A modern personal portfolio website showcasing skills, projects, and contact info.",
    tech: ["Next.js", "TailwindCSS", "Email js" ,"Framer Motion"],
  },
  {
    id: 3,
    title: "ConnectU",
    category: "Website",
    image: "/connectU.png",
    link: "https://connect-u-vert.vercel.app",
    description:
      "A real-time chat application with user authentication and private/group chats.",
    tech: ["Next.js", "Node.js", "TailwindCSS", "Socket.io", "MongoDB"],
  },
  {
    id: 4,
    title: "Halwiz",
    category: "Freelancing",
    image: "/halwiz.png",
    link: "https://halwiz-website.vercel.app/",
    description:
      "A freelancing platform connecting clients and freelancers with secure payments.",
    tech: ["Next.js", "Tailwind CSS", "Redux", "Express", "MongoDB", "Node.js", "Stripe"],
  },
  {
    id: 5,
    title: "Soss",
    category: "Website",
    image: "/soss.png",
    link: "https://soss-rust.vercel.app/user/home",
    description:
      "A one-stop solution for college students with mentorship, reviews, and resources.",
    tech: ["Next.js", "TailwindCSS", "Node.js", "Express", "Message Central", "Redux", "Firebase"],
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
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-700 hover:border-yellow-400 hover:shadow-yellow-400/40 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                {!loadedImages[project.id] && (
                  <div className="w-full h-56 bg-gray-700 animate-pulse" />
                )}

                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={`w-full h-56 object-cover transition-opacity duration-500 p-2 ${
                    loadedImages[project.id] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoadingComplete={() =>
                    setLoadedImages((prev) => ({ ...prev, [project.id]: true }))
                  }
                />
              </Link>

              {/* Card Body */}
              <div className="p-5 text-left flex flex-col flex-1">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-yellow-400 text-black rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Visit Button */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-center px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition-colors"
                >
                  Visit Project
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
