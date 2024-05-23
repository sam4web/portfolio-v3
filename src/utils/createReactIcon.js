import { createElement } from 'react';
import {
  FiChrome,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiGlobe,
  FiSun,
} from 'react-icons/fi';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitlab,
} from 'react-icons/fa6';
import { BsFillMoonFill } from 'react-icons/bs';
import { CiFolderOn } from 'react-icons/ci';
import { GoLinkExternal } from 'react-icons/go';
import { FiGithub } from 'react-icons/fi';

const ICONS_LIST = {
  FacebookIcon: FaFacebook,
  InstagramIcon: FaInstagram,
  LinkedinIcon: FaLinkedin,
  GithubIcon: FaGithub,
  GithubOutlineIcon: FiGithub,
  GitlabIcon: FaGitlab,
  ChromeIcon: FiChrome,
  YoutubeIcon: FiYoutube,
  TwitterIcon: FiTwitter,
  MailIcon: FiMail,
  GlobeIcon: FiGlobe,
  SunIcon: FiSun,
  MoonIcon: BsFillMoonFill,
  FolderIcon: CiFolderOn,
  LinkIcon: GoLinkExternal,
};

const createReactIcon = (icon) => {
  if (ICONS_LIST[icon] !== undefined) return createElement(ICONS_LIST[icon]);
  else return createElement(ICONS_LIST['GlobeIcon']);
};

export default createReactIcon;
