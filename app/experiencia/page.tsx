import Image from 'next/image'
import Link from 'next/link'
import { VantaBackground } from '@/components/layout/VantaBackground'
import { BackButton } from '@/components/layout/BackButton'
import { WhatsAppWidget } from '@/components/widgets/WhatsAppWidget'
import { Card } from '@/components/ui/Card'

export const metadata = {
  title: 'Experiencia Profesional',
  description: 'Contador Público con más de 15 años de experiencia en el sector público e independiente, especializado en análisis de datos, visualización y Business Intelligence.',
}

const EXPERIENCES = [
  {
    company: 'Direccion General de Escuelas - Mendoza',
    period: '2016 - Presente',
    role: 'Asesor y Analista de Datos',
    responsibilities: [
      'Desarrollo de dashboards interactivos y analisis de datos para la toma de decisiones estrategicas',
      'Gestion y analisis de datos contables, de alumnos y de sueldos a gran escala',
      'Implementacion de soluciones de Business Intelligence y automatizacion de procesos',
      'Desarrollo de modelos predictivos y analisis avanzados para optimizacion operativa',
    ],
    additionalRole: {
      period: '2017 - 2024',
      role: 'Contador General',
      responsibilities: [
        'Gestion y supervision de procesos contables y financieros',
        'Coordinacion de equipos y optimizacion de procedimientos administrativos',
        'Elaboracion de informes y analisis presupuestarios',
      ],
    },
    hasImage: true,
  },
  {
    company: 'Universidad Nacional de Cuyo',
    period: '2009 - 2017',
    role: 'Responsable de Area y Analista Contable',
    responsibilities: [
      'Elaboracion y analisis del presupuesto universitario',
      'Organizacion de imputaciones y coordinacion de procesos contables',
      'Desarrollo de informes financieros y analisis presupuestarios',
    ],
  },
  {
    company: 'Consultoria Independiente',
    period: '2009 - Presente',
    role: 'Asesor en Business Intelligence y Finanzas',
    responsibilities: [
      'Asesoramiento contable y tributario para empresas y organizaciones',
      'Desarrollo de soluciones de analisis de datos y visualizacion',
      'Implementacion de modelos predictivos y automatizaciones',
      'Elaboracion de informes gerenciales y analisis estrategicos',
    ],
  },
  {
    company: 'Analisis de Datos y Visualizaciones',
    period: '2020 - Presente',
    role: 'Especialista en Business Intelligence',
    responsibilities: [
      'Desarrollo de modelos predictivos utilizando Machine Learning',
      'Creacion de dashboards interactivos en Power BI y Tableau',
      'Implementacion de soluciones de automatizacion con Python',
      'Analisis avanzado de datos para la toma de decisiones',
    ],
  },
]

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/p/CyEUXCUOhiM/?igshid=MTc4MmM1YmI2Ng%3D%3D&img_index=3',
    description: 'Imagen destacada en redes sobre mi participacion en eventos profesionales.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter (X)',
    url: 'https://x.com/alfredocornejo/status/1075551552427810816?t=DRwokm0Z2I9SfFJQVBq4nw&s=08',
    description: 'Publicacion destacada en la red social sobre mi trayectoria y reconocimiento.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

export default function ExperienciaPage() {
  return (
    <>
      <VantaBackground />
      <BackButton />

      <main className="relative min-h-screen pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-gradient mb-6">
            Experiencia Profesional
          </h1>

          {/* Profile Summary */}
          <Card hover={false} className="bg-primary/15 border-primary/40 mb-10">
            <p className="text-lg text-white/90 font-body leading-relaxed">
              Contador Publico con mas de 15 anos de experiencia en el sector publico e independiente,
              especializado en analisis de datos, visualizacion y Business Intelligence. Mi enfoque
              combina expertise financiero con tecnologias avanzadas para transformar datos en
              decisiones estrategicas efectivas.
            </p>
          </Card>

          {/* Experience Timeline */}
          <div className="space-y-6 mb-12">
            {EXPERIENCES.map((exp, idx) => (
              <Card key={idx} className={exp.hasImage ? 'bg-primary/10' : 'bg-primary/10'}>
                <div className={exp.hasImage ? 'flex flex-col md:flex-row gap-6' : ''}>
                  <div className="flex-1">
                    <h2 className="text-2xl font-display text-primary mb-1">
                      {exp.company}
                    </h2>
                    <div className="text-primary font-body font-medium mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-lg text-white/90 font-body mb-4">
                      {exp.role}
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="text-white/80 font-body text-sm pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                        >
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {exp.additionalRole && (
                      <div className="mt-6 pt-4 border-t border-primary/20">
                        <div className="text-primary font-body font-medium mb-1">
                          {exp.additionalRole.period}
                        </div>
                        <h3 className="text-lg text-white/90 font-body mb-3">
                          {exp.additionalRole.role}
                        </h3>
                        <ul className="space-y-2">
                          {exp.additionalRole.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="text-white/80 font-body text-sm pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                            >
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {exp.hasImage && (
                    <div className="md:w-72 flex-shrink-0">
                      <Image
                        src="/images/experiencia.jpg"
                        alt="Participación en eventos institucionales"
                        width={300}
                        height={200}
                        className="rounded-xl border border-primary/30 shadow-lg object-cover w-full"
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Social Media Section */}
          <section>
            <h2 className="text-2xl font-display text-gradient mb-6">
              En los medios y redes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-5 bg-primary/10 border border-primary/30 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/20 group"
                >
                  <div className="w-8 h-8 mr-4 text-white group-hover:text-primary transition-colors">
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display text-white mb-1">
                      {social.name}
                    </h3>
                    <p className="text-sm text-white/70 font-body">
                      {social.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <WhatsAppWidget />
    </>
  )
}
