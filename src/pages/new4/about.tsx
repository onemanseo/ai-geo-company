import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourAboutPage() {
  return (
    <LegalPageLayout
      kicker="About Us"
      title="About Flowvory"
      intro="Flowvory is built around a simple idea: growth is no longer just a traffic problem. It is now a system problem across visibility, data structure, conversion, and commercial intelligence."
      accent="mint"
      sections={[
        {
          title: "1. What the company is trying to solve",
          body: [
            "A lot of businesses still treat SEO, AI visibility, CRO, and retention as separate vendors, separate dashboards, and separate tactical workstreams. Flowvory is positioned against that fragmentation.",
            "The company is framed as a connected growth system for eCommerce and marketplaces, where GEO, structured data, commercial content, conversion architecture, and intelligence are designed to reinforce one another instead of competing for credit.",
          ],
        },
        {
          title: "2. Why the positioning is different",
          body: [
            "The site does not present Flowvory as a generic AI agency or a recycled SEO consultancy with fashionable language layered on top. The direction is narrower and more operational than that.",
            "The core idea is that demand capture increasingly happens across AI-mediated surfaces, while revenue still depends on the quality of the on-site system that receives and converts that demand.",
          ],
        },
        {
          title: "3. Who the model is for",
          body: [
            "The positioning is strongest for eCommerce brands, marketplaces, and companies that already understand growth as an infrastructure problem rather than a one-channel media problem.",
            "In practice, that means teams that need a better system for AI visibility, better use of structured data, stronger conversion logic, and more intelligent retention or value capture over time.",
          ],
        },
        {
          title: "4. What Flowvory is not",
          body: [
            "Flowvory is not trying to be everything for everyone. It is not positioned as a catch-all digital agency menu with a hundred unrelated services hiding behind broad language.",
            "The point of the brand is to look and sound like a company with a point of view, a system, and a real theory of growth in the AI era.",
          ],
        },
      ]}
    />
  );
}
