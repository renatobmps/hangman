import db from "../models";
// import { compare, hash } from "bcrypt";
// import { sign } from "jsonwebtoken";
// import createHash from "hash-generator";

import { NextApiRequest, NextApiResponse } from "next";

class Login {
    //   constructor(loginService) {
    //     this.loginService = loginService;
    //   }

    //   static async login(req, res) {
    //     const { user, password } = req.body;

    //     try {
    //       const userData = await db.User.findOne({
    //         where: {
    //           name: user,
    //         },
    //       });

    //       if (!userData) return res.status(401).json({ error: "User not found" });

    //       const isPasswordValid = await compare(password, userData.password);

    //       if (!isPasswordValid)
    //         return res.status(401).json({ error: "Password is incorrect" });

    //       const token = sign(
    //         {
    //           id: userData.id,
    //           name: userData.name,
    //         },
    //         process.env.JWT_SECRET,
    //         {
    //           expiresIn: "365d",
    //         }
    //       );

    //       res.status(200).json({ token });
    //     } catch (error) {
    //       res.status(500).json({ error });
    //     }
    //   }

    //   static async resetPassword(req, res) {
    //     const { username } = req.body;

    //     try {
    //       const userData = await db.User.findOne({
    //         where: { name: username },
    //       });
    //       if (!userData) return res.status(401).json({ error: "User not found" });

    //       const newPassword = createHash(8);
    //       req.body.password = await hash(newPassword, 10);

    //       await userData.update(req.body);
    //       res.status(201).json({
    //         username,
    //         password: newPassword,
    //       });
    //     } catch (error) {
    //       res.status(500).json({ error });
    //     }
    //   }

    public static async testFunc(req: NextApiRequest, res: NextApiResponse) {
        const triedLetters = await db.TriedLetters.findAndCountAll();
        const user = await db.User.findAndCountAll();
        const userWord = await db.UserWord.findAndCountAll();
        const word = await db.Word.findAndCountAll();

        res.json({
            status: "ok",
            time_stamp: Date.now(),
            random: Math.floor(Math.random() * 1024),
            counts: {
                triedLetters: triedLetters.count,
                user: user.count,
                userWord: userWord.count,
                word: word.count,
            },
        });
    }
}

export default Login;
