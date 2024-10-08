"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const expertise = [
	{
		card_title: "Container and Cloud" ,
		card_description: "Card Desc",
		card_contents: ["AWS", "DOCKER"],
		card_footer: "Card Footer"
	},
	{
        card_title: "Frontend Developer" ,
        card_description: "Card Desc",
        card_contents: ["Next JS", "React", "Vaadin"],
        card_footer: "Card Footer"
    },
    {
        card_title: "Backend Developer" ,
        card_description: "Card Desc",
        card_contents: ["Microservices", "Spring Framework, Spring Boot", "Hibernate, JPA", "SOAP, Rest, Json, Avro", "Apache Kafka, Active MQ"],
        card_footer: "Card Footer"
    },
    {
        card_title: "Design & Architecture" ,
        card_description: "Card Desc",
        card_contents: ["Domain Driven Design (DDD)", "Design Patterns", "Enterprise Architecture",
            "CI/CD –Maven, Jules, Jenkins, Pipelines", "Resiliency"],
        card_footer: "Card Footer"
    }

];

export default function Expertise() {

    function CardContentFunction(card_contents : string[]) {
        const listItems = card_contents.map((card_content) =>
          <li>{card_content}</li>
        );
        return listItems ;
	}

  return (
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-4 lg:gap-8">
        {expertise.map((s) => (
            <Card>
              <CardHeader>
                <CardTitle>{s.card_title}</CardTitle>
                <CardDescription>{s.card_description}</CardDescription>
              </CardHeader>
              <CardContent>
                    {   CardContentFunction(s.card_contents) }
              </CardContent>
              <CardFooter>
                <p>{s.card_footer}</p>
              </CardFooter>
            </Card>

        ))}
        </div>
  );
}

export { Expertise }
