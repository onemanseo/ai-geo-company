import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourPrivacyPage() {
  return (
    <LegalPageLayout
      kicker="Privacy Policy"
      title="Privacy Policy"
      intro="This policy explains, in plain language, what AI GEO COMPANY may collect through this website, why that information is used, and how inquiry data is handled when someone reaches out through the New 4 experience."
      accent="mint"
      sections={[
        {
          title: "Inquiry data",
          body: [
            "If you contact the company through email, a strategy request, or another direct inquiry path, the information you provide is used to understand the request and reply appropriately.",
            "That may include your name, email address, company details, website, market context, and any growth or visibility information you voluntarily include in the message.",
          ],
        },
        {
          title: "Operational website data",
          body: [
            "Like most commercial websites, this site may process limited technical and analytical information such as browser type, device category, page visits, referral source, and interaction patterns.",
            "That information is used to understand demand, evaluate which pages attract real commercial attention, and improve how the site communicates its offer.",
          ],
        },
        {
          title: "How information is used",
          body: [
            "The company uses submitted information to respond to inquiries, assess fit, prepare relevant conversations, and operate the website more effectively.",
            "It is not used to create a false sense of relationship or to imply a formal engagement where none exists. An inquiry is just that: an inquiry, until a separate commercial agreement exists.",
          ],
        },
        {
          title: "Requests and updates",
          body: [
            "If you want the company to correct or remove information you previously submitted through a direct inquiry, you can make that request using the contact page.",
            "If the site later introduces more formal lead capture, newsletter systems, or account-based functionality, this policy should be updated to reflect the real implementation instead of generic legal filler.",
          ],
        },
      ]}
    />
  );
}
