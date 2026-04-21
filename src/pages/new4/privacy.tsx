import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourPrivacyPage() {
  return (
    <LegalPageLayout
      kicker="Privacy Policy"
      title="Privacy Policy"
      intro="This page explains how AI GEO COMPANY handles website inquiries, strategy-call requests, and operational data in the same visual language as the New 4 landing experience."
      accent="mint"
      sections={[
        {
          title: "What we collect",
          body: [
            "We may collect contact details you share through inquiry forms, strategy requests, email communication, and normal website analytics used to understand demand, traffic quality, and user interaction.",
            "This can include your name, email address, company information, and the context you provide about your growth goals or AI visibility needs.",
          ],
        },
        {
          title: "How we use information",
          body: [
            "We use submitted information to reply to inquiries, prepare relevant strategy conversations, improve the site experience, and understand which services or pages attract commercial interest.",
            "We do not describe anonymous traffic as a relationship. We use the data to respond better, qualify demand, and improve the system.",
          ],
        },
        {
          title: "Analytics and platform tools",
          body: [
            "Like most commercial sites, we may use analytics, hosting, scheduling, and communication tools to operate the website and understand demand patterns.",
            "Those tools may process technical information such as browser type, device category, referral source, and page interactions where applicable.",
          ],
        },
        {
          title: "Your choices",
          body: [
            "If you want us to update or remove inquiry information you previously submitted, contact us through the contact page and we can review the request.",
            "If this site later adds more formal account, tracking, or newsletter systems, this page should be updated to reflect the real data flow instead of generic boilerplate.",
          ],
        },
      ]}
    />
  );
}
