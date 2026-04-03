import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../init";

export const appRouter = router({
  health: publicProcedure.query(() => {
    return { status: "ok" };
  }),

  hello: publicProcedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return { greeting: `Hello ${input.name ?? "world"}!` };
    }),

  me: protectedProcedure.query(({ ctx }) => {
    return { user: ctx.user };
  }),

  syncUser: protectedProcedure
    .input(
      z.object({
        name: z.string().nullish(),
        username: z.string().nullish(),
        picture: z.string().nullish(),
        email: z.string().nullish(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const sub = ctx.user.sub;

      const user = await ctx.prisma.user.upsert({
        where: { id: sub },
        update: {
          name: input.name ?? undefined,
          username: input.username ?? undefined,
          picture: input.picture ?? undefined,
          email: input.email ?? undefined,
        },
        create: {
          id: sub,
          name: input.name ?? null,
          username: input.username ?? null,
          picture: input.picture ?? null,
          email: input.email ?? null,
        },
      });

      console.log(
        `[syncUser] User synced: ${user.id} (${user.username ?? user.name ?? "no name"})`,
      );

      return { user };
    }),
});

export type AppRouter = typeof appRouter;
