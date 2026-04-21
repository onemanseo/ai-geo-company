import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourContactPage() {
  return (
    <LegalPageLayout
      kicker="Contact"
      title="Contact"
      intro="If you want to discuss GEO, AI visibility, or a strategy-led growth system for your business, this page is the right starting point."
      accent="blue"
      sections={[
        {
          title: "Email",
          body: [
            "For direct inquiries, use hello@aigrowthsystem.com and include enough context to understand the company, the market, and the current growth problem.",
            "A short, specific message is more useful than a broad request with no commercial detail. Clear context makes it easier to understand whether the fit is real.",
          ],
        },
        {
          title: "Strategy-first conversations",
          body: [
            "If the goal is to explore a working relationship, the most useful path is a strategy conversation tied to the system presented on the New 4 landing page.",
            "That means the conversation is strongest when it covers visibility, data structure, conversion architecture, and commercial priorities, not only a narrow channel request in isolation.",
          ],
        },
        {
          title: "What to expect",
          body: [
            "Not every inquiry becomes a project. Some are too early, too tactical, or not aligned with the model the company is built around.",
            "But if the request is serious, commercially grounded, and connected to the kind of work described on this site, this page is the right place to start the conversation.",
          ],
        },
      ]}
    />
  );
}
