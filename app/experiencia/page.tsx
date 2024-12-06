import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Presente",
    description: "Lideré el desarrollo de aplicaciones web de alto rendimiento utilizando React y Next.js.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2020",
    description: "Desarrollé y mantuve aplicaciones web full-stack utilizando el stack MERN.",
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "2016 - 2018",
    description: "Colaboré en el desarrollo de sitios web responsivos para diversos clientes.",
  },
]

export default function Experience() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Mi Experiencia</h1>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.company} | {exp.period}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
