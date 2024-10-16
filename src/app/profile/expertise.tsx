"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import * as React from "react"

const expertise = [
	{
	    id: 1,
		card_title: "Container and Cloud" ,
		card_description: "",
		card_contents: ["AWS - EC2, ECS, Lambda", "Docker"],
		card_footer: "This website is hosted on AWS(ap-south-1). Webcontainer is a Docker Container pulled from AWS ECR."
	},
	{
	    id: 2,
        card_title: "Frontend Developer" ,
        card_description: "",
        card_contents: ["Next.js", "React", "Vaadin"],
        card_footer: "This website is a Next.js stand-alone app over Nginx reverse proxy."
    },
    {
        id: 3,
        card_title: "Backend Developer" ,
        card_description: "",
        card_contents: ["Microservices", "Hibernate, JPA", "SOAP, Rest, Json, Avro", "Apache Kafka, Active MQ"],
        card_footer: ""
    },
    {
        id: 4,
        card_title: "Spring Framework" ,
        card_description: "",
        card_contents: ["Spring Boot", "Spring Config Server","Spring Data/JPA", "Spring Integration / Camel", "Spring Batch"],
        card_footer: ""
    },
    {
        id: 5,
        card_title: "Caching" ,
        card_description: "",
        card_contents: ["Gemfire", "Redis"],
        card_footer: ""
    },
    {
        id: 6,
        card_title: "CI/CD" ,
        card_description: "",
        card_contents: ["Maven", "Jules", "Jenkins", "Pipelines", "Liquibase"],
        card_footer: ""
    },
    {
        id: 7,
        card_title: "Design & Architecture" ,
        card_description: "",
        card_contents: ["Domain Driven Design (DDD)", "Design Patterns", "Enterprise Architecture",
            "Observability", "Resiliency"],
        card_footer: ""
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
        <div>
            <p className="text-xl font-bold">
                    Expertise
            </p>
            <div className="grid w-full grid-cols-3 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-4 lg:gap-8">
            {expertise.map((s) => (
            <React.Fragment key={s.id}>
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
            </React.Fragment>
            ))}
            </div>
        </div>
  );
}

export { Expertise }
