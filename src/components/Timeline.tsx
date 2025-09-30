"use client";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const timelineData = [
  {
    year: "2023 - Present",
    title: "BACHELOR OF COMPUTER APPLICATION (BCA)",
    company: "Sarala Birla University",
    description:
      "Currently pursuing my BCA, I am building a strong foundation in programming with C and C++, alongside web development skills. I am actively involved in hands-on projects, developing practical and user-friendly applications, while maintaining a strong academic record with a CGPA of 9.09.",
    icon: <FaGraduationCap className="w-5 h-5 text-white" />,
  },
    {
    year: "2023 - 2023",
    title: "REACT DEVELOPER INTERN",
    company: "CollegePur",
    description:
      "During my tenure as a React Developer Intern, I actively contributed to developing and optimizing web applications, demonstrating strong problem-solving skills and a keen understanding of front-end technologies. Due to my dedication, technical proficiency, and collaborative approach, I was promoted to Team Leader of Interns, guiding and mentoring my peers to achieve project milestones efficiently. Additionally, I was recognized as 'Intern of the Week' three times for consistently delivering high-quality work, taking initiative, and fostering a positive and productive team environment.",
    icon: <FaBriefcase className="w-5 h-5 text-white" />,
  },
  {
    year: "2021 - 2023",
    title: "SCIENCE (MATHS)",
    company: "DR. RMLS COLLEGE",
    description:
      "Completed my Senior Secondary education with a focus on Science, where I developed a strong academic foundation and actively participated in projects and activities that enhanced my analytical and problem-solving skills. I achieved a commendable percentage of 83.2% while maintaining consistent performance throughout.",
    icon: <FaGraduationCap className="w-5 h-5 text-white" />,
  },
  {
    year: "2020 - 2021",
    title: "SECONDARY STUDY",
    company: "Don Bosco Children's Point",
    description:
      'Completed my Secondary School education in 2021 during the COVID-19 pandemic, when final exams were not conducted. Despite the unprecedented situation, I focused on self-learning and building a strong academic foundation, which has supported my continued growth in higher studies.',
    icon: <FaGraduationCap className="w-5 h-5 text-white" />,
  },
];

export default function Timeline() {
  return (
    <section className="p-4 lg:px-10">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-12">
          EXPERIENCE & EDUCATION
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col lg:flex-row"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg">
                {item.icon}
              </div>

              {/* Content */}
              <div className="md:ml-6 mt-4 md:mt-0">
                <span className="text-sm">{item.year}</span>
                <h3 className="text-lg font-semibold mt-1">
                  {item.title} –{" "}
                  <span className="text-yellow-400">{item.company}</span>
                </h3>
                <p className="mt-2 text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
