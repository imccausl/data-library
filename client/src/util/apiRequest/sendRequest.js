import API from "../api";

async function sendRequest(fetchHandler, path, method = 'GET', opts = {}) {
  const ROOT_URL = `${API.root}`;
  const headers = Object.assign({}, opts.headers || {}, {
    "Content-Type": "application/json; charset=UTF-8"
  });

  const response = await fetchHandler(
    `${ROOT_URL}${path}`,
    Object.assign({ method }, opts, {
      headers,
      body: JSON.stringify(opts.body)
    })
  );

  const data = await response.json();
  console.log(data)
  return data;
}

const sendRequestWrapper = fetchHandler => (path, method, opts) =>
  sendRequest(fetchHandler, path, method, opts);

export default sendRequestWrapper(fetch);