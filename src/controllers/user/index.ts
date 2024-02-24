import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

class UserController {
  static showAllUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data = await prisma.user.findMany();
      res.json({
        data,
        message: "Users lists!",
      });
    } catch (error) {
      next(error);
    }
  };

  static addUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const currentDate = new Date();
      const data = await prisma.user.create({
        data: {
          email: "test@email.com",
          status: "active",
          lisensi: "lisensi123",
          game: "polling",
          tgl_expired: new Date(currentDate.setDate(currentDate.getDate() + 7)),
          live: false,
        },
      });
      res.json({
        data,
        message: `User created`,
      });
    } catch (error) {
      next(error);
    }
  };

  static updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.params;
    res.json({ message: `Users ${id} updated!` });
  };

  static deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.params;
    res.json({ message: `Users ${id} deleted!` });
  };

  static login = () => {};

  static logout = () => {};
}

export default UserController;
