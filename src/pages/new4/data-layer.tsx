import NewFourServicePage from "./services";

export default function NewFourDataLayerPage() {
  return (
    <NewFourServicePage
      kicker="Service Page"
      title="AI Data Layer"
      intro="Placeholder page for Flowvory's AI Data Layer offering. This route exists so the footer links land on a real page in the current New 4 system."
      sections={[
        { title: "Current role", body: ["This placeholder stands in for the future AI Data Layer landing page, where Flowvory can explain schema, entity structure, catalog modeling, and the underlying data layer needed for AI-driven growth.", "It already inherits the same visual system as the homepage, so the site remains coherent while deeper service copy is still being written."] },
        { title: "Next expansion", body: ["On a later pass this page can be expanded with positioning, implementation scope, technical components, and examples of how the data layer supports GEO, conversion, and retention.", "For now, the important thing is that the site architecture and footer experience are no longer pointing into empty space."] }
      ]}
    />
  );
}
