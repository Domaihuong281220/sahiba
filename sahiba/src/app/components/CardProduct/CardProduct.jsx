/** @format */

// /** @format */

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function CardProduct(props) {
  const { url, title, price, description } = props;
  return (
    <Card className="w-64">
      <CardHeader shadow={false} floated={false} className="h-72 relative">
        <a className="" href="/productdetail">
          <img src={url} className="w-full h-full object-cover" />
        </a>
        <button className="absolute top-0 right-0 p-3">
          <Icon
            icon="mdi:heart-outline"
            width={32}
            height={32}
            className="text-white font-bold"
          ></Icon>
        </button>
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-mar">
            {title}
          </Typography>
          <Typography color="blue-gray" className="font-mar">
            {price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-mar opacity-75"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100 font-mar"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
