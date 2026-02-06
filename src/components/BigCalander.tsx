"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import type { View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  return (
    <div className="h-screen">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        onView={setView}
        defaultDate={new Date(2025, 11, 14)}
        min={new Date(2025, 11, 14, 8, 0)}
        max={new Date(2025, 11, 14, 17, 0)}
      />
    </div>
  );
};

export default BigCalendar;
