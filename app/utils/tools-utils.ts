import { tools } from "~/data/tools";

const generateId = () => {
  const random = Math.random().toString(36).substring(2)
  const date = Date.now().toString(36)

  return `${random}${date}`
}

export const formatTool = (tool: keyof typeof tools) => {
  const toolFormatted = tools[tool]
  
  return {
    id: generateId(),
    ...toolFormatted
  }
};
