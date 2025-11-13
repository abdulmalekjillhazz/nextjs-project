import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Navigation */}
      <nav className ="absolute top-20 right-6 flex gap-30 text-4xl font-medium">
  <Link href="/about" className ="no-underline text-white hover:text-gray-400 transition duration-200">About</Link>
  <Link href="/services" className ="no-underline text-white hover:text-gray-400 transition duration-200">Services</Link>
  <Link href="/blog" className ="no-underline text-white hover:text-gray-400 transition duration-200">Blog</Link>
</nav>
       

      {/* Hero Section */}
      <section className="text-center flex flex-col items-center gap-6">
       
        <p className="text-gray-300 md:text-lg">
          Explore my services, milestones, and blogs below:
        </p>

        {/* Profile Image */}
        <div>
          <Image  className =" w-70 h-70 rounded-full object-cover border-4  border-blue-300"
            src="/profile.png"
            alt="Profile Image"
            width={500}
            height={500}
            />
        </div>

        <p className="text-white text-lg md:text-xl">Web Designer and Developer</p>

        {/* Additional Info Section */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left max-w-2xl mt-12">
          <p className=" text-2xl">
            Hello world! I created this website for experiments and projects.
          </p>
        </div>
      </section>
    </main>
  );
}
