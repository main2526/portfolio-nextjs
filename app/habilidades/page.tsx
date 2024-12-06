import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    category: "Desarrollo Frontend",
    technologies: ["React", "Next.js", "TypeScript", "CSS/Sass", "Responsive Design"],
  },
  {
    category: "Desarrollo Backend",
    technologies: ["Node.js", "Express", "GraphQL", "RESTful APIs"],
  },
  {
    category: "Bases de Datos",
    technologies: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Herramientas y Metodologías",
    technologies: ["Git", "Agile/Scrum", "Jest", "Webpack", "CI/CD"],
  },
]

export default function Skills() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Mis Habilidades</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skillGroup) => (
          <Card key={skillGroup.category}>
            <CardHeader>
              <CardTitle>{skillGroup.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {skillGroup.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
