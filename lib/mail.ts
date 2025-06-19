import { ConfirmEmail } from "@/components/mail/confirm-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "Next-Auth-V5-Tutorial <onboarding@resend.dev>",
    to: [email],
    subject: "Confirm your email",
    react: ConfirmEmail({ confirmLink }),
  });
};
