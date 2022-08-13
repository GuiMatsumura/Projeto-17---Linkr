import Like from "./like";
import MakePost from "./MakePost";
import Menu from "./menu/index.jsx"
export default function Timeline() {
  return (
    <>
      <Menu />
      <MakePost />
      <Like></Like>
    </>
  );
}
