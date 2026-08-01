import type { Metadata } from "next";
import UnderlinedText from "@/components/UnderlinedText";

export const metadata: Metadata = {
  title: "About - TravelSafe24",
  description: "What TravelSafe24 is and what it's trying to help you do.",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center leading-tight mb-6">
        About <UnderlinedText>TravelSafe24</UnderlinedText>
      </h1>
      <div className="space-y-4 text-muted-foreground text-lg">
        <p>
          TravelSafe24 is a concept for a city-matching tool: instead of
          scrolling through dozens of &ldquo;best cities to live in&rdquo;
          lists, you describe what matters to you, and TravelSafe24 shows how
          well different cities fit &mdash; as a single, comparable score.
        </p>
        <p>
          This repository is a front-end portfolio piece demonstrating that
          idea: a marketing landing page, a features section, and simple
          account pages, all built with Next.js, TypeScript, and Tailwind
          CSS.
        </p>
        <p>
          There is no scoring engine, no city database, and no backend behind
          any of it yet &mdash; see the project README for the full, honest
          scope of what is and isn&apos;t implemented.
        </p>
      </div>
    </section>
  );
}
