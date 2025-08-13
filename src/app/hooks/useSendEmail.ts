import { useState } from "react";

interface EmailData {
    name: string;
    email: string;
    whatsapp: string;
    local: string;
    message: string;
}

export const useSendEmail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = async (data: EmailData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("No se pudo enviar el email.");
            }

            setSuccess(true);
        } catch (err: any) {
            setError(err.message || "Error al enviar el correo.");
        } finally {
            setLoading(false);
        }
    };

    return { sendEmail, loading, error, success };
};
