import React, { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

const COMPANY_PHONE = "+916380513174";

type Props = {
  trigger?: React.ReactNode;
};

const WhatsAppPopup: React.FC<Props> = ({ trigger }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const popup = params.get("popup");
      const show = params.get("showWhatsApp");
      if (popup === "whatsapp" || show === "1" || show === "true") {
        setOpen(true);
      }
    } catch (e) {
      // ignore if window or URLSearchParams not available
    }
  }, []);

  const handleSend = () => {
    const text = `Hello, my name is ${name || ""}. Phone: ${phone || ""}. ${message || ""}`;
    const wa = `https://wa.me/${COMPANY_PHONE.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(wa, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{trigger ?? (
        <button className="hidden md:flex items-center gap-2 text-sm font-medium bg-accent text-accent-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
          WhatsApp
        </button>
      )}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send us your details</DialogTitle>
          <DialogDescription>Fill the form below and we'll send a message on WhatsApp.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 py-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium text-foreground mb-1">Name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered" placeholder="Your name" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-foreground mb-1">Phone</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="input input-bordered" placeholder="Your phone (e.g. +919XXXXXXXXX)" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-foreground mb-1">Message</span>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="input input-bordered h-24" placeholder="Brief message" />
          </label>
        </div>

        <DialogFooter>
          <button onClick={handleSend} className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold">Send on WhatsApp</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppPopup;
