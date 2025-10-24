import { useQuery, useReadQuery } from "@apollo/client/react";
import type { Route } from "./+types/home";
import { gql } from "@apollo/client";
import { apolloLoader } from "~/apollo";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | Admirals Clone" },
    { name: "description", content: "About Us" },
  ];
}

const CONTACT_QUERY = gql`
  query ContactsList {
    contactsList {
      id
      name
      email
      message
    }
  }
`

export const loader = apolloLoader<Route.LoaderArgs>()(({ preloadQuery }) => {
  const myQueryRef = preloadQuery(CONTACT_QUERY);
  return {
    myQueryRef,
  };
});



export default function About() {
  const { myQueryRef } = useLoaderData<typeof loader>();

  const { data, dataState, error } = useReadQuery(myQueryRef);
  // const { data, loading, error } = useQuery(myQueryRef)

  if (dataState === 'streaming') return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("Contacts Data", data)

  return (
    <section className="bg-gray-50 text-gray-800 py-12 px-6 md:px-16 lg:px-24 text-center md:text-left">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary-text mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
            Admirals is a leading online trading service provider, offering
            investment services for trading with Forex and CFDs on indices,
            metals, energies and stocks.
          </p>
        </header>
        <div>
          <h2 className="text-3xl font-semibold text-primary-text mb-3">
            Dedication to Quality
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our dedication to providing access to highly-functional software and
            quality assurance means that our clients receive the best and most
            transparent trading experience. Admirals uses external auditors to
            enhance its operational and internal procedures to ensure regulatory
            compliance.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-primary-text mb-3">
            Global Presence
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Admirals, we believe our presence in various geographical regions
            enables us to provide clients with intelligent service and support
            wherever they choose to trade.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-primary-text mb-3">
            Regulatory Authorisation and Licence
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-800">
                CySEC in Cyprus
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Admiral Markets Cyprus Ltd is authorised and regulated by the
                Cyprus Securities and Exchange Commission (CySEC), with license
                number <strong>201/13</strong>, the supervisory and regulatory
                body for investment services firms in Cyprus. Admiral Markets
                Cyprus Ltd is a sister company of Admiral Markets AS (Estonia),
                which acts as our White Label service provider.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-800">
                Financial Services Authority of Seychelles (FSA)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Admirals SC Ltd is registered in Seychelles under Registration
                Number <strong>8426894-1</strong> and is authorized as a
                Securities Dealer by the Financial Services Authority of
                Seychelles under license number <strong>SD073</strong>. The
                information on the Admirals SC Ltd’s website is not directed at
                residents of the EU or any jurisdiction where such distribution
                or use would be contrary to local law or regulation.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-primary-text mb-3">
            Flexible Trading Accounts
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Deposits can be made in most national currencies, which are
            converted into USD, EUR, GBP, or other applicable currencies. Clients
            can also open multiple accounts in different currencies to protect
            capital from currency fluctuations. This enables convenient internal
            transfers between accounts directly from the Dashboard.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-primary-text mb-3">
            Education and Analytics
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Admirals enables clients to make better-informed trading decisions
            through educational programs, including webinars, seminars, and
            published materials in several languages. Our growing collection of
            analytical tools helps traders navigate financial markets more
            effectively.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-primary-text mb-3">
            Customer Support
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Admirals provides customer support via phone and live chat to assist
            clients in all technical and organisational matters. Details are
            available on our <span className="text-primary-text">Contact Us</span>{" "}
            page.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-primary-text mb-3">
            Security and Software
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our servers are located next to major liquidity providers to ensure
            best execution and lowest latency. Admirals offers industry-leading
            trading platforms <strong>MetaTrader 4</strong> and{" "}
            <strong>MetaTrader 5</strong>, developed by MetaQuotes Software
            Corp.
          </p>
        </div>
      </div>
    </section>
  );
}
