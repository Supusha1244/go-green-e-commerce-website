import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "#about h2, #about p, #about .about-box"
    );

    elements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + i * 150);
    });
  }, []);

  return (
    <>
      <section id="about" className="py-20 px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              About Our Mission
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-green-300 to-green-500 mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              We're transforming the way people interact with the environment
              through innovative solutions and education. Our team of sustainability
              experts is dedicated to making green living practical for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-green-400">Our Story</h3>
                <p className="text-gray-300 mb-4">
                  Founded in 2015, Go Green began as a small collective of environmental
                  activists. Today we're a global movement with over 500 team members across
                  12 countries.
                </p>
                <p className="text-gray-300">
                  We've helped over 1 million households transition to sustainable living
                  through our education programs and eco-friendly product lines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 about-box">
                  <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Our Mission
                  </h3>
                  <p className="text-gray-300">
                    To democratize sustainable living through innovative products,
                    accessible education, and community empowerment.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 about-box">
                  <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Our Values
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    {["Sustainability First in all decisions", "Community-driven solutions", "Ethical and transparent operations"].map((val, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{val}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <button className="cta-button bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Meet Our Team
                </button>

                <button className="cta-button bg-transparent border-2 border-green-500 hover:bg-green-500/10 text-white font-semibold py-3 px-8 rounded-full flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Annual Report
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eabd515a-e32d-4ae3-a062-129032aa2b8d.png"
                  alt="Our team working on sustainability projects"
                  className="rounded-lg w-full h-auto shadow-lg"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-green-500 text-white px-6 py-3 rounded-lg">
                Since 2015
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Go Green</h3>
            <p className="text-gray-400">Making sustainability accessible to everyone.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-green-400 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-green-400 transition">About</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-green-400 transition">Resources</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">hello@gogreen.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Facebook</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2023 Go Green. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

