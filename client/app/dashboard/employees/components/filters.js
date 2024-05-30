import { IndividualFilter } from "./individualFilter";
import { User, Briefcase, Folder, Check } from "lucide-react";

export const Filters = () => (
  <div className="flex items-center gap-4 mb-4">
    <IndividualFilter
      label="Name"
      icon={User}
      options={[
        { label: "Ascending", value: "ascending" },
        { label: "Descending", value: "descending" },
      ]}
    />
    <IndividualFilter
      label="Position"
      icon={Briefcase}
      options={[
        { label: "Ascending", value: "ascending" },
        { label: "Descending", value: "descending" },
      ]}
    />
    <IndividualFilter
      label="Department"
      icon={Folder}
      options={[
        { label: "Ascending", value: "ascending" },
        { label: "Descending", value: "descending" },
      ]}
    />
    <IndividualFilter
      label="Status"
      icon={Check}
      options={[
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ]}
    />
  </div>
);
