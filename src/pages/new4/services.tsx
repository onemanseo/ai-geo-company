import LegalPageLayout from "./components/LegalPageLayout";

interface ServicePageProps {
  title: string;
  kicker: string;
  intro: string;
  sections: { title: string; body: string[] }[];
}

export default function NewFourServicePage({ title, kicker, intro, sections }: ServicePageProps) {
  return <LegalPageLayout kicker={kicker} title={title} intro={intro} sections={sections} accent="blue" />;
}
