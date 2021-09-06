import { FunctionComponent, useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { classNames } from "../../utils/classNames";
import generatePeople, { Person } from "../../utils/generatePeople";
import { moveHeader, selectHeadings } from "./tableSlice";

interface IExtensibleProps {
  className?: string;
}

interface ITdProps extends IExtensibleProps {}

interface IThProps extends IExtensibleProps {
  variant?: "action";
  id?: string;
}

const Th: FunctionComponent<IThProps> = ({ children, variant, id }) => {
  const dispatch = useAppDispatch();

  const [, drag] = useDrag({
    type: "tableHeader",
    item: {
      id,
    },
    canDrag: () => !!id,
  });

  const [, drop] = useDrop({
    accept: "tableHeader",
    drop: (item: { id: string }) => {
      dispatch(
        moveHeader({
          // What heading we are grabbing
          currentId: item.id,
          // Where we are dropping the heading
          targetId: id!,
        })
      );
    },
    canDrop: () => !!id,
  });

  return (
    <th
      ref={drag}
      scope="col"
      className={classNames(
        "px-6 py-3",
        variant === "action"
          ? "relative"
          : "text-left text-xs font-bold text-gray-500 dark:text-white uppercase tracking-wider"
      )}
    >
      <div ref={drop}>{children}</div>
    </th>
  );
};

const Td: FunctionComponent<ITdProps> = ({ children, className }) => (
  <td
    className={classNames(
      "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white",
      className ?? ""
    )}
  >
    {children}
  </td>
);

const Table: FunctionComponent = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    setPeople(generatePeople(20));
  }, []);

  const headings = useAppSelector(selectHeadings);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden border-2 border-gray-300 dark:border-gray-900 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-900">
                <tr>
                  {headings.map((heading) => (
                    <Th key={heading.id} id={heading.id}>
                      {heading.text}
                    </Th>
                  ))}
                  <Th variant="action">
                    <span className="sr-only">Edit</span>
                  </Th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr
                    key={person.email}
                    className={
                      personIdx % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-gray-50 dark:bg-gray-900"
                    }
                  >
                    {/* <Td className="font-medium text-gray-900">{person.name}</Td> */}
                    {headings.map((heading) => (
                      <Td key={heading.id}>{person[heading.id]}</Td>
                    ))}
                    <Td className="text-right font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300"
                      >
                        Edit
                      </a>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
