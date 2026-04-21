import LegalPageLayout from "./components/LegalPageLayout";

export default function NewFourAboutPage() {
  return (
    <LegalPageLayout
      kicker="About Us"
      title="About AI GEO COMPANY"
      intro="AI GEO COMPANY is positioned around one idea: traffic alone is no longer the growth system. AI visibility, structured data, conversion architecture, and retention intelligence now have to work together."
      accent="mint"
      sections={[
        {
          title: "What the company is building",
          body: [
            "The New 4 version frames the business as an AI growth system for eCommerce and marketplaces, not a generic agency menu of isolated services.",
            "The emphasis is on connected layers: data, AI traffic, conversion, and intelligence, all reinforcing one another instead of operating as disconnected retainers.",
          ],
        },
        {
          title: "How the work is viewed",
          body: [
            "The underlying idea is that visibility in Google alone is no longer enough. Brands increasingly need to appear inside AI answers, convert segmented demand better, and use structured data as an operating layer rather than a technical afterthought.",
            "That means the company is not only selling traffic acquisition. It is selling a system that connects discovery, qualification, conversion, and repeat value.",
          ],
        },
        {
          title: "Who this is for",
          body: [
            "The positioning is best suited to businesses that already understand growth as an operating system problem: eCommerce brands, marketplaces, and teams that need more than a narrow SEO sprint.",
            "The strongest fit is usually with companies that want AI-era demand capture and a cleaner commercial model than fragmented specialist hiring.",
          ],
        },
      ]}
    />
  );
}
