import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';
import { Section, SectionTitle, Button, Card } from '../ui';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        success: true,
        message:
          'Your message has been sent successfully! I will get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          'There was an error sending your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: 'contact@haniismail.com',
      link: 'mailto:contact@haniismail.com',
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      value: 'Tunisia',
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      value: '+216 XX XXX XXX',
      link: 'tel:+216XXXXXXX',
    },
  ];

  // Social links
  const socialLinks = [
    {
      icon: <FiGithub size={24} />,
      title: 'GitHub',
      link: 'https://github.com/haniismail',
    },
    {
      icon: <FiLinkedin size={24} />,
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/hanismail',
    },
    {
      icon: <FiTwitter size={24} />,
      title: 'Twitter',
      link: 'https://twitter.com/haniismail',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section id="contact-hero" paddingY="large">
        <SectionTitle
          subtitle="Get in Touch"
          title="Contact Me"
          description="Have a question or want to work together? Feel free to reach out!"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <Card className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            {submitStatus && (
              <div
                className={`p-4 mb-6 rounded-lg ${
                  submitStatus.success
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800"
                ></textarea>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-8">
            <Card>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

              <div className="space-y-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{social.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {social.link.replace('https://', '')}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section id="map" bgColor="light" paddingY="large">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Location</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Based in Tunisia, available for remote work worldwide.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          {/* In a real application, you would embed a map here */}
          <p className="text-gray-600 dark:text-gray-400">
            Map placeholder - In a real application, a map would be embedded
            here.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Contact;
