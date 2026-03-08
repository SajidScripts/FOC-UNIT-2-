import katex from "katex";

interface MathProps {
  tex: string;
  display?: boolean;
}

const Math = ({ tex, display = false }: MathProps) => {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    output: "html",
  });

  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
      style={display ? { display: "block", textAlign: "center" } : undefined}
    />
  );
};

export default Math;
