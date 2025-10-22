import { Tabs } from "@radix-ui/themes";
import PCTab from "./PCTab";
import WebTraderTab from "./WebTraderTab";

const TradingTabsDesktop = () => {
  return (
    <div className="trading-tabs-desktop">
      <div className="container">
        <div>
          <Tabs.Root defaultValue="pc">
            <div className="relative z-[1]">
              <div className="absolute flex left-0 top-6/12 py-1.5 px-2 transform -translate-y-1/2">
                <span className="relative left-0 block w-1 min-h-full bg-blue-500"></span>
                <strong className="text-2xl leading-8 px-2 py-0.5 m-0">
                  Trading
                </strong>
              </div>
              <div className="bg-white flex justify-center rounded-sm">
                <Tabs.List>
                  <Tabs.Trigger value="pc">PC</Tabs.Trigger>
                  <Tabs.Trigger value="web-trader">WEB TRADER</Tabs.Trigger>
                </Tabs.List>
              </div>
            </div>
            <div>
              <Tabs.Content value="pc">
                <PCTab />
              </Tabs.Content>
              <Tabs.Content value="web-trader">
                <WebTraderTab />
              </Tabs.Content>
            </div>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default TradingTabsDesktop;
