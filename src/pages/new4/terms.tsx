import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourTermsPage() {
  return (
    <LegalPageLayout
      kicker="Terms & Conditions"
      title="Terms & Conditions"
      intro="These terms set the baseline rules for using the AI GEO COMPANY website and for interpreting the information presented across the New 4 version of the site."
      accent="blue"
      sections={[
        {
          title: "Website purpose",
          body: [
            "This website is provided as an informational and commercial presentation of the company's positioning, thinking, and services. It is intended for review, exploration, and initial contact.",
            "Use of the site does not by itself create a client relationship, strategic engagement, partnership, or advisory agreement.",
          ],
        },
        {
          title: "No guaranteed outcomes",
          body: [
            "The site describes a growth model built around data, GEO, conversion, and intelligence, but no page on this site should be read as a guarantee of traffic, rankings, revenue, or business performance.",
            "Actual outcomes depend on scope, market conditions, product quality, implementation quality, timing, and the specific commercial situation of the client.",
          ],
        },
        {
          title: "Use of materials",
          body: [
            "The copy, structure, visual treatment, and original materials on this site belong to AI GEO COMPANY unless another source is clearly identified.",
            "You may review and reference the site for normal business purposes, but you may not republish the entire presentation, clone the branded experience, or represent proprietary materials as your own commercial work.",
          ],
        },
        {
          title: "Commercial discussions",
          body: [
            "Any future work would need to be defined through a separate conversation and, where relevant, a direct agreement covering scope, deliverables, timelines, and commercial terms.",
            "Until that happens, the site should be understood as a positioning layer, not a standalone legal contract for services.",
          ],
        },
      ]}
    />
  );
}
