import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A complete eCommerce platform built with Next.js and Stripe",
    tech: "Next.js, React, Stripe, Tailwind CSS",
  },
  {
    title: "Netflix Clone",
    description: "A task management app with real-time collaboration features.",
    tech: "React, Redux, Tailwind CSS, NextAuth.js",
  },
  {
    title: "Closely",
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
