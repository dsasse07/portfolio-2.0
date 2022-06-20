import bootstrap from './bootstrap.png'
import css from './css.png'
import dev from './dev.png'
import git from './git.png'
import html from './html.png'
import ionic from './ionic.png'
import javascript from './javascript.png'
import next from './next.png'
import postgres from './postgres.png'
import python from './python.png'
import rails from './rails.png'
import react from './react.png'
import redux from './redux.png'
import ruby from './ruby.png'
import styledComponents from './styledComponents.png'
import typescript from './typescript.png'
import sql from './sql.png'
import rest from './rest.png'
import graphql from './graphql.png'
import ember from './ember.svg'
import net from './net.svg'
import swift from './swift.png'
import kotlin from './kotlin.svg'
import reactNative from './react-native.png'

export interface SkillIcons {
  [key: string]: {
    icon: StaticImageData
    text: string
    matchText: string
  }
}

export const icons: SkillIcons = {
  graphql: {
    icon: graphql,
    text: 'GraphQL',
    matchText: 'graphql',
  },
  'rest-api': {
    icon: rest,
    text: 'REST API',
    matchText: 'rest-api',
  },
  bootstrap: {
    icon: bootstrap,
    text: 'Bootstrap',
    matchText: 'bootstrap',
  },
  css: {
    icon: css,
    text: 'CSS',
    matchText: 'css',
  },
  dev: {
    icon: dev,
    text: 'Dev.to',
    matchText: 'dev',
  },
  git: {
    icon: git,
    text: 'Git',
    matchText: 'git',
  },
  html: {
    icon: html,
    text: 'HTML',
    matchText: 'html',
  },
  ionic: {
    icon: ionic,
    text: 'Ionic',
    matchText: 'ionic',
  },
  javascript: {
    icon: javascript,
    text: 'Javascript',
    matchText: 'javascript',
  },
  nextjs: {
    icon: next,
    text: 'Next.JS',
    matchText: 'nextjs',
  },
  postgres: {
    icon: postgres,
    text: 'PostgreSQL',
    matchText: 'postgres',
  },
  python: {
    icon: python,
    text: 'Python',
    matchText: 'python',
  },
  rails: {
    icon: rails,
    text: 'Ruby on Rails',
    matchText: 'rails',
  },
  react: {
    icon: react,
    text: 'React',
    matchText: 'react',
  },
  redux: {
    icon: redux,
    text: 'Redux',
    matchText: 'redux',
  },
  ruby: {
    icon: ruby,
    text: 'Ruby',
    matchText: 'ruby',
  },
  'styled-components': {
    icon: styledComponents,
    text: 'Styled Components',
    matchText: 'styled-components',
  },
  typescript: {
    icon: typescript,
    text: 'Typescript',
    matchText: 'typescript',
  },
  sql: {
    icon: sql,
    text: 'SQL',
    matchText: 'sql',
  },
  ember: {
    icon: ember,
    text: 'Ember',
    matchText: 'ember',
  },
  net: {
    icon: net,
    text: '.NET',
    matchText: 'net',
  },
  swift: {
    icon: swift,
    text: 'Swift',
    matchText: 'swift',
  },
  kotlin: {
    icon: kotlin,
    text: 'Kotlin',
    matchText: 'kotlin',
  },
  reactNative: {
    icon: reactNative,
    text: 'React Native',
    matchText: 'react-native',
  },
}
