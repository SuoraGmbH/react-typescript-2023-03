import React from "react";
import { TimeEntryListPage } from "./pages/TimeEntryListPage";

interface Props {}

export const App: React.FunctionComponent<Props> = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <TimeEntryListPage />
    </div>
  );
};
