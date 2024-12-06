import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Junior Frontend Developer",
    company: "My House 🤣",
    period: "2024 - Presente",
    description: "I am a person who always seeks to improve himself.",
  },
  {
    title: "Video Game Developer",
    company: "BootsDev-X Productions",
    period: "2020 - Present",
    description: "I am a person who always seeks to improve himself.",
  },
  {
    title: "Learning Davinci Resolve",
    company: "WebCraft Agency",
    period: "2016 - 2018",
    description: "I am improving every day to be the best at what I do well.",
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
