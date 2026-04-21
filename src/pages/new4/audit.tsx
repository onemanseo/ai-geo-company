import NewFourServicePage from "./services";

export default function NewFourAuditPage() {
  return (
    <NewFourServicePage
      kicker="Service Page"
      title="AI Visibility Audit"
      intro="Placeholder page for the AI Visibility Audit offer. This route is now live and visually consistent with the New 4 homepage."
      sections={[
        { title: "Planned use", body: ["This page is intended to become the landing page for a structured audit offer covering GEO visibility, technical clarity, conversion readiness, and demand capture gaps.", "Right now it is a placeholder page that keeps the footer experience coherent and on-brand."] },
        { title: "Current status", body: ["The page already uses the same typography, spacing, rounded cards, and background language as the homepage.", "That means it can later be converted into a full service or lead-generation page without redesigning the page shell."] }
      ]}
    />
  );
}
