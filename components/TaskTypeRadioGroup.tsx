"sue client";

import { useBoardStore } from "@/store/BoardStore";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const types = [
    {
        id: "todo",
        name : "To Do",
        color: "bg-red-500",
        description: "A new task to be completed"
    },
    {
        id: "inprogress",
        name : "In Progress",
        color: "bg-yellow-500",
        description: "A task that is currently being worked on"
    },
    {
        id: "done",
        name : "Done",
        color: "bg-green-500",
        description: "A task that has been completed"
    }
]

function TaskTypeRadioGroup() {

  const [setNewTaskType, newTaskType] = useBoardStore((state) => [
    state.setNewTaskType,
    state.newTaskType
  ]);

  return (
    <div className="w-full py-5">
        <div className="mx-auto w-full max-w-md">
            <RadioGroup 
                value={newTaskType}
                onChange={(e) => setNewTaskType(e)}
            >
                <div className="space-y-2 ">
                    {types.map((type) => (
                        <RadioGroup.Option
                            key={type.id}
                            value={type.id}
                            className={({ active, checked }) =>
                                `${
                                    active
                                        ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                                        : ""
                                }
                                ${
                                    checked
                                        ? `${type.color} bg-opacity-75 text-white`
                                        : "bg-white"
                                }
                                relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                            }
                        >
                            {({active, checked}) => (
                                <>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center">
                                            <div className="text-sm">
                                                <RadioGroup.Label
                                                    as="p"
                                                    className={`font-medium  ${
                                                        checked ? "text-white" : "text-gray-900"
                                                    }`}
                                                >
                                                    {type.name}
                                                </RadioGroup.Label>
                                                <RadioGroup.Description
                                                    as="span"
                                                    className={`inline ${
                                                        checked ? "text-sky-100" : "text-gray-500"
                                                    }`}
                                                >
                                                    <span>{type.description}</span>
                                                </RadioGroup.Description>
                                            </div>
                                        </div>
                                        {checked && (
                                            <div className="shrink-0 text-white">
                                                <CheckCircleIcon className="w-6 h-6" />
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    </div>
  )
}

export default TaskTypeRadioGroup