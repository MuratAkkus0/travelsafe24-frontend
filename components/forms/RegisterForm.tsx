"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DemoNotice from "@/components/DemoNotice";

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const confirmPassword = String(data.get("confirmPassword") ?? "");

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!email) nextErrors.email = "Enter your email address.";
    else if (!emailPattern.test(email))
      nextErrors.email = "Enter a valid email address, like name@example.com.";
    if (!password) nextErrors.password = "Choose a password.";
    else if (password.length < 8)
      nextErrors.password = "Use at least 8 characters.";
    if (confirmPassword !== password)
      nextErrors.confirmPassword = "Passwords don't match.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStatus(
        "Your details look valid, but this demo has no backend, so no account was actually created.",
      );
      form.reset();
    } else {
      setStatus("");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <DemoNotice>
        This is a UI-only demo: it validates your input but does not create
        any real account.
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
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
        />
        {errors.password && (
          <p id="password-error" role="alert" className="text-sm text-destructive">
            {errors.password}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          aria-invalid={Boolean(errors.confirmPassword)}
          aria-describedby={
            errors.confirmPassword ? "confirmPassword-error" : undefined
          }
        />
        {errors.confirmPassword && (
          <p
            id="confirmPassword-error"
            role="alert"
            className="text-sm text-destructive"
          >
            {errors.confirmPassword}
          </p>
        )}
      </div>

      <Button type="submit" className="bg-accent cursor-pointer w-full">
        Create account
      </Button>

      {status && (
        <p role="status" className="text-sm font-medium">
          {status}
        </p>
      )}
    </form>
  );
}
