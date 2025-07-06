// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const heroElements = document.querySelectorAll(
      "#home h1, #home p, .cta-button"
    );
    heroElements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + i * 100);
    });

    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.querySelector("img").style.transform = "scale(1.05)";
      });
      card.addEventListener("mouseleave", () => {
        card.querySelector("img").style.transform = "scale(1)";
      });
    });
  }, []);

  return (
    <section
      id="home"
      className="h-screen hero-image flex flex-col justify-center items-center text-center px-4 text-white relative"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bd5cc0fd-0e7e-4295-8fe1-337b8c951c85.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="leaf-icon mb-6 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-green-400 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-3-3V4.5m0 2.5a1.5 1.5 0 00-3 0v4a1.5 1.5 0 003 0m3-4.5V6a1.5 1.5 0 00-3 0v1.5a1.5 1.5 0 003 0z"
            />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Welcome to <span className="text-green-400">Go Green</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Shop eco-friendly and sustainable products for a greener future.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button
            onClick={() => navigate("/products")}
            className="cta-button bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg"
          >
            Shop Sustainable Products
          </button>
          <button
            onClick={() => navigate("/about")}
            className="bg-transparent border-2 border-green-500 hover:bg-green-500/10 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Learn About Sustainability
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            {
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5820e6a6-60fd-4206-bf5e-564edb1c977b.png",
              title: "Bamboo Cups",
            },
            {
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39ea3469-28a5-4c07-aec8-ece6b5aaea8d.png",
              title: "Organic Bags",
            },
            {
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db14309f-91f4-49cb-ba4e-6dc6e256ff46.png",
              title: "Wooden Utensils",
            },
            {
              img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/891c6a7a-fade-4e10-ae38-5dba05023363.png",
              title: "Solar Chargers",
            },
          ].map(({ img, title }) => (
            <div
              key={title}
              className="product-card bg-white/10 p-4 rounded-lg backdrop-blur-sm"
            >
              <img
                src={img}
                alt={title}
                className="rounded mb-3 h-24 object-contain mx-auto transition-transform duration-300"
              />
              <h3 className="text-green-400 font-semibold text-center">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
