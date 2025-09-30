import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgClass?: string; // Optional custom background
  textClass?: string; // Optional custom text color
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  bgClass = "bg-blue-50 dark:bg-blue-900/30",
  textClass = "text-blue-600 dark:text-blue-400",
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
      <div
        className={`inline-flex p-3 rounded-full mb-4 ${bgClass} ${textClass}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};
