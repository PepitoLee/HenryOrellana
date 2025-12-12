export type Language = 'es' | 'en';

export interface TranslationKeys {
  [key: string]: string | TranslationKeys;
}

export const translations: Record<Language, TranslationKeys> = {
  es: {
    // Navigation
    nav: {
      metodologia: 'Metodología',
      ceoJunior: 'CEO Junior',
      about: 'Sobre Mí',
      books: 'Libros',
      speaking: 'Conferencias',
      blog: 'Blog',
      contact: 'Contacto',
      cta: '¡Comienza Hoy!'
    },

    // Home Page
    home: {
      hero: {
        subtitle: 'Empresario Digital con Propósito',
        creatorOf: 'Creador de',
        title1: 'De la Desconexión',
        title2: 'a las',
        title3: 'Mil Oportunidades',
        description: 'El mapa científico y espiritual que los padres de adolescentes necesitan en la era digital.',
        cta1: 'Comienza Hoy',
        cta2: 'Reto Padres 3.0',
        transform: 'Transforma tu Hogar en 60 Días',
        badge: 'COACH & AUTOR',
        scroll: 'Scroll',
        genesisDescription: 'Descubre GÉNESIS i7™, el único mapa creado por Henry Orellana D. que integra Espiritualidad, Ciencia y Tecnología para transformar a los padres y empoderar a sus hijos.'
      },
      featured: {
        title: 'Como visto en'
      },
      crisis: {
        subtitle: 'La Realidad que Enfrentamos',
        title: 'El Amor',
        titleHighlight: 'no Basta',
        titleEnd: ': La Crisis Silenciosa de la Familia Moderna',
        description: '¿Amas a tu hijo, pero te sientes confundido sobre cómo guiarlo en el mundo de hoy? Yo estuve ahí: pasé de tenerlo todo a buscar monedas en la cama, hasta que entendí que',
        descriptionBold: 'ellos no eran el problema',
        descriptionEnd: '. El cambio debía comenzar en mí.',
        quote: '"Ellos no son el problema. Si tú cambias, todo cambia."'
      },
      padres: {
        badge: 'LA SOLUCIÓN',
        title: 'Padres 3.0: El Mapa de 60 Días para ser el',
        titleHighlight: 'Padre que tu Futuro CEO necesita',
        description: 'Transformación garantizada en 60 días. Logros clave que alcanzarás:',
        logro1: 'Recuperar la conexión emocional y disminuir conflictos.',
        logro2: 'Poner límites desde el amor, no desde el miedo.',
        logro3: 'Entender la personalidad de tu hijo y la tuya (Eneagrama).',
        logro4: 'Prepararte para guiarlo hacia la libertad económica y la innovación con propósito.',
        cta: 'QUIERO UNIRME A LA COMUNIDAD PADRES 3.0',
        bookTitle: 'Padres 3.0',
        bookSubtitle: 'El Mapa de 60 Días'
      },
      ceoJunior: {
        subtitle: 'Para tus Hijos',
        title: 'CEO Junior:',
        titleHighlight: 'La Próxima Generación',
        description: 'Esta es la comunidad que prepara a la Generación Z para ir más allá de la escuela tradicional. En CEO Junior, les proporcionamos el mapa, las herramientas y la mentalidad para convertirse en líderes que no solo ganan dinero, sino que también',
        descriptionBold: 'dejan un legado',
        tags: {
          digital: 'Competencias Digitales',
          innovative: 'Pensamiento Innovador',
          ai: 'Uso Consciente de IA',
          entrepreneurship: 'Emprendimiento Online'
        },
        cta: 'Quiero que mi hijo sea un CEO Junior'
      },
      articles: {
        title: 'Reflexiones',
        viewAll: 'Ver todos los artículos',
        readTime: 'min lectura',
        article1: {
          title: 'La crisis silenciosa de la familia moderna',
          category: 'Familia'
        },
        article2: {
          title: 'Inteligencia Espiritual en la era de la IA',
          category: 'GÉNESIS i7™'
        },
        article3: {
          title: 'CEO Junior: El futuro del emprendimiento',
          category: 'Emprendimiento'
        },
        excerpt: 'Explorando cómo la metodología GÉNESIS i7™ puede cambiar la dinámica familiar desde la raíz...'
      },
      faq: {
        title: 'Preguntas Frecuentes',
        subtitle: 'Todo lo que necesitas saber sobre el Reto Padres 3.0',
        q1: {
          question: '¿Qué es exactamente el Reto Padres 3.0?',
          answer: 'Es un programa de transformación personal de 60 días diseñado para padres que desean guiar a sus hijos adolescentes en la nueva era digital. Se basa en la premisa: "El cambio comienza contigo, no con tu hijo".'
        },
        q2: {
          question: '¿En qué se basa la metodología del programa?',
          answer: 'Se basa en la metodología patentada GÉNESIS i7™ y utiliza herramientas modernas que combinan ciencia, espiritualidad y desarrollo personal.'
        },
        q3: {
          question: '¿Qué herramientas específicas voy a aprender?',
          answer: 'Aprenderás a aplicar Eneagrama de la Personalidad, Programación Neurolingüística (PNL), Coaching para Padres, Neurociencia Aplicada y Psicología Positiva.'
        },
        q4: {
          question: '¿Qué puedo esperar lograr con mi hijo en estos 60 días?',
          answer: 'Podrás mejorar la comunicación con tus hijos, disminuir conflictos y recuperar la conexión emocional.'
        },
        q5: {
          question: '¿Cuál es el compromiso de tiempo?',
          answer: 'El reto está dividido en 2 grandes etapas y dura 60 días.'
        },
        q6: {
          question: '¿Necesito tener conocimientos previos?',
          answer: 'No necesitas conocimientos previos. Solo necesitas disposición para transformarte.'
        },
        q7: {
          question: '¿Quién es Jimy Henry Orellana Domínguez?',
          answer: 'Es el autor de la metodología GÉNESIS i7™, un Coach de Vida certificado por la Asociación Mundial de Coaches de EE. UU. y un profesional con formación ejecutiva en Harvard.'
        },
        q8: {
          question: '¿Cómo se relaciona Padres 3.0 con CEO Junior?',
          answer: 'Padres 3.0 es el programa de padres conscientes, y CEO Junior es el programa para adolescentes con visión emprendedora digital.'
        }
      },
      newsletter: {
        title: 'Ideas que transforman',
        description: 'Únete a más de 10,000 padres y educadores que reciben mis estrategias semanales para criar hijos con propósito.',
        placeholder: 'Tu correo electrónico',
        cta: 'UNIRME',
        privacy: 'Respetamos tu privacidad. Sin spam.'
      }
    },

    // About Page
    about: {
      header: {
        subtitle: 'Conoce al Autor',
        title: 'Henry Orellana D.',
        role: 'Empresario Digital con Propósito y Creador del Movimiento GÉNESIS i7™'
      },
      mission: {
        title: 'Mi Misión',
        description: 'Soy un empresario digital con propósito, dedicado a hacer todo lo posible por ayudar a la Generación Z a convertirse en empresarios digitales con valores cristianos, propósito eterno y habilidades del siglo XXI.',
        story: '¿Amas a tu hijo, pero te sientes confundido sobre cómo guiarlo en el mundo de hoy? Yo estuve ahí: pasé de tenerlo todo a buscar monedas en la cama, hasta que entendí que ellos no eran el problema. El cambio debía comenzar en mí.',
        quote: '"Ellos no son el problema. Si tú cambias, todo cambia."'
      },
      solution: {
        title: 'La Solución Integral',
        subtitle: 'Padres e Hijos transformados juntos',
        padres: {
          title: 'Padres 3.0',
          description: 'Empoderar a los padres para que sean los guías que sus hijos necesitan en la era digital.',
          cta: 'Conocer más'
        },
        ceoJunior: {
          title: 'CEO Junior',
          description: 'Formar a los jóvenes para convertirse en la comunidad más grande de emprendedores del mundo.',
          cta: 'Explorar'
        },
        footer: 'Todo se articula a través de mi metodología patentada:'
      },
      credentials: {
        education: 'Formación Académica',
        specialties: 'Especialidades',
        items: {
          degree1: 'Licenciatura en Administración de Empresas',
          degree2: 'MBA (Maestría en Administración de Negocios)',
          diploma1: 'Diplomado en Gerencia - Universidad de Harvard',
          certification: 'Coach de Vida certificado por la Asociación Mundial de Coaches de EE. UU.'
        },
        specialtiesList: {
          enneagram: 'Eneagrama de la Personalidad',
          nlp: 'Programación Neurolingüística (PNL)',
          coaching: 'Coaching para Padres',
          neuroscience: 'Neurociencia Aplicada',
          psychology: 'Psicología Positiva'
        }
      },
      methodology: {
        subtitle: 'Mi Metodología',
        description: 'La ruta clara, profunda y moderna para formar adolescentes con propósito, carácter y visión global.',
        cta: 'EXPLORAR GÉNESIS i7™',
        intelligences: {
          spiritual: { title: 'Espiritual', desc: 'Sentido de vida y fe' },
          mental: { title: 'Mental', desc: 'Disciplina y metas' },
          emotional: { title: 'Emocional', desc: 'Autocontrol y resiliencia' },
          physical: { title: 'Física', desc: 'Vitalidad y dominio propio' },
          social: { title: 'Social', desc: 'Relaciones sanas' },
          financial: { title: 'Financiera', desc: 'Libertad económica' },
          technological: { title: 'Tecnológica', desc: 'Innovación con propósito' }
        }
      }
    },

    // Books Page
    books: {
      title: 'Mis Libros',
      subtitle: 'Herramientas escritas para acompañarte en el viaje de transformación personal y familiar.',
      featured: {
        title: 'Padres 3.0: El Mapa de 60 Días',
        description: 'Un sistema revolucionario que integra la sabiduría bíblica con la neurociencia moderna. Descubre cómo pasar de la frustración a la conexión profunda con tus hijos adolescentes.',
        quote: '"Una lectura obligatoria para cualquier padre que quiera sobrevivir y prosperar en la era digital."',
        quoteAuthor: '— Revista Familia Moderna',
        buyAmazon: 'Comprar en Amazon',
        readExcerpt: 'Leer Extracto'
      },
      other: {
        title: 'Otras Publicaciones',
        moreInfo: 'Más información',
        bookTitle: 'Título del Libro'
      }
    },

    // Speaking Page
    speaking: {
      hero: {
        title: 'Conferencias',
        titleHighlight: '& Workshops',
        description: 'Experiencias transformadoras diseñadas para padres, educadores y líderes empresariales que buscan trascender.',
        cta: 'Descargar Press Kit'
      },
      topics: {
        title: 'Temas Principales',
        padres: {
          title: 'Padres 3.0',
          description: 'El Mapa de 60 Días para ser el Padre que tu Futuro CEO necesita. Estrategias para recuperar la conexión emocional.',
          tag: 'Keynote / Taller'
        },
        ceoJunior: {
          title: 'CEO Junior',
          description: 'Forjando a la Próxima Generación de Empresarios Digitales. Inteligencia financiera y tecnológica para jóvenes.',
          tag: 'Programa Educativo'
        },
        leadership: {
          title: 'Liderazgo con Propósito',
          description: 'Cómo integrar valores eternos en el éxito empresarial moderno. Basado en la metodología GÉNESIS i7™.',
          tag: 'Corporativo'
        }
      },
      events: {
        title: 'Próximos Eventos',
        details: 'Detalles',
        event1: {
          date: '15 OCT',
          name: 'Cumbre Liderazgo Latino',
          location: 'Miami, FL',
          type: 'Presencial'
        },
        event2: {
          date: '02 NOV',
          name: 'Reto Padres 3.0 - Cohorte 5',
          location: 'Online',
          type: 'Virtual'
        },
        event3: {
          date: '20 NOV',
          name: 'Foro Educación Futura',
          location: 'Ciudad de México',
          type: 'Keynote'
        }
      }
    },

    // Blog Page
    blog: {
      title: 'Ideas & Reflexiones',
      subtitle: 'Pensamientos sobre educación, liderazgo y fe.',
      search: 'Buscar artículo...',
      featured: {
        category: 'Tendencias',
        date: 'Diciembre 2024',
        title: 'La intersección entre la IA y la Ética Cristiana',
        description: '¿Cómo preparamos a nuestros hijos para un mundo dominado por algoritmos sin perder su humanidad? Un análisis profundo sobre el futuro de CEO Junior y la importancia de la inteligencia espiritual.',
        cta: 'Leer artículo completo'
      },
      readTime: 'de lectura',
      readMore: 'Leer más →',
      posts: {
        post1: {
          title: 'La crisis silenciosa de la familia moderna',
          category: 'Familia',
          excerpt: '¿Amas a tu hijo, pero te sientes confundido sobre cómo guiarlo en el mundo de hoy? Descubre las raíces de la desconexión familiar.',
          readTime: '5 min'
        },
        post2: {
          title: 'Inteligencia Espiritual: La base de todo',
          category: 'GÉNESIS i7™',
          excerpt: 'La inteligencia no tiene principio ni fin, viene de Dios. Cómo la espiritualidad fundamenta las demás inteligencias.',
          readTime: '7 min'
        },
        post3: {
          title: 'CEO Junior: Emprendimiento con propósito',
          category: 'Emprendimiento',
          excerpt: 'Preparando a la Generación Z para ir más allá de la escuela tradicional. El futuro del emprendimiento juvenil.',
          readTime: '6 min'
        },
        post4: {
          title: 'El Eneagrama en la dinámica familiar',
          category: 'Herramientas',
          excerpt: 'Cómo entender tu personalidad y la de tu hijo puede transformar completamente la comunicación en tu hogar.',
          readTime: '8 min'
        },
        post5: {
          title: 'Límites con amor: El arte del equilibrio',
          category: 'Crianza',
          excerpt: 'Poner límites desde el amor, no desde el miedo. Estrategias prácticas para padres de adolescentes.',
          readTime: '5 min'
        },
        post6: {
          title: 'Tecnología consciente para familias',
          category: 'Tecnología',
          excerpt: 'Usar la tecnología para crear, no para perderse. Guía práctica para el uso responsable de dispositivos.',
          readTime: '6 min'
        }
      }
    },

    // Contact Page
    contact: {
      title: 'Conectemos',
      subtitle: 'Estoy aquí para servir. Elige la opción que mejor se adapte a tu necesidad.',
      tabs: {
        general: 'General',
        speaking: 'Speaking & Eventos',
        media: 'Prensa'
      },
      general: {
        title: 'Consultas Generales',
        description: '¿Tienes preguntas sobre el Reto Padres 3.0 o quieres saludar? Completa el formulario.'
      },
      speakingTab: {
        title: 'Contratar Conferencia',
        description: 'Para verificar disponibilidad para tu evento, por favor provee detalles sobre la fecha, ubicación y audiencia.'
      },
      media: {
        title: 'Kit de Prensa',
        description: 'Para entrevistas, podcasts o citas en artículos, contacta directamente a mi equipo de PR.'
      },
      form: {
        name: 'Nombre Completo',
        email: 'Email',
        eventDate: 'Fecha del Evento',
        message: 'Mensaje',
        submit: 'Enviar Mensaje'
      }
    },

    // CEO Junior Page
    ceoJunior: {
      hero: {
        subtitle: 'Para la Generación Z',
        title: 'CEO Junior:',
        titleHighlight: 'Forjando a la Próxima Generación',
        description: 'de Empresarios Digitales con Propósito Eterno.',
        story: 'Esta es la comunidad que prepara a la Generación Z para ir más allá de la escuela tradicional. En CEO Junior, les proporcionamos el mapa, las herramientas y la mentalidad para convertirse en líderes que no solo ganan dinero, sino que también dejan un legado.',
        cta1: 'EXPLORAR PROGRAMAS',
        cta2: 'CONOCER GÉNESIS i7™'
      },
      focus: {
        title: 'Nuestro Enfoque',
        description: 'Desarrollamos competencias digitales, pensamiento innovador, uso consciente de la IA y habilidades reales de emprendimiento online.',
        skills: {
          digital: 'Competencias digitales avanzadas',
          innovative: 'Pensamiento innovador y creativo',
          ai: 'Uso consciente de la Inteligencia Artificial',
          entrepreneurship: 'Habilidades reales de emprendimiento online',
          leadership: 'Liderazgo con valores cristianos',
          vision: 'Visión global y propósito eterno'
        }
      },
      pillars: {
        subtitle: 'Metodología Aplicada',
        title: 'Pilares de GÉNESIS i7™ en CEO Junior',
        description: 'Las inteligencias clave que transformarán a tu hijo en un líder con propósito',
        financial: {
          title: 'Inteligencia Financiera',
          subtitle: 'Dominar el dinero con propósito',
          description: 'Aprenderá a dominar el dinero con propósito, entendiendo la gestión de riesgos y la mentalidad de abundancia responsable.'
        },
        technological: {
          title: 'Inteligencia Tecnológica',
          subtitle: 'Crear, no perderse',
          description: 'Dejará de usar la tecnología para perderse y empezará a usarla para crear, creando contenido y seguridad digital.'
        },
        mental: {
          title: 'Inteligencia Mental y Espiritual',
          subtitle: 'Disciplina y propósito',
          description: 'Fortalecerá la disciplina, la fijación de metas y el sentido de misión, alineando sus decisiones con su propósito eterno.'
        }
      },
      vision: {
        title: 'Nuestra Visión',
        description: 'CEO Junior aspira a ser la comunidad más grande de jóvenes emprendedores de todo el mundo, formando empresarios digitales con valores cristianos, propósito eterno y habilidades del siglo XXI.',
        quote: '"Preparamos líderes que no solo ganan dinero, sino que también dejan un legado."'
      },
      solution: {
        title: 'La Solución Integral',
        description: 'Padres 3.0 es el programa de padres conscientes, y CEO Junior es el programa para adolescentes con visión emprendedora digital. Juntos, forman el ecosistema completo para transformar familias.',
        cta1: 'CONOCER PADRES 3.0',
        cta2: 'QUIERO QUE MI HIJO SEA UN CEO JUNIOR'
      }
    },

    // Metodologia Page
    metodologia: {
      hero: {
        subtitle: 'Metodología Patentada',
        title: 'GÉNESIS',
        titleHighlight: 'i7™',
        tagline: 'La Metodología Patentada que Unifica Espíritu, Ciencia y Tecnología',
        description: 'GÉNESIS i7™ es la ruta clara, profunda y moderna para formar adolescentes con propósito, carácter y visión global.'
      },
      structure: {
        title: 'El Orden Estructural',
        description: 'La inteligencia no tiene principio ni fin, viene de Dios. El modelo establece que todo comienza con la Inteligencia Espiritual. Esta es la base funcional de las demás.'
      },
      intelligences: {
        title: 'Las 7 Inteligencias',
        titleHighlight: 'Esenciales',
        description: 'Cada inteligencia se construye sobre la anterior, formando un sistema integral de desarrollo',
        result: 'Resultado',
        spiritual: {
          title: 'Espiritual',
          phrase: 'Recordar quién eres y por qué estás aquí',
          result: 'Sentido de vida y fe',
          description: 'La base funcional de todas las demás inteligencias. La inteligencia no tiene principio ni fin, viene de Dios.'
        },
        mental: {
          title: 'Mental',
          phrase: 'Aprender a pensar y a crecer',
          result: 'Disciplina y metas',
          description: 'Desarrolla la capacidad de establecer objetivos claros, mantener el enfoque y cultivar hábitos de crecimiento continuo.'
        },
        physical: {
          title: 'Física',
          phrase: 'Cuidar el cuerpo, la base del éxito',
          result: 'Vitalidad y dominio propio',
          description: 'El cuerpo es el templo donde habita todo lo demás. Sin salud física, las otras inteligencias no pueden manifestarse plenamente.'
        },
        emotional: {
          title: 'Emocional',
          phrase: 'Dominar el corazón antes que el mundo',
          result: 'Autocontrol y resiliencia',
          description: 'Aprende a gestionar tus emociones, responder en lugar de reaccionar, y construir fortaleza interior ante la adversidad.'
        },
        social: {
          title: 'Social',
          phrase: 'Conectar y liderar con empatía',
          result: 'Relaciones sanas',
          description: 'Desarrolla habilidades de comunicación efectiva, liderazgo servicial y la capacidad de construir comunidades significativas.'
        },
        financial: {
          title: 'Financiera',
          phrase: 'Dominar el dinero con propósito',
          result: 'Libertad económica',
          description: 'Comprende cómo el dinero es una herramienta para cumplir tu propósito, no un fin en sí mismo. Gestiona recursos con sabiduría.'
        },
        technological: {
          title: 'Tecnológica',
          phrase: 'Usar la tecnología para crear, no para perderse',
          result: 'Innovación con propósito',
          description: 'Domina las herramientas digitales como instrumentos de creación, no de consumo pasivo. La tecnología al servicio de tu misión.'
        }
      },
      tools: {
        title: 'Herramientas que Aprenderás',
        description: 'El programa combina las herramientas más poderosas de la ciencia del comportamiento y el desarrollo personal:',
        list: {
          enneagram: 'Eneagrama de la Personalidad',
          nlp: 'Programación Neurolingüística (PNL)',
          coaching: 'Coaching para Padres',
          neuroscience: 'Neurociencia Aplicada',
          psychology: 'Psicología Positiva'
        },
        challenge: {
          title: 'El Reto Padres 3.0',
          description: 'Un programa de transformación personal de 60 días diseñado para padres que desean guiar a sus hijos adolescentes en la nueva era digital.',
          quote: '"El cambio comienza contigo, no con tu hijo."',
          footer: 'El reto está dividido en 2 grandes etapas y no necesitas conocimientos previos. Solo necesitas disposición para transformarte.'
        }
      },
      cta: {
        title: 'Aplica esta metodología en tu familia',
        description: 'Descubre cómo GÉNESIS i7™ puede transformar la relación con tus hijos y prepararlos para un futuro con propósito.',
        button1: 'DESCUBRE EL RETO PADRES 3.0',
        button2: 'EXPLORAR CEO JUNIOR'
      }
    },

    // Footer
    footer: {
      tagline: 'Transformando familias y empoderando a la próxima generación de líderes con GÉNESIS i7™.',
      explore: 'Explorar',
      programs: 'Programas',
      contact: 'Contacto',
      contactQuestion: '¿Interesado en una conferencia o colaboración?',
      contactCta: 'Escríbenos',
      rights: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos'
    },

    // Common
    common: {
      readMore: 'Leer más',
      learnMore: 'Saber más',
      viewAll: 'Ver todo',
      contact: 'Contactar'
    }
  },

  en: {
    // Navigation
    nav: {
      metodologia: 'Methodology',
      ceoJunior: 'CEO Junior',
      about: 'About',
      books: 'Books',
      speaking: 'Speaking',
      blog: 'Blog',
      contact: 'Contact',
      cta: 'Start Today!'
    },

    // Home Page
    home: {
      hero: {
        subtitle: 'Digital Entrepreneur with Purpose',
        creatorOf: 'Creator of',
        title1: 'From Disconnection',
        title2: 'to',
        title3: 'A Thousand Opportunities',
        description: 'The scientific and spiritual map that parents of teenagers need in the digital age.',
        cta1: 'Start Today',
        cta2: 'Parents 3.0 Challenge',
        transform: 'Transform Your Home in 60 Days',
        badge: 'COACH & AUTHOR',
        scroll: 'Scroll',
        genesisDescription: 'Discover GÉNESIS i7™, the only map created by Henry Orellana D. that integrates Spirituality, Science and Technology to transform parents and empower their children.'
      },
      featured: {
        title: 'As seen in'
      },
      crisis: {
        subtitle: 'The Reality We Face',
        title: 'Love',
        titleHighlight: "isn't Enough",
        titleEnd: ': The Silent Crisis of the Modern Family',
        description: "Do you love your child, but feel confused about how to guide them in today's world? I was there: I went from having it all to searching for coins in bed, until I understood that",
        descriptionBold: "they weren't the problem",
        descriptionEnd: '. The change had to start with me.',
        quote: '"They are not the problem. If you change, everything changes."'
      },
      padres: {
        badge: 'THE SOLUTION',
        title: 'Parents 3.0: The 60-Day Map to Become the',
        titleHighlight: 'Parent Your Future CEO Needs',
        description: 'Guaranteed transformation in 60 days. Key achievements you will reach:',
        logro1: 'Recover emotional connection and reduce conflicts.',
        logro2: 'Set limits from love, not from fear.',
        logro3: "Understand your child's personality and yours (Enneagram).",
        logro4: 'Prepare to guide them toward financial freedom and purposeful innovation.',
        cta: 'I WANT TO JOIN THE PARENTS 3.0 COMMUNITY',
        bookTitle: 'Parents 3.0',
        bookSubtitle: 'The 60-Day Map'
      },
      ceoJunior: {
        subtitle: 'For Your Children',
        title: 'CEO Junior:',
        titleHighlight: 'The Next Generation',
        description: 'This is the community that prepares Generation Z to go beyond traditional school. In CEO Junior, we provide them with the map, tools, and mindset to become leaders who not only make money, but also',
        descriptionBold: 'leave a legacy',
        tags: {
          digital: 'Digital Skills',
          innovative: 'Innovative Thinking',
          ai: 'Conscious AI Use',
          entrepreneurship: 'Online Entrepreneurship'
        },
        cta: 'I want my child to be a CEO Junior'
      },
      articles: {
        title: 'Reflections',
        viewAll: 'View all articles',
        readTime: 'min read',
        article1: {
          title: 'The silent crisis of the modern family',
          category: 'Family'
        },
        article2: {
          title: 'Spiritual Intelligence in the AI era',
          category: 'GÉNESIS i7™'
        },
        article3: {
          title: 'CEO Junior: The future of entrepreneurship',
          category: 'Entrepreneurship'
        },
        excerpt: 'Exploring how the GÉNESIS i7™ methodology can change family dynamics from the root...'
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about the Parents 3.0 Challenge',
        q1: {
          question: 'What exactly is the Parents 3.0 Challenge?',
          answer: 'It is a 60-day personal transformation program designed for parents who want to guide their teenage children in the new digital age. It is based on the premise: "Change starts with you, not with your child."'
        },
        q2: {
          question: 'What is the program methodology based on?',
          answer: 'It is based on the patented GÉNESIS i7™ methodology and uses modern tools that combine science, spirituality, and personal development.'
        },
        q3: {
          question: 'What specific tools will I learn?',
          answer: 'You will learn to apply the Enneagram of Personality, Neuro-Linguistic Programming (NLP), Parent Coaching, Applied Neuroscience, and Positive Psychology.'
        },
        q4: {
          question: 'What can I expect to achieve with my child in these 60 days?',
          answer: 'You will be able to improve communication with your children, reduce conflicts, and recover emotional connection.'
        },
        q5: {
          question: 'What is the time commitment?',
          answer: 'The challenge is divided into 2 major stages and lasts 60 days.'
        },
        q6: {
          question: 'Do I need previous knowledge?',
          answer: 'You do not need previous knowledge. You only need willingness to transform yourself.'
        },
        q7: {
          question: 'Who is Jimy Henry Orellana Domínguez?',
          answer: 'He is the author of the GÉNESIS i7™ methodology, a Life Coach certified by the World Association of Coaches of the USA, and a professional with executive training at Harvard.'
        },
        q8: {
          question: 'How does Parents 3.0 relate to CEO Junior?',
          answer: 'Parents 3.0 is the conscious parents program, and CEO Junior is the program for teenagers with digital entrepreneurial vision.'
        }
      },
      newsletter: {
        title: 'Ideas that transform',
        description: 'Join over 10,000 parents and educators who receive my weekly strategies for raising children with purpose.',
        placeholder: 'Your email address',
        cta: 'JOIN',
        privacy: 'We respect your privacy. No spam.'
      }
    },

    // About Page
    about: {
      header: {
        subtitle: 'Meet the Author',
        title: 'Henry Orellana D.',
        role: 'Digital Entrepreneur with Purpose and Creator of the GÉNESIS i7™ Movement'
      },
      mission: {
        title: 'My Mission',
        description: 'I am a digital entrepreneur with purpose, dedicated to doing everything possible to help Generation Z become digital entrepreneurs with Christian values, eternal purpose, and 21st century skills.',
        story: "Do you love your child, but feel confused about how to guide them in today's world? I was there: I went from having it all to searching for coins in bed, until I understood that they weren't the problem. The change had to start with me.",
        quote: '"They are not the problem. If you change, everything changes."'
      },
      solution: {
        title: 'The Integral Solution',
        subtitle: 'Parents and Children transformed together',
        padres: {
          title: 'Parents 3.0',
          description: 'Empowering parents to be the guides their children need in the digital age.',
          cta: 'Learn more'
        },
        ceoJunior: {
          title: 'CEO Junior',
          description: 'Training young people to become the largest community of entrepreneurs in the world.',
          cta: 'Explore'
        },
        footer: 'Everything is articulated through my patented methodology:'
      },
      credentials: {
        education: 'Academic Training',
        specialties: 'Specialties',
        items: {
          degree1: 'Bachelor in Business Administration',
          degree2: 'MBA (Master in Business Administration)',
          diploma1: 'Management Diploma - Harvard University',
          certification: 'Life Coach certified by the World Association of Coaches of USA'
        },
        specialtiesList: {
          enneagram: 'Enneagram of Personality',
          nlp: 'Neuro-Linguistic Programming (NLP)',
          coaching: 'Parent Coaching',
          neuroscience: 'Applied Neuroscience',
          psychology: 'Positive Psychology'
        }
      },
      methodology: {
        subtitle: 'My Methodology',
        description: 'The clear, deep and modern route to form teenagers with purpose, character and global vision.',
        cta: 'EXPLORE GÉNESIS i7™',
        intelligences: {
          spiritual: { title: 'Spiritual', desc: 'Sense of life and faith' },
          mental: { title: 'Mental', desc: 'Discipline and goals' },
          emotional: { title: 'Emotional', desc: 'Self-control and resilience' },
          physical: { title: 'Physical', desc: 'Vitality and self-mastery' },
          social: { title: 'Social', desc: 'Healthy relationships' },
          financial: { title: 'Financial', desc: 'Economic freedom' },
          technological: { title: 'Technological', desc: 'Innovation with purpose' }
        }
      }
    },

    // Books Page
    books: {
      title: 'My Books',
      subtitle: 'Written tools to accompany you on your journey of personal and family transformation.',
      featured: {
        title: 'Parents 3.0: The 60-Day Map',
        description: 'A revolutionary system that integrates biblical wisdom with modern neuroscience. Discover how to go from frustration to deep connection with your teenage children.',
        quote: '"A must-read for any parent who wants to survive and thrive in the digital age."',
        quoteAuthor: '— Modern Family Magazine',
        buyAmazon: 'Buy on Amazon',
        readExcerpt: 'Read Excerpt'
      },
      other: {
        title: 'Other Publications',
        moreInfo: 'More information',
        bookTitle: 'Book Title'
      }
    },

    // Speaking Page
    speaking: {
      hero: {
        title: 'Speaking',
        titleHighlight: '& Workshops',
        description: 'Transformative experiences designed for parents, educators and business leaders seeking to transcend.',
        cta: 'Download Press Kit'
      },
      topics: {
        title: 'Main Topics',
        padres: {
          title: 'Parents 3.0',
          description: 'The 60-Day Map to Become the Parent Your Future CEO Needs. Strategies to recover emotional connection.',
          tag: 'Keynote / Workshop'
        },
        ceoJunior: {
          title: 'CEO Junior',
          description: 'Forging the Next Generation of Digital Entrepreneurs. Financial and technological intelligence for youth.',
          tag: 'Educational Program'
        },
        leadership: {
          title: 'Leadership with Purpose',
          description: 'How to integrate eternal values into modern business success. Based on the GÉNESIS i7™ methodology.',
          tag: 'Corporate'
        }
      },
      events: {
        title: 'Upcoming Events',
        details: 'Details',
        event1: {
          date: 'OCT 15',
          name: 'Latino Leadership Summit',
          location: 'Miami, FL',
          type: 'In-Person'
        },
        event2: {
          date: 'NOV 02',
          name: 'Parents 3.0 Challenge - Cohort 5',
          location: 'Online',
          type: 'Virtual'
        },
        event3: {
          date: 'NOV 20',
          name: 'Future Education Forum',
          location: 'Mexico City',
          type: 'Keynote'
        }
      }
    },

    // Blog Page
    blog: {
      title: 'Ideas & Reflections',
      subtitle: 'Thoughts on education, leadership and faith.',
      search: 'Search article...',
      featured: {
        category: 'Trends',
        date: 'December 2024',
        title: 'The intersection between AI and Christian Ethics',
        description: 'How do we prepare our children for a world dominated by algorithms without losing their humanity? A deep analysis on the future of CEO Junior and the importance of spiritual intelligence.',
        cta: 'Read full article'
      },
      readTime: 'read',
      readMore: 'Read more →',
      posts: {
        post1: {
          title: 'The silent crisis of the modern family',
          category: 'Family',
          excerpt: "Do you love your child, but feel confused about how to guide them in today's world? Discover the roots of family disconnection.",
          readTime: '5 min'
        },
        post2: {
          title: 'Spiritual Intelligence: The foundation of everything',
          category: 'GÉNESIS i7™',
          excerpt: 'Intelligence has no beginning or end, it comes from God. How spirituality grounds the other intelligences.',
          readTime: '7 min'
        },
        post3: {
          title: 'CEO Junior: Entrepreneurship with purpose',
          category: 'Entrepreneurship',
          excerpt: 'Preparing Generation Z to go beyond traditional school. The future of youth entrepreneurship.',
          readTime: '6 min'
        },
        post4: {
          title: 'The Enneagram in family dynamics',
          category: 'Tools',
          excerpt: "How understanding your personality and your child's can completely transform communication in your home.",
          readTime: '8 min'
        },
        post5: {
          title: 'Limits with love: The art of balance',
          category: 'Parenting',
          excerpt: 'Setting limits from love, not from fear. Practical strategies for parents of teenagers.',
          readTime: '5 min'
        },
        post6: {
          title: 'Conscious technology for families',
          category: 'Technology',
          excerpt: 'Using technology to create, not to get lost. Practical guide for responsible device use.',
          readTime: '6 min'
        }
      }
    },

    // Contact Page
    contact: {
      title: "Let's Connect",
      subtitle: "I'm here to serve. Choose the option that best suits your need.",
      tabs: {
        general: 'General',
        speaking: 'Speaking & Events',
        media: 'Press'
      },
      general: {
        title: 'General Inquiries',
        description: 'Do you have questions about the Parents 3.0 Challenge or want to say hello? Fill out the form.'
      },
      speakingTab: {
        title: 'Book a Speaking Engagement',
        description: 'To check availability for your event, please provide details about the date, location and audience.'
      },
      media: {
        title: 'Press Kit',
        description: 'For interviews, podcasts or article quotes, contact my PR team directly.'
      },
      form: {
        name: 'Full Name',
        email: 'Email',
        eventDate: 'Event Date',
        message: 'Message',
        submit: 'Send Message'
      }
    },

    // CEO Junior Page
    ceoJunior: {
      hero: {
        subtitle: 'For Generation Z',
        title: 'CEO Junior:',
        titleHighlight: 'Forging the Next Generation',
        description: 'of Digital Entrepreneurs with Eternal Purpose.',
        story: 'This is the community that prepares Generation Z to go beyond traditional school. In CEO Junior, we provide them with the map, tools, and mindset to become leaders who not only make money, but also leave a legacy.',
        cta1: 'EXPLORE PROGRAMS',
        cta2: 'LEARN ABOUT GÉNESIS i7™'
      },
      focus: {
        title: 'Our Approach',
        description: 'We develop digital skills, innovative thinking, conscious AI use and real online entrepreneurship abilities.',
        skills: {
          digital: 'Advanced digital skills',
          innovative: 'Innovative and creative thinking',
          ai: 'Conscious use of Artificial Intelligence',
          entrepreneurship: 'Real online entrepreneurship skills',
          leadership: 'Leadership with Christian values',
          vision: 'Global vision and eternal purpose'
        }
      },
      pillars: {
        subtitle: 'Applied Methodology',
        title: 'GÉNESIS i7™ Pillars in CEO Junior',
        description: 'The key intelligences that will transform your child into a leader with purpose',
        financial: {
          title: 'Financial Intelligence',
          subtitle: 'Mastering money with purpose',
          description: 'They will learn to master money with purpose, understanding risk management and the mindset of responsible abundance.'
        },
        technological: {
          title: 'Technological Intelligence',
          subtitle: 'Create, not get lost',
          description: 'They will stop using technology to get lost and start using it to create, producing content and digital security.'
        },
        mental: {
          title: 'Mental and Spiritual Intelligence',
          subtitle: 'Discipline and purpose',
          description: 'They will strengthen discipline, goal setting and sense of mission, aligning their decisions with their eternal purpose.'
        }
      },
      vision: {
        title: 'Our Vision',
        description: 'CEO Junior aspires to be the largest community of young entrepreneurs in the world, training digital entrepreneurs with Christian values, eternal purpose and 21st century skills.',
        quote: '"We prepare leaders who not only make money, but also leave a legacy."'
      },
      solution: {
        title: 'The Integral Solution',
        description: 'Parents 3.0 is the conscious parents program, and CEO Junior is the program for teenagers with digital entrepreneurial vision. Together, they form the complete ecosystem to transform families.',
        cta1: 'LEARN ABOUT PARENTS 3.0',
        cta2: 'I WANT MY CHILD TO BE A CEO JUNIOR'
      }
    },

    // Metodologia Page
    metodologia: {
      hero: {
        subtitle: 'Patented Methodology',
        title: 'GÉNESIS',
        titleHighlight: 'i7™',
        tagline: 'The Patented Methodology that Unifies Spirit, Science and Technology',
        description: 'GÉNESIS i7™ is the clear, deep and modern route to form teenagers with purpose, character and global vision.'
      },
      structure: {
        title: 'The Structural Order',
        description: 'Intelligence has no beginning or end, it comes from God. The model establishes that everything begins with Spiritual Intelligence. This is the functional base of the others.'
      },
      intelligences: {
        title: 'The 7',
        titleHighlight: 'Essential Intelligences',
        description: 'Each intelligence builds on the previous one, forming an integral development system',
        result: 'Result',
        spiritual: {
          title: 'Spiritual',
          phrase: 'Remember who you are and why you are here',
          result: 'Sense of life and faith',
          description: 'The functional base of all other intelligences. Intelligence has no beginning or end, it comes from God.'
        },
        mental: {
          title: 'Mental',
          phrase: 'Learn to think and grow',
          result: 'Discipline and goals',
          description: 'Develop the ability to set clear goals, maintain focus and cultivate habits of continuous growth.'
        },
        physical: {
          title: 'Physical',
          phrase: 'Take care of the body, the foundation of success',
          result: 'Vitality and self-mastery',
          description: 'The body is the temple where everything else resides. Without physical health, the other intelligences cannot fully manifest.'
        },
        emotional: {
          title: 'Emotional',
          phrase: 'Master the heart before the world',
          result: 'Self-control and resilience',
          description: 'Learn to manage your emotions, respond instead of react, and build inner strength against adversity.'
        },
        social: {
          title: 'Social',
          phrase: 'Connect and lead with empathy',
          result: 'Healthy relationships',
          description: 'Develop effective communication skills, servant leadership and the ability to build meaningful communities.'
        },
        financial: {
          title: 'Financial',
          phrase: 'Master money with purpose',
          result: 'Economic freedom',
          description: 'Understand how money is a tool to fulfill your purpose, not an end in itself. Manage resources wisely.'
        },
        technological: {
          title: 'Technological',
          phrase: 'Use technology to create, not to get lost',
          result: 'Innovation with purpose',
          description: 'Master digital tools as instruments of creation, not passive consumption. Technology in service of your mission.'
        }
      },
      tools: {
        title: 'Tools You Will Learn',
        description: 'The program combines the most powerful tools from behavioral science and personal development:',
        list: {
          enneagram: 'Enneagram of Personality',
          nlp: 'Neuro-Linguistic Programming (NLP)',
          coaching: 'Parent Coaching',
          neuroscience: 'Applied Neuroscience',
          psychology: 'Positive Psychology'
        },
        challenge: {
          title: 'The Parents 3.0 Challenge',
          description: 'A 60-day personal transformation program designed for parents who want to guide their teenage children in the new digital age.',
          quote: '"Change starts with you, not with your child."',
          footer: "The challenge is divided into 2 major stages and you don't need previous knowledge. You only need willingness to transform yourself."
        }
      },
      cta: {
        title: 'Apply this methodology in your family',
        description: 'Discover how GÉNESIS i7™ can transform the relationship with your children and prepare them for a future with purpose.',
        button1: 'DISCOVER THE PARENTS 3.0 CHALLENGE',
        button2: 'EXPLORE CEO JUNIOR'
      }
    },

    // Footer
    footer: {
      tagline: 'Transforming families and empowering the next generation of leaders with GÉNESIS i7™.',
      explore: 'Explore',
      programs: 'Programs',
      contact: 'Contact',
      contactQuestion: 'Interested in a speaking engagement or collaboration?',
      contactCta: 'Write to us',
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms'
    },

    // Common
    common: {
      readMore: 'Read more',
      learnMore: 'Learn more',
      viewAll: 'View all',
      contact: 'Contact'
    }
  }
};
