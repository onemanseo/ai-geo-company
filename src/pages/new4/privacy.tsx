import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourPrivacyPage() {
  return (
    <LegalPageLayout
      kicker="Privacy Policy"
      title="Privacy Policy"
      intro="This Privacy Policy explains how Flowvory collects, uses, stores, and discloses information through flowvory.com and related communications. Flowvory is a California-based company located at 2412 Santa Monica Boulevard, Santa Monica, California."
      accent="mint"
      sections={[
        {
          title: "1. Scope and operator information",
          body: [
            "This Privacy Policy applies to flowvory.com, its public website content, inquiry and contact flows, strategy request flows, and any communications that arise directly from those interactions. For purposes of this policy, the website operator is Flowvory, located at 2412 Santa Monica Boulevard, Santa Monica, California.",
            "This policy is intended to describe the company's actual website privacy practices in plain and commercially realistic language. It is not intended as decorative legal filler, and it should be updated whenever the site's real data practices materially change.",
          ],
        },
        {
          title: "2. Categories of information Flowvory may collect",
          body: [
            "Flowvory may collect information you submit directly, including your name, business email address, company name, website, role, market context, growth objectives, budget context, and any commercial or operational details you choose to include in a message or inquiry.",
            "Flowvory may also collect technical and usage information such as IP address, browser type, device type, operating system, referring page, pages viewed, click paths, time spent on pages, approximate geolocation derived from IP, and interaction events that help the company understand site performance and commercial intent.",
          ],
        },
        {
          title: "3. Sources of information",
          body: [
            "Information may be collected directly from you when you contact the company, submit a strategy request, send an email, or otherwise communicate through the website. Information may also be collected automatically through common website technologies such as server logs, analytics tools, cookies, browser storage, or similar measurement technologies.",
            "If Flowvory later introduces additional intake mechanisms such as downloadable resources, newsletters, gated resources, onboarding forms, or client portals, those data flows should be reflected here as they are actually implemented.",
          ],
        },
        {
          title: "4. Purposes of use",
          body: [
            "Flowvory may use personal information and related business context to respond to inquiries, evaluate commercial fit, schedule and prepare discussions, operate the website, improve the site's content and navigation, understand demand quality, protect the website, prevent misuse, and support lawful internal business operations.",
            "Flowvory may also use information for analytics, service improvement, communication follow-up, recordkeeping, and legitimate business purposes reasonably related to the operation and development of the website and the company's services.",
          ],
        },
        {
          title: "5. Disclosure and service providers",
          body: [
            "Flowvory may disclose information to hosting providers, analytics providers, scheduling tools, email infrastructure providers, CRM or communications systems, legal or compliance advisers, or other service providers that help operate the website or support the company's business functions.",
            "Information may also be disclosed when reasonably necessary to protect the website, enforce rights, investigate misuse, comply with legal obligations, respond to lawful requests, or support a corporate transaction such as a merger, acquisition, restructuring, or asset transfer.",
          ],
        },
        {
          title: "6. Cookies, analytics, and online tracking",
          body: [
            "Flowvory may use cookies, browser storage, session identifiers, analytics tags, and similar technologies to remember technical state, measure usage, understand user behavior, and improve the quality and commercial clarity of the site experience. Additional detail appears in the Cookie Policy.",
            "Depending on the tools used at a given time, Flowvory may process information about referral sources, conversion paths, on-page engagement, repeat visits, page interaction depth, and related measurement signals used to evaluate website performance and business demand.",
          ],
        },
        {
          title: "7. Data retention",
          body: [
            "Flowvory may retain information for as long as reasonably necessary to respond to inquiries, maintain business records, improve services, comply with legal obligations, resolve disputes, enforce agreements, or support legitimate business interests related to operation of the website.",
            "Retention periods may vary based on the nature of the information, the reason it was collected, whether a conversation turned into a commercial discussion, and whether any legal, tax, compliance, or dispute-related requirements apply.",
          ],
        },
        {
          title: "8. California privacy disclosures",
          body: [
            "Because Flowvory is based in California, California residents may have rights under applicable California privacy laws, including rights to know certain categories of personal information collected, sources of collection, business purposes for use, categories of third parties receiving information, and rights to request deletion or correction where applicable under law.",
            "If you wish to make a privacy-related request, you may contact Flowvory through the contact page or by email using the contact details provided on the site. Flowvory may take reasonable steps to verify the request before responding where verification is legally or operationally appropriate.",
          ],
        },
        {
          title: "9. Security and limitations",
          body: [
            "Flowvory takes commercially reasonable steps to protect information processed through the website. However, no website, server, email channel, or internet transmission can be guaranteed to be completely secure, and users should understand that any online interaction carries some degree of risk.",
            "Accordingly, while Flowvory works to maintain appropriate operational safeguards, the company cannot promise absolute security of data transmitted over the internet or stored by third-party systems used in normal business operations.",
          ],
        },
        {
          title: "10. Contact information and updates",
          body: [
            "Questions regarding this Privacy Policy may be directed to Flowvory at 2412 Santa Monica Boulevard, Santa Monica, California, or through the contact channels provided on flowvory.com.",
            "Flowvory may update this Privacy Policy from time to time to reflect operational, legal, or website changes. When material changes are made, the policy should be revised on the site so that the public-facing text reflects the company's actual current practices.",
          ],
        },
      ]}
    />
  );
}
