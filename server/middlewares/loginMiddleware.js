import jwt from "jsonwebtoken";

function loginMiddleware(req, res, handler) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(403).json({ error: "No token provided" });
  }

  try {
    const { id, name } = jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = { id, name };
    return handler(req, res);
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
}

export default loginMiddleware;
