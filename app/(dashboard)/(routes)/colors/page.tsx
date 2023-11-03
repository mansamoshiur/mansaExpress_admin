import { format } from "date-fns";
import ColorsClient from "./_components/client";
import { db } from "@/lib/db";
import { ColorColumn } from "./_components/columns";

const ColorsPage = async () => {
  const Colors = await db.color.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorColumn[] = Colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
