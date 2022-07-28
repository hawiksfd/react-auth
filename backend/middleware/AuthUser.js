import Users from "../model/UsersModel.js";

export const verifyUser = async (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Mohon login dengan akun anda!" })
    } //jika tidak login

    const user = await Users.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" }); //login find userid
    req.userId = user.id;
    req.role = user.role;
    next();
}

export const verifyAdmin = async (req, res, next) => {
    const user = await Users.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" }); // login find userid

    if (user.role !== "admin") return res.status(403).json({ msg: "Akses terlarang!" }); // akses hanya admin
    next();
}