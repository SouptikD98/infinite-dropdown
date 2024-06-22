import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SubDropdown {
  item: { label: string; options: any[] };
}

const SubDropdown = (props: SubDropdown) => {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>{props.item.label}</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          
          {props.item.options?.length > 0 ? props.item.options.map((sub_item, sub_index) => {
            return (
              sub_item.options.length < 1 ? (<DropdownMenuItem key={sub_index}>
                {sub_item.label}
              </DropdownMenuItem>) : (<SubDropdown item = { sub_item }></SubDropdown>)              
            );
          }) : "HEHEHEH"}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default SubDropdown;
