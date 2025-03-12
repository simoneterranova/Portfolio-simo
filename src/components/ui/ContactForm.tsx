
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

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
      // Format email data
      const emailData = {
        to: "simone.terranova@studenti.polito.it",
        from: formData.email,
        subject: formData.subject,
        message: formData.message,
      };
      
      // Log submission for debugging
      console.log("Sending email:", emailData);
      
      // Send the email using a fetch request to an email service
      // This is a mockup - in a real app you'd use a service like EmailJS, SendGrid, etc.
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "your_service_id", // Replace with actual service ID
          template_id: "your_template_id", // Replace with actual template ID
          user_id: "your_user_id", // Replace with actual user ID
          template_params: {
            to_email: emailData.to,
            from_email: emailData.from,
            subject: emailData.subject,
            message: emailData.message,
          },
        }),
      });
      
      // Simulate API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Message sent successfully!",
        description: `Your message has been sent to ${emailData.to}`,
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
        Professional Inquiries
      </h2>
      
      <p className="mt-4 text-[#391400]">
        I welcome discussions regarding technical collaborations, research opportunities, and consulting engagements in IoT development, simulation engineering, or data analytics implementations.
      </p>

      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Your Email (Required)"
        className="bg-white border leading-8 mt-6 px-4 py-2 rounded-md border-[rgba(243,209,191,1)] border-solid"
        required
      />

      <input
        type="text"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        placeholder="Subject (Project Type/Inquiry Category)"
        className="bg-white border leading-8 mt-4 px-4 py-2 rounded-md border-[rgba(243,209,191,1)] border-solid"
        required
      />

      <textarea
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Message Details"
        className="bg-white border leading-8 mt-4 px-4 py-2 h-32 rounded-md border-[rgba(243,209,191,1)] border-solid resize-none"
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-[rgba(239,109,88,1)] text-sm text-white font-black text-center uppercase mt-8 px-[30px] py-[17px] rounded-md hover:bg-[rgba(239,109,88,0.9)] transition-colors flex items-center gap-2 justify-center ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
        <Send size={16} />
      </button>
    </form>
  );
};
