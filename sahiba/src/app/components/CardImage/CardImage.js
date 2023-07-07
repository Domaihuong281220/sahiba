/** @format */

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const CardImage = (props) => {
  const { title, url } = props;

  return (
    <Card className="rounded-none px-2">
      <CardHeader shadow={false} floated={false} className="h-72 w-56 ">
        <img src={url} className="w-full h-full object-fit" />
      </CardHeader>
      <CardBody>
        <Typography variant="small" className="font-mar text-black ">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
};
export default CardImage;
