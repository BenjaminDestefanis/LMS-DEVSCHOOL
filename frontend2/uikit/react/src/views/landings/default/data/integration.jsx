// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'Algunos proyectos a desarrollar',
  captionLine: 'Sabemos que con teoria solamente no alcanza, por eso , te mostramos algunos del los proyectos que vas a poder desarrollar, tanto de forma individual como en equipo.',
  primaryBtn: {
    children: 'Documentation',
    startIcon: <SvgIcon name="tabler-help" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { label: 'E-Commerce' },
    { label: 'Plataforma A/B Testing Backend' },
    { label: 'Sistema de Control de Calidad en Manufactura IA' },
    { label: 'IA Chatbots' },
    { label: 'Webs Scraping' },
    { label: 'Herramientas de automatizacion.' },
    { label: 'Idioma Flashcards' },
    { label: 'Algoritmos de Traiding y Analista de finanzas.' },
    { label: 'Diccionario digital' },
    { label: 'Sistema de prediccion' },
    { label: 'Saas(Software as a Service)' },
    { label: 'Marketplace-Matching App' },
    { label: 'LLM' },
    { label: 'APIs' },
    { label: 'Dashboards-Charts' },
    
  ]
};
