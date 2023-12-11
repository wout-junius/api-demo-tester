export default function ContentTable({
  content,
}: {
  content: { [key: string]: any };
}) {
  return (
    <div className="overflow-x-auto ">
      <table className="table bg-white/5 rounded mb-4">
        {/* head */}
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {/* body */}
          {Object.keys(content).map((key) => (
            <tr>
              <td>{key}</td>
              <td>{content[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
