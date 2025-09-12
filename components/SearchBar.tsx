import {
  Command,
  CommandInput,
  CommandList,
  CommandSeparator
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
