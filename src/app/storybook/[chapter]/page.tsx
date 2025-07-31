import { notFound } from "next/navigation"
import { chapters } from "../../../context/ChapterContext"
import PageSpread from "../../../components/PageSpread"

export async function generateStaticParams() {
  return chapters.map((chapter) => ({
    chapter: chapter.slug,
  }))
}

export default function StoryPage({ params }: { params: { chapter: string } }) {
  const chapter = chapters.find((c) => c.slug === params.chapter)

  if (!chapter) {
    return notFound()
  }

  const chapterIndex = chapters.findIndex((c) => c.slug === params.chapter)

  // For now, return a placeholder. In a real implementation,
  // you would dynamically import the MDX content
  return (
    <PageSpread chapterIndex={chapterIndex}>
      <div className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-display font-bold text-gold mb-6">{chapter.title}</h1>
        <p className="text-lg text-white/80 mb-8">{chapter.description}</p>
        <p className="text-white/70">
          This chapter content will be implemented with MDX files containing the full storybook experience.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📖</div>
          <p className="text-white/60">Chapter content coming soon...</p>
        </div>
      </div>
    </PageSpread>
  )
}
