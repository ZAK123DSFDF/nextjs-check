"use client";

export default function ClientComponent({ data }) {
  return (
    <div>
      <p>Data passed from the server: {data.joke}</p>
    </div>
  );
}
