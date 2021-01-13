import axios from "axios";

export default function auth({ next, router }) {
  axios.get("/api/user").catch(() => {
    return router.push({ name: "Login" });
  });
  return next();
}
