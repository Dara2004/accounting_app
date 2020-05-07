import { Select } from "antd";
const { Option } = Select;

const AddItemForm = ({ items, addItem }) => {
  return (
    <Select
      style={{ marginTop: 20, marginBottom: 10 }}
      showSearch
      placeholder="Enter an item / mot cai ca"
      optionFilterProp="children"
      onChange={(itemId) => addItem(itemId)}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {Object.values(items).map(({ itemId, description, price }, index) => (
        <Option
          key={index}
          value={itemId}
        >{`${itemId} ${description} ${price}`}</Option>
      ))}
    </Select>
  );
};

export default AddItemForm;
