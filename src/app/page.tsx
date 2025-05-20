import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-400">Uzair Zia</h1>
        <p className="text-xl mt-2">
          Frontend Developer | Agentic AI Developer
        </p>
      </header>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">About Me</h2>
        <p className="text-gray-300 text-justify ">
          I am Uzair Zia, a passionate Frontend Developer and Agentic AI
          Developer, transitioning from a strong HR background into the world of
          technology. With hands-on experience in tools like React, Next.js,
          TypeScript, and Sanity.io, I bring a unique blend of business acumen
          and technical skills. I’ve built and deployed real-world projects
          including a mobile accessories marketplace with a full admin panel,
          and I’m continuously exploring new technologies to expand my
          capabilities. I thrive on building user-focused, responsive, and
          scalable web applications.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">
          Featured Project
        </h2>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-white">
            Mobile Accessories Marketplace
          </h3>
          <p className="text-gray-400 mt-2">
            A complete ecommerce solution with a separate admin dashboard built
            using Next.js and Sanity. Features include cart, checkout, shipping
            info, and order management.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              🔗{" "}
              <Link
                href="https://marketplacetechnicalfoundation-accessorieshub.vercel.app/"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                Live Demo
              </Link>
            </li>
            <li>
              🛠️{" "}
              <Link
                href="https://marketplaceadmin-self.vercel.app/"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                Admin Panel
              </Link>
            </li>
            <li>
              💻{" "}
              <Link
                href="https://github.com/uzairzia02/marketplacetechnicalfoundation"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                GitHub Code
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-semibold">CV/Resume Generator</h3>
            <p className="text-gray-400 text-sm text-justify">
              A tool to generate downloadable resumes from form inputs using
              HTML, CSS, and TypeScript.
            </p>
            <Link
              href="https://dynamicresumeusingnextjs-amu3.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:underline text-sm"
            >
              Live Demo
            </Link>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-semibold">Blog Website</h3>
            <p className="text-gray-400 text-sm text-justify ">
              A modern Blog website built with Next.js, delivering the latest
              news in tech trends.
            </p>
            <Link
              href="https://milestone3-blogwebsite.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:underline text-sm"
            >
              Live Demo
            </Link>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-semibold">IPhone App</h3>
            <p className="text-gray-400 text-sm text-justify ">
              Converted a professional Figma design into a fully responsive website using Next.js and Tailwind CSS. 
            </p>
            <Link
              href="https://figma-to-next-js-sable.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:underline text-sm"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Education</h2>
        <ul className="text-gray-300 space-y-2">
          <li>
            <span className="font-semibold text-white">MBA in Human Resources</span> <br />
            <span className="text-gray-400 text-sm">Completed &ndash; 2021</span>
          </li>
          <li>
            <span className="font-semibold text-white">Governor Initiative for Artificial Intelligence</span> <br />
            <span className="text-gray-400 text-sm">2024 &ndash; Present</span>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Contact</h2>
        <ul className="text-gray-300 space-y-2">
          <li>
            Email:{" "}
            <a
              href="mailto:uzair9900@hotmail.com"
              className="text-blue-400 hover:underline"
            >
              uzair9900@hotmail.com
            </a>
          </li>
          <li>
            Mobile: <span className="text-blue-400">+92-334-3543884</span>
          </li>
          <li>
            LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/uzair-zia-67730790/"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              linkedin.com/in/uzair-zia
            </Link>
          </li>
          <li>
            GitHub:{" "}
            <Link
              href="https://github.com/uzairzia02"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              github.com/uzairzia02
            </Link>
          </li>
        </ul>
      </section>

      <footer className="text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Uzair Zia. All rights reserved.
      </footer>
    </main>
  );
}
