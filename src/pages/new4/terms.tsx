import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourTermsPage() {
  return (
    <LegalPageLayout
      kicker="Terms & Conditions"
      title="Terms & Conditions"
      intro="These terms define the baseline rules for using the AI GEO COMPANY website and engaging with the information presented on the New 4 experience."
      accent="blue"
      sections={[
        {
          title: "Website use",
          body: [
            "This website is provided for informational and commercial communication purposes. You may browse, review service positioning, and contact the company regarding strategy, consulting, or partnership interest.",
            "You agree not to misuse the site, attempt to interfere with its operation, or represent exploratory information as a binding service commitment.",
          ],
        },
        {
          title: "No automatic service agreement",
          body: [
            "Viewing this site or sending an inquiry does not create a client relationship by itself. Any paid scope, deliverable structure, or advisory engagement would need to be defined separately.",
            "The site describes a growth system and strategic direction, but execution terms depend on actual discussions, fit, timing, and scope.",
          ],
        },
        {
          title: "Content and positioning",
          body: [
            "We aim to keep the website current, but strategy language, service positioning, and capability framing can evolve over time as the business changes.",
            "Nothing on this site should be treated as a guaranteed business outcome, universal growth promise, or substitute for tailored advice.",
          ],
        },
        {
          title: "Intellectual property",
          body: [
            "The site design, copy, visual identity, and original structural materials belong to AI GEO COMPANY unless another source is explicitly credited.",
            "You may not republish the site wholesale, clone the brand presentation, or present proprietary materials as your own commercial assets.",
          ],
        },
      ]}
    />
  );
}
