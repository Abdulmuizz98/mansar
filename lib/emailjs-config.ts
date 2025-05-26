// EmailJS configuration
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
};

// Validate EmailJS configuration
export const validateEmailJSConfig = () => {
  const { serviceId, templateId, publicKey } = emailjsConfig;

  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      "EmailJS configuration is incomplete. Please check your environment variables."
    );
    return false;
  }

  return true;
};
