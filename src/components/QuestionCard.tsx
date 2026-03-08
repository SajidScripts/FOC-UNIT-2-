import { ReactNode, useState } from "react";

interface QuestionCardProps {
  id: string;
  title: string;
  marks: number;
  repeated?: number;
  children: ReactNode;
}

const QuestionCard = ({ id, title, marks, repeated, children }: QuestionCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div id={id} className="question-card animate-fade-in">
      <div
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-sans font-bold text-lg text-foreground">{title}</h3>
            {repeated && repeated >= 2 && (
              <span className="repeated-badge">🔁 REPEATED {repeated}×</span>
            )}
          </div>
          <span className="text-xs font-sans font-semibold text-muted-foreground">
            [{marks} Marks]
          </span>
        </div>
        <button className="ml-4 mt-1 font-sans text-sm font-bold text-primary hover:underline shrink-0">
          {open ? "▲ Collapse" : "▼ Expand"}
        </button>
      </div>
      {open && <div className="mt-4 border-t border-border pt-4">{children}</div>}
    </div>
  );
};

export default QuestionCard;
