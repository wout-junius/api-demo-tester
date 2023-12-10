import React from "react";
import ContentTable from "./ContentTable";

interface ApiCallProps {
  title: string;
  content: { [key: string]: string };
  endpoint: string;
  call: (endpoint: string, content: { [key: string]: string }) => void;
}

export default function ApiCall({
  title = "Api Call",
  content,
  endpoint = "/test",
  call,
}: ApiCallProps) {
  const onClick = () => {
    call(endpoint, content);
  };

  return (
    <div className="collapse collapse-plus bg-base-200 m-4">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        <div className="collapse-inner">
          <ContentTable content={content} />
          <div className="flex justify-end">
            <button className="btn btn-primary" onClick={onClick}>
              Fetch <span>{endpoint}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
