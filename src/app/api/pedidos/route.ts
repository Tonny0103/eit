import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const response = await prisma.order.findMany();
    const enderecos = response.map((res) => res.address);
    return enderecos;
  } catch (error) {
    return "Erro ao buscar pedidos";
  }
}
