import Image from "next/image";

export default function MilestonesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white font-sans">
      {/* Home / Intro Section */}
      <section className="p-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Abdul Malek!</h1>
        <p className="text-lg">
          A student learning Web Development, Graphic Design & Digital Marketing.
        </p>
      </section>

      {/* Milestones / Work Section */}
      <section className="p-16 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-semibold mb-8 text-center">My Work & Milestones</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2">Graphic Design</h3>
            <p>Created logos, banners, T-shirt designs, and more.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2">Digital Marketing</h3>
            <p>Learned SEO, social media marketing, and ads campaigns.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2">Web Development</h3>
            <p>Built websites using React, Next.js, and WordPress CMS.</p>
          </div>
        </div>
      </section>

      {/* Personal Information Section */}
      <section className="p-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Personal Information</h2>
        <p>Name:Abdul Malek</p>
        <p>Location: Netrakona,Mymensingh, Bangladesh</p>
        <p>Email: abdulmalek67343367@gmail.com</p>
      </section>
    </div>
  );
}
