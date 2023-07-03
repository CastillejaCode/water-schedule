import { Plant } from "../../types";
import { ShowForm } from "./ShowForm";
import { useCalendarDates } from "../../hooks/useCalendarDates";
import { PlantsInfo } from "./PlantsInfo";

interface Props {
  plants: Plant[];
}

export const Info = ({ plants }: Props) => {
  const [scheduledPlants, wateredPlants, todayOrDate] = useCalendarDates({
    plants,
  });

  return (
    <section className=" relative flex w-full max-w-sm flex-col items-start rounded-md bg-gray-900/20 p-4 text-gray-950 ">
      <h2 className="absolute right-4 text-xl leading-8">{todayOrDate}</h2>
      <PlantsInfo plants={scheduledPlants} title="To Water" />
      <PlantsInfo plants={wateredPlants} title="Watered" />
      <ShowForm plants={plants} />
    </section>
  );
};
