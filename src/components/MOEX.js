import Item from './Item';
/**Биржа
 * Общий компонент берживых товаров, который отображает 3 компонента основных товаров.
 */
export default function MOEX () {
  return (
    <div>
      <Item
        href={href}
        title={title}
        value={value}
        difference={difference}
        >
      </Item>
    </div>
  );
}
