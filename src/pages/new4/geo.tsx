import NewFourServicePage from "./services";

export default function NewFourGeoPage() {
  return (
    <NewFourServicePage
      kicker="Service Page"
      title="GEO"
      intro="Placeholder page for Flowvory's Generative Engine Optimization offer. This page is now live inside the same New 4 visual system and can be expanded into a full service landing page next."
      sections={[
        { title: "What this page will become", body: ["This page is a placeholder for the GEO service line and is intended to explain how Flowvory approaches visibility inside generative engines, AI answer surfaces, and entity-driven discovery.", "The design, typography, background system, and card language already match the current New 4 direction so this page can now be expanded without inventing a second visual language."] },
        { title: "Why it exists now", body: ["The footer should point to real internal pages rather than dead anchors or empty placeholders. This route makes the site structure cleaner and gives the GEO service line a proper place to grow.", "Next pass, this page can become a full commercial landing page with positioning, process, proof structure, and CTA logic." ] }
      ]}
    />
  );
}
