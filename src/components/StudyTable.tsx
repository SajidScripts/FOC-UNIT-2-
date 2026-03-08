interface StudyTableProps {
  headers: string[];
  rows: string[][];
}

const StudyTable = ({ headers, rows }: StudyTableProps) => {
  return (
    <div className="overflow-x-auto my-4">
      <table className="study-table">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudyTable;
