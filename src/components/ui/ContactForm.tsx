
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_email: formData.email,
        to_email: "simone.terranova@studenti.polito.it",
        subject: formData.subject,
        message: formData.message,
      };
      
      // Log submission for debugging
      console.log("Sending email:", templateParams);
      
      // Send the email using EmailJS
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your actual service ID
        "YOUR_TEMPLATE_ID", // Replace with your actual template ID
        templateParams
      );
      
      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Your message has been sent to Simone Terranova.",
      });
      
      // Clear form
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex w-full flex-col items-stretch text-base text-[#391400] font-normal mx-auto px-12 py-[53px] rounded-md"
    >
      <h2 className="text-[#391400] text-2xl font-bold leading-none">
        Get In Touch
      </h2>

      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Your email"
        className="bg-white border leading-8 mt-[23px] px-4 py-2 rounded-md border-[rgba(243,209,191,1)] border-solid"
        required
      />

      <input
        type="text"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        placeholder="Subject"
        className="bg-white border leading-8 mt-4 px-4 py-2 rounded-md border-[rgba(243,209,191,1)] border-solid"
        required
      />

      <textarea
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Message"
        className="bg-white border leading-8 mt-4 px-4 py-2 h-32 rounded-md border-[rgba(243,209,191,1)] border-solid resize-none"
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-[rgba(239,109,88,1)] text-sm text-white font-black text-center uppercase mt-8 px-[30px] py-[17px] rounded-md hover:bg-[rgba(239,109,88,0.9)] transition-colors ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Sending..." : "Submit Now"}
      </button>
    </form>
  );
};
