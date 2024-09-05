import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SeoHead from "../components/seo_head";

interface StatusState {
  status: "ok" | "ko";
  time_stamp: number;
  random: number;
  triedLettersDB: number;
  userDB: number;
  userWordDB: number;
  wordDB: number;
}

const Card = styled.main`
  background-color: white;
  border-radius: 1rem;
  padding: 1rem !important;
  width: 100%;
  max-width: 600px;
  flex: none !important;
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
          const adapter: StatusState = {
            ...data,
            triedLettersDB: data?.counts?.triedLetters ?? 0,
            userDB: data?.counts?.user ?? 0,
            userWordDB: data?.counts?.userWord ?? 0,
            wordDB: data?.counts?.word ?? 0,
          };
          setStatus(adapter);
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
      <SeoHead title='Status' />
      <h1>Status page</h1>
      {status && (
        <div>
          <p>Status: {status.status}</p>
          <p>
            Timestamp:{" "}
            {status.time_stamp ? formatDate(new Date(status.time_stamp)) : "-"}
          </p>
          <p>Random: {status.random}</p>
          <p>Total of words: {status.wordDB}</p>
          <p>Number of users: {status.userDB}</p>
          <p>Number of games: {status.userWordDB}</p>
          <p>Total letters used: {status.triedLettersDB}</p>
        </div>
      )}
    </Card>
  );
}
