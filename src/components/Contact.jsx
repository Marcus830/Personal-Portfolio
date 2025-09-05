import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="contact bg-gray-900 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/20 transition-all duration-300 ease-out hover:transform hover:shadow-2xl">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
              Contact Me
            </h2>
            <ul className="contact-list list-none">
              <li className="contact-item flex items-center p-3 sm:p-4 bg-gray-800/10 rounded-xl mb-3 sm:mb-4 transition-all duration-300 border border-white/10">
                <svg
                  className="contact-icon w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 fill-white flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a
                  href="tel:9046136101"
                  className="contact-text text-sm sm:text-base break-all"
                >
                  904-613-6101
                </a>
              </li>
              <li className="contact-item flex items-center p-3 sm:p-4 bg-gray-800/10 rounded-xl mb-3 sm:mb-4 transition-all duration-300 border border-white/10">
                <svg
                  className="contact-icon w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 fill-white flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:marcusmichealdb@gmail.com"
                  className="contact-text text-sm sm:text-base break-all"
                >
                  marcusmichealdb@gmail.com
                </a>
              </li>
              <li className="contact-item flex items-center p-3 sm:p-4 bg-gray-800/10 rounded-xl mb-3 sm:mb-4 transition-all duration-300 border border-white/10">
                <svg
                  className="contact-icon w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 fill-white flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  className="contact-text text-sm sm:text-base break-all"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="contact-item flex items-center p-3 sm:p-4 bg-gray-800/10 rounded-xl mb-3 sm:mb-4 transition-all duration-300 border border-white/10">
                <svg
                  className="contact-icon w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 fill-white flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
                <a
                  href="https://github.com/Marcus830/Personal-portfolio"
                  target="_blank"
                  className="contact-text text-sm sm:text-base break-all"
                >
                  GitHub Portfolio
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="feedback bg-gray-900 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/20 transition-all duration-300 ease-out hover:transform hover:shadow-2xl">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
              Give Us Your Feedback
            </h2>
            <form className="flex flex-col gap-4 sm:gap-6">
              <div className="form-group flex flex-col">
                <label
                  htmlFor="name"
                  className="form-label text-white text-base sm:text-lg mb-1 sm:mb-2 font-medium"
                >
                  First Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input p-3 sm:p-4 border-2 border-white/30 rounded-xl bg-white/10 text-white text-sm sm:text-base transition-all duration-300 backdrop-blur-sm"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className="form-group flex flex-col">
                <label
                  htmlFor="email"
                  className="form-label text-white text-base sm:text-lg mb-1 sm:mb-2 font-medium"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input p-3 sm:p-4 border-2 border-white/30 rounded-xl bg-white/10 text-white text-sm sm:text-base transition-all duration-300 backdrop-blur-sm"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group flex flex-col">
                <label
                  htmlFor="feedback"
                  className="form-label text-white text-base sm:text-lg mb-1 sm:mb-2 font-medium"
                >
                  Your Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  className="form-textarea p-3 sm:p-4 border-2 border-white/30 rounded-xl bg-white/10 text-white text-sm sm:text-base transition-all duration-300 backdrop-blur-sm"
                  placeholder="I felt great about your webpage! The design is modern and user-friendly..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn bg-gradient-to-tr from-yellow-300 to-yellow-500 text-neutral-800 border-none px-6 sm:px-8 py-3 sm:py-4 rounded-[50px] text-base sm:text-lg font-bold cursor-pointer transition-all duration-300 uppercase tracking-wider shadow-lg shadow-amber-500/30"
              >
                Send Feedback
              </button>

              <div
                className="success-message bg-emerald-500/20 border border-emerald-500/50 text-white p-3 sm:p-4 rounded-xl mt-3 sm:mt-4 text-center hidden animate-slideIn"
                id="successMessage"
              >
                Thank you for your feedback! Your message has been received.
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
