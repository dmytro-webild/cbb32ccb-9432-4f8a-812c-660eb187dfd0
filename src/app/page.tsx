"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroOverlayTestimonial from "@/components/sections/hero/HeroOverlayTestimonial";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import TeamCardSix from "@/components/sections/team/TeamCardSix";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Leaf, TreePine } from "lucide-react";

export default function LandscapingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="large"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            brandName="GreenScape"
            navItems={[
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Team", id: "team" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "Call Now", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            tag="Professional Landscaping"
            tagIcon={Leaf}
            title="Transform Your Outdoor Space"
            description="Professional landscaping design, installation, and maintenance services. From lush gardens to stunning hardscapes, we bring your vision to life."
            buttons={[
              { text: "Get Free Estimate", href: "#contact" },
              { text: "Our Services", href: "#services" },
            ]}
            buttonAnimation="slide-up"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/hero.jpg"
            imageAlt="Landscaped garden with manicured lawn and shrubs"
            showDimOverlay={true}
            textPosition="top"
            testimonials={[
              {
                name: "Sarah M.",
                handle: "Homeowner",
                testimonial: "GreenScape completely transformed our backyard. The team was professional, creative, and delivered beyond our expectations.",
                rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.jpg",
                imageAlt: "Sarah M.",
              },
              {
                name: "David K.",
                handle: "Property Manager",
                testimonial: "We've used GreenScape for all our commercial properties. Their maintenance plans keep everything looking pristine year-round.",
                rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.jpg",
                imageAlt: "David K.",
              },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="About GreenScape"
            tagIcon={Leaf}
            tagAnimation="slide-up"
            title="We've been transforming outdoor spaces for over 15 years — delivering designs that homeowners love and landscapes that last."
            description="James Carter, Lead Designer"
            subdescription="Founded in 2010"
            icon={TreePine}
            videoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/about-video.mp4"
            mediaAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardNineteen
            tag="Our Services"
            tagIcon={Leaf}
            title="What We Do"
            description="From design to maintenance, we handle every aspect of your landscape."
            buttonAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            imageContainerClassName="!rotate-0 !aspect-square"
            features={[
              {
                tag: "Design",
                title: "Landscape Design",
                subtitle: "Custom Plans",
                description: "We create tailored landscape designs that complement your property's architecture and your personal style.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-2.jpg",
                imageAlt: "Landscape design",
              },
              {
                tag: "Installation",
                title: "Hardscape & Softscape",
                subtitle: "Full Installation",
                description: "From patios and walkways to gardens and trees, we handle the complete installation process.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-3.jpg",
                imageAlt: "Hardscape installation",
              },
              {
                tag: "Maintenance",
                title: "Lawn & Garden Care",
                subtitle: "Ongoing Service",
                description: "Keep your property looking pristine year-round with our professional maintenance plans.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-4.jpg",
                imageAlt: "Lawn maintenance",
              },
              {
                tag: "Irrigation",
                title: "Smart Irrigation",
                subtitle: "Water Management",
                description: "Efficient irrigation systems that keep your landscape healthy while conserving water.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-5.jpg",
                imageAlt: "Irrigation system",
              },
            ]}
          />
        </div>

        <div id="why-us" data-section="why-us">
          <TeamCardSix
            title="Why Choose GreenScape"
            description="What sets us apart from the rest."
            textboxLayout="default"
            useInvertedBackground={false}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            members={[
              {
                id: "1",
                name: "Expert Craftsmanship",
                role: "Decades of combined experience in landscape design and installation.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-6.jpg",
                imageAlt: "Expert craftsmanship",
              },
              {
                id: "2",
                name: "Eco-Friendly Approach",
                role: "Sustainable practices and native plant selections that thrive naturally.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-7.jpg",
                imageAlt: "Eco-friendly landscaping",
              },
              {
                id: "3",
                name: "Full-Service Care",
                role: "From initial design to ongoing maintenance, we handle everything.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-8.jpg",
                imageAlt: "Full-service care",
              },
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamCardOne
            tag="Our Team"
            title="Meet the Experts"
            description="The skilled professionals behind every beautiful landscape."
            textboxLayout="default"
            useInvertedBackground={false}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            members={[
              {
                id: "1",
                name: "James Carter",
                role: "Lead Designer",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-11.jpg",
                imageAlt: "James Carter",
              },
              {
                id: "2",
                name: "Maria Silva",
                role: "Horticulturist",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-10.jpg",
                imageAlt: "Maria Silva",
              },
              {
                id: "3",
                name: "Ryan Mitchell",
                role: "Project Manager",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-9.jpg",
                imageAlt: "Ryan Mitchell",
              },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwelve
            cardTag="Trusted by Homeowners"
            cardTagIcon={Leaf}
            cardTitle="Over 500 happy clients trust GreenScape to transform and maintain their outdoor spaces."
            buttons={[{ text: "Contact Now", href: "#contact" }]}
            buttonAnimation="slide-up"
            cardAnimation="slide-up"
            useInvertedBackground={false}
            testimonials={[
              {
                id: "1",
                name: "Sarah M.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-10.jpg",
                imageAlt: "Sarah M.",
              },
              {
                id: "2",
                name: "David K.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-11.jpg",
                imageAlt: "David K.",
              },
              {
                id: "3",
                name: "Emily R.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-4.jpg",
                imageAlt: "Emily R.",
              },
              {
                id: "4",
                name: "Ryan M.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/img-9.jpg",
                imageAlt: "Ryan M.",
              },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            tag="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about our landscaping services."
            textboxLayout="default"
            useInvertedBackground={false}
            faqsAnimation="slide-up"
            faqs={[
              {
                id: "1",
                title: "How long does a typical landscaping project take?",
                content: "Most residential projects take 1-3 weeks depending on scope. We'll provide a detailed timeline during your consultation so you know exactly what to expect.",
              },
              {
                id: "2",
                title: "Do you offer free consultations?",
                content: "Yes! We offer complimentary on-site consultations where we assess your property, discuss your vision, and provide a detailed estimate — no obligation.",
              },
              {
                id: "3",
                title: "What areas do you serve?",
                content: "We serve the greater metropolitan area and surrounding suburbs within a 50-mile radius. Contact us to confirm service availability in your location.",
              },
              {
                id: "4",
                title: "Do you provide ongoing maintenance?",
                content: "Absolutely. We offer weekly, bi-weekly, and monthly maintenance plans that include mowing, trimming, fertilization, and seasonal cleanups.",
              },
              {
                id: "5",
                title: "Are your practices eco-friendly?",
                content: "Yes, sustainability is core to our approach. We use native plants, organic fertilizers, smart irrigation, and environmentally responsible methods whenever possible.",
              },
              {
                id: "6",
                title: "Do you handle permits and HOA approvals?",
                content: "We handle all necessary permits and can work directly with your HOA to ensure your project meets community guidelines and gets approved smoothly.",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact" className="relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <video
              src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/landscaping/bg-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <ContactSplitForm
            title="Get Your Free Estimate"
            description="Tell us about your project and we'll get back to you within 24 hours."
            useInvertedBackground={false}
            mediaAnimation="none"
            buttonText="Send Message"
            contentClassName="!grid-cols-1 max-w-[600px] mx-auto"

            mediaWrapperClassName="hidden"
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number" },
            ]}
            multiSelect={{
              name: "service",
              label: "Select a Service",
              options: ["Landscape Design", "Hardscape & Softscape", "Lawn & Garden Care", "Smart Irrigation"],
            }}
            textarea={{ name: "message", placeholder: "Tell us about your project...", rows: 4, required: true }}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              {
                title: "Services",
                items: [
                  { label: "Landscape Design", href: "#services" },
                  { label: "Hardscape & Softscape", href: "#services" },
                  { label: "Lawn & Garden Care", href: "#services" },
                  { label: "Smart Irrigation", href: "#services" },
                ],
              },
              {
                title: "Company",
                items: [
                  { label: "About", href: "#about" },
                  { label: "Team", href: "#team" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "FAQ", href: "#faq" },
                ],
              },
              {
                title: "Contact",
                items: [
                  { label: "(555) 123-4567", href: "tel:5551234567" },
                  { label: "hello@greenscape.com", href: "mailto:hello@greenscape.com" },
                  { label: "Los Angeles, CA" },
                ],
              },
            ]}
            bottomLeftText="© 2026 GreenScape Landscaping"
            bottomRightText="All rights reserved"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
