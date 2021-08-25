import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import CodeIcon from '@material-ui/icons/Code'
import Image from 'next/image'
import { SocialDataModel } from '../models/SocialData'

export const socials: SocialDataModel[] = [
  {
    ariaLabel: "Danny Sasse's Github",
    background: 'black',
    href: 'https://github.com/dsasse07',
    icon: <GitHubIcon />,
    labelText: 'GitHub',
  },
  {
    ariaLabel: "Danny Sasse's LinkedIn",
    background: '#0E65C2',
    href: 'https://www.linkedin.com/in/danny-sasse/',
    icon: <LinkedInIcon />,
    labelText: 'LinkedIn',
  },
  {
    ariaLabel: "Danny Sasse's Aerial Photography Portfolio",
    background: '#F64E4D',
    href: 'https://www.instagram.com/dsasse.imaging/',
    icon: <InstagramIcon />,
    labelText: 'Instagram',
  },
  {
    ariaLabel: "Danny Sasse's Twitter",
    background: '#1EA2F1',
    href: 'https://twitter.com/dannysasse',
    icon: <TwitterIcon />,
    labelText: 'Twitter',
  },
  {
    ariaLabel: "Danny Sasse's Dev.to Blog",
    background: 'black',
    href: 'https://dev.to/dsasse07',
    icon: <CodeIcon />,
    labelText: 'Dev Blog',
  },
]
