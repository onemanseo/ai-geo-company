import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourContactPage() {
  return (
    <LegalPageLayout
      kicker="Contact"
      title="Contact"
      intro="If you want to discuss AI visibility, AI-driven growth systems, or a strategy conversation for your company, use the contact paths below as the starting point."
      accent="blue"
      sections={[
        {
          title: "General inquiries",
          body: [
            "For new business conversations, reach out via hello@aigrowthsystem.com with a short explanation of the company, market, and current growth challenge.",
            "The more specific the context, the easier it is to understand whether the project is a strong fit for the system presented on the New 4 page.",
          ],
        },
        {
          title: "Strategy calls",
          body: [
            "If you are looking for a strategy-first conversation, use the Book Strategy Call flow from the main landing page footer or CTA areas.",
            "That is the best path when the request is commercial, exploratory, and tied to AI demand capture, conversion, or retention architecture.",
          ],
        },
        {
          title: "Response expectations",
          body: [
            "Not every message becomes a project. Some requests are too broad, too tactical, or outside the business model described on the site.",
            "But qualified requests with clear context are the right place to start if you want to explore whether AI GEO COMPANY is the right growth partner.",
          ],
        },
      ]}
    />
  );
}
