
export function fetchApi(
  endpoint: string,
  body: { [key: string]: any } = {},
  method = "GET"
) {
  let fetchUrl = new URL(`http://localhost:3000${endpoint}`);
  if (method === "GET") {
    for (const key in body) {
      fetchUrl.searchParams.append(key, body[key]);
    }
  }

  return fetch(fetchUrl.toString(), {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: method !== "GET" ? JSON.stringify(body) : undefined,
  }).then((res) => res.json());
}
