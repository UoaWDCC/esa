import { Html, Head, Preview, Body, Section, Text, Link } from "@react-email/components";

interface VerificationEmailTemplateProps {
  verificationLink: string;
}

export default function VerificationEmailTemplate({ verificationLink }: VerificationEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Verify your email for ESA</Preview>
      <Body style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
        <Section>
          <Text style={{ color: '#4CAF50', fontSize: '20px', fontWeight: 'bold' }}>
            Verify Your Email Address
          </Text>
          <Text>
            Thank you for signing up to ESA! Please link your Google account with your email address by clicking the link below:
          </Text>
          <Section>
            <Link
              href={verificationLink}
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                margin: '20px 0',
                backgroundColor: '#4CAF50',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              Verify Email
            </Link>
          </Section>
        </Section>
      </Body>
    </Html>
  );
}