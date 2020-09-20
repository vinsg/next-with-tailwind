import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center bg-gray-100 w-screen h-screen">
        <h1 className="text-4xl pt-12">
          Next js with Tailwind CSS
        </h1>
      </main>

      <footer>
      </footer>
    </div>
  )
}
