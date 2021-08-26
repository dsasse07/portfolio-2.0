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
        node.children[0].value.match(/{% gist|{%gist/)
      ) {
        const gistAnchor = node.children[1]
        // @ts-ignore
        const gistUrl = gistAnchor.children[0].value
        const gistId = gistUrl.match(/dsasse07\/\w*/)[0]
        return <ReactEmbedGist gist={gistId} />
      } else if (
        //@ts-ignore
        node.children[0].tagName === 'img'
      ) {
        const image: any = node.children[0]
        return (
          <ImageContainer>
            {/*@ts-ignore*/}
            <img src={image.properties.src} alt={image.properties.alt} />
          </ImageContainer>
        )
      } else {
        return (
          <p className={className} {...props}>
            {children}
          </p>
        )
      }
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
    h1({ node, className, children, ...props }) {
      return (
        <h1
          //@ts-ignore
          id={children[0].toLowerCase().replace(/ /g, '-')}
          className={className}
          {...props}
        >
          {children}
        </h1>
      )
    },
    h2({ node, className, children, ...props }) {
      return (
        <h2
          //@ts-ignore
          id={children[0].toLowerCase().replace(/ /g, '-')}
          className={className}
          {...props}
        >
          {children}
        </h2>
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
    h4({ node, className, children, ...props }) {
      return (
        <h4
          //@ts-ignore
          id={children[0].toLowerCase().replace(/ /g, '-')}
          className={className}
          {...props}
        >
          {children}
        </h4>
      )
    },
    h5({ node, className, children, ...props }) {
      return (
        <h5
          //@ts-ignore
          id={children[0].toLowerCase().replace(/ /g, '-')}
          className={className}
          {...props}
        >
          {children}
        </h5>
      )
    },
  }

  return (
    <MarkDownContainer remarkPlugins={[gfm]} components={CustomComponents}>
      {children}
    </MarkDownContainer>
  )
}

export default MarkDown

const MarkDownContainer = styled(ReactMarkdown)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    text-align: center;
    font-size: 3rem;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1.1rem;
  }

  p {
    position: relative;
    text-align: left;
    font-size: 1rem;
  }

  pre {
    overflow-x: scroll;
  }

  code {
    color: ${({ theme }) => theme.highlightColor};
    font-size: 0.9rem;
  }

  a {
    color: ${({ theme }) => theme.activeColor};
    font-size: 1.1rem;
  }

  hr {
    width: 100%;
  }

  img {
    max-width: 70%;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`
