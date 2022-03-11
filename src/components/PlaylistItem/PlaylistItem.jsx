const PlaylistItem = ({ item, onItemClick, selectedItem }) => {
  return (
    <li
      className={`collection-item category-list-item ${
        selectedItem && item.id === selectedItem.id && "active"
      }`}
      onClick={() => {
        onItemClick(item);
      }}
    >
      {item.name}
    </li>
  );
};

export default PlaylistItem;
