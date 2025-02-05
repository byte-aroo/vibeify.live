import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
}

export function AboutCard({ title, description, subTitle, imageUrl }: AboutCardProp) {
  return (
    <Card shadow={false} {...({} as React.ComponentProps<typeof Card>)}>
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-cover bg-center bg-no-repeat "
       style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl})` }} 
       {...({} as React.ComponentProps<typeof CardBody>)}
       >
        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div> 
        <div className="relative z-10 flex flex-col items-center text-center w-full">
        <Typography variant="h6" className="mb-4 text-center" color="white" {...({} as React.ComponentProps<typeof Typography>)}>
          {subTitle}
        </Typography>
        <Typography variant="h4" className="text-center" color="white" {...({} as React.ComponentProps<typeof Typography>)}>
          {title}
        </Typography>
        <Typography
          color="white"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
          {...({} as React.ComponentProps<typeof Typography>)}
        >
          {description}
        </Typography>
        {/* <Button color="white" size="sm">
          view details
        </Button> */}
        </div>
      </CardBody>
    </Card>
  );
}


export default AboutCard;
