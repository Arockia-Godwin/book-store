const jwt = require("jsonwebtoken");

// Middleware to validate Bearer token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "Unauthorized Access. Please Login!" }); // Forbidden; // Unauthorized
  }

  jwt.verify(
    token,
    "b22b547aeebb6fbb1396599bbc5eb132d5c105bbf105dae2cf01fba9a8d1a4b7",
    (err, user) => {
      if (err) {
        return res.status(403).json({
          status: false,
          message: "Unauthorized Access. Please include bearer token!",
        }); // Forbidden
      }
      req.user = user;
      next();
    }
  );
};

module.exports = authenticateToken;
