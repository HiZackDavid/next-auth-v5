interface TwoFactorAuthProps {
  token: string;
}

export const TwoFactorAuth = ({ token }: TwoFactorAuthProps) => (
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
        Your 2FA Code:
        <br />
        {token}
      </p>
      <p>
        Thanks,
        <br />
        The Team
      </p>
    </div>
  </div>
);
