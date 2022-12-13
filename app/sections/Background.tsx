import background from "~/data/background.json";
import { formatTool } from "~/utils/tools-utils";

const Background = () => (
  <div className="flex flex-row flex-wrap mt-5">
    {background.tools.map((tool) => {
      const { id, label, Icon } = formatTool(tool);
      return (
        label &&
        Icon && (
          <div
            className="flex flex-col items-center my-4 w-1/2 md:w-1/3 transition-all duration-300 md:hover:scale-125"
            key={`tool-${id}`}
          >
            <Icon className="text-3xl md:text-5xl text-gray-500 dark:text-pink-200" />
            <p className="text-sm md:text-lg text-gray-400 cursor-default">
              {label}
            </p>
          </div>
        )
      );
    })}
  </div>
);

export default Background;
