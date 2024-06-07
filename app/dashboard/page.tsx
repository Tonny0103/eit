import Order from "@/components/Order";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const orders = await prisma.order.findMany({ include: { user: true } });
  return (
    <div className="bg-red-300 min-h-screen">
      <h1 className="text-3xl font-bold">Pedidos</h1>
      <div className="flex justify-center">
        {orders.map((order) => (
          <Order
            key={order.name}
            name={order.name}
            cell={order.cell}
            description={order.description}
            address={order.address}
            user={order.user}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
