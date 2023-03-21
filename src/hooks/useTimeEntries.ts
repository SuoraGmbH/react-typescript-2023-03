import { useArrayState } from "./useArrayState";
import { TimeEntry } from "../types/TimeEntry";
import { v4 } from "uuid";

export interface NewTimeEntry {
  comment: string;
  start: Date;
  end: Date;
}

interface UseTimeEntriesResult {
  timeEntries: TimeEntry[];
  logTime: (timeEntry: NewTimeEntry) => void;
}

export const useTimeEntries = (): UseTimeEntriesResult => {
  const [timeEntries, timeEntryModifiers] = useArrayState<TimeEntry>([
    {
      id: "394ec61d-741d-411a-bdc7-e5a9c5efe53d",
      comment: "My first time entry",
      start: new Date("2023-03-21T08:00:00Z"),
      end: new Date("2023-03-21T09:00:00Z"),
    },
    {
      id: "b6daadc6-7bdf-44f3-8f82-4c6e9e281170",
      comment: "My second time entry",
      start: new Date("2023-03-21T11:00:00Z"),
      end: new Date("2023-03-21T12:00:00Z"),
    },
  ]);

  return {
    timeEntries,
    logTime: (timeEntry: NewTimeEntry) => {
      timeEntryModifiers.push({
        ...timeEntry,
        id: v4(),
      });
    },
  };
};
