import React, { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ClientReviewsSection() {
  const [reviews, setReviews] = useState([
    // Empty initially or preload one real review
    // {
    //   id: 1,
    //   name: "Real Client",
    //   title: "CEO @ Example",
    //   avatar: "/default-avatar.png",
    //   review: "They built us an amazing site, 10/10 experience!"
    // }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    avatar: "",
    review: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      ...formData,
      avatar: formData.avatar || "/default-avatar.png", // fallback
    };

    setReviews((prev) => [...prev, newReview]);

    // Reset form
    setFormData({ name: "", title: "", avatar: "", review: "" });
  };

  return (
    <section className="py-20 px-4 bg-[#0a0a1a] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm mb-4 tracking-wider uppercase">
            Build With Incredible
          </p>
          <h2 className="text-4xl text-white">Good Clients Reviews</h2>
        </div>

        {/* Review Submission Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto mb-12 bg-[#141427] p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-white text-lg mb-4">Leave a Review</h3>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded bg-[#1f1f33] text-white"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Your role / title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded bg-[#1f1f33] text-white"
          />
          <input
            type="text"
            name="avatar"
            placeholder="Avatar image URL (optional)"
            value={formData.avatar}
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded bg-[#1f1f33] text-white"
          />
          <textarea
            name="review"
            placeholder="Your review"
            value={formData.review}
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded bg-[#1f1f33] text-white"
            rows="3"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
          >
            Submit Review
          </button>
        </form>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.length === 0 ? (
            <p className="text-center text-gray-400 col-span-full">
              No reviews yet — be the first!
            </p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="group">
                {/* Client Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <ImageWithFallback
                      src={review.avatar}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white">{review.name}</h3>
                    <p className="text-blue-400 text-sm">{review.title}</p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="mb-4">
                  <svg
                    width="32"
                    height="24"
                    viewBox="0 0 32 24"
                    fill="none"
                    className="text-gray-600"
                  >
                    <path
                      d="M0 12C0 5.373 5.373 0 12 0h2v12H2v10h8v2H2a2 2 0 01-2-2V12zm18 0C18 5.373 23.373 0 30 0h2v12h-12v10h8v2h-8a2 2 0 01-2-2V12z"
                      fill="currentColor"
                      fillOpacity="0.3"
                    />
                  </svg>
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-300 leading-relaxed">
                  "{review.review}"
                </blockquote>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
