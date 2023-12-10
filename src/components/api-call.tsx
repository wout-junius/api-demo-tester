import React from "react";
import ContentTable from "./ContentTable";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export interface ApiCallProps {
  title: string;
  content?: { [key: string]: string };
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  call: () => Promise<Response>;
}

export default function ApiCall({
  title = "Api Call",
  content,
  endpoint = "/test",
  call,
  method,
}: ApiCallProps) {
  const [response, setResponse] = React.useState<string | undefined>();

  const onClick = async () => {
    setResponse(undefined);
    const response = await call();
    const json = await response.json();
    setResponse(JSON.stringify(json, null, 2));
  };

  return (
    <div className="collapse collapse-plus bg-base-200 m-4">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-xl font-medium">
        <span
          className={`badge badge-outline badge-lg mr-1 ${methodColors[method]}`}
        >
          {method}
        </span>
        {title}
      </div>
      <div className="collapse-content">
        <div className="collapse-inner">
          {content ? <ContentTable content={content} /> : null}
          <div className="flex justify-end">
            <button className="btn btn-primary" onClick={onClick}>
              Fetch{" "}
              <i className="bg-zinc-50/20 p-2 rounded font-bold">{endpoint}</i>
            </button>
          </div>
          {response ? (
            <div className="w-full">
              <h1 className=" text-2xl font-bold">Response:</h1>
              <SyntaxHighlighter
                className="language-json rounded m-10 max-w-full overflow-hidden"
                style={dracula}
              >
                {response}
              </SyntaxHighlighter>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const methodColors = {
  GET: "badge-success",
  POST: "badge-warning",
  PUT: "badge-primary",
  DELETE: "badge-error",
};
