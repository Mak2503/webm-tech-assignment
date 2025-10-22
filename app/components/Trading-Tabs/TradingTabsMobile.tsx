import { Tabs } from "@radix-ui/themes";
import PCTab from "./Desktop/PCTab";
import WebTraderTab from "./Desktop/WebTraderTab";

const TradingTabsMobile = () => {
  return (
    <div className="trading-tabs-mobile">
      <div className="container">
        <div>
          <Tabs.Root defaultValue="pc">
            <Tabs.List className="!justify-center">
              <Tabs.Trigger value="pc">PC</Tabs.Trigger>
              <Tabs.Trigger value="web-trader">WEB TRADER</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="pc">
              <PCTab />
            </Tabs.Content>
            <Tabs.Content value="web-trader">
              <WebTraderTab />
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default TradingTabsMobile;
