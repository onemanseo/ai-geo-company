import NewFourServicePage from "./services";

export default function NewFourLeadScoringPage() {
  return (
    <NewFourServicePage
      kicker="Service Page"
      title="AI Lead Scoring"
      intro="Placeholder page for AI Lead Scoring. This route now gives the footer a real landing page in the same Flowvory design system."
      sections={[
        { title: "Future direction", body: ["This page can later explain predictive lead quality, visit scoring, funnel qualification, and revenue-priority routing for serious commercial demand.", "It is currently a placeholder, but it already uses the right New 4 colors, spacing, background language, and typography."] },
        { title: "Why it's live now", body: ["The immediate goal is to replace dead or soft footer destinations with real internal routes that belong to the current brand and design direction.", "That makes the site feel more complete today while still leaving room for a deeper commercial pass later."] }
      ]}
    />
  );
}
