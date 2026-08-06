"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

/**
 * Testimonials section — client feedback and reviews.
 * TODO: Add TestimonialCard grid or carousel.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-[var(--color-off-white)]">
      <Container>
        <SectionTitle
          label="Testimonials"
          title="What Clients Say"
          description="Trusted by individuals and businesses for exceptional service."
        />
        {/* Testimonials grid placeholder */}
      </Container>
    </section>
  );
}
