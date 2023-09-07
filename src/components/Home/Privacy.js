import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "./Footer";

function Privacy() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-5">
          <p className="w-[90%] text-lg text-justify shadow-xl p-7 md:w-[70%] rounded-lg">
            <center>
            <h2 className="mt-5 text-xl font-bold">Privacy Policy</h2>
            </center>
            <br />
            This privacy policy has been compiled to better serve those who are
            concerned with how their 'Personally Identifiable Information (PII)
            is being used online. Pll, as described in Personal Data
            (Protection) Act, 2013 privacy law and information security, is
            information that can be used on its own or with other information to
            identify, contact, or locate a single person, or to identify an
            individual in context. Please read our privacy policy carefully to
            get a clear understanding of how we collect, use, protect or
            otherwise handle your Personally Identifiable Information in
            accordance with our website. This Statement of Privacy applies to
            the NATIONAL INSTITUTE OF AYURVEDA Jaipur, India Web site.
            <h2 className="mt-4 mb-1 font-bold">
              What personal information do we collect from the people that visit
              our blog, website or app?
            </h2>
            When ordering or registering on our site, as appropriate, you may be
            asked to enter your name, email address, mailing address, phone
            number or other details to help you with your experience.
            <h2 className="mt-4 mb-1 font-bold">
              When do we collect information?
            </h2>
            We collect information from you when you fill out a form, Use
            Helpdesk or enter information on our site.
            <h2 className="mt-4 mb-1 font-bold">
              {" "}
              How do we use your information?{" "}
            </h2>
            We may use the information we collect from you when you register,
            make a purchase, sign up for our newsletter, respond to a survey or
            marketing communication, surf the website, or use certain other site
            features in the following ways:
            <br />
            <ol className="p-2">
              <li>To improve our website in order to better serve you.</li>
              <li>
                {" "}
                To allow us to better service you in responding to your customer
                service requests.
              </li>
              <li>
                {" "}
                To administer a contest, promotion, survey or other site
                feature.
              </li>
              <li>
                To send periodic emails regarding your order or other products
                and services.
              </li>
              <li>
                To follow up with them after correspondence (live chat, email or
                phone inquiries).
              </li>
            </ol>
            <h2 className="mt-4 mb-1 font-bold">
              How do we protect your information?
            </h2>
            <ul className="p-2">
              <li>
                We do not use vulnerability scanning and/or scanning to PCI
                standards.
              </li>
              <li> We only provide articles and information.</li>
              <li> We use regular Malware Scanning.</li>
            </ul>
            Your personal information is contained behind secured networks and
            is only accessible by a limited number of persons who have special
            access rights to such systems, and are required to keep the
            information confidential. In addition, all sensitive/credit
            information you supply is encrypted via Secure Socket Layer (SSL)
            technology.
            <br /> <br />
            We implement a variety of security measures when a user enters,
            submits, or accesses their information to maintain the safety of
            your personal information.
            <br /> <br /> All transactions are processed through a gateway
            provider and are not stored or processed on our servers
            <h2 className="mt-4 mb-1 font-bold">Do we use 'cookies?</h2>
            Yes. Cookies are small files that a site or its service provider
            transfers to your computer's hard drive through your Web browser (if
            you allow) that enables the site's or service provider's systems to
            recognize your browser and capture and remember certain information.
            For instance, we use cookies to help us remember and process the
            items in your shopping cart. They are also used to help us
            understand your preferences based on previous or current site
            activity, which enables us to provide you with improved services. We
            also use cookies to help us compile aggregate data about site
            traffic and site interaction so that we can offer better site
            experiences and tools in the future.
            <br />
            <br />
            <h2 className="mt-4 mb-1 font-bold">We use cookies to:</h2>
            Understand and save user's preferences for future visits.
            <br />
            <br />
            You can choose to have your computer warn you each time a cookie is
            being sent, or you can choose to turn off all cookies. You do this
            through your browser settings. Since the browser is a little
            different, look at your browser's Help Menu to learn the correct way
            to modify your cookies. <br /> If you turn cookies off, some
            features will be disabled. It won't affect the user's experience
            that make your site experience more efficient and may not function
            properly. <br />
            However, you will still be able to place orders.
            <h2 className="mt-4 mb-1 font-bold">Third-party disclosure:</h2>
            We do not sell, trade, or otherwise transfer to outside parties your
            Personally Identifiable Information.
            <h2 className="mt-4 mb-1 font-bold">Third-party Links:</h2>
            We do not include or offer third-party products or services on our
            website.
            <h2 className="mt-4 mb-1 font-bold">
              {" "}
              We collect your email address in order to:
            </h2>
            Send information, respond to inquiries, and/or other requests or
            questions.
            <h2 className="mt-4 mb-1 font-bold">
              If at any time you would like to unsubscribe from receiving future
              emails, you can email us at
            </h2>
            pgcounselling@nia.edu.in <br /> or <br />
            Follow the instructions at the bottom of each email. <br /> and we
            will promptly remove you from ALL correspondence.
            <br />
            <h2 className="mt-4 mb-1 font-bold">Contact Us</h2>
            Should you have any questions or concerns regarding this privacy
            policy, please contact us as follows:
            <br />
            <br />
            <h2 className="font-bold">
              National Institute of Ayurveda Madhav Vilas Palace, Jorawar Singh
              Gate, Amer Road JAIPUR-302002 (RAJASTHAN) INDIA
            </h2>
          </p>
        </div>
      </div>
      <br />
      <br />

      <Footer />
    </>
  );
}

export default Privacy;
