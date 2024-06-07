import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cellphone } from "@/utils/mask";

const Order = ({ name, cell, description, address, user }: Order) => {
  return (
    <div className="w-4/5">
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
          <div>
            <p className="font-bold">Endereço:</p>
            <p>{address}</p>
          </div>
        </CardContent>
        <CardFooter>
          <div>
            <p className="font-bold">Telefeno para contato:</p>
            <p>{cellphone(cell)}</p>
            <div>
              <p className="font-bold">Entregador:</p>
              <p>{user.name}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Order;
