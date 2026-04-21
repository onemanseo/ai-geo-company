import NewFourServicePage from "./services";

export default function NewFourWhitepaperPage() {
  return (
    <NewFourServicePage
      kicker="Resource Page"
      title="AI Growth Whitepaper"
      intro="Placeholder page for the AI Growth Whitepaper resource. It now exists as a branded internal page rather than an empty footer destination."
      sections={[
        { title: "What will live here", body: ["This page is meant to hold the whitepaper landing experience, including summary copy, value proposition, download logic, and supporting context around the AI Growth System.", "For now it acts as a coherent placeholder in the same design language as the New 4 homepage."] },
        { title: "Why it matters", body: ["Resource pages should feel like part of the main site, not an afterthought. This page gives the footer a real destination and keeps the information architecture cleaner.", "It can later be expanded into a stronger lead-generation asset with more detailed resource copy."] }
      ]}
    />
  );
}
