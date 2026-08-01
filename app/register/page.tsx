import type { Metadata } from "next";
import UnderlinedText from "@/components/UnderlinedText";
import RegisterForm from "@/components/forms/RegisterForm";

export const metadata: Metadata = {
  title: "Register - TravelSafe24",
  description: "Create a TravelSafe24 account (UI demo, no real accounts).",
};

export default function RegisterPage() {
  return (
    <section className="max-w-sm mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center leading-tight mb-8">
        Create your <UnderlinedText>account</UnderlinedText>
      </h1>
      <RegisterForm />
    </section>
  );
}
