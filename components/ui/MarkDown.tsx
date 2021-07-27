import {
  NormalComponents,
  SpecialComponents,
} from 'react-markdown/src/ast-to-react'
import ReactMarkdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  darcula,
  materialLight,
  materialOceanic,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import React from 'react'
import { useBreakpoint } from '../../utils/useBreakpointProvider'
import styled from 'styled-components'

interface MarkdownProps {
  children: string
}

const MarkDown: React.FC<MarkdownProps> = ({ children }) => {
  const breakpoint = useBreakpoint()

  const CodeBlock: Partial<NormalComponents & SpecialComponents> = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={breakpoint.dark ? darcula : materialLight}
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

  return (
    <MarkDownContainer components={CodeBlock}>{children}</MarkDownContainer>
  )
}

export default MarkDown

const MarkDownContainer = styled(ReactMarkdown)`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 70vw;

  pre {
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
  }
`
