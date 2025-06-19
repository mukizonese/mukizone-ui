import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image";

export default function Architecture() {
return (
        <HoverCard>
          <HoverCardTrigger>Hover here for Architecture</HoverCardTrigger>
          <HoverCardContent>
                     <Image
                         className="dark:invert"
                         src="/icons/mukizone.drawio.svg"
                         alt="MukiZone"
                         width={500}
                         height={350}
                         priority
                       />
          </HoverCardContent>
        </HoverCard>
  );
}

export { Architecture }