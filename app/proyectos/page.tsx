import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Una plataforma de comercio electrónico completa construida con Next.js y Stripe.",
    tech: "Next.js, React, Stripe, Tailwind CSS",
  },
  {
    title: "Task Management App",
    description: "Una aplicación de gestión de tareas con características de colaboración en tiempo real.",
    tech: "React, Firebase, Material-UI",
  },
  {
    title: "Portfolio Website",
    description: "Un sitio web de portfolio personalizado y responsive para un fotógrafo.",
    tech: "Gatsby.js, GraphQL, Styled Components",
  },
]

export default function Projects() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Here are some of my projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Tecnologías: {project.tech}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
