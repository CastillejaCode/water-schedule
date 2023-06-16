import { useState } from "react";
import { ComboBox } from "../Forms/Common/ComboBox";
import { Plant } from "../../types";
import { useFilterStore } from "../../stores/filterStore";
import { useShowStore } from "../../stores/showStore";

interface Props {
  plants: Plant[];
}

export const FilterForm = ({ plants }: Props) => {
  const [selected, setSelected] = useState({} as Plant);
  const [query, setQuery] = useState("");
  const push = useFilterStore((state) => state.push);

  const addToFilterStore = (event: React.SyntheticEvent) => {
    event.preventDefault();
    push(selected);
    useShowStore.setState({ filterForm: false });
  };

  return (
    <section className="m-4  w-full  rounded-md bg-gray-900/80 p-4  shadow-lg">
      <h2 className="text-xl font-bold text-neutral-300">Filter Plants</h2>
      <form className="flex flex-col">
        <ComboBox
          {...{
            selected,
            setSelected,
            query,
            setQuery,
            plants,
          }}
        />
        <button className="btn self-center" onClick={addToFilterStore}>
          Accept
        </button>
      </form>
    </section>
  );
};