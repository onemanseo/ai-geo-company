import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourPrivacyPage() {
  return (
    <LegalPageLayout
      kicker="Privacy Policy"
      title="Privacy Policy"
      intro="This Privacy Policy describes how Flowvory handles information collected through the website at flowvory.com, including inquiry details, commercial context submitted by prospective clients, and technical information used to operate and improve the site."
      accent="mint"
      sections={[
        {
          title: "1. Scope of this policy",
          body: [
            "This policy applies to information submitted through Flowvory's website, direct inquiry forms, strategy-call requests, and related communication paths connected to the public site experience.",
            "It is meant to explain the practical data flow of the website in plain language, not to bury the reader in vague language that says little and creates less trust.",
          ],
        },
        {
          title: "2. Information you may provide directly",
          body: [
            "If you contact Flowvory, the company may receive information such as your name, work email, company name, website, role, market focus, and any additional commercial or operational context you choose to include.",
            "That context can include your current growth model, visibility challenges, conversion bottlenecks, marketplace complexity, international expansion plans, or the specific reason you are reaching out.",
          ],
        },
        {
          title: "3. Technical and analytical information",
          body: [
            "Like most professional websites, Flowvory may process technical information required to understand site performance and visitor interaction. This can include browser type, device category, referral path, page views, click behavior, and session-level interaction signals.",
            "This information is used to understand what attracts serious demand, where the site experience is unclear, and how effectively the site communicates the company's positioning.",
          ],
        },
        {
          title: "4. Why information is used",
          body: [
            "Inquiry data is used to review the request, understand whether there is a genuine fit, prepare a more relevant reply, and decide whether the conversation should move forward into a strategy or commercial discussion.",
            "Operational and analytical data is used to keep the site functional, monitor performance, improve clarity, and make better decisions about positioning, navigation, and conversion flow.",
          ],
        },
        {
          title: "5. Commercial communication",
          body: [
            "Submitting an inquiry does not automatically place someone into an ongoing commercial relationship. Flowvory does not treat a first contact message as implied consent for unrelated outreach or a substitute for a real engagement process.",
            "If a conversation moves forward, the data already provided may be used to continue that discussion in a more informed way, but the existence of an inquiry alone does not create a project or agreement.",
          ],
        },
        {
          title: "6. Data review and updates",
          body: [
            "If you need the company to correct or remove information previously shared through a direct inquiry, you can request that through the contact page or by writing to hello@flowvory.com.",
            "If the site later introduces new data flows, account systems, lead magnets, newsletter infrastructure, or additional tracking layers, this page should be updated to describe the real implementation clearly and specifically.",
          ],
        },
      ]}
    />
  );
}
