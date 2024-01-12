import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface StatusState {
  status: "ok" | "ko";
  time_stamp: number;
  random: number;
}

const Card = styled.main`
  background-color: white;
  border-radius: 1rem;
  padding: 1rem !important;
  width: 100%;
  max-width: 600px;
  flex: none;
  line-height: 2rem;
`;

export default function Login() {
  const [status, setStatus] = useState<StatusState | null>();

  useEffect(() => {
    fetch("/api/v1/status")
      .catch((err) => {
        alert(err.message ?? "Error to get data");
      })
      .then(async (response) => {
        const data = await response?.json();

        if (!response?.ok) {
          alert(data.error ?? "Server responds with an error");

          setStatus(null);
        } else {
          setStatus(data);
        }
      });
  }, []);

  const formatDate = (date: Date) => {
    const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    });

    return dateTimeFormat.format(date);
  };

  return (
    <Card>
      <h1>Status page</h1>
      {status && (
        <div>
          <p>Status: {status.status}</p>
          <p>
            Timestamp:{" "}
            {status.time_stamp ? formatDate(new Date(status.time_stamp)) : "-"}
          </p>
          <p>Random: {status.random}</p>
        </div>
      )}
    </Card>
  );
}
