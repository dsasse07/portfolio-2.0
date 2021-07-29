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
import gfm from 'remark-gfm'
//@ts-ignore
import ReactEmbedGist from 'react-embed-gist'
import Image from 'next/image'

interface MarkdownProps {
  children: string
}

const MarkDown: React.FC<MarkdownProps> = ({ children }) => {
  const breakpoint = useBreakpoint()

  const CustomComponents: Partial<NormalComponents & SpecialComponents> = {
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
    p({ node, inline, className, children, ...props }) {
      if (
        // @ts-ignore
        typeof node.children[0].value === 'string' &&
        !inline &&
        // @ts-ignore
        node.children[0].value.match(/^{% gist/)
      ) {
        const gistAnchor = node.children[1]
        // @ts-ignore
        const gistUrl = gistAnchor.children[0].value
        const gistId = gistUrl.match(/dsasse07\/\w*/)[0]
        return <ReactEmbedGist gist={gistId} />
      } else {
        return (
          <p className={className} {...props}>
            {children}
          </p>
        )
      }
    },
    image({ node, className, children, src, alt, ...props }) {
      return (
        // @ts-ignore
        <Image src={src} alt={alt} className={className} {...props} />
      )
    },
  }

  return (
    <MarkDownContainer
      linkTarget='_blank'
      remarkPlugins={[gfm]}
      components={CustomComponents}
    >
      {children}
    </MarkDownContainer>
  )
}

export default MarkDown

const MarkDownContainer = styled(ReactMarkdown)`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 70vw;

  /* pre {
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
  } */
`
