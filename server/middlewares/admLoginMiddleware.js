import jwt from "jsonwebtoken";

function admLoginMiddleware(req, res, handler) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(403).json({ error: "No token provided" });
  }

  try {
    const { id, name } = jwt.verify(authorization, process.env.JWT_SECRET);
    const admins = ["renatobmpsilva", "renatobmps"];
    if (!admins.includes(name))
      return res.status(403).json({ error: "Invalid token" });
    req.user = { id, name };
    return handler(req, res);
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
}

export default admLoginMiddleware;
