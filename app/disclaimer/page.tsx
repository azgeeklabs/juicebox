import React from "react";
import styles from "./disclaimer.module.css";
import Link from "next/link";
import Footer from "../Footer";
import NavBar from "../_components/NavBar/NavBar";
const Page = () => {
  return (
    <div className="pt-[--sy-100px]">
      <NavBar />
      <div className=" w-full pt-[135px]">
        <div className=" w-full px-[267px]">
          <h1 className=" text-center text-[--96px] text-[--highlight-yellow] [font-family:Alfa_Slab_One] mb-[--sy-80px]">
            Disclaimer
          </h1>
          <p className=" text-[--24px] text-center w-2/3 mx-auto mb-[--sy-100px]">
            Unlock new potential for your business with our comprehensive white
            label solutions. Our ready-to-deploy products and services allow you
            to quickly enhance your offerings without the hassle of in-house
            development.
          </p>
          <section className=" mb-[--sy-60px]">
            <h2 className=" font-bold text-[--55px] mb-[--sy-50px]">
              Disclaimer
            </h2>
            <section className="mb-[--sy-60px]">
              <h2 className="font-bold text-[--55px] mb-[--sy-50px]">
                Privacy Disclaimer
              </h2>
              <p className="mb-6 text-[--20px]">
                At Creative Juicebox (
                <a
                  href="https://www.creativejuicebox.com"
                  className="text-[--highlight-yellow] hover:underline"
                >
                  www.creativejuicebox.com
                </a>
                ), we are committed to protecting the privacy of our clients and
                website visitors. This Privacy Disclaimer explains how we
                collect, use, share, and protect your personal information when
                you engage with our services. By accessing our website or
                utilizing our services, you agree to this Privacy Disclaimer and
                the collection and use of information in accordance with this
                policy.
              </p>
              <ol className="list-decimal list-inside space-y-6 text-[--20px]">
                <li>
                  <h3 className="font-bold text-[--24px] mb-2 inline">
                    Information We Collect
                  </h3>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>
                      <strong>Personal Information:</strong> Name, email
                      address, phone number, payment information, and other
                      contact details when you purchase a service, sign up for
                      our newsletter, or contact us for inquiries.
                    </li>
                    <li>
                      <strong>Technical Information:</strong> IP addresses,
                      browser type, device identifiers, and operating system
                      information gathered automatically through cookies and
                      similar technologies when you visit our website.
                    </li>
                    <li>
                      <strong>Service-Specific Data:</strong> Information
                      related to specific services you engage with, such as
                      campaign goals, keyword preferences for SEO, or details
                      about your business for PR and content services.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold text-[--24px] mb-2 inline">
                    How We Use Your Information
                  </h3>
                  <p>We collect and use your information to:</p>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>
                      Provide our services, including Paid Ads, SEO Link
                      Building, PR Campaigns, Content Creation, ORM (Online
                      Reputation Management), Website Development, and Social
                      Media Management.
                    </li>
                    <li>Process payments and fulfill service requests.</li>
                    <li>
                      Optimize and improve your experience with our services,
                      including customizing campaigns and strategies tailored to
                      your business.
                    </li>
                    <li>
                      Communicate with you about your service, including sending
                      updates, progress reports, and billing information.
                    </li>
                    <li>Respond to inquiries and provide customer support.</li>
                    <li>
                      Analyze website traffic, monitor user behavior, and
                      improve the website's functionality.
                    </li>
                    <li>Comply with legal obligations or resolve disputes.</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold text-[--24px] mb-2 inline">
                    Information Sharing and Disclosure
                  </h3>
                  <p>
                    Creative Juicebox does not sell your personal information.
                    However, we may share your data with:
                  </p>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>
                      <strong>Service Providers:</strong> Trusted third-party
                      vendors who help us deliver our services (e.g., payment
                      processors, hosting providers, analytics providers) under
                      strict confidentiality agreements.
                    </li>
                    <li>
                      <strong>Partners and Affiliates:</strong> When necessary
                      to execute services such as PR Placement, Influencer
                      Marketing, or SEO Campaigns, we may share relevant
                      business data with partners assisting in media coverage,
                      link building, or PR creation.
                    </li>
                    <li>
                      <strong>Legal Obligations:</strong> If required by law or
                      to protect our rights, we may disclose information to
                      comply with legal processes or government requests.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold text-[--24px] mb-2 inline">
                    Cookies and Tracking Technologies
                  </h3>
                  <p>
                    Our website uses cookies and other tracking technologies to
                    enhance user experience, analyze traffic, and deliver
                    personalized content. Cookies help us remember user
                    preferences and improve website performance. By using our
                    website, you agree to the use of cookies as described in our
                    Cookie Policy.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-[--24px] mb-2 inline">
                    Data Security
                  </h3>
                  <p>
                    We employ appropriate technical and organizational security
                    measures to protect your personal information from
                    unauthorized access, disclosure, alteration, or destruction.
                    Despite these safeguards, no method of data transmission
                    over the internet or method of electronic storage is 100%
                    secure. We cannot guarantee absolute security, but we work
                    diligently to protect your personal data.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-[--24px] mb-2 inline">
                    Your Data Protection Rights
                  </h3>
                  <p>
                    As a client or visitor of Creative Juicebox, you have the
                    following rights concerning your data:
                  </p>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>
                      <strong>Right to Access:</strong> You may request a copy
                      of your personal information held by us.
                    </li>
                    <li>
                      <strong>Right to Correction:</strong> You can ask us to
                      correct any inaccurate or incomplete data.
                    </li>
                    <li>
                      <strong>Right to Deletion:</strong> You can request that
                      we delete your personal information, subject to legal and
                      contractual obligations.
                    </li>
                    <li>
                      <strong>Right to Restriction:</strong> You may request to
                      restrict the processing of your data.
                    </li>
                    <li>
                      <strong>Right to Object:</strong> You have the right to
                      object to the processing of your personal data for certain
                      purposes.
                    </li>
                    <li>
                      <strong>Right to Data Portability:</strong> You can
                      request to transfer your data to another service provider
                      where applicable.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold text-[--24px] mb-2 inline">
                    Specific Services and Data Use
                  </h3>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>
                      <strong>Paid Ads:</strong> We collect and use data such as
                      campaign goals, audience demographics, and ROI targets to
                      optimize your advertising campaigns across platforms like
                      Google Ads, Facebook Ads, and others.
                    </li>
                    <li>
                      <strong>SEO Link Building & SEO Campaigns:</strong> Data
                      related to your website's content, keyword preferences,
                      and domain authority is used to enhance your search engine
                      rankings and build authoritative links.
                    </li>
                    <li>
                      <strong>
                        PR Placement, PR Monetization, and PR Creation:
                      </strong>{" "}
                      We use your business information to craft pitches, press
                      releases, and media strategies that gain visibility and
                      authority for your brand. Information may be shared with
                      media outlets for PR placement and with Wikipedia editors
                      as needed.
                    </li>
                    <li>
                      <strong>Content Creation:</strong> Information about your
                      business, target audience, and industry is collected to
                      deliver tailored content that meets your objectives.
                    </li>
                    <li>
                      <strong>ORM (Online Reputation Management):</strong> For
                      services like Review Removal, Account Recovery, and Review
                      Generation, we collect data about your brand's online
                      presence, customer reviews, and accounts to implement the
                      necessary solutions.
                    </li>
                    <li>
                      <strong>Website Development:</strong> Technical
                      information about your current website infrastructure,
                      design preferences, and performance goals is collected to
                      deliver an optimized website that enhances user
                      experience.
                    </li>
                    <li>
                      <strong>
                        Social Media Management & Influencer Marketing:
                      </strong>{" "}
                      We collect information about your social media accounts,
                      audience, and brand messaging to manage your platforms and
                      execute campaigns.
                    </li>
                    <li>
                      <strong>Email Marketing Campaigns:</strong> We use your
                      email list, audience segments, and marketing goals to
                      design and execute email campaigns that deliver results.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-bold text-[--24px] mb-2 inline">
                    International Data Transfers
                  </h3>
                  <p>
                    If you are located outside of the country where our services
                    are offered, your data may be transferred across borders. We
                    take appropriate steps to ensure that your data is protected
                    in accordance with this Privacy Disclaimer, regardless of
                    the jurisdiction in which it is processed.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-[--24px] mb-2 inline">
                    Children's Privacy
                  </h3>
                  <p>
                    Our services are not intended for children under the age of
                    13. We do not knowingly collect personal information from
                    children. If you believe that we have inadvertently
                    collected such data, please contact us to have it removed.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-[--24px] mb-2 inline">
                    Changes to This Privacy Disclaimer
                  </h3>
                  <p>
                    Creative Juicebox reserves the right to update this Privacy
                    Disclaimer at any time. Changes will be posted on this page,
                    and we encourage you to review this policy periodically to
                    stay informed about how we are protecting your information.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold text-[--24px] mb-2 inline">
                    Contact Us
                  </h3>
                  <p>
                    If you have any questions or concerns about this Privacy
                    Disclaimer or our data practices, please contact us at:
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:hello@creativejuicebox.com"
                      className="text-[--highlight-yellow] hover:underline"
                    >
                      hello@creativejuicebox.com
                    </a>
                  </p>
                </li>
              </ol>
              <p className="mt-6 text-[--20px]">
                By using our website and services, you acknowledge that you have
                read and understood this Privacy Disclaimer and consent to the
                practices described.
              </p>
            </section>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
