export const printConsoleWelcome = (): void => {
  console.clear()
  const headerStyles = [
    'color: black',
    'background: #40c115',
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

  const goodbyeStyles = [
    'color: #ffec1c',
    'background: #1e1d1e',
    'font-size: 13px',
    'padding: 4px 10px',
  ].join(';')
  console.log('%cHave a wonderful day!', goodbyeStyles)
}
