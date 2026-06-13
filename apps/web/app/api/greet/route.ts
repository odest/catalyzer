export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = body.name;

    if (!name || typeof name !== "string") {
      return new Response(JSON.stringify({ error: "Name is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const sanitizedName = name.trim().slice(0, 100);

    return Response.json({
      message_key: "successGreeting",
      name: sanitizedName,
      source: "Next.js",
    });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
