import { TimeEntryView } from "./TimeEntryView";
import { TimeEntry } from "../types/TimeEntry";

interface Props {
  timeEntries: TimeEntry[];
}

export const TimeEntryList: React.FunctionComponent<Props> = ({
  timeEntries,
}) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {timeEntries.map((timeEntry) => (
          <li key={timeEntry.id}>
            <TimeEntryView timeEntry={timeEntry} />
          </li>
        ))}
      </ul>
    </div>
  );
};
