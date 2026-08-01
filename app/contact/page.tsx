import type { Metadata } from "next";
import UnderlinedText from "@/components/UnderlinedText";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact - TravelSafe24",
  description: "Get in touch with TravelSafe24.",
};

export default function ContactPage() {
  return (
    <section className="max-w-lg mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center leading-tight mb-8">
        Get in <UnderlinedText>touch</UnderlinedText>
      </h1>
      <ContactForm />
    </section>
  );
}
