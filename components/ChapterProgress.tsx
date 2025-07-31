"use client"

interface ChapterProgressProps {
  currentIndex: number
  totalChapters: number
}

export default function ChapterProgress({ currentIndex, totalChapters }: ChapterProgressProps) {
  const progress = ((currentIndex + 1) / totalChapters) * 100

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-background/80 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {Array.from({ length: totalChapters }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${i <= currentIndex ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-foreground/70">
            {currentIndex + 1} / {totalChapters}
          </span>
        </div>
      </div>
    </div>
  )
}
