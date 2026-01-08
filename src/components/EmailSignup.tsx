// src/components/EmailSignup.tsx

import React, { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    // TODO: Integrate with your backend or Mailchimp
    alert("Thanks for subscribing!");
    setEmail('');
  };

  return (
    <section className="py-12 px-4 bg-green-600 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Illustration */}
        <div className="md:w-1/3">
          <div className="bg-white rounded-full p-8 w-full max-w-[300px] mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-auto text-green-600">
              <path d="M22 12h-4l-4-4v4H6v8h4v4l4-4v-4h4v-8z" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </div>

        {/* Right Side - Text & Form */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Get Email Updates</h2>
          <p className="mb-6 text-sm opacity-90">
            Receive customised emails about properties you are interested in and keep up with latest property news.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-colors whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;