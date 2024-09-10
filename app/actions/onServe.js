"use server";

export async function getServerData() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 10, tags: ["b"] },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }
    const data = response.json();
    return data;
  } catch (error) {
    return { message: error.message };
  }
}
