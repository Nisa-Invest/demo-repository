import { Container } from "@mui/material";
import { WidgetColumn } from "./WidgetColumn";
export function WidgetsContainer() {
  return (
    <Container>
      {/* Pensions */}
      <WidgetColumn title="complete"></WidgetColumn>
      {/* Student Loan Repayments */}
      <WidgetColumn title="todo"></WidgetColumn>
      {/* Family Benefits */}
    
      {/* Charitable Giving */}
    </Container>
  );
}
