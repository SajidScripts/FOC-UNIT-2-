import { useEffect, useRef } from "react";
import katex from "katex";

interface MathProps {
  tex: string;
  display?: boolean;
}

const Math = ({ tex, display = false }: MathProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      katex.render(tex, ref.current, {
        displayMode: display,
        throwOnError: false,
      });
    }
  }, [tex, display]);

  return <span ref={ref} />;
};

export default Math;
