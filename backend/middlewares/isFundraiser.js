const { ERR } = require("../utils/response");

const isFundraiser = (req, res, next) => {
    if (!req.user || !['fundraiser', 'project manager', 'developer'].includes(req.user.role)) {
        return ERR(res, 403, "Akses hanya untuk fundraiser atau project manager");
    }
    next();
};

module.exports = isFundraiser;