export const InputWithLabel = ({ label, ...inputProps }) => {
  return (
    <div className="space-y-6 sm:space-y-5">
      <label>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <div className="text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            {label}
          </div>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <input
              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
              {...inputProps}
            />
          </div>
        </div>
      </label>
    </div>
  );
};
