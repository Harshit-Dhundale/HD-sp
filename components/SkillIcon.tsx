"use client"

import * as SimpleIcons from 'simple-icons'

interface SkillIconProps {
  name: string
  className?: string
  brandColor?: string
}

// Fallback component for missing icons
function DefaultIconLetter({ letter, className, brandColor }: { letter: string, className?: string, brandColor?: string }) {
  return (
    <div 
      className={`${className} bg-muted rounded flex items-center justify-center text-xs font-bold border`}
      style={brandColor ? { borderColor: brandColor, color: brandColor } : undefined}
    >
      {letter.toUpperCase()}
    </div>
  )
}

export function SkillIcon({ name, className = "w-5 h-5", brandColor }: SkillIconProps) {
  // Convert name to simple-icons slug format and map to exact icon names
  const iconMap: Record<string, string> = {
    'react': 'siReact',
    'nextjs': 'siNextdotjs',
    'next.js': 'siNextdotjs',
    'typescript': 'siTypescript',
    'javascript': 'siJavascript',
    'nodejs': 'siNodedotjs',
    'node.js': 'siNodedotjs',
    'python': 'siPython',
    'html5': 'siHtml5',
    'css3': 'siCss3',
    'tailwindcss': 'siTailwindcss',
    'tailwind css': 'siTailwindcss',
    'redux toolkit': 'siRedux',
    'material ui': 'siMui',
    'mongodb': 'siMongodb',
    'postgresql': 'siPostgresql',
    'mysql': 'siMysql',
    'redis': 'siRedis',
    'docker': 'siDocker',
    'kubernetes': 'siKubernetes',
    'aws': 'siAmazonaws',
    'google cloud': 'siGooglecloud',
    'vercel': 'siVercel',
    'git': 'siGit',
    'express.js': 'siExpress',
    'fastapi': 'siFastapi',
    'flask': 'siFlask',
    'sqlalchemy': 'siSqlalchemy',
    'celery': 'siCelery',
    'react native': 'siReact',
    'flutter': 'siFlutter',
    'tensorflow': 'siTensorflow',
    'openai api': 'siOpenai',
    'numpy': 'siNumpy',
    'pandas': 'siPandas',
    'matplotlib': 'siMatplotlib',
    'scikit-learn': 'siScikitlearn',
    'pytorch': 'siPytorch',
    'vs code': 'siVisualstudiocode',
    'visual studio code': 'siVisualstudiocode',
    'framer motion': 'siFramer',
    'cypress': 'siCypress',
    'vitest': 'siVitest',
    'selenium': 'siSelenium',
    'pytest': 'siPytest',
    'graphql': 'siGraphql',
    'stripe': 'siStripe',
    'supabase': 'siSupabase',
    'posthog': 'siPosthog',
    'railway': 'siRailway',
    'render': 'siRender',
    'razorpay': 'siRazorpay'
  }
  
  const normalizedName = name.toLowerCase()
  const iconName = iconMap[normalizedName]
  
  // Guard: if no mapping found, use fallback
  if (!iconName) {
    return <DefaultIconLetter letter={name.charAt(0)} className={className} brandColor={brandColor} />
  }
  
  // Guard: if dynamic import fails, use fallback
  try {
    const icon = (SimpleIcons as any)[iconName]
    if (!icon || !icon.svg) {
      return <DefaultIconLetter letter={name.charAt(0)} className={className} brandColor={brandColor} />
    }
    
    return (
      <div 
        className={className}
        style={brandColor ? { color: brandColor } : undefined}
        dangerouslySetInnerHTML={{ 
          __html: icon.svg.replace('<svg', brandColor ? `<svg fill="${brandColor}"` : `<svg fill="currentColor"`)
        }}
      />
    )
  } catch (error) {
    // Fallback on any error
    return <DefaultIconLetter letter={name.charAt(0)} className={className} brandColor={brandColor} />
  }
}
