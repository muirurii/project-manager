import { useState, useEffect } from "react";

const useDateFormatter = ( date: string ) => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const formatted = new Date(parseInt(date)).toLocaleString("en-US", {
        dateStyle: "medium",
      });
    setFormattedDate(formatted);

  }, [date]);

  return formattedDate;
};

export default useDateFormatter;
