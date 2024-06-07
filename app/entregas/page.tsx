import Delivery from "@/components/Delivery";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const orders = await prisma.order.findMany();
  const addresses = orders.map((order) => order.address);
  return <Delivery addresses={addresses} />;
};

export default page;
