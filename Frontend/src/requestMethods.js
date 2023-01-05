import axios from "axios";

const BASE_URL = "http://localhost:5000/backend/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ5OWQ0YzA0MTY2YzI5MzA2MGYyNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjkwODQxMiwiZXhwIjoxNjczMTY3NjEyfQ.Wf_aQgVaKqip2GiqhiLuXA_HRj5D4JsXwpGcIB2nSzM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header:{token:`Bearer ${TOKEN}`}
});
