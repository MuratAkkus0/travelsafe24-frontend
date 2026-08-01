"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DemoNotice from "@/components/DemoNotice";

interface Errors {
  email?: string;
  password?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    const nextErrors: Errors = {};
    if (!email) nextErrors.email = "Enter your email address.";
    else if (!emailPattern.test(email))
      nextErrors.email = "Enter a valid email address, like name@example.com.";
    if (!password) nextErrors.password = "Enter your password.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStatus(
        "Your details look valid, but this demo has no real accounts or authentication, so you have not actually been logged in.",
      );
    } else {
      setStatus("");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <DemoNotice>
        This is a UI-only demo: it validates your input but does not create
        accounts or log anyone in.
      </DemoNotice>

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
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
        />
        {errors.password && (
          <p id="password-error" role="alert" className="text-sm text-destructive">
            {errors.password}
          </p>
        )}
      </div>

      <Button type="submit" className="bg-accent cursor-pointer w-full">
        Log in
      </Button>

      {status && (
        <p role="status" className="text-sm font-medium">
          {status}
        </p>
      )}
    </form>
  );
}
