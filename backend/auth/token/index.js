const jwt = require("jsonwebtoken");
const ACCESS_SECRET = process.env.ACCESS_SECRET;

const getToken = ({ username, _id }) => jwt.sign({ username, _id }, ACCESS_SECRET, { expiresIn: "1d" });

exports.setCookie = (res, { username, _id }) => {
    res.cookie("proj_manager", getToken({ username, _id }), {
        maxAge: 24 * 60 * 60 * 1000 * 10,
        httpOnly: true,
        sameSite: "None",
        path: "/",
        secure: true,
    });
}

exports.verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer')) {
        req.auth = {}
        next();
    }

    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_SECRET, (error, decoded) => {
        if (error) {
            req.auth = {};
            next();
        } else {
            const { _id, username } = decoded;
            req.auth = {
                authId: _id,
                authName: username,
            };
            next();
        }
    })

}