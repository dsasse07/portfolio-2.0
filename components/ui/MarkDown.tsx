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
        <Image
          // @ts-ignore
          src={src}
          // @ts-ignore
          alt={alt}
          className={className}
          {...props}
        />
      )
    },
    a({ node, className, href, children, ...props }) {
      return (
        <a
          //@ts-ignore
          href={href}
          //@ts-ignore
          target={href[0] === '#' ? '_self' : '_blank'}
          {...props}
        >
          {children}
        </a>
      )
    },
    h3({ node, className, children, ...props }) {
      return (
        <h3
          //@ts-ignore
          id={children[0].toLowerCase().replace(/ /g, '-')}
          className={className}
          {...props}
        >
          {children}
        </h3>
      )
    },
  }

  return (
    <MarkDownContainer
      // linkTarget='_blank'
      remarkPlugins={[gfm]}
      components={CustomComponents}
    >
      {children}
    </MarkDownContainer>
  )
}

export default MarkDown

const MarkDownContainer = styled(ReactMarkdown)`
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 90vw;

  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
    width: 100%;
  }
  h4 {
    font-size: 1.2rem;
    width: 100%;
  }

  p {
    font-size: 1, 2rem;
  }

  ul {
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.sigAngles};
    font-size: 1.1rem;
  }

  hr {
    width: 100%;
  }

  img {
    max-width: 80vw;
  }
`
