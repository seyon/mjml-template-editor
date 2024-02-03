import Image from "next/image";

export default function TemplateView({ params }: { params: { templateUuid: string } }) {
  return (
    <main>
        Template: {params.templateUuid}
    </main>
  );
}
