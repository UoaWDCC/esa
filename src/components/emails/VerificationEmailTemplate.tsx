import { Html, Head, Preview, Body, Section, Text, Link, Img } from "@react-email/components";

interface VerificationEmailTemplateProps {
  verificationLink: string;
}

// Inline styles are used for better compatibility across various email clients
export default function VerificationEmailTemplate({ verificationLink }: VerificationEmailTemplateProps) {
  // Theme values from src/styles/global.css
  const colors = {
    primaryRed: '#D3312A',
    primaryWhite: '#EBE9E6',
    primaryGrey: '#161514',
    accentYellow: '#FFC857',
  };

  return (
    <Html>
      <Head />
      <Preview>Verify your email for ESA</Preview>
      <Body
        style={{
          fontFamily: "'Smeltex Medium', 'Roboto', Arial, sans-serif",
          lineHeight: '1.6',
          color: colors.primaryWhite,
          backgroundColor: colors.primaryGrey,
          padding: '40px 16px',
        }}
      >
        <Section style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <Text
              style={{
                color: colors.primaryRed,
                fontSize: 28,
                fontWeight: 700,
                fontFamily: "'Reservoir Grunge', 'Smeltex Medium', Arial, sans-serif",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Verify Your Email Address
            </Text>
          </div>

          <Img
            src="https://esa.wdcc.co.nz/images/logo/esa_mascot.png"
            alt="ESA Mascot"
            width={300}
            height={300}
            style={{ display: 'block', margin: '0 auto 20px auto' }}
          />

          <Text style={{ color: colors.primaryWhite, fontSize: 16, marginBottom: 12 }}>
            Thank you for signing up to ESA! Please link your Google account with your email address by clicking the button below.
          </Text>

          <Section style={{ textAlign: 'center', marginTop: 18 }}>
            <Link
              href={verificationLink}
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                margin: '10px 0',
                backgroundColor: colors.accentYellow,
                color: colors.primaryGrey,
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
              }}
            >
              Verify Email
            </Link>
          </Section>

          <Section style={{ marginTop: 30 }}>
            <Text style={{ color: '#A8A8A8', fontSize: 12 }}>
              If you didn't request this, you can safely ignore this email. This link will expire in 10 minutes.
            </Text>
          </Section>
        </Section>
      </Body>
    </Html>
  );
}