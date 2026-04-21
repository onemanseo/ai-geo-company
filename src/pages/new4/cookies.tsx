import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourCookiesPage() {
  return (
    <LegalPageLayout
      kicker="Cookie Policy"
      title="Cookie Policy"
      intro="This page explains how cookies and similar technologies may be used across the AI GEO COMPANY New 4 experience."
      accent="peach"
      sections={[
        {
          title: "Why cookies may be used",
          body: [
            "Cookies and similar browser technologies can help with analytics, traffic attribution, user experience continuity, and understanding how people move through the site.",
            "For a growth-oriented site, those signals can help identify which landing sections, calls to action, and channels generate real commercial attention.",
          ],
        },
        {
          title: "Types of cookies",
          body: [
            "Some cookies may support site functionality, while others may support measurement, campaign attribution, or performance analysis.",
            "If more advanced tracking, ad attribution, or personalization systems are introduced, this page should be updated to describe those tools clearly.",
          ],
        },
        {
          title: "Managing preferences",
          body: [
            "Most browsers allow you to control or disable cookies through browser settings. Doing so may affect how some parts of the site behave.",
            "If a dedicated consent layer is added later, the live implementation should match what is described here instead of relying on placeholder legal text.",
          ],
        },
      ]}
    />
  );
}
