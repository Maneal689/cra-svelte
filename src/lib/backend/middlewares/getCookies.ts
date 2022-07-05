import cookie from "cookie";

export default function getCookies(req: Request) {
  return cookie.parse(req.headers.get("cookie") || "");
}
