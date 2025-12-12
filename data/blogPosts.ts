export interface BlogPostTranslation {
  title: string;
  excerpt: string;
  content: string;
  metaDescription: string;
  readTime: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  image: string;
  publishedAt: string;
  author: string;
  categories: string[];
  featured?: boolean;
  translations: {
    es: BlogPostTranslation;
    en: BlogPostTranslation;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 'post-featured',
    slug: 'ia-etica-cristiana',
    image: '/images/blog-destacado.png',
    publishedAt: '2024-12-01',
    author: 'Henry Orellana D.',
    categories: ['tendencias', 'genesis-i7'],
    featured: true,
    translations: {
      es: {
        title: 'La interseccion entre la IA y la Etica Cristiana',
        excerpt: 'Como la inteligencia artificial esta transformando nuestra forma de vivir la fe y los valores familiares en el siglo XXI.',
        content: `
          <p class="text-lg mb-6">La revolucion tecnologica que vivimos no es solo digital, es profundamente espiritual. Como padres y lideres, enfrentamos el desafio de integrar herramientas poderosas como la inteligencia artificial con los valores eternos que nos definen.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">El Dilema Moderno</h2>
          <p class="mb-4">Cada dia, nuestros hijos interactuan con algoritmos que moldean sus percepciones, preferencias y hasta sus relaciones. La pregunta no es si debemos usar la tecnologia, sino como hacerlo de manera que fortalezca, no debilite, nuestros cimientos espirituales.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Principios Guia</h2>
          <p class="mb-4">En GENESIS i7, proponemos un marco de siete inteligencias que incluye la dimension espiritual como fundamento. La tecnologia debe servir al florecimiento humano, no reemplazarlo.</p>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"La verdadera sabiduria no esta en los algoritmos, sino en saber cuando apagarlos."</blockquote>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Acciones Practicas</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Establece momentos "libres de pantalla" para la conexion familiar</li>
            <li>Usa la IA como herramienta de aprendizaje, no de reemplazo</li>
            <li>Dialoga con tus hijos sobre los valores detras de cada decision tecnologica</li>
            <li>Modela el uso consciente de la tecnologia</li>
          </ul>

          <p class="mb-4">La integracion de la fe y la tecnologia no es una contradiccion; es una oportunidad para demostrar que los valores eternos pueden guiar incluso las herramientas mas avanzadas.</p>
        `,
        metaDescription: 'Descubre como integrar la inteligencia artificial con valores cristianos y familiares. Guia practica para padres en la era digital.',
        readTime: '8 min'
      },
      en: {
        title: 'The Intersection of AI and Christian Ethics',
        excerpt: 'How artificial intelligence is transforming the way we live our faith and family values in the 21st century.',
        content: `
          <p class="text-lg mb-6">The technological revolution we are experiencing is not just digital, it is profoundly spiritual. As parents and leaders, we face the challenge of integrating powerful tools like artificial intelligence with the eternal values that define us.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">The Modern Dilemma</h2>
          <p class="mb-4">Every day, our children interact with algorithms that shape their perceptions, preferences, and even their relationships. The question is not whether we should use technology, but how to do so in a way that strengthens, not weakens, our spiritual foundations.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Guiding Principles</h2>
          <p class="mb-4">At GENESIS i7, we propose a framework of seven intelligences that includes the spiritual dimension as a foundation. Technology should serve human flourishing, not replace it.</p>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"True wisdom is not in algorithms, but in knowing when to turn them off."</blockquote>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Practical Actions</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Establish "screen-free" moments for family connection</li>
            <li>Use AI as a learning tool, not a replacement</li>
            <li>Talk with your children about the values behind each technological decision</li>
            <li>Model conscious use of technology</li>
          </ul>

          <p class="mb-4">The integration of faith and technology is not a contradiction; it is an opportunity to demonstrate that eternal values can guide even the most advanced tools.</p>
        `,
        metaDescription: 'Discover how to integrate artificial intelligence with Christian and family values. Practical guide for parents in the digital age.',
        readTime: '8 min'
      }
    }
  },
  {
    id: 'post-1',
    slug: 'crisis-familiar',
    image: '/images/blog-crisis-familiar.png',
    publishedAt: '2024-11-15',
    author: 'Henry Orellana D.',
    categories: ['familia'],
    translations: {
      es: {
        title: 'La crisis silenciosa de la familia moderna',
        excerpt: 'Amas a tu hijo, pero te sientes confundido sobre como guiarlo? Descubre las raices de la desconexion familiar.',
        content: `
          <p class="text-lg mb-6">En cada conferencia que doy, veo el mismo patron: padres amorosos, comprometidos, pero profundamente confundidos. No es falta de amor, es falta de herramientas para una era que nadie nos enseno a navegar.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Los Sintomas de la Desconexion</h2>
          <p class="mb-4">La crisis familiar moderna no llega con gritos ni portazos. Llega en silencios incomodos, en conversaciones que nunca pasan de lo superficial, en la sensacion de vivir bajo el mismo techo pero en mundos diferentes.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Las Raices del Problema</h2>
          <p class="mb-4">Hemos heredado modelos de crianza disenados para un mundo que ya no existe. Nuestros padres podian confiar en que la escuela, la iglesia y la comunidad reforzarian sus valores. Hoy, cada mensaje que reciben nuestros hijos compite por su atencion y sus creencias.</p>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"No podemos usar mapas del siglo XX para navegar el siglo XXI."</blockquote>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">El Camino Hacia la Reconexion</h2>
          <p class="mb-4">La buena noticia es que la reconexion es posible. Requiere intencion, nuevas herramientas y la humildad de reconocer que todos estamos aprendiendo.</p>

          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Escucha antes de aconsejar</li>
            <li>Pregunta antes de asumir</li>
            <li>Conecta antes de corregir</li>
            <li>Modela antes de exigir</li>
          </ul>
        `,
        metaDescription: 'Descubre las raices de la desconexion familiar moderna y encuentra herramientas practicas para reconectar con tus hijos.',
        readTime: '5 min'
      },
      en: {
        title: 'The Silent Crisis of the Modern Family',
        excerpt: 'Do you love your child but feel confused about how to guide them? Discover the roots of family disconnection.',
        content: `
          <p class="text-lg mb-6">At every conference I give, I see the same pattern: loving, committed parents, but deeply confused. It's not a lack of love, it's a lack of tools for an era that nobody taught us to navigate.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">The Symptoms of Disconnection</h2>
          <p class="mb-4">The modern family crisis doesn't arrive with screams or slammed doors. It arrives in uncomfortable silences, in conversations that never go beyond the superficial, in the feeling of living under the same roof but in different worlds.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">The Roots of the Problem</h2>
          <p class="mb-4">We have inherited parenting models designed for a world that no longer exists. Our parents could trust that school, church, and community would reinforce their values. Today, every message our children receive competes for their attention and beliefs.</p>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"We cannot use 20th century maps to navigate the 21st century."</blockquote>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">The Path to Reconnection</h2>
          <p class="mb-4">The good news is that reconnection is possible. It requires intention, new tools, and the humility to recognize that we are all learning.</p>

          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Listen before advising</li>
            <li>Ask before assuming</li>
            <li>Connect before correcting</li>
            <li>Model before demanding</li>
          </ul>
        `,
        metaDescription: 'Discover the roots of modern family disconnection and find practical tools to reconnect with your children.',
        readTime: '5 min'
      }
    }
  },
  {
    id: 'post-2',
    slug: 'inteligencia-espiritual',
    image: '/images/blog-inteligencia-espiritual.png',
    publishedAt: '2024-11-01',
    author: 'Henry Orellana D.',
    categories: ['genesis-i7'],
    translations: {
      es: {
        title: 'Inteligencia Espiritual: La base de todo',
        excerpt: 'Por que la primera de las 7 inteligencias es la espiritual? Descubre el fundamento que sostiene todas las demas.',
        content: `
          <p class="text-lg mb-6">Cuando disene el modelo GENESIS i7, la decision de colocar la inteligencia espiritual como la primera no fue arbitraria. Es el cimiento sobre el cual se construyen todas las demas.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Mas Alla de la Religion</h2>
          <p class="mb-4">La inteligencia espiritual no se trata solo de practicas religiosas. Es la capacidad de encontrar significado, proposito y trascendencia en la vida. Es responder a la pregunta fundamental: para que estoy aqui?</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">El Vacio Existencial Moderno</h2>
          <p class="mb-4">Vivimos en la era de mayor abundancia material de la historia, y sin embargo, los indices de ansiedad, depresion y suicidio juvenil nunca han sido tan altos. El exito sin proposito es un camino hacia el vacio.</p>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"Un hijo que sabe quien es y para que existe, puede enfrentar cualquier desafio."</blockquote>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Cultivando la Inteligencia Espiritual</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Conversaciones sobre proposito y significado</li>
            <li>Momentos de reflexion y silencio</li>
            <li>Conexion con algo mas grande que uno mismo</li>
            <li>Practicas de gratitud y servicio</li>
          </ul>
        `,
        metaDescription: 'Descubre por que la inteligencia espiritual es el fundamento de las 7 inteligencias del modelo GENESIS i7.',
        readTime: '6 min'
      },
      en: {
        title: 'Spiritual Intelligence: The Foundation of Everything',
        excerpt: 'Why is spiritual intelligence the first of the 7 intelligences? Discover the foundation that supports all others.',
        content: `
          <p class="text-lg mb-6">When I designed the GENESIS i7 model, the decision to place spiritual intelligence first was not arbitrary. It is the foundation upon which all others are built.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Beyond Religion</h2>
          <p class="mb-4">Spiritual intelligence is not just about religious practices. It is the ability to find meaning, purpose, and transcendence in life. It is answering the fundamental question: why am I here?</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">The Modern Existential Void</h2>
          <p class="mb-4">We live in the era of greatest material abundance in history, yet rates of anxiety, depression, and youth suicide have never been higher. Success without purpose is a path to emptiness.</p>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"A child who knows who they are and why they exist can face any challenge."</blockquote>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Cultivating Spiritual Intelligence</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Conversations about purpose and meaning</li>
            <li>Moments of reflection and silence</li>
            <li>Connection with something greater than oneself</li>
            <li>Practices of gratitude and service</li>
          </ul>
        `,
        metaDescription: 'Discover why spiritual intelligence is the foundation of the 7 intelligences in the GENESIS i7 model.',
        readTime: '6 min'
      }
    }
  },
  {
    id: 'post-3',
    slug: 'ceo-junior-emprendimiento',
    image: '/images/blog-ceo-junior.png',
    publishedAt: '2024-10-15',
    author: 'Henry Orellana D.',
    categories: ['emprendimiento'],
    translations: {
      es: {
        title: 'CEO Junior: Emprendimiento con proposito',
        excerpt: 'Como formar jovenes emprendedores que no solo busquen el exito financiero, sino el impacto positivo.',
        content: `
          <p class="text-lg mb-6">El programa CEO Junior nacio de una observacion: los jovenes de hoy tienen acceso a mas oportunidades que cualquier generacion anterior, pero muchos carecen de la mentalidad y las herramientas para aprovecharlas.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Mas Que Hacer Dinero</h2>
          <p class="mb-4">El emprendimiento que ensenamos no es solo sobre crear negocios rentables. Es sobre identificar problemas reales y desarrollar soluciones que generen valor para otros.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Los Pilares del CEO Junior</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Mentalidad de crecimiento:</strong> Ver los fracasos como aprendizajes</li>
            <li><strong>Inteligencia financiera:</strong> Entender el valor del dinero y la inversion</li>
            <li><strong>Liderazgo con servicio:</strong> Influir positivamente en otros</li>
            <li><strong>Innovacion con proposito:</strong> Resolver problemas reales</li>
          </ul>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"El mejor negocio es aquel que resuelve un problema que te apasiona resolver."</blockquote>

          <p class="mb-4">Nuestros jovenes no necesitan esperar a ser adultos para hacer una diferencia. Pueden empezar hoy, desde donde estan, con lo que tienen.</p>
        `,
        metaDescription: 'Conoce el programa CEO Junior y como formamos jovenes emprendedores con proposito e impacto positivo.',
        readTime: '5 min'
      },
      en: {
        title: 'CEO Junior: Entrepreneurship with Purpose',
        excerpt: 'How to develop young entrepreneurs who seek not just financial success, but positive impact.',
        content: `
          <p class="text-lg mb-6">The CEO Junior program was born from an observation: today's youth have access to more opportunities than any previous generation, but many lack the mindset and tools to take advantage of them.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">More Than Making Money</h2>
          <p class="mb-4">The entrepreneurship we teach is not just about creating profitable businesses. It's about identifying real problems and developing solutions that generate value for others.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">The Pillars of CEO Junior</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Growth mindset:</strong> See failures as learning opportunities</li>
            <li><strong>Financial intelligence:</strong> Understand the value of money and investment</li>
            <li><strong>Servant leadership:</strong> Positively influence others</li>
            <li><strong>Purpose-driven innovation:</strong> Solve real problems</li>
          </ul>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"The best business is one that solves a problem you are passionate about solving."</blockquote>

          <p class="mb-4">Our young people don't need to wait until adulthood to make a difference. They can start today, from where they are, with what they have.</p>
        `,
        metaDescription: 'Learn about the CEO Junior program and how we develop young entrepreneurs with purpose and positive impact.',
        readTime: '5 min'
      }
    }
  },
  {
    id: 'post-4',
    slug: 'eneagrama-familia',
    image: '/images/blog-eneagrama.png',
    publishedAt: '2024-10-01',
    author: 'Henry Orellana D.',
    categories: ['herramientas'],
    translations: {
      es: {
        title: 'El Eneagrama en la dinamica familiar',
        excerpt: 'Como esta herramienta milenaria puede transformar la comunicacion y comprension en tu hogar.',
        content: `
          <p class="text-lg mb-6">El Eneagrama es mucho mas que un test de personalidad. Es un mapa profundo de las motivaciones humanas que puede revolucionar como entendemos y nos relacionamos con cada miembro de nuestra familia.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Mas Alla de las Etiquetas</h2>
          <p class="mb-4">No se trata de encasillar a tu hijo en un "tipo". Se trata de entender sus miedos fundamentales, sus motivaciones profundas y sus formas naturales de ver el mundo.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Aplicaciones Practicas</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Adaptar tu estilo de comunicacion a cada hijo</li>
            <li>Entender por que ciertos conflictos se repiten</li>
            <li>Reconocer las fortalezas unicas de cada miembro</li>
            <li>Crear estrategias de resolucion de conflictos personalizadas</li>
          </ul>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"Cuando entiendes el 'por que' detras del comportamiento, el 'como' responder se vuelve claro."</blockquote>

          <p class="mb-4">En nuestros talleres, ensenamos a las familias a usar el Eneagrama no como una herramienta de juicio, sino de compasion y crecimiento mutuo.</p>
        `,
        metaDescription: 'Aprende como el Eneagrama puede mejorar la comunicacion y comprension en tu familia.',
        readTime: '6 min'
      },
      en: {
        title: 'The Enneagram in Family Dynamics',
        excerpt: 'How this ancient tool can transform communication and understanding in your home.',
        content: `
          <p class="text-lg mb-6">The Enneagram is much more than a personality test. It is a deep map of human motivations that can revolutionize how we understand and relate to each member of our family.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Beyond Labels</h2>
          <p class="mb-4">It's not about boxing your child into a "type." It's about understanding their fundamental fears, deep motivations, and natural ways of seeing the world.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Practical Applications</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Adapt your communication style to each child</li>
            <li>Understand why certain conflicts repeat</li>
            <li>Recognize each member's unique strengths</li>
            <li>Create personalized conflict resolution strategies</li>
          </ul>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"When you understand the 'why' behind behavior, the 'how' to respond becomes clear."</blockquote>

          <p class="mb-4">In our workshops, we teach families to use the Enneagram not as a tool for judgment, but for compassion and mutual growth.</p>
        `,
        metaDescription: 'Learn how the Enneagram can improve communication and understanding in your family.',
        readTime: '6 min'
      }
    }
  },
  {
    id: 'post-5',
    slug: 'limites-con-amor',
    image: '/images/blog-limites.png',
    publishedAt: '2024-09-15',
    author: 'Henry Orellana D.',
    categories: ['crianza'],
    translations: {
      es: {
        title: 'Limites con amor: El arte del equilibrio',
        excerpt: 'Como establecer limites firmes sin perder la conexion emocional con tus hijos.',
        content: `
          <p class="text-lg mb-6">Uno de los mayores desafios de la crianza moderna es encontrar el equilibrio entre ser firme y ser carinoso. La buena noticia: no son opuestos, son complementarios.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">El Mito del Padre Amigo</h2>
          <p class="mb-4">Muchos padres, temerosos de repetir modelos autoritarios del pasado, han caido en el extremo opuesto: la permisividad. Pero los hijos no necesitan otro amigo; necesitan un guia.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Limites que Funcionan</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Claros:</strong> El nino debe entender exactamente que se espera</li>
            <li><strong>Consistentes:</strong> Las reglas no cambian segun el humor del padre</li>
            <li><strong>Con consecuencias logicas:</strong> Relacionadas con la accion, no arbitrarias</li>
            <li><strong>Con conexion:</strong> Establecidos desde el amor, no desde la ira</li>
          </ul>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"Los limites sin conexion generan rebelion. La conexion sin limites genera confusion."</blockquote>

          <p class="mb-4">El secreto esta en mantener ambos: la firmeza que da seguridad y el carino que da confianza.</p>
        `,
        metaDescription: 'Aprende a establecer limites firmes con tus hijos sin perder la conexion emocional. Guia practica para padres.',
        readTime: '5 min'
      },
      en: {
        title: 'Boundaries with Love: The Art of Balance',
        excerpt: 'How to set firm boundaries without losing emotional connection with your children.',
        content: `
          <p class="text-lg mb-6">One of the greatest challenges of modern parenting is finding the balance between being firm and being loving. The good news: they are not opposites, they are complementary.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">The Myth of the Friend-Parent</h2>
          <p class="mb-4">Many parents, fearful of repeating authoritarian models of the past, have fallen into the opposite extreme: permissiveness. But children don't need another friend; they need a guide.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Boundaries That Work</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Clear:</strong> The child must understand exactly what is expected</li>
            <li><strong>Consistent:</strong> Rules don't change based on parent's mood</li>
            <li><strong>With logical consequences:</strong> Related to the action, not arbitrary</li>
            <li><strong>With connection:</strong> Established from love, not from anger</li>
          </ul>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"Boundaries without connection generate rebellion. Connection without boundaries generates confusion."</blockquote>

          <p class="mb-4">The secret is to maintain both: the firmness that provides security and the affection that builds trust.</p>
        `,
        metaDescription: 'Learn to set firm boundaries with your children without losing emotional connection. Practical guide for parents.',
        readTime: '5 min'
      }
    }
  },
  {
    id: 'post-6',
    slug: 'tecnologia-consciente',
    image: '/images/blog-tecnologia.png',
    publishedAt: '2024-09-01',
    author: 'Henry Orellana D.',
    categories: ['tecnologia'],
    translations: {
      es: {
        title: 'Tecnologia consciente para familias',
        excerpt: 'Estrategias practicas para usar la tecnologia como aliada, no como enemiga de la vida familiar.',
        content: `
          <p class="text-lg mb-6">La tecnologia no es ni buena ni mala. Es una herramienta, y como toda herramienta, su valor depende de como la usemos. La clave esta en pasar de un uso reactivo a un uso intencional.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">El Problema Real</h2>
          <p class="mb-4">No es el tiempo de pantalla en si. Es que, sin intencion, la tecnologia llena los espacios que antes ocupaban la conversacion, el juego y la conexion.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Estrategias Practicas</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Zonas libres de dispositivos:</strong> Comedor, habitaciones por la noche</li>
            <li><strong>Momentos sagrados:</strong> Primeros 30 minutos al despertar, ultimos antes de dormir</li>
            <li><strong>Tecnologia compartida:</strong> Ver peliculas juntos, jugar videojuegos en familia</li>
            <li><strong>Modelar el uso:</strong> Los hijos copian lo que ven, no lo que les decimos</li>
          </ul>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"No le pidas a tu hijo que suelte el celular mientras tu estas pegado al tuyo."</blockquote>

          <p class="mb-4">La tecnologia consciente no es vivir sin tecnologia. Es vivir con intencion, donde las pantallas sirven a nuestros valores, no al reves.</p>
        `,
        metaDescription: 'Estrategias practicas para familias que quieren usar la tecnologia de manera consciente e intencional.',
        readTime: '5 min'
      },
      en: {
        title: 'Conscious Technology for Families',
        excerpt: 'Practical strategies to use technology as an ally, not an enemy of family life.',
        content: `
          <p class="text-lg mb-6">Technology is neither good nor bad. It is a tool, and like any tool, its value depends on how we use it. The key is to move from reactive use to intentional use.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">The Real Problem</h2>
          <p class="mb-4">It's not screen time itself. It's that, without intention, technology fills the spaces that conversation, play, and connection once occupied.</p>

          <h2 class="font-display text-2xl text-charcoal mt-8 mb-4">Practical Strategies</h2>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Device-free zones:</strong> Dining room, bedrooms at night</li>
            <li><strong>Sacred moments:</strong> First 30 minutes after waking, last before sleeping</li>
            <li><strong>Shared technology:</strong> Watch movies together, play video games as a family</li>
            <li><strong>Model usage:</strong> Children copy what they see, not what we tell them</li>
          </ul>

          <blockquote class="border-l-4 border-forest pl-6 my-8 italic text-warm-grey">"Don't ask your child to put down their phone while you're glued to yours."</blockquote>

          <p class="mb-4">Conscious technology is not living without technology. It's living with intention, where screens serve our values, not the other way around.</p>
        `,
        metaDescription: 'Practical strategies for families who want to use technology consciously and intentionally.',
        readTime: '5 min'
      }
    }
  }
];

export const getFeaturedPost = (): BlogPost | undefined => {
  return blogPosts.find(post => post.featured);
};

export const getRegularPosts = (): BlogPost[] => {
  return blogPosts.filter(post => !post.featured);
};
