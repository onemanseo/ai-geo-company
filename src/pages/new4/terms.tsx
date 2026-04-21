import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourTermsPage() {
  return (
    <LegalPageLayout
      kicker="Terms & Conditions"
      title="Terms & Conditions"
      intro="These Terms & Conditions govern use of the Flowvory website and explain how the site's content, positioning, and commercial information should be understood."
      accent="blue"
      sections={[
        {
          title: "1. Website purpose",
          body: [
            "Flowvory.com is a commercial website used to present the company's positioning, thinking, services, and strategic approach. It is intended for review, exploration, and initial contact.",
            "Use of the website does not by itself create a client relationship, consulting engagement, partnership arrangement, or binding commercial commitment.",
          ],
        },
        {
          title: "2. Informational nature of site content",
          body: [
            "The site explains how Flowvory thinks about GEO, AI visibility, structured data, conversion architecture, retention logic, and growth systems for eCommerce and marketplaces.",
            "That information is provided to explain the company's perspective and offer. It should not be interpreted as a universal growth guarantee, formal advice for every business, or a substitute for an actual scoped engagement.",
          ],
        },
        {
          title: "3. No guaranteed business result",
          body: [
            "No statement on this site should be read as a guarantee of rankings, AI citations, lead volume, revenue growth, conversion rate improvements, or commercial success.",
            "Actual outcomes depend on the business itself, the market, execution quality, resources, timing, product strength, and the real scope of work agreed between the parties.",
          ],
        },
        {
          title: "4. Intellectual property and reuse",
          body: [
            "Unless otherwise stated, the copy, structure, visual treatment, brand elements, and original materials on this site belong to Flowvory.",
            "You may review and reference the site for ordinary business purposes, but you may not republish the site in full, reproduce the branded experience as your own, or reuse proprietary materials in a misleading commercial way.",
          ],
        },
        {
          title: "5. Commercial discussions and engagement",
          body: [
            "A submitted inquiry, booked call, or exploratory conversation does not on its own create a service agreement. Any future work would need to be defined separately, with scope, commercial structure, and operational expectations agreed directly.",
            "Until that happens, the website should be understood as a positioning and communication layer rather than a standalone contract for services.",
          ],
        },
        {
          title: "6. Website changes",
          body: [
            "Flowvory may revise the website, its positioning, its service descriptions, or these legal pages as the business evolves. The site is not a frozen artifact. It is a working commercial surface tied to a live company.",
            "That is exactly why these terms are written to reflect the actual role of the site: a serious commercial website, not a decorative placeholder with legal noise attached to it.",
          ],
        },
      ]}
    />
  );
}
