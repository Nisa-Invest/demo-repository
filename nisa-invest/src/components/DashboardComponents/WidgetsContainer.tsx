//import { Container } from "@mui/material";
import { WidgetColumn } from "./WidgetColumn";
import { Widget } from "./Widget";
export function WidgetsContainer() {
  return (
    <div>
      {/* Pensions */}
      <>
        <h2 className="font-heading text-xl"> Pensions</h2>
        <WidgetColumn title="Completed Tasks">
          <Widget
            id={1}
            title="Update Documentation"
            description="Added new API endpoints"
            status="Doing Well!"
          />
        </WidgetColumn>
        {/* Student Loan Repayments */}
        {/* <WidgetColumn title="To Do"></WidgetColumn> */}
      </>
      {/* Family Benefits */}

      {/* Charitable Giving */}
    </div>
  );
}
