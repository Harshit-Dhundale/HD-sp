interface TimelineBubbleProps {
  year: string
}

export default function TimelineBubble({ year }: TimelineBubbleProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-sm font-semibold mr-2 mb-2">
      {year}
    </span>
  )
}
