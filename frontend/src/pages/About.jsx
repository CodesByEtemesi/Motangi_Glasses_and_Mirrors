import React from 'react';

const About = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-gray-800 leading-relaxed mb-6">
          Where clarity meets creativity. At Motangi Glasses and Mirrors, we are more than just a glass and mirror supplier—we are artisans dedicated to transforming spaces with elegance and precision.
        </p>
        <blockquote className="italic text-gray-700 border-l-4 border-gray-900 pl-6 bg-gray-100 py-3 hover:bg-gray-200 transition-colors duration-300">
          "Transform your space into a masterpiece with our bespoke glass and mirror solutions."
        </blockquote>
      </div>

      <div className="space-y-8">
        {/* Vision Section */}
        <Section
          imageUrl="https://i.pinimg.com/564x/3d/24/4d/3d244d053b307f1ad4659d8b3b27a39d.jpg"
          title="Our Vision"
          description="To be the leading provider of premium glass and mirror solutions, known for our commitment to innovation, craftsmanship, and exceptional customer service. We envision a world where every space reflects beauty and clarity through our products."
          reverse={false} // No reverse, image on the left
        />

        {/* Values Section */}
        <Section
          imageUrl="https://i.pinimg.com/236x/05/3b/f0/053bf04ab940cafbc91220b16cf24ec2.jpg"
          title="Our Values"
          description={
            <ul className="list-disc list-inside text-gray-700">
              <li>Integrity: Upholding the highest standards of honesty and transparency in everything we do.</li>
              <li>Craftsmanship: Committing to the art of fine craftsmanship and attention to detail.</li>
              <li>Customer-Centricity: Putting the needs of our customers at the heart of our business.</li>
              <li>Innovation: Embracing creativity and innovation to provide cutting-edge solutions.</li>
              <li>Sustainability: Striving for environmentally responsible practices in our operations.</li>
            </ul>
          }
          reverse={true} // Reverse, image on the right
        />

        {/* Mission Section */}
        <Section
          imageUrl="https://i.pinimg.com/236x/05/e7/20/05e720c0098c0da681fff87e669f5272.jpg"
          title="Our Mission"
          description="Our mission is to deliver superior quality glass and mirror products that enhance the aesthetic and functional aspects of any space. We aim to exceed customer expectations through exceptional service, innovative solutions, and a deep understanding of our clients' needs."
          reverse={false} // No reverse, image on the left
        />
      </div>
    </div>
  );
};

const Section = ({ imageUrl, title, description, reverse }) => (
  <div className={`flex flex-col sm:flex-row items-center ${reverse ? 'sm:flex-row-reverse' : ''} space-y-4 sm:space-y-0 sm:space-x-6`}>
    <img src={imageUrl} alt={title} className="w-full sm:w-1/3 rounded-lg" />
    <div className="w-full sm:w-2/3">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default About;
