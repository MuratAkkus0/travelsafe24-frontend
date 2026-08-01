"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DemoNotice from "@/components/DemoNotice";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!email) nextErrors.email = "Enter your email address.";
    else if (!emailPattern.test(email))
      nextErrors.email = "Enter a valid email address, like name@example.com.";
    if (!message) nextErrors.message = "Enter a message.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStatus(
        "Thanks! This is a front-end demo, so your message was validated but not actually sent anywhere.",
      );
      form.reset();
    } else {
      setStatus("");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <DemoNotice>
        This form validates your input in the browser but does not submit
        anywhere &mdash; there is no backend behind this demo.
      </DemoNotice>

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="border-input flex w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:border-destructive md:text-sm"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" className="bg-accent cursor-pointer">
        Send message
      </Button>

      {status && (
        <p role="status" className="text-sm font-medium">
          {status}
        </p>
      )}
    </form>
  );
}
