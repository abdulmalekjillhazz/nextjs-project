import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex py-4 items-center justify-center bg-zinc-50 
    font-sans dark:bg-black">
      <main className="flex py-10 px-20 w-full max-w-3xl flex-col items-center 
      justify-between bg-white dark:bg-black sm:items-start">
           <h1 className="text-4xl font-bold mb-6">Welcome to My Website</h1>
      <p className="mb-6">Explore my services, milestones, and blogs below:</p>

      <div className="flex gap-6 text-3xl ml-150 mb-40 p-10">
        <Link href="/services" className="text-blue-500 underline">Services</Link>
        <Link href="/milestones" className="text-blue-500 underline">Milestones</Link>
        <Link href="/blog" className="text-blue-500 underline">Blog</Link></div>
       <Image className="flex py-4 "
          src="/profile final-01  ddf-01.png"
          alt="Next.js logo"
          width={150}
          height={20}
        />
         <p>
          Web Design and Developer</p>
           <div className="flex py-20 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className=" font-semibold text-4xl leading-20 tracking-tight text-black dark:text-zinc-50">
            Hello world! I created a web site for experiments.
          </h2>
        </div>
      </main>
    </div>
  );
}
