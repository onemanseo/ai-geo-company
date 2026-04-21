import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourCookiesPage() {
  return (
    <LegalPageLayout
      kicker="Cookie Policy"
      title="Cookie Policy"
      intro="This Cookie Policy explains how Flowvory uses cookies and similar technologies on flowvory.com. Flowvory is a California-based company located at 2340 Santa Monica Blvd, Santa Monica, California."
      accent="peach"
      sections={[
        {
          title: "1. What cookies and similar technologies are",
          body: [
            "Cookies are small text files and similar technologies that websites and related systems may place on a device or browser to remember state, support functionality, measure interaction, and improve website operation.",
            "Related technologies can include local storage, pixels, tags, session identifiers, analytics scripts, and similar tools used to understand how a site is performing and how visitors move through it.",
          ],
        },
        {
          title: "2. How Flowvory may use them",
          body: [
            "Flowvory may use cookies and similar technologies to keep the site functioning properly, remember technical settings, understand visitor engagement, analyze traffic sources, evaluate conversion paths, protect the website, and improve the clarity and performance of the user experience.",
            "These tools may also help Flowvory understand which pages, sections, and calls to action are attracting qualified commercial interest rather than passive or low-intent traffic.",
          ],
        },
        {
          title: "3. Categories of cookie-related activity",
          body: [
            "Depending on the live implementation, cookies or similar technologies may support essential site operation, performance measurement, analytics, referral attribution, session management, and related website optimization activities.",
            "The precise tools in use may change over time as the site evolves. If the operational setup changes materially, this policy should be updated so the public-facing text reflects actual usage rather than generic assumptions.",
          ],
        },
        {
          title: "4. Third-party tools",
          body: [
            "Some cookie or analytics functionality may be provided through third-party services such as analytics, hosting, scheduling, communications, or optimization providers. Those services may independently process technical information according to their own terms and policies in addition to Flowvory's practices.",
            "Flowvory may select such tools for legitimate operational reasons, including site performance, business measurement, communications, and infrastructure reliability.",
          ],
        },
        {
          title: "5. Your browser controls",
          body: [
            "Most browsers provide controls that allow users to block, restrict, or remove cookies and similar storage technologies. These settings vary by browser and device.",
            "If cookies are limited or disabled, some parts of the website experience may not function as intended, and some analytical or preference-related features may be reduced or unavailable.",
          ],
        },
        {
          title: "6. Future changes and contact",
          body: [
            "If Flowvory later implements a more detailed consent mechanism, adds materially different advertising or tracking tools, or significantly changes the website's measurement stack, this Cookie Policy should be updated accordingly.",
            "Questions about this Cookie Policy may be directed to Flowvory at 2340 Santa Monica Blvd, Santa Monica, California, or through the website's contact channels.",
          ],
        },
      ]}
    />
  );
}
