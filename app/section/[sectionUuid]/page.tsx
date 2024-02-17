export default function SectionEditor({params}: { params: { sectionUuid: string } }) {
    return (
        <main>
            Section: {params.sectionUuid}
        </main>
    );
}
