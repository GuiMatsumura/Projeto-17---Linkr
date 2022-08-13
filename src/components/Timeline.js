import Like from "./like";
import MakePost from "./MakePost";
import Menu from "./menu/index.jsx"
export default function Timeline() {
  return (
    <div style={{ background: "gray", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Menu />
      <MakePost />
      <Like></Like>
    </div>
  );
}
