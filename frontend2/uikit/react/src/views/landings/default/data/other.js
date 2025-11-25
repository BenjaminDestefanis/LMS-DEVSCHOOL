// @project
import { PAGE_PATH, SECTION_PATH } from '@/path';

// @assets
const imagePrefix = '/assets/images/presentation';

// @project
//import branding from '@/branding.json'; importacion de cabezera original

export const other = {
  //heading: `${branding.brandName} blocks `,  Cabezera original
  heading: `Clases Personalizadas`,
  description: 'Ten en cuenta que las clases a diferencia de los cursos y carreras, son ideales para adaptarse aun mas a una necesidad especifica.',
  primaryBtn: { children: 'Reservar Clase', href: SECTION_PATH },
  sections: [
    {
      animationDelay: 0.2,
      title: 'Clase Individual ',
      subTitle: 'Este modelo express, solo para una persona, para poder abarcar con urgencia , esos temas que mas necesites comprender.',
      image: `${imagePrefix}/hero-light.svg`,
      link: PAGE_PATH.hero
    },
    {
      animationDelay: 0.3,
      title: 'Clase Grupal',
      subTitle: 'Para 2 o mas personas, ideal para abordar temas en comun, pero de forma grupal. A mas personas, mayor descuento por hora.',
      image: `${imagePrefix}/cta-light.svg`,
      link: PAGE_PATH.cta
    },
    {
      animationDelay: 0.4,
      title: 'Clases Pack',
      subTitle: 'Puedes reservar Packs de 2hs, 5hs, y hasta 10hs, para poder apreder temas o desarrolar projectos que requieran mas tiempo.',
      image: `${imagePrefix}/feature-light.svg`,
      link: PAGE_PATH.feature
    },

    /* {
      animationDelay: 0.2,
      title: 'Metrics',
      subTitle: '10 Different Variants',
      image: `${imagePrefix}/metrics-light.svg`,
      link: PAGE_PATH.metrics
    },
    {
      animationDelay: 0.3,
      title: 'Process',
      subTitle: '8 Different Variants',
      image: `${imagePrefix}/process-light.svg`,
      link: PAGE_PATH.process
    },
    {
      animationDelay: 0.4,
      title: 'Integration',
      subTitle: '9 Different Variants',
      image: `${imagePrefix}/integration-light.svg`,
      link: PAGE_PATH.integration
    } */
  ]
};

export const other3 = {
  heading: 'Join a Winning Team',
  caption: 'Be a part of a winning culture that fosters collaboration, creativity, and success in every career path',
  other: [
    {
      title: 'Product Design',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Front-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Back-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Scrum Master',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    }
  ]
};

export const other4 = {
  heading: `Desarrollo de Proyectos`,
  description: `Te presentamos tambien nuestras guias y ayudas en eldesarrollado y asistencia en el progreso de tu proyecto institucional o universitario`,
  primaryBtn: { children: 'Solicitar Info', href: SECTION_PATH},
  sections: [
    {
      animationDelay: 0.2,
      title: 'Proyectos Nivel Escolar',
      subTitle: 'Guia completa y motivadora para el desarrollo de tus proyectos, acompañados de la planificacion, creatividad y ejecucion necesarias para completar tu proyecto.',
      image: `${imagePrefix}/hero-light.svg`,
      link: PAGE_PATH.hero
    },
    {
      animationDelay: 0.2,
      title: 'Proyectos Nivel Terciario (Tecnicas y Superiores',
      subTitle: 'Usando las mejores estrategias para conectar la teoria con la practica y asi completar tu proyecto.',
      image: `${imagePrefix}/hero-light.svg`,
      link: PAGE_PATH.hero
    },
    {
      animationDelay: 0.2,
      title: 'Proyectos Nivel Universitario',
      subTitle: 'Cuenta con la colaboracion especializada que exige un mayor rigor intelectual y metodológico, como: diseño metodologico, analisis de datos y redaccion academica.',
      image: `${imagePrefix}/hero-light.svg`,
      link: PAGE_PATH.hero
    }
  ]
} 
 