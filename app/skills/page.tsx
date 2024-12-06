import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    category: "Web Development",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
  },
  
  {
    category: "Databases",
    technologies: ["SqlServer", "PostgreSQL", "MySQL"],
  },
  {
    category: "Gamer Development Experiments with Unity Technologies",
    technologies: ["C#", "Blender", "Audacity",  ],
  },

  {
    category: "Learning Davinci Resolve",
    technologies: ["Sounds", "Fusion", "Effects Advanced",  ],
  },
]

export default function Skills() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">My skills</h1>
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
