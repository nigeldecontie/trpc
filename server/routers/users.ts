import { db } from "../db";
import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const usersRouter = router({
  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await db.user.create(input);
      return user;
    }),
  getById: publicProcedure.input(z.number()).query(async (opts) => {
    const { input } = opts;
    const user = await db.user.findById(input);
    return user;
  }),
  list: publicProcedure.query(async () => {
    const users = await db.user.findMany();
    return users;
  }),
  delete: publicProcedure.input(z.number()).mutation(async (opts) => {
    const { input } = opts;
    const user = await db.user.delete(input);
    return user;
  }),
});
