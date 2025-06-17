import { getUserByEmail } from "@/data/user";
import bcrypt from "bcrypt";
import { LoginSchema } from "@/schemas";

export const authorizeUser = async (
  credentials: Partial<Record<string, unknown>>
) => {
  const validatedFields = LoginSchema.safeParse(credentials);

  if (!validatedFields.success) return null;

  const { email, password } = validatedFields.data;
  const user = await getUserByEmail(email);

  if (!user || !user.password || !user.email) return null;

  const passwordsMatch = await bcrypt.compare(password, user.password);
  return passwordsMatch ? user : null;
};
