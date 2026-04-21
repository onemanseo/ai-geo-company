import NewFourServicePage from "./services";

export default function NewFourCroPage() {
  return (
    <NewFourServicePage
      kicker="Service Page"
      title="AI CRO"
      intro="Placeholder page for AI CRO inside the Flowvory New 4 system. The footer now points to a real internal destination instead of an empty anchor."
      sections={[
        { title: "What belongs here", body: ["This page is intended to explain how Flowvory approaches conversion rate optimization with AI-driven segmentation, offer logic, landing-page adaptation, and commercial experimentation.", "The current page is intentionally simple, but it already matches the visual and structural language of the homepage."] },
        { title: "Why this matters", body: ["Even placeholder pages should look intentional and brand-consistent. This keeps the footer credible and gives the service architecture a cleaner base for future expansion.", "Once the final service copy is ready, this page can be extended into a full landing page with very little structural rework."] }
      ]}
    />
  );
}
