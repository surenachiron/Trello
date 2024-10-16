import AddList from "@/components/pages/home/lists/AddList";
import ListParent from "@/components/pages/home/lists/ListParent";
import { useAppSelector } from "@/hooks/Redux";

const Home = () => {
  const lists = useAppSelector((state) => state.lists);

  return (
    <div className="flex gap-x-3 rounded-lg overflow-auto w-full pb-3 overflow-width-scroll">
      {lists.length > 0 && <ListParent lists={lists} />}
      <AddList
        placeholder={
          lists && lists.length > 0 ? "Add another list" : "Add a list"
        }
      />
    </div>
  );
};

export default Home;
