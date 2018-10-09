export const customAdapter = fetch => (
  (url, opts) => fetch(url, opts).then((resp) => {
    if (!resp.ok) return Promise.reject(resp);
    return resp.json();
  })
);

export { customAdapter as default };
