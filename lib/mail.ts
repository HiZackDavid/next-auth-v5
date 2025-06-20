import { ConfirmEmail } from "@/components/mail/confirm-email";
import { ResetPassword } from "@/components/mail/reset-password";
import { TwoFactorAuth } from "@/components/mail/two-factor-auth";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "Next-Auth-V5-Tutorial <onboarding@resend.dev>",
    to: [email],
    subject: "Reset your password",
    react: ResetPassword({ resetLink }),
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "Next-Auth-V5-Tutorial <onboarding@resend.dev>",
    to: [email],
    subject: "Confirm your email",
    react: ConfirmEmail({ confirmLink }),
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "Next-Auth-V5-Tutorial <onboarding@resend.dev>",
    to: [email],
    subject: "2FA Code",
    react: TwoFactorAuth({ token }),
  });
};
