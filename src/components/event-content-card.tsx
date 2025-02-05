import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}
export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="lg:!flex-row mb-10 lg:items-end" 
      {...({} as React.ComponentProps<typeof Card>)}
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="h-[32rem] max-w-[28rem] shrink-0" 
        {...({} as React.ComponentProps<typeof CardHeader>)}
      >
        <Image
          width={768}
          height={768}
          src={`${process.env.PUBLIC_URL}/images/banner.jpg`} 
          alt="Banner Image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="col-span-full lg:col-span-3" {...({} as React.ComponentProps<typeof CardBody>)}>
        <Typography variant="h6" color="blue-gray" className="mb-4" {...({} as React.ComponentProps<typeof Typography>)}>
          {panel}
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4 font-medium" {...({} as React.ComponentProps<typeof Typography>)}>
          {title}
        </Typography>
        <Typography className="mb-12 md:w-8/12 font-medium !text-gray-500" {...({} as React.ComponentProps<typeof Typography>)}>
          {des}
        </Typography>
        <div className="flex items-center gap-4">
          <Avatar
            variant="circular"
            src={`${process.env.PUBLIC_URL}/logos/logo-vibeify.png`}
            alt="spotify"
            size="lg"
            {...({} as React.ComponentProps<typeof Avatar>)}
          />
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-0.5" {...({} as React.ComponentProps<typeof Typography>)}>
              {name}
            </Typography>
            <Typography variant="small" className="font-normal !text-gray-750" style={{fontWeight: "bold", fontStyle: "italic"}} {...({} as React.ComponentProps<typeof Typography>)}>
              {position}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default EventContentCard;
