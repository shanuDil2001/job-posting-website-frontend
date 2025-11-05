import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  // Example FAQ data
  const faqs = [
    {
      question: "How do I apply for a job?",
      answer:
        "You can browse available jobs on the Jobs page and click the 'Apply Now' button on the job you’re interested in.",
    },
    {
      question: "Is this platform free to use?",
      answer:
        "Yes! Both students and employers can use this platform for free. We aim to make job hunting simple and accessible.",
    },
    {
      question: "How can I post a job?",
      answer:
        "Employers can sign up and post new job listings through their dashboard once logged in.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Example job data (replace later with backend data)
  const jobs = [
    { id: 1, title: "Part-Time Web Developer", location: "Colombo", type: "Remote" },
    { id: 2, title: "Graphic Designer", location: "Kandy", type: "On-site" },
    { id: 3, title: "Content Writer", location: "Galle", type: "Hybrid" },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* 🌟 Hero Section */}
      <section className="bg-linear-to-r from-blue-500 to-indigo-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Perfect Part-Time Job
        </h1>
        <p className="text-lg mb-6">
          Connect with top employers and flexible opportunities that fit your schedule.
        </p>
        <button
          onClick={() => navigate("/jobs")}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          Explore Jobs
        </button>
      </section>

      {/* 💼 Featured Jobs Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
          Featured Jobs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-1">
                📍 {job.location}
              </p>
              <p className="text-gray-600 mb-4">
                💼 {job.type}
              </p>
              <button
                onClick={() => navigate("/jobs")}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/jobs")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            View All Jobs
          </button>
        </div>
      </section>

      {/* 🔍 Find a Job Section */}
      <section className="bg-blue-100 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          Ready to Find Your Dream Job?
        </h2>
        <p className="text-gray-700 mb-6">
          Browse hundreds of flexible opportunities designed for students and part-timers.
        </p>
        <button
          onClick={() => navigate("/jobs")}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Find a Job Now
        </button>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow border p-5"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-blue-600" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 border-t pt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
