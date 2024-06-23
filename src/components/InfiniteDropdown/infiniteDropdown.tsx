import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SubDropdown from "../SubDropdown/subDropdown";

interface InfiniteDropdownProps {
  items: { label: string; options: any[] }[];
  // items:any
}

const InfiniteDropdown = (props: InfiniteDropdownProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <>OPEN</>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {props.items.map((item, index) => {
            return (
              (item.options.length === 0 && (
                <DropdownMenuItem key={index}>{item.label}</DropdownMenuItem>
              )) ||
              (item.options.length > 0 && (
                <SubDropdown item={item}/>
              ))
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default InfiniteDropdown;
