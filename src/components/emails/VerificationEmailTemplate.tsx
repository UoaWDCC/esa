interface VerificationEmailTemplateProps {
    verificationLink: string;
}

export default function VerificationEmailTemplate({ verificationLink }: VerificationEmailTemplateProps) {
    // Inline styles are used instead of tailwind for better compatibility
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
            <h2 style={{ color: '#4CAF50' }}>Verify Your Email Address</h2>
            <p>Thank you for signing up to ESA! Please link your Google account with your email address by clicking the link below:</p>
            <p>
                <a
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
                </a>
            </p>
        </div>
    );
}

