import { PortableText as PortableTextBase, type PortableTextComponents } from '@portabletext/react'

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 leading-relaxed text-slate-700">{children}</p>,
    h2: ({ children }) => <h2 className="mb-4 mt-8 text-2xl font-bold text-slate-900">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-6 text-xl font-semibold text-slate-900">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary-500 pl-4 italic text-slate-600">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 list-disc space-y-2 pl-6 text-slate-700">{children}</ul>,
    number: ({ children }) => <ol className="mb-6 list-decimal space-y-2 pl-6 text-slate-700">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-700 underline underline-offset-2 hover:text-primary-800"
      >
        {children}
      </a>
    ),
  },
}

export default function PortableText({ value }: { value: any }) {
  if (!value) return null
  return <PortableTextBase value={value} components={components} />
}
