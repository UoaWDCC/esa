import NavLink from "./NavLink";

export default function ActionGroup() {
  return (
    <div>
        <h3>Actions</h3>
        <NavLink label = "Upload member CSV file" href = "/admin/csv-upload"/>
    </div>
  );
}