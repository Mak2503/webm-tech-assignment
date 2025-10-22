import { useState } from "react";
import type { Route } from "./+types/home";
import { Globe, Phone, Mail, ChevronRight } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | Admirals Clone" },
    { name: "description", content: "Contact Us" },
  ];
}

export default function Contact() {
  const contacts = {
    Argentina: {
      languages: "Es, En",
      phone: "+54 11 1234 5678",
      email: "latam@admiralmarkets.com",
    },
    Bolivia: {
      languages: "Es, En",
      phone: "+591 5015 4064",
      email: "latam@admiralmarkets.com",
    },
    Brazil: {
      languages: "Pt, En",
      phone: "+55 11 9876 5432",
      email: "support@admiralmarkets.com",
    },
    Bulgaria: {
      languages: "Bg, En",
      phone: "+359 2 123 4567",
      email: "info@admiralmarkets.com",
    },
    Canada: {
      languages: "En, Fr",
      phone: "+1 800 123 4567",
      email: "support@admiralmarkets.com",
    },
    India: {
      languages: "En, Hi",
      phone: "+91 800 123 4567",
      email: "support@admiralmarkets.com",
    },
  };

  const [selectedCountry, setSelectedCountry] = useState("India");
  const contact = contacts[selectedCountry];
  return (
    <section className="bg-[#f7f8fc]">
      <div className="container">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            Contact information
          </h1>
          <p className="text-slate-500">
            Select the country you are calling from
          </p>
        </div>
        <div className="py-8 w-full flex flex-col items-center">
          <div className="w-full max-w-full bg-white rounded-2xl shadow-sm p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Country List */}
              <div className="w-full md:w-1/3">
                <ul className="flex flex-col space-y-1">
                  {Object.keys(contacts).map((country) => (
                    <li
                      key={country}
                      onClick={() => setSelectedCountry(country)}
                      className={`cursor-pointer flex items-center justify-between rounded-lg px-4 py-2 leading-loose tracking-wide hover:bg-slate-100 transition ${
                        selectedCountry === country
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700"
                      }`}
                    >
                      {country}
                      {selectedCountry === country && <ChevronRight className="h-5 w-5" />}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div className="flex-1 border-l border-slate-200 pl-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-4">
                  Contacts
                </h2>

                <div className="space-y-4 text-slate-700">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-slate-500" />
                    <span>
                      {contact.languages}{" "}
                      <span className="text-slate-400 text-sm">
                        (Supported Languages)
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-slate-500" />
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-slate-500" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
