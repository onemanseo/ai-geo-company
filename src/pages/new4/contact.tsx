import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourContactPage() {
  return (
    <LegalPageLayout
      kicker="Contact"
      title="Contact"
      intro="If you want to discuss GEO, AI visibility, or a strategy-led growth system for your business, this page is the right starting point for contacting Flowvory."
      accent="blue"
      sections={[
        {
          title: "1. Direct contact",
          body: [
            "For direct inquiries, contact hello@aigrowthsystem.com and include enough information to understand the company, the market, and the current commercial challenge.",
            "A short message with real context is far more useful than a vague note that says only that growth is needed. The site is designed to attract serious conversations, and the contact page should work the same way.",
          ],
        },
        {
          title: "2. Best-fit conversations",
          body: [
            "The strongest fit is usually with companies that want to think beyond a single channel and treat growth as a system across visibility, data, conversion, and retention.",
            "That can include eCommerce teams, marketplaces, and operators who want a clearer strategy for GEO, AI demand capture, structured data, and on-site commercial performance.",
          ],
        },
        {
          title: "3. What to include in an inquiry",
          body: [
            "A useful first message usually includes your website, category, current acquisition model, the main bottleneck you want to solve, and whether the need is strategic, advisory, or execution-focused.",
            "This helps Flowvory decide whether the fit is real and whether the next step should be a strategy discussion, a narrower commercial conversation, or simply a referral elsewhere.",
          ],
        },
        {
          title: "4. Response expectations",
          body: [
            "Not every inquiry becomes a project. Some requests are outside scope, too early, or too detached from the system the company is built to deliver.",
            "But for serious businesses with a real commercial context and a clear reason for reaching out, this page is the right place to start the conversation.",
          ],
        },
      ]}
    />
  );
}
