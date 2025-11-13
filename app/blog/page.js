export default function Blog() {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-semibold mb-4">Blog Section</h1>
      <p>Welcome to my blog! Here, I’ll share tutorials, tips, and updates about web development.</p>

      <div className="mt-6 space-y-4">
        <article className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold">How I Started Web Development</h2>
          <p className="text-gray-600 mt-2">
            In this post, I share my journey learning HTML, CSS, and Next.js...
          </p>
        </article>

        <article className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold">Top 5 Tools for Freelancers</h2>
          <p className="text-gray-600 mt-2">
            These are my favorite tools for productivity and project management...
          </p>
        </article>
      </div>
    </section>
  );
}