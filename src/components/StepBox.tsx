import { ReactNode } from "react";

interface StepBoxProps {
  type: "cloud" | "concept" | "answer" | "memory" | "mistake";
  title: string;
  icon: string;
  children: ReactNode;
}

const labels: Record<string, string> = {
  cloud: "FUNDAMENTAL CLOUD",
  concept: "KEY CONCEPTS TO REMEMBER",
  answer: "EXAM ANSWER",
  memory: "ONE LINE MEMORY TRICK",
  mistake: "COMMON MISTAKE",
};

const StepBox = ({ type, title, icon, children }: StepBoxProps) => {
  return (
    <div className={`step-${type}`}>
      <h4 className="font-sans font-bold text-base mb-2 flex items-center gap-2">
        <span>{icon}</span> {title || labels[type]}
      </h4>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

export default StepBox;
