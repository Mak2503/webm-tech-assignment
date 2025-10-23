import { useState } from "react";
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider, useMutation } from "@apollo/client/react";
import { Button } from "@/components/ui/button";
import type { ContactInput } from "@/__generated__/types";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache(),
});

const CONTACT_MUTATION = gql`
  mutation Contact($data: ContactInput!) {
    contact(data: $data)
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactInput>({
    name: "",
    email: "",
    message: "",
  });

  const [sendContact, { loading, error, data }] = useMutation(CONTACT_MUTATION);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data", formData)
    try {
      await sendContact({ variables: { data: formData } });
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <section className="bg-[#f7f8fc] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow">
          <h1 className="text-2xl font-semibold text-slate-800 mb-4">
            Contact Us
          </h1>
          <p className="text-slate-500 mb-6">
            We'd love to hear from you! Please fill out the form below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <Button type="submit" disabled={loading} className="w-full py-2 bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer">
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {/* <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button> */}

            {error && (
              <p className="text-red-500 text-sm mt-2">
                Error: {error.message}
              </p>
            )}
            {!!data && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default function ContactInfo() {
  return (
    <ApolloProvider client={client}>
      <ContactPage />
    </ApolloProvider>
  );
}
