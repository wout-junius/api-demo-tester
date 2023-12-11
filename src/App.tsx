import { useState } from "react";
import "./App.css";
import ApiCall from "./components/api-call";
import { apiCalls } from "./data/api-calls/nestjs";

function App() {
  const [meetupId, setMeetupId] = useState("");
  return (
    <>
      <h1 className="text-6xl font-extrabold px-10 pt-10">NestJS demo calls</h1>

      <div className="p-10">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Meetup ID?</span>
          </div>
          <input
            type="text"
            value={meetupId}
            onChange={(e) => setMeetupId(e.target.value)}
            placeholder="Meetup ID"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        {apiCalls.map((call) => (
          <ApiCall
            key={call.title}
            title={call.title}
            endpoint={call.endpoint}
            content={call.content}
            call={() => {
              return fetch(
                `http://127.0.0.1/api${call.endpoint}`.replace(":id", meetupId),
                {
                  method: call.method,
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(call.content),
                }
              );
            }}
            method={call.method}
          />
        ))}
      </div>
    </>
  );
}

export default App;
