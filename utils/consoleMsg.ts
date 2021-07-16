export const printConsoleWelcome = (): void => {
  console.clear()
  const headerStyles = [
    'color: black',
    'background: #a8efdd',
    'font-size: 30px',
    'padding: 10px',
    'margin: 10px 0 10px 0',
  ].join(';')
  const messageStyles = ['color: blue', 'font-size: 13px'].join(';')
  console.log('%cHi There!', headerStyles)
  console.log('%cThank you for checking out my work!', messageStyles)
  console.log("%cLet's connect:", messageStyles)
  console.log(
    '%cLinkedIn: https://www.linkedin.com/in/danny-sasse/',
    messageStyles
  )
  console.log('%cTwitter: https://twitter.com/dannysasse', messageStyles)
  console.log('%cGithub: https://github.com/dsasse07', messageStyles)
  console.log('%cHave a wonderful day!', messageStyles)
}
