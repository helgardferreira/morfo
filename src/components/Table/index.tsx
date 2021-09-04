import { FunctionComponent, useEffect, useState } from "react";
import { classNames } from "../../utils/classNames";
import generatePeople, { Person } from "../../utils/generatePeople";

interface IExtensibleProps {
  className?: string;
}

interface ITdProps extends IExtensibleProps {}

interface IThProps extends IExtensibleProps {
  variant?: "action";
}

const Th: FunctionComponent<IThProps> = ({ children, variant }) => (
  <th
    scope="col"
    className={classNames(
      "px-6 py-3",
      variant === "action"
        ? "relative"
        : "text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    )}
  >
    {children}
  </th>
);

const Td: FunctionComponent<ITdProps> = ({ children, className }) => (
  <td
    className={classNames(
      "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
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

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden border border-gray-300 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <Th>Name</Th>
                  <Th>Title</Th>
                  <Th>Email</Th>
                  <Th>City</Th>
                  <Th variant="action">
                    <span className="sr-only">Edit</span>
                  </Th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr
                    key={person.email}
                    className={personIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <Td className="font-medium text-gray-900">{person.name}</Td>
                    <Td>{person.title}</Td>
                    <Td>{person.email}</Td>
                    <Td>{person.city}</Td>
                    <Td className="text-right font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
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
