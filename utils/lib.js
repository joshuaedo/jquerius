const fetchJoke = async () => {
  try {
    const res = await fetch("http://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    const parsedData = data.joke;
    return parsedData;
  } catch (error) {
    console.error("Error fetching joke:", error);
    throw error;
  }
};

module.exports = { fetchJoke };
