import React from 'react';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          About us
        </h1>
        <p className="text-gray-800 leading-relaxed mb-6">
          Where clarity meets creativity. At Motangi Glasses and Mirrors, we are more than just a glass and mirror supplier—we are artisans dedicated to transforming spaces with elegance and precision.
        </p>
        <blockquote className="italic text-gray-700 border-l-4 border-gray-900 pl-6 bg-gray-100 py-3 hover:bg-gray-200 transition-colors duration-300">
          "Transform your space into a masterpiece with our bespoke glass and mirror solutions."
        </blockquote>
      </div>

    
      <div className="space-y-8">
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be the leading provider of premium glass and mirror solutions, known for our commitment to innovation, craftsmanship, and exceptional customer service. We envision a world where every space reflects beauty and clarity through our products.
          </p>
        </div>

        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">Integrity: Upholding the highest standards of honesty and transparency in everything we do.</li>
            <li className="mb-2">Craftsmanship: Committing to the art of fine craftsmanship and attention to detail.</li>
            <li className="mb-2">Customer-Centricity: Putting the needs of our customers at the heart of our business.</li>
            <li className="mb-2">Innovation: Embracing creativity and innovation to provide cutting-edge solutions.</li>
            <li className="mb-2">Sustainability: Striving for environmentally responsible practices in our operations.</li>
          </ul>
        </div>

        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to deliver superior quality glass and mirror products that enhance the aesthetic and functional aspects of any space. We aim to exceed customer expectations through exceptional service, innovative solutions, and a deep understanding of our clients' needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
