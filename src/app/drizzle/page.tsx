import "~/styles/globals.css";

import Head from "next/head";
import { db } from "~/drizzle/db";
import { example } from "~/drizzle/schema";

const Prisma = async () => {
  const data = await db.select().from(example);

  // if (!data.length) await prisma.example.create({ data: {} });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </>
  );
};

export default Prisma;
