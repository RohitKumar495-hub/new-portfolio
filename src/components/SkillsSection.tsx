import React from 'react';
import SkillCircle from './SkillCircle';

const skills = [
  { skill: "JavaScript", percentage: 85 },
  { skill: "React", percentage: 90 },
  { skill: "Node JS", percentage: 75 },
  { skill: "Redux JS", percentage: 75 },
  { skill: "Next JS", percentage: 90 },
  { skill: "MongoDb", percentage: 85 },
  { skill: "HTML", percentage: 95 },
  { skill: "CSS", percentage: 95 },
  { skill: "REST", percentage: 80 },
];

const SkillsSection: React.FC = () => {
  return (
    <div className="grid">
      <h2 className="text-3xl font-bold mb-8 text-center">MY SKILLS</h2>
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {skills.map((item, idx) => (
          <SkillCircle key={idx} skill={item.skill} percentage={item.percentage} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
