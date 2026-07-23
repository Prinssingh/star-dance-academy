"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Info,
  Database,
  Share2,
  Camera,
  Lock,
  Cookie,
  Baby,
  UserCheck,
  Link,
  RefreshCw,
  Phone,
  Layers,
} from "lucide-react";

const LAST_UPDATED = "February 21, 2026";

const sections = [
  {
    id: "introduction",
    icon: Info,
    title: "Introduction",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <p>
        Welcome to <strong>Star Dance Academy</strong>. We are committed to
        protecting your personal information and your right to privacy. This
        Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you visit our website or enroll in our dance
        programs at our academy in Satna, Madhya Pradesh. Please read this
        policy carefully. If you disagree with its terms, please discontinue use
        of our site.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    accentColor: "var(--color-secondary)",
    bubbleColor: "rgba(242, 139, 0, 0.1)",
    content: (
      <>
        <p>
          We collect information you voluntarily provide when you enroll in our
          programs or contact us. This includes:
        </p>
        <ul>
          <li>
            <strong>Personal Identification:</strong> Full name, date of birth,
            gender, and age of the enrolling student.
          </li>
          <li>
            <strong>Contact Information:</strong> Email address, phone number,
            and address of the student or their parent/guardian.
          </li>
          <li>
            <strong>Enrollment & Payment Details:</strong> Course preferences,
            batch timings, fee payment records, and transaction history.
          </li>
          <li>
            <strong>Media Content:</strong> Photographs and videos taken during
            classes, events, and performances (subject to your consent).
          </li>
          <li>
            <strong>Communication Records:</strong> Messages and inquiries sent
            through our contact forms, email, or phone.
          </li>
          <li>
            <strong>Technical & Usage Data:</strong> IP address, browser type,
            pages viewed, and time spent on our website, collected via cookies.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    icon: UserCheck,
    title: "How We Use Your Information",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>
            <strong>Enrollment & Administration:</strong> To process
            enrollments, assign batches, and maintain attendance records.
          </li>
          <li>
            <strong>Communication:</strong> To send updates about classes,
            schedule changes, event notifications, and fee reminders.
          </li>
          <li>
            <strong>Payments:</strong> To process fee payments, issue receipts,
            and manage refund requests.
          </li>
          <li>
            <strong>Promotions & Marketing:</strong> With your explicit consent,
            to feature photographs or videos on our website, social media, or
            brochures.
          </li>
          <li>
            <strong>Website Improvement:</strong> To understand how visitors
            interact with our website and improve its experience.
          </li>
          <li>
            <strong>Legal Compliance:</strong> To comply with applicable laws,
            regulations, or government requests.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    icon: Share2,
    title: "Sharing Your Information",
    accentColor: "var(--color-secondary)",
    bubbleColor: "rgba(242, 139, 0, 0.1)",
    content: (
      <>
        <p>
          We do <strong>not</strong> sell, trade, or rent your personal
          information to third parties. We may share your information only in
          these limited circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> Trusted vendors who assist in
            operating our website (e.g., payment processors, SMS providers),
            under strict confidentiality agreements.
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law, court
            order, or government authority.
          </li>
          <li>
            <strong>Safety & Fraud Prevention:</strong> To protect the rights,
            property, or safety of Star Dance Academy, our students, or others.
          </li>
          <li>
            <strong>With Your Consent:</strong> For any other purpose with your
            explicit prior consent.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "media-consent",
    icon: Camera,
    title: "Photography & Video Consent",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <p>
        During classes, performances, and events, we may photograph or record
        videos of students. These may be used for our website gallery, social
        media, promotional brochures, and competition portfolios. For students
        who are minors, we require written consent from their parent or legal
        guardian at the time of enrollment. You may withdraw your consent at any
        time by contacting us in writing, and existing published content will be
        removed within a reasonable timeframe.
      </p>
    ),
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    accentColor: "var(--color-secondary)",
    bubbleColor: "rgba(242, 139, 0, 0.1)",
    content: (
      <p>
        We implement appropriate technical and organizational security measures
        to protect your personal information from unauthorized access,
        alteration, disclosure, or destruction. Physical records are stored
        securely at our academy premises. However, no method of transmission
        over the internet is 100% secure, and we cannot guarantee absolute
        security.
      </p>
    ),
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies & Tracking Technologies",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <>
        <p>
          Our website may use cookies — small data files stored on your device —
          to enhance your browsing experience. We may use:
        </p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Necessary for the website to
            function properly.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> To understand how visitors
            interact with our website (e.g., Google Analytics).
          </li>
          <li>
            <strong>Preference Cookies:</strong> To remember your settings for
            future visits.
          </li>
        </ul>
        <p>
          You can instruct your browser to refuse all cookies; however, some
          portions of our website may not function correctly as a result.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    icon: Baby,
    title: "Children's Privacy",
    accentColor: "var(--color-secondary)",
    bubbleColor: "rgba(242, 139, 0, 0.1)",
    content: (
      <p>
        Star Dance Academy welcomes students of all ages, including children.
        When enrolling a student under the age of 18, we require consent from a
        parent or legal guardian. All personal data for minor students is
        collected and processed only with parental/guardian consent. Parents and
        guardians may review, update, or request deletion of their child's
        personal information at any time by contacting us at{" "}
        <a
          href="mailto:info@stardanceacademy.in"
          className="font-semibold hover:underline"
          style={{ color: "var(--color-primary)" }}
        >
          info@stardanceacademy.in
        </a>
        .
      </p>
    ),
  },
  {
    id: "your-rights",
    icon: Shield,
    title: "Your Rights",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of the personal information
            we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> Ask us to correct any inaccurate or
            incomplete information.
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your personal data,
            subject to legal retention obligations.
          </li>
          <li>
            <strong>Objection:</strong> Object to or restrict the processing of
            your data in certain circumstances.
          </li>
          <li>
            <strong>Withdraw Consent:</strong> Withdraw any previously given
            consent at any time without affecting prior processing.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party",
    icon: Link,
    title: "Third-Party Links",
    accentColor: "var(--color-secondary)",
    bubbleColor: "rgba(242, 139, 0, 0.1)",
    content: (
      <p>
        Our website may contain links to third-party sites such as our social
        media profiles (Instagram, Facebook, YouTube). We are not responsible
        for the privacy practices or content of those sites. We encourage you to
        review the privacy policies of any third-party sites you visit.
      </p>
    ),
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to This Policy",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or for legal, operational, or regulatory reasons. The
        "Last Updated" date at the top of this page will always reflect the most
        recent revision. Continued use of our website or services after any
        updates constitutes your acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: "contact",
    icon: Phone,
    title: "Contact Us",
    accentColor: "var(--color-secondary)",
    bubbleColor: "rgba(242, 139, 0, 0.1)",
    content: (
      <>
        <p>
          If you have any questions or requests regarding this Privacy Policy,
          please reach out:
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div
            className="sm:col-span-3 flex items-start gap-3 rounded-xl p-3 border"
            style={{
              background: "rgba(246, 70, 108, 0.05)",
              borderColor: "rgba(246, 70, 108, 0.2)",
            }}
          >
            <span className="text-xl">🏫</span>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-0.5"
                style={{ color: "var(--color-primary)" }}
              >
                Address
              </p>
              <p className="text-xs text-gray-600">
                2nd Floor, Above Hidden Café, Next to Vidya Marriage Garden,
                Near Bus Stand, Satna, Madhya Pradesh
              </p>
            </div>
          </div>
          <div
            className="flex items-start gap-2 rounded-xl p-3 border"
            style={{
              background: "rgba(242, 139, 0, 0.05)",
              borderColor: "rgba(242, 139, 0, 0.2)",
            }}
          >
            <span className="text-lg">📞</span>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-0.5"
                style={{ color: "var(--color-secondary)" }}
              >
                Phone
              </p>
              <a
                href="tel:+916264249659"
                className="text-xs font-medium hover:underline"
                style={{ color: "var(--color-elegantDark)" }}
              >
                +91 62642 49659
              </a>
            </div>
          </div>
          <div
            className="flex items-start gap-2 rounded-xl p-3 border"
            style={{
              background: "rgba(246, 70, 108, 0.05)",
              borderColor: "rgba(246, 70, 108, 0.2)",
            }}
          >
            <span className="text-lg">✉️</span>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-0.5"
                style={{ color: "var(--color-primary)" }}
              >
                Email
              </p>
              <a
                href="mailto:info@stardanceacademy.in"
                className="text-xs font-medium hover:underline"
                style={{ color: "var(--color-elegantDark)" }}
              >
                info@stardanceacademy.in
              </a>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

/** @type {import('framer-motion').Variants} */
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const floatingBubbleAnimation = {
  y: [0, -15, 0],
  x: [0, 10, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

export default function PrivacyPolicyPage() {
  return (
    <section
    //   className="py-20 px-4 sm:px-6 lg:px-8
    // "
    >
      <div className="w-full bg-black py-5 px-4 sm:px-6 lg:px-8 pt-30">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 mx-auto mb-4 rounded-full"
            style={{
              background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(246, 70, 108, 0.1), rgba(242, 139, 0, 0.1))",
              borderColor: "var(--color-primary)",
            }}
          >
            <Layers size={18} style={{ color: "var(--color-primary)" }} />
            <span className="text-sm font-semibold" style={{ color: "#fff" }}>
              Legal
            </span>
          </motion.div>

          <h2
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ color: "#fff" }}
          >
            Privacy <span className="text-primary">Policy</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how Star Dance Academy collects,
            uses, and protects your personal information.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border text-sm text-gray-500"
            style={{
              borderColor: "rgba(246, 70, 108, 0.2)",
              background: "rgba(246, 70, 108, 0.04)",
            }}
          >
            <RefreshCw size={13} style={{ color: "var(--color-primary)" }} />
            Last Updated:{" "}
            <span className="font-semibold" style={{ color: "#fff" }}>
              {LAST_UPDATED}
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto pt-15">
        {/* ── Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div
                  className="relative w-full bg-white/35 backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 overflow-hidden flex flex-col sm:flex-row gap-6 items-start"
                  style={{ borderColor: "var(--color-primary)" }}
                >
                  {/* Floating bubble */}
                  <motion.div
                    className="absolute top-4 right-4 w-32 h-32 rounded-full blur-2xl opacity-40 pointer-events-none"
                    style={{ background: section.bubbleColor }}
                  />

                  {/* Left: Icon + index */}
                  <div className="flex sm:flex-col items-center gap-3 shrink-0">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${section.accentColor}, var(--color-secondary))`,
                        boxShadow: `0 8px 20px ${section.bubbleColor}`,
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <span
                      className="text-xs font-bold opacity-30"
                      style={{ color: "var(--color-elegantDark)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Vertical divider */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 + 0.3 }}
                    className="hidden sm:block w-0.5 self-stretch rounded-full origin-top shrink-0"
                    style={{ background: section.accentColor }}
                  />

                  {/* Right: Title + content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: "var(--color-elegantDark)" }}
                    >
                      {section.title}
                    </h3>
                    <div
                      className="text-gray-600 text-sm leading-relaxed
                        [&_p]:mb-3 [&_p:last-child]:mb-0
                        [&_ul]:mt-2 [&_ul]:space-y-2
                        [&_li]:pl-4 [&_li]:relative
                        [&_strong]:font-semibold [&_strong]:text-gray-800"
                    >
                      <style>{`
                        #pp-${section.id} li::before {
                          content: '▸';
                          position: absolute;
                          left: 0;
                          top: 1px;
                          font-size: 0.65rem;
                          color: ${section.accentColor};
                        }
                      `}</style>
                      <div id={`pp-${section.id}`}>{section.content}</div>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <svg
                    className="absolute bottom-0 right-0 opacity-10 pointer-events-none"
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill={section.accentColor}
                    />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom note ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Have questions about this policy?{" "}
            <a
              href="mailto:info@stardanceacademy.in"
              className="font-semibold hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              Contact us anytime
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
