"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const specialities = [
  {
    value: "sports-medicine",
    label: "Sports Medicine",
  },
  {
    value: "orthopedics",
    label: "Orthopedics",
  },
  {
    value: "physical-therapy",
    label: "Physical Therapy",
  },
  {
    value: "internal-medicine",
    label: "Internal Medicine",
  },
  {
    value: "rehabilitation",
    label: "Rehabilitation",
  },
  {
    value: "sports-nutrition",
    label: "Sports Nutrition",
  },
  {
    value: "cardiology",
    label: "Cardiology",
  },
  {
    value: "exercise-physiology",
    label: "Exercise Physiology",
  },
  {
    value: "sports-psychology",
    label: "Sports Psychology",
  },
];

export function SearchSpeciality() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    if (value) {
      router.push(value);
    }
  }, [value]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? specialities.find((speciality) => speciality.value === value)
                ?.label
            : "Search Speciality..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Speciality..." />
          <CommandEmpty>No speciality found.</CommandEmpty>
          <CommandGroup>
            {specialities.map((speciality) => (
              <CommandItem
                key={speciality.value}
                value={speciality.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === speciality.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {speciality.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
