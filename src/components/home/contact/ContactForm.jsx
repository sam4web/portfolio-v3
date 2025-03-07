import useStore from "@/store";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const openModal = useStore((state) => state.openModal);

  const handleSubmit = (e) => {
    e.preventDefault();
    openModal(name);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-slate-200 dark:bg-slate-800 rounded-lg">
        <div className="space-y-2 md:space-y-3.5 px-4 py-3 md:px-6 md:py-5 ">
          <h3 className="text-lg lg:text-xl font-montserrat font-semibold capitalize text-primary">
            send message
          </h3>

          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Type your Message..."
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
