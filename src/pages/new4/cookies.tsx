import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourCookiesPage() {
  return (
    <LegalPageLayout
      kicker="Cookie Policy"
      title="Cookie Policy"
      intro="This page explains how cookies and similar technologies may be used to operate, measure, and improve the AI GEO COMPANY website."
      accent="peach"
      sections={[
        {
          title: "Why cookies are used",
          body: [
            "Cookies and similar browser technologies may be used to support normal website functionality, measure traffic patterns, and understand how visitors move through the site.",
            "For a company presenting a commercial growth system, those signals help identify which messages, sections, and entry points attract real demand rather than empty traffic.",
          ],
        },
        {
          title: "Measurement and attribution",
          body: [
            "Some technologies may help evaluate traffic sources, campaign performance, and page-level interaction. That can include analytics, referral measurement, and other operational tools used by modern websites.",
            "If the live implementation later expands into more advanced tracking or advertising systems, this policy should be updated to reflect the actual setup in specific terms.",
          ],
        },
        {
          title: "Managing preferences",
          body: [
            "Most browsers provide their own controls for cookies and related storage technologies. Restricting them may affect how some site features behave.",
            "If a formal consent layer is introduced later, the real consent flow should match what this page says. The goal is clarity, not placeholder legal decoration.",
          ],
        },
      ]}
    />
  );
}
