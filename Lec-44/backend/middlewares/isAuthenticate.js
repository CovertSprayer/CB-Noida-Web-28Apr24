const jwt = require("jsonwebtoken");

const isAuthenticate = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
      try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message: "Unauthorized"
        })
    }
  }

  else{
    res.status(401).json({
        success:false,
        message: "Unauthorized, no token"
    })
  }
};

module.exports = {
  isAuthenticate,
};
