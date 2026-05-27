import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormField {
  name: string;
  label: string;
  type: string;
  options?: string[];
}

interface Props {
  serviceTitle: string;
  fields: FormField[];
  email?: string;
}

export function ServiceLeadForm({ serviceTitle, fields, email = "rupeshgohel376@gmail.com" }: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = fields
      .map((f) => `${f.label}: ${values[f.name] || "—"}`)
      .join("\n");
    const subject = encodeURIComponent(`Enquiry: ${serviceTitle}`);
    const body = encodeURIComponent(`Service Enquiry — ${serviceTitle}\n\n${lines}\n\n---\nSent from sjsarchitecture.com`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6">
        <div className="h-16 w-16 bg-[#CC0000] flex items-center justify-center mb-5">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="font-display font-bold text-2xl text-[#111111] mb-3">
          Request Sent!
        </h3>
        <p className="text-muted-foreground max-w-sm leading-relaxed">
          Your enquiry for <strong>{serviceTitle}</strong> has been prepared. If your email client opened, just hit Send. We typically respond within 2 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-[#CC0000] font-semibold hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map((field) => {
        const base =
          "w-full bg-white border border-[#e5e5e5] focus:border-[#CC0000] focus:outline-none px-4 py-3 text-sm text-[#111111] placeholder:text-[#aaa] transition-colors font-sans";

        if (field.type === "select") {
          return (
            <div key={field.name}>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#666] mb-1.5">
                {field.label}
              </label>
              <select
                required
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className={base}
              >
                <option value="" disabled>
                  Select…
                </option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        if (field.type === "textarea") {
          return (
            <div key={field.name}>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#666] mb-1.5">
                {field.label}
              </label>
              <textarea
                rows={4}
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className={`${base} resize-none`}
                placeholder="Describe your requirement…"
              />
            </div>
          );
        }

        return (
          <div key={field.name}>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#666] mb-1.5">
              {field.label}
            </label>
            <input
              type={field.type}
              required={field.name === "name" || field.name === "phone"}
              value={values[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className={base}
              placeholder={field.label}
            />
          </div>
        );
      })}

      <button
        type="submit"
        className="w-full bg-[#CC0000] hover:bg-[#a80000] text-white py-4 font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-colors mt-2"
      >
        <Send className="h-4 w-4" />
        Send Enquiry
      </button>

      <p className="text-xs text-center text-[#aaa] leading-relaxed">
        We respond within 2 hours. Or call us directly:{" "}
        <a href="tel:+918530081327" className="text-[#CC0000] font-semibold">
          +91 85300 81327
        </a>
      </p>
    </form>
  );
}
