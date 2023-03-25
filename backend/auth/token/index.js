const jwt = require("jsonwebtoken");
const { ACCESS_SECRET, REFRESH_SECRET } = process.env;

const getToken = ({ username, _id }, tokenType) => jwt.sign({ username, _id }, tokenType, { expiresIn: "1d" });

exports.setCookie = (res, { username, _id }) => {
    res.cookie("proj_manager", getToken({ username, _id }, REFRESH_SECRET), {
        maxAge: 24 * 60 * 60 * 1000 * 10,
        httpOnly: true,
        sameSite: "None",
        path: "/",
        secure: true,
    });
}

exports.refreshToken = (req) => {

    if (!req.cookies && !req.cookies.proj_manager) {
        return req.auth = {};
    }

    const refreshToken = req.cookies.proj_manager;

    jwt.verify(refreshToken, REFRESH_SECRET, (error, decoded) => {
        if (error) {
            return req.auth = {};
        } else {
            const { _id, username } = decoded;
            req.auth = {
                authId: _id,
                authName: username,
            };
        }
    })
}

exports.verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer')) {
        req.auth = {}
        next();
    }

    const token = authorization.split(' ')[1];

    jwt.verify(token, ACCESS_SECRET, (error, decoded) => {
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