import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_evv989h', 'template_3710xuo', form.current, 'E8Ge8ISlN8U30f2Uw')
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-6">
      <div className="max-w-7xl w-full flex flex-col items-center bg-white">
        <div className="w-full text-center mb-12">
          <h1 className="text-4xl font-bold text-black">Contact us</h1>
          <p className="text-lg text-gray-600 mt-2">
            Motangi glasses and mirrors is ready to provide the right solution according to your needs.
          </p>
        </div>

        <div className="w-full flex">
          <div className="w-1/2 p-10 bg-gray-100">
            <h2 className="text-2xl font-semibold text-black mb-4">Get in touch</h2>
            <p className="text-gray-600 mb-8">You can reach us anytime.</p>

            <div className="mb-6 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-xl" />
              <div>
                <h3 className="text-lg font-semibold text-black">Head Office</h3>
                <p className="text-gray-600">Nairobi CBD</p>
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <FaEnvelope className="mr-2 text-xl" />
              <div>
                <h3 className="text-lg font-semibold text-black">Email Us</h3>
                <p className="text-gray-600">Linda@gmail.com</p>
                <p className="text-gray-600">Samuel@gmail.com</p>
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <FaPhone className="mr-2 text-xl" />
              <div>
                <h3 className="text-lg font-semibold text-black">Call Us</h3>
                <p className="text-gray-600">+254 711 111 111</p> 
              </div>
            </div>
            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-black mb-4">Follow us on social media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-semibold text-black mb-6">Send us a message</h1>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="form-group">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
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
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
              
    <div className="w-full mt-12">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.72623481683!2d36.793491608627725!3d-1.2974584202605777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1726070375469!5m2!1sen!2ske"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Google Map"
    ></iframe>
  </div>
</div>
  );
};

export default Contact;
