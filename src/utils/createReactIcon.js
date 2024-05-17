import { createElement } from 'react';
import {
  FiChrome,
  FiTwitter,
  FiYoutube,
  FiPhone,
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
  FaCode,
  FaLightbulb,
  FaArrowRight,
  FaPlus,
} from 'react-icons/fa6';
import { IoLayersOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { BsFillMoonFill, BsPerson } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { TbCards } from 'react-icons/tb';
import { BiMessageDetail } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';
import { PiIntersectSquareDuotone } from 'react-icons/pi';
import { LuPencilRuler } from 'react-icons/lu';
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
  PhoneIcon: FiPhone,
  MailIcon: FiMail,
  LocationIcon: SlLocationPin,
  GlobeIcon: FiGlobe,
  HomeIcon: GoHome,
  PersonIcon: BsPerson,
  LayerIcon: IoLayersOutline,
  CardIcon: TbCards,
  MsgIcon: BiMessageDetail,
  SunIcon: FiSun,
  MoonIcon: BsFillMoonFill,
  ArrowForward: IoIosArrowForward,
  IntersectSquare: PiIntersectSquareDuotone,
  CodeIcon: FaCode,
  Lightbulb: FaLightbulb,
  PencilIcon: LuPencilRuler,
  ArrowRight: FaArrowRight,
  Plus: FaPlus,
  FolderIcon: CiFolderOn,
  LinkIcon: GoLinkExternal,
};

const createReactIcon = (icon) => {
  if (ICONS_LIST[icon] !== undefined) return createElement(ICONS_LIST[icon]);
  else return createElement(ICONS_LIST['GlobeIcon']);
};

export default createReactIcon;
