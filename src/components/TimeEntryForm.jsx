import { useState } from "react";
import { InputWithLabel } from "./InputWithLabel";
import { Form } from "./Form";

const initialFormData = { comment: "", start: "", end: "" };

const isFormDataValid = (formData) => {
  if (formData.comment === "") {
    return false;
  }

  const start = new Date(formData.start);
  const end = new Date(formData.end);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return false;
  }

  return start <= end;
};

export const TimeEntryForm = ({ onLogTime }) => {
  const [formData, setFormData] = useState(initialFormData);

  const isValid = isFormDataValid(formData);

  return (
    <Form
      title="Create time entry"
      submitDisabled={!isValid}
      onSubmit={(event) => {
        event.preventDefault();
        if (!isValid) {
          return;
        }
        onLogTime({
          ...formData,
          start: new Date(formData.start),
          end: new Date(formData.end),
        });
        setFormData(initialFormData);
      }}
    >
      <InputWithLabel
        label="Comment"
        type="text"
        value={formData.comment}
        onChange={(event) => {
          setFormData((oldValue) => ({
            ...oldValue,
            comment: event.target.value,
          }));
        }}
      />
      <InputWithLabel
        label="Start"
        type="datetime-local"
        value={formData.start}
        onChange={(event) => {
          setFormData((oldValue) => ({
            ...oldValue,
            start: event.target.value,
          }));
        }}
      />
      <InputWithLabel
        label="End"
        type="datetime-local"
        value={formData.end}
        onChange={(event) => {
          setFormData((oldValue) => ({
            ...oldValue,
            end: event.target.value,
          }));
        }}
      />
    </Form>
  );
};
