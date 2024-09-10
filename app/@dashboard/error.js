"use client"; // This needs to be a client component to use error boundaries

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error); // Log the error to the console
  }, [error]);

  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
