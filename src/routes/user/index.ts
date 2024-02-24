import express from "express";
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// read
router.get("/", async(req, res, next) => {
  const data = await prisma.user.findMany()
  res.json({
    data,
    message: "Users lists!"})
});

// create
router.post('/', async (req, res, next) => {
  var currentDate = new Date();
    const data = await prisma.user.create({
      data: {
        email: "test@email.com",
        status: "active",
        lisensi: "lisensi123",
        game: "polling",
        tgl_expired: new Date(currentDate.setDate(currentDate.getDate() + 7)),
        live: false
      }
    })
    res.json({
      data,
      message: `User created`})
})

// Update
router.patch('/:id', (req, res, next) => {
  const {id} = req.params;
  res.json({message: `Users ${id} updated!`})
})

// Delete
router.delete('/:id', (req, res, next) => {
  const {id} = req.params;
  res.json({message: `Users ${id} deleted!`})
})

export default router;