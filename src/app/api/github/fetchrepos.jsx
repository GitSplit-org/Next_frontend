const fetchrepos = async () => {
  const res = await fetch("http://localhost:9090/github", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return Response.json({ data });
};

export default fetchrepos;
