import NewFourServicePage from "./services";

export default function NewFourContentEnginePage() {
  return (
    <NewFourServicePage
      kicker="Service Page"
      title="AI Content Engine"
      intro="Placeholder page for the AI Content Engine service. This page is live in the same New 4 branding and can now be filled in with a full service narrative later."
      sections={[
        { title: "Purpose", body: ["This route gives the AI Content Engine a real place in the site structure rather than leaving it as a footer-only mention with no destination.", "It is intended to become a proper service page covering commercial content systems, AI-assisted production, editorial structure, and scalable demand capture."] },
        { title: "Status", body: ["Right now this is a placeholder page with the correct layout, color system, typography, and footer integration.", "That means the page can be expanded later without rebuilding the design system from scratch."] }
      ]}
    />
  );
}
