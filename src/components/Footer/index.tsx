import "./Footer.css";

const footerSocialLinks = [
  "icon-youtube",
  "icon-linkedin",
  "icon-instagram",
  "icon-telegram",
  "icon-twitter",
];
const footerNavs = [
  {
    name: "Platforms",
    links: [
      "Admirals Platform",
      "MetaTrader WebTrader",
      "Admirals Mobile App",
      "MetaTrader Supreme Edition",
      "StereoTrader",
      "VPS",
      "Paralles for MAC",
      "MetaTrader 4",
      "MetaTrader 5",
      "Asset Management"
    ],
  },
  {
    name: "Products",
    links: [
      "Forex",
      "Commodities",
      "Indices",
      "Stocks",
      "ETFs",
      "Cryptocurrencies",
      "Margin Requirements",
      "Contract Specifications",
      "Fractional Investing",
    ],
  },
  {
    name: "Education",
    links: [
      "Forex & CFD Webinars",
      "Articles & Tutorials",
      "Trading Videos",
      "FAQs",
      "E-books",
    ],
  },
  {
    name: "Analytics",
    links: [
      "Macroscope",
      "Trading News",
      "Research Terminal",
      "Forex Calendar",
    ],
  },
  {
    name: "About us",
    links: [
      "Leadership & Expert",
      "Financial Security",
      "Secure your trading account",
      "Careers",
      "Help Center",
      "Company News"
    ],
  },
  {
    name: "Contact us",
    links: []
  },
  {
    name: "Partnership",
    links: []
  }
];

const footerRiskWarnings = [
  `The content of this website is not aimed at individuals residing in Belgium, nor is it intended for dissemination to, or utilization by, any individual in any country or jurisdiction where such dissemination or usage would violate local laws or regulations.`,
  `<b>Risk warning:</b> The information on the website is not targeted to any country or jurisdiction where such distribution or use would be contrary to local law or regulation. Admirals SC Ltd (Registration Number 8426894-1 ) has the necessary license and approval to operate under the brand “Admirals”. “Admirals SC Ltd or Admirals" where for the purpose of this website reference to either shall constitute actions of Admirals SC Ltd. Admirals SC Ltd is licensed by the Financial Services Authority of Seychelles (FSA) as a Securities Dealer in Seychelles under license number SD073`,
  "The information contained in this website is general information only and does not take into account your objectives, financial situation or needs. The content of this website must not be construed as personal advice. Before deciding to invest in any products or services offered by Admirals we recommend you seek independent advice and ensure you fully understand the risks involved before trading and carefully consider your objectives, financial situation, needs, and level of experience. Before you decide whether or not to pursue any products or services referred to in this website it`s important for you to read and consider the relevant Terms of Business.",
  "Admirals is not liable for any loss or damage, including without limitation, any loss of profit, which may arise directly or indirectly from the use of or reliance such information.",
  "Trading foreign exchange carries a high level of risk, and may not be suitable for all investors. The high degree of leverage available can magnify profits and as well as losses. You can lose more than your initial deposit. Before trading, please carefully consider the risks and inherent costs and seek independent advice as required. There are also risks associated with online trading including, but not limited to, hardware and/or software failures, and disruptions to communication systems and internet connectivity. Admirals utilises numerous backup systems and procedures to minimise such risks and reduce the duration and severity of any disruptions and failures. Admirals is not liable for any loss or damage, including without limitation, any loss of profit, which may arise directly or indirectly as a result of failures, disruptions or delays.",
  "Address: Suite 202, Second Floor, Waterside Property, Eden Island, Mahé, Seychelles with a right to operate under the name Admirals as Franchisee.",
  "All payments related to the Paysafe Group are facilitated by Pemax Services Ltd, number HE 320715, registered at Dramas 2 Floor, Nicosia, Cyprus acting as a payment agent of Admirals SC Ltd.",
  "Card transactions are processed by our business partner, Pemax Services Ltd (Registration No. HE 320715), whose registered and business office address issituated at Archiepiskopou Makariou III, 88, Floor 1, 1077, Nicosia, Cyprus.",
]

const Footer = () => {
  return (
    <footer className="p-0 pb-[130px]">
      <div className="container">
        {/* Footer Social */}
        <div className="mt-10 pt-10 border-t border-[#e3e3ea] flex flex-col lg:flex-row-reverse items-center justify-between">
          <div className="bg-gray-100 text-sm rounded-lg p-3 w-full lg:w-max mb-6 lg:mb-0">
            This website operates under <strong>Admirals SC Ltd</strong>
          </div>
          <div className="w-full lg:w-max">
            <div className="flex justify-center items-center gap-2.5">
              {footerSocialLinks.map((icon) => (
                <div key={icon}>
                  <a
                    href="#"
                    className="flex justify-center items-center w-12 h-12 rounded-full"
                    style={{ background: "rgba(24, 30, 48, .06)" }}
                  >
                    <span className={`footer-icon ${icon}`}></span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Seperator */}
        <div className="lg:block hidden my-10 border-t border-[#e3e3ea]"></div>
        {/* Footer Nav */}
        <div className="hidden lg:flex flex-wrap">
          {footerNavs.map((nav) => (
            <div key={nav.name} className="basis-1/2 pr-10 pl-0">
              <div className="mb-2.5">
                <a href="#" className="font-bold">{nav.name}</a>
              </div>
              <div className="pb-5">
                <ul className="-mr-1.5 -ml-1.5 flex flex-wrap">
                  {nav.links.map((link) => (
                    <li key={link} className="mr-1.5 ml-1.5">
                      <a href="#" className="text-sm transition-all opacity-85 hover:text-blue-500">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Footer Risk Warning */}
        <div>
          <div className="mt-10 pt-10 border-t border-[#e3e3ea] space-y-6">
            {footerRiskWarnings.map((item, index) => (
              <p key={index} className="text-sm leading-7 opacity-85" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
          <div className="mt-10 pt-10 border-t border-[#e3e3ea] flex justify-between">
            <div></div>
            <ul className="sm:text-right">
              <li className="text-sm">
                <a href="#">
                  <b>Privacy Policy</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-12 pt-12 border-t border-[#e3e3ea] flex items-center justify-between">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
