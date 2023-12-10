import "./App.css";
import ApiCall from "./components/api-call";

function App() {
  return (
    <>
      <div className="p-10">
        {apiCalls.map((call) => (
          <ApiCall
            title={call.title}
            endpoint={call.endpoint}
            content={call.content}
            call={() => {}}
          />
        ))}
      </div>
    </>
  );
}

export default App;

const apiCalls = [
  {
    title: "Api Call",
    content: {
      name: "John Doe",
      email: "John@test.com",
    },
    endpoint: "/test",
  },
];
