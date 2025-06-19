interface ResetPasswordProps {
  resetLink: string;
}

export const ResetPassword = ({ resetLink }: ResetPasswordProps) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      padding: "40px",
    }}
  >
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        border: "1px solid #dddddd",
        padding: "20px",
      }}
    >
      <p>Hello,</p>
      <p>
        Click{" "}
        <a
          href={resetLink}
          style={{ color: "#1a73e8", textDecoration: "none" }}
        >
          here
        </a>{" "}
        to reset your password.
      </p>
      <p>
        If the link doesn&apos;t work, copy and paste this URL into your
        browser:
      </p>
      <p style={{ wordBreak: "break-all" }}>
        <a href={resetLink} style={{ color: "#1a73e8" }}>
          {resetLink}
        </a>
      </p>
      <p>
        Thanks,
        <br />
        The Team
      </p>
    </div>
  </div>
);
