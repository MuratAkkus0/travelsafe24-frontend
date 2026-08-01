import type { Metadata } from "next";
import UnderlinedText from "@/components/UnderlinedText";
import LoginForm from "@/components/forms/LoginForm";

export const metadata: Metadata = {
  title: "Log in - TravelSafe24",
  description: "Log in to TravelSafe24 (UI demo, no real authentication).",
};

export default function LoginPage() {
  return (
    <section className="max-w-sm mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center leading-tight mb-8">
        Log <UnderlinedText>in</UnderlinedText>
      </h1>
      <LoginForm />
    </section>
  );
}
