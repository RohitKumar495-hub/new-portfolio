import React from 'react';

interface SkillCircleProps {
  skill: string;
  percentage: number;
}

const SkillCircle: React.FC<SkillCircleProps> = ({ skill, percentage }) => {
  const radius = 50;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center m-4 text-current"> {/* text-current allows theme color to apply */}
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#333"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#ffc107"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="font-semibold text-lg"
          fill="currentColor" // inherit color from parent
        >
          {percentage}%
        </text>
      </svg>
      <span className="mt-2">{skill}</span>
    </div>
  );
};

export default SkillCircle;
