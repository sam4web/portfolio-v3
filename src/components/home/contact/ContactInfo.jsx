import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const ContactInfo = () => {
  const info = {
    email: "sijal.m06@gmail.com",
    phone: "+977 9860334526",
    address: "Kalanki, Kathmandu, Nepal.",
  };

  return (
    <div className="lg:space-y-6 lg:block flex flex-wrap gap-x-6 gap-y-3">
      <div className="contact-info">
        <span>
          <FiMapPin />
        </span>
        <div>
          <h4>Address</h4>
          <p>{info.address}</p>
        </div>
      </div>

      <div className="contact-info">
        <span>
          <FiPhone />
        </span>
        <div>
          <h4>Phone</h4>
          <a href={`tel:${info.phone}`}>{info.phone}</a>
        </div>
      </div>

      <div className="contact-info">
        <span>
          <FiMail />
        </span>
        <div>
          <h4>Email</h4>
          <a href={`mailto:${info.email}`} target="_blank">
            {info.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
