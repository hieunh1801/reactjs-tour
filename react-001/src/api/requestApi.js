import environment from "environments/environment";
import asyncSleep from "utils/asyncSleep";

const requestApi = async ({ url, method, body, params }) => {
  let baseUrl = environment.baseUrl + url;
  baseUrl = params ? baseUrl + "?" + new URLSearchParams(params) : baseUrl;
  await asyncSleep(500);
  return fetch(baseUrl, {
    method: method,
    body: JSON.stringify(body),
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      "access-token": "this is access token from localStorage",
    }),
  });
};

export default requestApi;
