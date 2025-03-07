import { ContactForm, ContactInfo } from "@/components";

const Contact = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="section-spacing">
          <div className="space-y-1.5 text-center">
            <h2 className="section-title section-title-center">Get In Touch</h2>
            <br />
          </div>

          <div className="sm:max-w-xl mx-auto">
            <p className="paragraph-text text-center">
              I&apos;m currently focused on my job search but open to
              networking. Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-y-5 md:gap-y-7 gap-x-4 pt-2.5">
            <div className="col-span-1">
              <ContactInfo />
            </div>
            <div className="col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
