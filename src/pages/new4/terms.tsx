import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourTermsPage() {
  return (
    <LegalPageLayout
      kicker="Terms & Conditions"
      title="Terms & Conditions"
      intro="These Terms & Conditions govern access to and use of flowvory.com and describe the legal framework for the public website operated by Flowvory, a California-based company located at 2412 Santa Monica Boulevard, Santa Monica, California."
      accent="blue"
      sections={[
        {
          title: "1. Acceptance of terms",
          body: [
            "By accessing or using flowvory.com, you agree to these Terms & Conditions as they apply to your use of the website. If you do not agree to them, you should not use the site.",
            "These terms apply to public website use, content review, inquiry and communication flows, and other interactions with the site unless a separate written agreement expressly governs a specific relationship or service.",
          ],
        },
        {
          title: "2. Website purpose and informational use",
          body: [
            "Flowvory.com is a commercial website intended to present the company's positioning, services, thinking, brand materials, and public-facing communications regarding GEO, AI visibility, structured data, conversion architecture, and related growth strategy topics.",
            "The site is informational and commercial in nature, but use of the site alone does not create a client relationship, strategic advisory engagement, agency agreement, joint venture, partnership, fiduciary relationship, or legal representation of any kind.",
          ],
        },
        {
          title: "3. No guarantee of outcomes",
          body: [
            "Nothing on the website should be interpreted as a guarantee of rankings, citations, leads, traffic, revenue, conversion rates, retention performance, or any other business result. Commercial outcomes depend on many variables beyond the site's public statements, including execution quality, business readiness, market conditions, product quality, and agreed scope of work.",
            "Examples, directional statements, strategic language, and explanatory claims on the site are presented to describe the company's perspective and offer, not to create guaranteed future performance commitments.",
          ],
        },
        {
          title: "4. Intellectual property and permitted use",
          body: [
            "Unless otherwise stated, the website's copy, structure, design treatment, brand assets, source materials, graphics, layouts, and original text are the property of Flowvory or are used with permission. All rights not expressly granted are reserved.",
            "You may view the site and use it for normal informational and business-evaluation purposes, but you may not reproduce, republish, scrape at scale, mirror, copy the branded experience, create derivative public-facing clones, or use the content in a misleading commercial context without authorization.",
          ],
        },
        {
          title: "5. Inquiries, proposals, and no automatic engagement",
          body: [
            "Submitting an inquiry, booking a call, or exchanging preliminary messages with Flowvory does not by itself create a binding services agreement. Any actual engagement would require separate agreement on scope, commercial terms, responsibilities, deliverables, timelines, and other relevant legal and operational conditions.",
            "Until such an agreement exists, the website and any exploratory communications should be understood as part of a preliminary business discussion rather than a finalized commercial relationship.",
          ],
        },
        {
          title: "6. Website conduct and misuse",
          body: [
            "You agree not to use the site in a way that interferes with its operation, attempts unauthorized access, misrepresents your identity, scrapes or exploits content abusively, transmits malicious code, or otherwise violates applicable law or the rights of Flowvory or third parties.",
            "Flowvory reserves the right to restrict or block access where necessary to protect the site, its business, its infrastructure, its rights, or the integrity of its communications and public-facing services.",
          ],
        },
        {
          title: "7. Third-party tools and links",
          body: [
            "The website may rely on or link to third-party infrastructure, analytics, communication tools, scheduling tools, icons, fonts, hosting services, or other third-party services. Flowvory does not control every aspect of those external services and is not responsible for third-party content, terms, or independent practices beyond its own reasonable selection and use of such tools.",
            "Where third-party systems are operationally necessary, they may form part of the website experience, but their independent terms and policies may also apply.",
          ],
        },
        {
          title: "8. Disclaimers and limitation framework",
          body: [
            "The website is provided on an as-is and as-available basis to the fullest extent permitted by law. Flowvory does not warrant that the site will be uninterrupted, error-free, permanently available, or suitable for every purpose a visitor may have in mind.",
            "To the extent permitted by applicable law, Flowvory disclaims warranties not expressly stated and limits liability for website-related issues arising from access delays, technical failures, third-party service failures, content interpretation, or unauthorized acts outside the company's reasonable control.",
          ],
        },
        {
          title: "9. Governing law and location",
          body: [
            "These Terms & Conditions are intended to be governed by the laws applicable in the State of California, without regard to conflict-of-law principles to the extent such principles would require application of another jurisdiction's law.",
            "The website operator is Flowvory, located at 2412 Santa Monica Boulevard, Santa Monica, California, and the site's legal and commercial framing should be read in that context.",
          ],
        },
        {
          title: "10. Updates to these terms",
          body: [
            "Flowvory may update these Terms & Conditions from time to time as the website, business model, legal environment, or operational practices evolve. Updated terms should be posted on the website so the public-facing version reflects the current position of the company.",
            "Continued use of the site after an update may be treated as acceptance of the revised terms to the extent permitted by applicable law.",
          ],
        },
      ]}
    />
  );
}
