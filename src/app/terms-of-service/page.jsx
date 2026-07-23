"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  CreditCard,
  CalendarCheck,
  ShieldCheck,
  Camera,
  Users,
  AlertTriangle,
  Clock,
  BookOpen,
  Phone,
  RefreshCw,
  Layers,
  Shirt,
} from "lucide-react";

const LAST_UPDATED = "February 21, 2026";

const sections = [
  {
    id: "acceptance",
    icon: FileText,
    title: "Acceptance of Terms",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <p>
        By enrolling in any program at <strong>Star Dance Academy</strong> or by
        using our website, you (and, where applicable, your parent or legal
        guardian) agree to be bound by these Terms and Conditions. These terms
        apply to all students, parents, guardians, and visitors. If you do not
        agree to any part of these terms, please do not proceed with enrollment
        or use of our services. Star Dance Academy reserves the right to update
        these terms at any time, and continued enrollment constitutes acceptance
        of the revised terms.
      </p>
    ),
  },
  {
    id: "enrollment",
    icon: BookOpen,
    title: "Enrollment & Registration",
    accentColor: "var(--color-secondary)",
    bubbleColor: "rgba(242, 139, 0, 0.1)",
    content: (
      <>
        <p>
          Enrollment at Star Dance Academy is subject to availability and the
          following conditions:
        </p>
        <ul>
          <li>
            Enrollment is confirmed only upon receipt of the registration fee
            and completion of the admission form.
          </li>
          <li>
            For students under 18 years of age, a parent or legal guardian must
            sign the enrollment form and accept these terms on the student's
            behalf.
          </li>
          <li>
            The Academy reserves the right to accept or decline any enrollment
            at its discretion.
          </li>
          <li>
            Providing false or misleading information during registration may
            result in immediate cancellation of enrollment without refund.
          </li>
          <li>
            Batch allotment is at the sole discretion of the Academy based on
            age, skill level, and availability.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "fees",
    icon: CreditCard,
    title: "Fees & Payment Policy",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <>
        <p>All fees must be paid in accordance with the following terms:</p>
        <ul>
          <li>
            <strong>Registration Fee:</strong> A one-time, non-refundable
            registration fee is payable at the time of enrollment.
          </li>
          <li>
            <strong>Monthly Fees:</strong> Monthly tuition fees are due by the{" "}
            <strong>10th of each month</strong>. Failure to pay by this date
            will be treated as a late payment.
          </li>
          <li>
            <strong>Late Payment Penalty:</strong> A late fee penalty will be
            charged for payments received after the 10th of the month.
          </li>
          <li>
            <strong>Non-Refundable:</strong> All fees paid, including monthly
            tuition, are strictly non-refundable regardless of attendance,
            personal reasons, or withdrawal mid-month.
          </li>
          <li>
            <strong>Fee Revision:</strong> The Academy reserves the right to
            revise fee structures with reasonable prior notice to enrolled
            students and their guardians.
          </li>
          <li>
            <strong>Mode of Payment:</strong> Fees may be paid in cash or via
            UPI/bank transfer to the Academy's official account.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "attendance",
    icon: CalendarCheck,
    title: "Attendance & Class Policy",
    accentColor: "var(--color-secondary)",
    bubbleColor: "rgba(242, 139, 0, 0.1)",
    content: (
      <>
        <ul>
          <li>
            <strong>Minimum Attendance:</strong> Students are expected to
            maintain a minimum of <strong>75% attendance</strong> per month to
            remain in good standing and be eligible for performances and
            competitions.
          </li>
          <li>
            <strong>No Compensation for Absences:</strong> No fee deduction,
            credit, or makeup classes will be provided for classes missed by the
            student due to personal reasons.
          </li>
          <li>
            <strong>Leave Notice:</strong> Students planning an extended absence
            (more than 7 days) must inform the Academy in advance. Failure to do
            so without notice may result in the seat being reassigned.
          </li>
          <li>
            <strong>Academy Holidays:</strong> Classes will be suspended on
            national holidays and during Academy-declared breaks. These are
            factored into the monthly fee and no deduction is applicable.
          </li>
          <li>
            <strong>Punctuality:</strong> Students are expected to arrive on
            time. Late arrivals may not be permitted to join an ongoing class
            session at the instructor's discretion.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "conduct",
    icon: Users,
    title: "Code of Conduct",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <>
        <p>
          All students, parents, and guardians are expected to maintain a
          respectful and disciplined environment at the Academy:
        </p>
        <ul>
          <li>
            <strong>Respect:</strong> Students must treat instructors, staff,
            and fellow students with respect at all times. Bullying, harassment,
            or disruptive behavior will not be tolerated.
          </li>
          <li>
            <strong>No Mobile Phones:</strong> Mobile phones must be kept on
            silent or switched off during class sessions. Use of phones during
            class is strictly prohibited unless permitted by the instructor.
          </li>
          <li>
            <strong>Disciplinary Action:</strong> The Academy reserves the right
            to suspend or terminate enrollment, without refund, for students who
            repeatedly violate the code of conduct.
          </li>
          <li>
            <strong>Parents & Guardians:</strong> Parents are requested to not
            interrupt ongoing class sessions. Feedback or queries should be
            raised before or after class hours.
          </li>
          <li>
            <strong>Academy Property:</strong> Students are responsible for any
            damage caused to Academy property, equipment, or premises due to
            negligence or misconduct.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "dress-code",
    icon: Shirt,
    title: "Dress Code & Uniform",
    accentColor: "var(--color-secondary)",
    bubbleColor: "rgba(242, 139, 0, 0.1)",
    content: (
      <>
        <ul>
          <li>
            <strong>Required Attire:</strong> Students are required to wear
            comfortable, flexible clothing suitable for dance practice. Specific
            uniform requirements, if any, will be communicated at the time of
            enrollment.
          </li>
          <li>
            <strong>Footwear:</strong> Appropriate dance shoes or bare feet (as
            per dance form) are mandatory during class. Street footwear is not
            permitted on the dance floor.
          </li>
          <li>
            <strong>Performance Costumes:</strong> For events, competitions, and
            stage performances, students may be required to purchase or arrange
            specified costumes. Costume costs are separate from tuition fees.
          </li>
          <li>
            <strong>Jewellery & Accessories:</strong> Heavy jewellery and
            accessories that may cause injury to the student or others must not
            be worn during class.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "batch-changes",
    icon: Clock,
    title: "Batch Changes & Transfers",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <>
        <ul>
          <li>
            <strong>Batch Change Request:</strong> Students wishing to change
            their assigned batch must submit a written request to the
            administration. Batch changes are subject to availability and
            Academy approval.
          </li>
          <li>
            <strong>Course Transfer:</strong> Transfer between dance forms or
            programs is permitted once per academic quarter, subject to
            instructor assessment and vacancy.
          </li>
          <li>
            <strong>No Fee Adjustment:</strong> No fee adjustment or credit will
            be made for the period during which a batch change request is being
            processed.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "media",
    icon: Camera,
    title: "Photography, Video & Media",
    accentColor: "var(--color-secondary)",
    bubbleColor: "rgba(242, 139, 0, 0.1)",
    content: (
      <>
        <ul>
          <li>
            <strong>Academy Media Rights:</strong> Star Dance Academy reserves
            the right to photograph and video record classes, rehearsals,
            performances, and events for promotional, educational, and archival
            purposes.
          </li>
          <li>
            <strong>Consent:</strong> Enrollment constitutes implied consent for
            general class photography. For use in public campaigns or marketing
            materials, separate written consent will be obtained.
          </li>
          <li>
            <strong>Student Recording:</strong> Students and parents may not
            record classes, rehearsals, or other students without prior
            permission from the instructor and consent of those involved.
          </li>
          <li>
            <strong>Social Media:</strong> Students and parents must not post
            videos or photographs of other students on social media without
            their explicit consent.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "health-safety",
    icon: ShieldCheck,
    title: "Health, Safety & Liability",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <>
        <ul>
          <li>
            <strong>Medical Conditions:</strong> Students must disclose any
            pre-existing medical conditions, injuries, or physical limitations
            at the time of enrollment. The Academy is not liable for injuries
            arising from undisclosed conditions.
          </li>
          <li>
            <strong>Participation Risk:</strong> Dance activities involve
            physical movement and carry an inherent risk of injury. By
            enrolling, students and guardians acknowledge this risk and agree
            that the Academy is not liable for accidental injuries sustained
            during normal class activities.
          </li>
          <li>
            <strong>Unwell Students:</strong> Students who are unwell, injured,
            or suffering from contagious illness must not attend class and
            should inform the Academy in advance.
          </li>
          <li>
            <strong>Emergency Contact:</strong> A valid emergency contact number
            must be provided at the time of enrollment. The Academy will use
            this information in the event of a medical emergency.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    icon: AlertTriangle,
    title: "Withdrawal & Termination",
    accentColor: "var(--color-secondary)",
    bubbleColor: "rgba(242, 139, 0, 0.1)",
    content: (
      <>
        <ul>
          <li>
            <strong>Voluntary Withdrawal:</strong> Students wishing to
            discontinue must inform the Academy in writing at least{" "}
            <strong>15 days in advance</strong>. No refund will be issued for
            the current month's fees upon withdrawal.
          </li>
          <li>
            <strong>Termination by Academy:</strong> The Academy reserves the
            right to terminate a student's enrollment without refund in cases of
            repeated misconduct, non-payment of fees, or violation of these
            Terms and Conditions.
          </li>
          <li>
            <strong>Inactive Enrollment:</strong> If a student is absent for
            more than 30 consecutive days without prior notice or communication,
            their enrollment may be considered lapsed and the seat may be
            reassigned.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to These Terms",
    accentColor: "var(--color-primary)",
    bubbleColor: "rgba(246, 70, 108, 0.1)",
    content: (
      <p>
        Star Dance Academy reserves the right to modify or update these Terms
        and Conditions at any time. Changes will be communicated to enrolled
        students and their parents/guardians via notice at the Academy premises
        or through registered contact details. The "Last Updated" date at the
        top of this page reflects the most recent revision. Continued enrollment
        after any revision constitutes acceptance of the updated terms.
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
          For any questions, clarifications, or concerns regarding these Terms
          and Conditions, please reach out to us:
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

/** @type {import('framer-motion').Variants} */
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

export default function TermsAndConditionsPage() {
  return (
    <section
      // className=""
      
    >
      <div className="w-full bg-black py-5 px-4 sm:px-6 lg:px-8 pt-30">
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
            Terms & <span className="text-primary">Conditions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before enrolling at Star Dance
            Academy. By joining us, you agree to the following policies.
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
            <span
              className="font-semibold"
              style={{ color: "#fff" }}
            >
              {LAST_UPDATED}
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto pt-15 pb-10">
        {/* ── Section Header ── */}

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
                    animate={floatingBubbleAnimation}
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
                        #tc-${section.id} li::before {
                          content: '▸';
                          position: absolute;
                          left: 0;
                          top: 1px;
                          font-size: 0.65rem;
                          color: ${section.accentColor};
                        }
                      `}</style>
                      <div id={`tc-${section.id}`}>{section.content}</div>
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
            Have questions about these terms?{" "}
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
