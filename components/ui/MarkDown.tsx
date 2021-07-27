import {
  NormalComponents,
  SpecialComponents,
} from 'react-markdown/src/ast-to-react'
import ReactMarkdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  darcula,
  materialLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import React, { ReactNode } from 'react'

interface MarkdownProps {
  children: string
}

export const CodeBlock: Partial<NormalComponents & SpecialComponents> = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={darcula}
        language={match[1]}
        PreTag='div'
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
}

const MarkDown: React.FC<MarkdownProps> = ({ children }) => {
  console.log(CodeBlock)
  return <ReactMarkdown components={CodeBlock}>{children}</ReactMarkdown>
}

export default MarkDown
