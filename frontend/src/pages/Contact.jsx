import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-black mb-6">Contact Us</h1>
        <form id="contactForm" onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-lg font-medium text-black">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-lg font-medium text-black">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block text-lg font-medium text-black">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
