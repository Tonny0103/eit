import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  console.log("AAAAA");
  try {
    const req = await request.json();
    const users = await prisma.user.findUnique({
      where: {
        email: req.email,
        password: req.password,
      },
    });
    if (!users) {
      return "Usuário não encontrado";
    }
    return "Token de mentira";
  } catch (error) {
    return Response.json("Erro");
  }
}
