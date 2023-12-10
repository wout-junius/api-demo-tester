import "./App.css";
import ApiCall from "./components/api-call";
import { apiCalls } from "./data/api-calls/nestjs";

function App() {
  return (
    <>
      <h1 className="text-6xl font-extrabold px-10 pt-10">NestJS demo calls</h1>
      <div className="p-10">
        {apiCalls.map((call) => (
          <ApiCall
            key={call.title}
            title={call.title}
            endpoint={call.endpoint}
            content={call.content}
            call={() => {
              return fetch(`http://localhost:3000${call.endpoint}`, {
                method: call.method,
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(call.content),
              });
            }}
            method={call.method}
          />
        ))}
      </div>
    </>
  );
}

export default App;
