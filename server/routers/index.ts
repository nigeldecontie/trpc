import { publicProcedure, router } from "../trpc";
import { usersRouter } from "./users";

export const appRouter = router({
  users: usersRouter,
});

// Export type router type signature, NOT the router itself.
export type AppRouter = typeof appRouter;
