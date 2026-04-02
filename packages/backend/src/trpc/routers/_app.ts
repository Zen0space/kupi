import { z } from "zod";
import { router, publicProcedure } from "../init";

export const appRouter = router({
  health: publicProcedure.query(() => {
    return { status: "ok" };
  }),

  hello: publicProcedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return { greeting: `Hello ${input.name ?? "world"}!` };
    }),
});

export type AppRouter = typeof appRouter;
