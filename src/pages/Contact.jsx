import { GitBranchIcon, Github, Linkedin, Mail, MailIcon } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="px-4 md:px-10 ">
      <div className="bg-transparent mt-16 md:mt-32 px-6 max-w-4xl mx-auto  rounded-xl shadow-2xl py-5">
        <div className="flex flex-col md:flex-row gap-8 ">
          {/* left side */}
          <div className="flex-1">
            <h3 className="font-semibold text-center text-2xl p-3 ">
              Get in touch with me
            </h3>
            <p className="text-md text-center">
              Need help building or improving your website or application?
            </p>
            <p className="text-center">
              Let’s talk — send me a message and I’ll respond shortly
            </p>

            <div className="flex justify-center mt-6 md:mt-10 gap-8">
              <a
                className="p-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:text-indigo-500  focus-visible:outline-2 focus-visible:outline-indigo-500"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sanmeshdesai11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Gmail"
                title="Gmail"
              >
                <MailIcon />
              </a>
              <a
                className="p-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:text-indigo-500  focus-visible:outline-2 focus-visible:outline-indigo-500"
                href="https://github.com/sanmeshdesai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                title="GitHub"
              >
                <Github />
              </a>
              <a
                className="p-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:text-indigo-500  focus-visible:outline-2 focus-visible:outline-indigo-500"
                href="https://www.linkedin.com/in/sanmeshdesai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Linkdin profile"
                title="Linkdin"
              >
                <Linkedin />
              </a>
            </div>
            <p className="text-center pt-4">sanmeshdesai11@gmail.com</p>
          </div>

          {/* Right side */}
          <form className="flex-1 justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              <input
                className="w-full border-b bg-transparent py-2 outline-none focus:border-indigo-500"
                type="text"
                placeholder="First Name"
              />
              <input
                className="w-full border-b bg-transparent py-2 outline-none focus:border-indigo-500"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="md:col-span-2 w-full border-b bg-transparent py-2 outline-none focus:border-indigo-500"
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea
              rows="3"
              placeholder="Write your message... "
              className="w-full px-3 py-2 mt-3 border border-gray-800 rounded-md focus:border-indigo-500"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="p-2 bg-sky-300 hover:bg-sky-400 border mt-3 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
