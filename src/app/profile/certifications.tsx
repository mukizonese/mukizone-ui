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

const certifications = [
	{
	    id: 1,
		card_title: "Certifications" ,
		card_description: "AWS Certified",
		card_contents: ["Cloud Practitioner"],
		card_footer: "Issued April 2023"
	},
	{
	    id: 2,
		card_title: "Certifications" ,
		card_description: "AWS Certified",
		card_contents: ["Solution Architect Associate"],
		card_footer: "Issued July 2024"
	}

];

export default function Certifications() {

    function CardContentFunction(card_contents : string[]) {
        const listItems = card_contents.map((card_content) =>
          <li>{card_content}</li>
        );
        return listItems ;
	}

  return (
        <div>
              <p className="text-xl font-bold">
                      Certifications
              </p>
            <div className="grid w-full grid-rows-2 gap-8 m-auto mt-32 sm:mt-4 lg:gap-8">
            {certifications.map((s) => (

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

export { Certifications }
