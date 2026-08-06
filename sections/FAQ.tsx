"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What services does Sir Daniel Padua and Team Padua provide?",
    answer:
      "Team Padua provides two main categories of services. For Sun Life advisors, we offer Client Policy Card (CPC) requests, client servicing support, advisor support, and other servicing-related solutions. We also provide digital and creative services such as website development, web applications, graphic design, branding, video editing, content creation, and social media support for businesses and individuals.",
  },
  {
    question: "Who can request a Client Policy Card (CPC)?",
    answer:
      "Client Policy Card requests are intended for Sun Life advisors who would like professionally designed policy cards for their clients. Advisors may submit a request through the website together with the required client information and supporting documents.",
  },
  {
    question: "I'm a Sun Life advisor. How do I request a Client Policy Card?",
    answer:
      "Simply complete the Client Policy Card Request Form on this website. Once your request is submitted, the Team Padua servicing team will review the information, contact you if additional details are needed, and begin the production process after confirmation.",
  },
  {
    question: "What information is required for a CPC request?",
    answer:
      "The required information depends on the selected card type, but typically includes the client's policy details, policy owner information, advisor details, and any supporting documents needed to accurately prepare the Client Policy Card.",
  },
  {
    question: "Can I request multiple Client Policy Cards at once?",
    answer:
      "Yes. Advisors handling multiple clients may submit multiple requests. Each request is reviewed individually to ensure every Client Policy Card contains accurate information before production.",
  },
  {
    question: "How long does the Client Policy Card process usually take?",
    answer:
      "Processing time depends on the completeness of the submitted information and the current request volume. Once all required details have been verified, the servicing team will keep you informed throughout the process.",
  },
  {
    question: "Can information be corrected after submitting a request?",
    answer:
      "Yes. If you notice an incorrect policy number, client name, coverage, or any other detail, simply contact the Team Padua servicing team as soon as possible. Corrections can usually be accommodated before the final card is completed.",
  },
  {
    question: "Do you also accept website, design, or digital projects?",
    answer:
      "Yes. Aside from advisor servicing solutions, Team Padua also accepts website development, web applications, graphic design, logo design, video editing, content creation, branding, and other digital creative projects for businesses and individuals.",
  },
  {
    question: "Can businesses outside of Sun Life work with Team Padua?",
    answer:
      "Absolutely. While our Client Policy Card and advisor servicing solutions are specifically designed for Sun Life advisors, our digital and creative services are available to businesses, organizations, startups, and individuals from various industries.",
  },
  {
    question: "How do I start a project or request a quotation?",
    answer:
      "You can send your inquiry using the contact form on this website. Share a brief description of your project or servicing request, and the Team Padua team will review your inquiry and respond with the next steps, estimated timeline, and quotation if applicable.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-white to-[#FFF9EB] py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-[#F4D67A]/15 blur-[180px]" />
      </div>

      <Container>
        <SectionTitle
          label="Frequently Asked Questions"
          title="Everything You Need to Know"
          description="Answers to common questions about Client Policy Card requests, Team Padua client servicing, and our digital services."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-[32px] border border-[#F3E7BE] bg-white shadow-[0_25px_70px_rgba(212,175,55,0.08)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`transition-colors ${index !== faqs.length - 1
                      ? "border-b border-[#F5EFD8]"
                      : ""
                    }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 px-8 py-7 text-left transition-colors hover:bg-[#FFFCF4]"
                  >
                    <div>
                      <p className="text-lg font-semibold text-[#111111] transition-colors group-hover:text-[#B4923A]">
                        {faq.question}
                      </p>
                    </div>

                    <motion.div
                      animate={{
                        rotate: isOpen ? 45 : 0,
                        backgroundColor: isOpen
                          ? "#D4AF37"
                          : "#FAFAFA",
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ECECEC]"
                    >
                      <Plus
                        className={`h-5 w-5 transition-colors ${isOpen ? "text-white" : "text-[#B4923A]"
                          }`}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-7">
                          <div className="h-px w-full bg-gradient-to-r from-[#D4AF37]/40 via-[#F4D67A]/30 to-transparent" />

                          <p className="mt-5 pr-4 text-[15px] leading-8 text-[#6B7280]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}