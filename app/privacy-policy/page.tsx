import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sawla Tours Ethiopia',
  description: 'How Sawla Tours collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://www.sawlatours.com/privacy-policy' },
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-ivory pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-prose mx-auto">
        <p className="label-eyebrow">Legal</p>
        <h1 className="font-display font-light text-display-lg text-charcoal mb-4">Privacy Policy</h1>
        <p className="font-body text-body-sm text-warmgrey mb-12">Last updated: June 2026</p>

        <div className="space-y-10 font-body text-body-md text-warmgrey leading-[1.82]">
          <div>
            <h2 className="font-display font-[400] text-[1.25rem] text-charcoal mb-4">1. Who we are</h2>
            <p>Sawla Tours is a licensed Ethiopian tour operator based in Addis Ababa, Ethiopia. We operate the website sawlatours.com and the enquiry services associated with it. Our data controller contact is: explore@sawlatours.com.</p>
          </div>
          <div>
            <h2 className="font-display font-[400] text-[1.25rem] text-charcoal mb-4">2. Information we collect</h2>
            <p>When you submit an enquiry through our website, we collect: your name, email address, country of residence, and the information you provide in the enquiry form (travel preferences, dates, group size). We do not collect payment information through this website.</p>
          </div>
          <div>
            <h2 className="font-display font-[400] text-[1.25rem] text-charcoal mb-4">3. How we use your information</h2>
            <p>We use your enquiry information solely to respond to your travel enquiry and plan your journey with us. We do not sell your personal information to third parties. We do not use your information for automated decision-making.</p>
          </div>
          <div>
            <h2 className="font-display font-[400] text-[1.25rem] text-charcoal mb-4">4. Data retention</h2>
            <p>We retain your enquiry information for as long as is necessary to plan and complete your journey, and for a period of up to 3 years thereafter for our business records. You may request deletion of your data at any time by emailing explore@sawlatours.com.</p>
          </div>
          <div>
            <h2 className="font-display font-[400] text-[1.25rem] text-charcoal mb-4">5. Your rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at explore@sawlatours.com. We will respond within 30 days.</p>
          </div>
          <div>
            <h2 className="font-display font-[400] text-[1.25rem] text-charcoal mb-4">6. Cookies</h2>
            <p>This website uses only essential functional cookies (for session management). We use Google Analytics to understand aggregate site traffic. Analytics data is anonymised. You may opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.</p>
          </div>
          <div>
            <h2 className="font-display font-[400] text-[1.25rem] text-charcoal mb-4">7. Contact</h2>
            <p>Privacy questions: explore@sawlatours.com · +251 705 783 06 · Sawla Tours, Addis Ababa, Ethiopia.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
