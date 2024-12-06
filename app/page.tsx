import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Onest } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const onest = Onest({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className={`${onest.className} text-6xl font-bold`}>
        Hi, I'm Johanny
      </h1>
      <p className="text-xl">
        I'm a passionate web developer who loves creating exceptional digital
        experiences.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
          <CardDescription>
          A quick overview of my skills and experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
          With over 1 year of experience in web development, I specialize in creating modern and efficient web applications using the latest technologies
          </p>
        <Button className="mt-7">    
          <Link href="/projects" >See my works</Link>
          </Button>  
          
        </CardContent>
      </Card>
    </div>
  );
}
