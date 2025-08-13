import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, whatsapp, local, message } = await req.json();

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ message: "Faltan campos obligatorios" }), { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Formulario Web" <${process.env.SMTP_USER}>`,
            to: "contacto@sommierworld.com",
            subject: "Nueva consulta desde la web",
            html: `
        <h2>Nueva consulta</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Local de preferencia:</strong> ${local}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
        });

        return new Response(JSON.stringify({ message: "Correo enviado correctamente" }), { status: 200 });
    } catch (error) {
        console.error("Error enviando correo:", error);
        return new Response(JSON.stringify({ message: "Error enviando el correo" }), { status: 500 });
    }

}
