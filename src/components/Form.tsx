import { PropsWithChildren } from "react";

type Props = {
  title: string;
  submitDisabled?: boolean;
} & Omit<React.ComponentProps<"form">, "className">;

export const Form: React.FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  title,
  submitDisabled,
  ...formProps
}) => {
  return (
    <form className="space-y-8 divide-y divide-gray-200 px-4" {...formProps}>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {title}
            </h3>
          </div>
          {children}
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitDisabled}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
