import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourCookiesPage() {
  return (
    <LegalPageLayout
      kicker="Cookie Policy"
      title="Cookie Policy"
      intro="This Cookie Policy explains how Flowvory may use cookies and similar technologies to operate the website, understand demand, and improve the quality of the site experience."
      accent="peach"
      sections={[
        {
          title: "1. What cookies do here",
          body: [
            "Cookies and similar browser technologies help websites remember basic technical states, measure interaction, and understand how visitors move through pages.",
            "For Flowvory, that can include understanding which sections attract serious business interest, how visitors navigate through the site, and whether the communication flow is clear or confusing.",
          ],
        },
        {
          title: "2. Types of site usage data",
          body: [
            "The website may rely on measurement or analytics tools that process information such as page views, referral sources, browser type, device type, and interaction paths through the site.",
            "These technologies are used to operate and improve the website rather than to create the illusion of sophistication with meaningless tracking language.",
          ],
        },
        {
          title: "3. Why this matters for a commercial site",
          body: [
            "Flowvory is not a hobby site. It is a commercial website designed to communicate an offer clearly, attract qualified interest, and understand which messages create real traction.",
            "That means analytical and measurement technologies can play a legitimate operational role, especially when they help distinguish serious commercial demand from low-quality traffic.",
          ],
        },
        {
          title: "4. Managing cookie preferences",
          body: [
            "Most browsers allow users to control or restrict cookies through browser settings. If those settings are changed, some parts of the browsing experience may behave differently.",
            "If Flowvory later adds a dedicated consent layer or a broader tracking implementation, this page should be revised to reflect the real setup in specific and understandable terms.",
          ],
        },
      ]}
    />
  );
}
