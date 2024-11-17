type SelectBoxProps = {
  users: { id: number; name: string }[];
  value: number | null;
  onChange: (userId: number | null) => void;
};

function SelectBox({ users, value, onChange }: SelectBoxProps) {
  return (
    <select
      value={value || ""}
      onChange={(e) => {
        const selectedValue = e.target.value;
        onChange(selectedValue ? Number(selectedValue) : null);
      }}
    >
      <option value="">전체</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;
