export const getGPTResponse = async (prompt) => {
  console.log("Prompt sent:", prompt);

  try {
    const res = await fetch("http://localhost:5001/api/gpt-movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    console.log("Fetch response:", res);

    if (!res.ok) throw new Error("Failed to fetch GPT response");

    const data = await res.json();
    console.log("Data received:", data);

    return data?.result || "";
  } catch (err) {
    console.error("Error:", err);
    return "";
  }
};
