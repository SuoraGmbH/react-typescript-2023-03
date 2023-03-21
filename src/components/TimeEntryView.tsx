export interface TimeEntry {
  comment: string;
  start: Date;
  end: Date;
}

interface Props {
  timeEntry: TimeEntry;
}

export const TimeEntryView: React.FunctionComponent<Props> = ({
  timeEntry,
}) => {
  return (
    <div className="flex items-center px-4 py-4 sm:px-6">
      <div className="min-w-0 flex-1 flex items-center">
        <div className="flex-shrink-0">⏱</div>
        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
          <div>
            <p className="text-sm font-medium text-indigo-600 truncate">
              {timeEntry.comment}
            </p>
            <p className="mt-2 flex items-center text-sm text-gray-500">
              <span className="truncate">
                {timeEntry.start.toLocaleString()} -{" "}
                {timeEntry.end.toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
