import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../server/routers";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

async function main() {
  const allUsers = await client.users.list.query();
  const singleUser = await client.users.getById.query(1);
  const newUser = await client.users.create.mutate({ name: "Kiki" });
  const deletedUser = await client.users.delete.mutate(2);

  console.log({ allUsers });
  console.log({ singleUser });
  console.log({ newUser });
  console.log({ deletedUser });
}

main();
