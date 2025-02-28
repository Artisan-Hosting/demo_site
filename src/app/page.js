'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6">
      <header className="w-full max-w-5xl bg-gray-800 shadow-md p-8 rounded-lg text-center">
        <h1 className="text-5xl font-bold text-purple-400">SuperNova Solutions</h1>
        <p className="text-gray-300 mt-3 text-lg">Innovative Tech for a Better Future</p>
      </header>
      
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-800 shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-purple-300">About Us</h2>
          <p className="text-gray-300 mt-2">
            SuperNova Solutions is dedicated to delivering cutting-edge technology
            solutions to businesses of all sizes. From custom software development
            to AI-powered automation, we help companies innovate and scale.
          </p>
        </div>
        <div className="bg-gray-800 shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-purple-300">Why Choose Us?</h2>
          <ul className="mt-3 space-y-2">
            <li className="text-gray-300 bg-purple-700 p-3 rounded">Expert Engineers & Developers</li>
            <li className="text-gray-300 bg-purple-700 p-3 rounded">Tailored Solutions for Every Business</li>
            <li className="text-gray-300 bg-purple-700 p-3 rounded">24/7 Customer Support</li>
            <li className="text-gray-300 bg-purple-700 p-3 rounded">Scalable & Future-Proof Technology</li>
          </ul>
        </div>
      </section>
      
      <section className="w-full max-w-5xl mt-8 bg-gray-800 shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-purple-300">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-purple-700 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-xl text-gray-100">Custom Software</h3>
            <p className="text-gray-300 mt-2">Tailored software development for your needs.</p>
          </div>
          <div className="bg-purple-700 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-xl text-gray-100">Cloud & DevOps</h3>
            <p className="text-gray-300 mt-2">Optimized cloud infrastructure and automation.</p>
          </div>
          <div className="bg-purple-700 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-xl text-gray-100">AI & ML</h3>
            <p className="text-gray-300 mt-2">Machine learning solutions for data-driven insights.</p>
          </div>
        </div>
      </section>
      
      <section className="w-full max-w-5xl mt-8 bg-gray-800 shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-purple-300">What Our Clients Say</h2>
        <p className="text-gray-300 mt-2 italic"> &#34; SuperNova honestly a lame name for a company! &#34; - Happy Client</p>
      </section>
      
      <footer className="w-full max-w-5xl bg-gray-800 shadow-md p-6 rounded-lg mt-8 text-center">
        <p className="text-gray-300">Contact us at <Link href="mailto:contact@SuperNova.com" className="text-purple-400">contact@SuperNova.com</Link></p>
      </footer>
    </div>
  );
}
