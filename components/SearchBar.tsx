import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const SearchBar = () => {
  return (
    <div>
      <Command className="w-[50%] rounded-3xl bg-transparent border flex m-10 ">
        <CommandInput placeholder="Search by topics" className="w-full" />
        <CommandList>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
};

export default SearchBar;
