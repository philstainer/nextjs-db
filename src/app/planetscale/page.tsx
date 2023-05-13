import "~/styles/globals.css";

import Head from "next/head";
import { db } from "~/plantscale/db";

const Prisma = async () => {
  const data = await db.execute("select id, createdAt, updatedAt from Example");

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <pre>{JSON.stringify(data.rows, null, 2)}</pre>
      </main>
    </>
  );
};

export default Prisma;