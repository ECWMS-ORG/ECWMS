import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User, Check, ChevronRight, Briefcase, Folder } from "lucide-react";

export const IndividualFilter = ({ label, icon: Icon, options }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size="sm" variant="outline">
        <Icon className="w-5 h-5 mr-2" />
        {label}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" className="w-[200px]">
      <DropdownMenuLabel>Filter by {label}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {options.map(option => (
        <DropdownMenuCheckboxItem key={option.value}>
          <Check className="w-4 h-4 mr-2" />
          {option.label}
        </DropdownMenuCheckboxItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);
