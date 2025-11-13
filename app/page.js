import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Navigation */}
      <nav className="flex flex-wrap gap-6 text-lg font-medium mb-12">
        <Link
          href="/about"
          className=" text-3xl no-underline text-white hover:text-gray-400 transition duration-200"
        >
          About
        </Link>
        <Link
          href="/services"
          className="no-underline text-white hover:text-gray-200 transition duration-200 text-3xl"
        >
          Services
        </Link>
        <Link
          href="/blog"
          className="no-underline text-white hover:text-gray-400 text-3xl transition duration-200"
        >
          Blog
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Website</h1>
        <p className="text-gray-300 md:text-lg">
          Explore my services, milestones, and blogs below:
        </p>

        {/* Profile Image */}
        <div className="py-6">
          <Image
            src="/profile.png"
            alt="Profile Image"
            width={150}
            height={150}
          />
        </div>

        <p className="text-white text-lg md:text-xl">Web Designer and Developer</p>

        {/* Additional Info Section */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left max-w-3xl mt-12">
          <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
            Hello world! I created this website for experiments and projects.
          </h2>
        </div>
      </section>
    </main>
  );
}
