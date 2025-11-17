// @project
import { landingMegamenu, pagesMegamenu, landingMegamenuTwo } from '../../common-data';
//import SvgIcon from '@/components/SvgIcon';  
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

// Icono Github <SvgIcon name="tabler-brand-github" color="primary.main" size={18} />

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  secondaryBtn: {
    children: 'Ingresar', 
    href: FREEBIES_URL,
    ...linkProps,
    //sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Registrate', href: BUY_NOW_URL, ...linkProps },
  navItems: [
    { id: 'home', title: 'Inicio', link: '/' }, 
    landingMegamenu,
    landingMegamenuTwo,
    //{ id: 'components', title: 'Blocks', link: SECTION_PATH },
    { id: 'dashboard', title: 'Clases', link: ADMIN_PATH, ...linkProps },
    pagesMegamenu,
    //{ id: 'docs', title: 'Docs', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
