"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo({filter, table, column_name}: any) {
  const [date, setDate] = React.useState<Date>()
  // console.log(date? format(date, "yyyy-MM-dd"): '')
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(event) => {
            console.log(event? format(event, "yyyy-MM-dd"): '')
            setDate(event)
            filter(event? format(event, "yyyy-MM-dd"): '')
            table.getColumn(column_name)?.setFilterValue(event? format(event, "yyyy-MM-dd"): '');
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
