/**Основной товар на бирже
 * Компонент одного основного товара на бирже, который получает в свойствах ссылку на товар, наименование, стоимость и индекс.
 */
export default function Item({...props}) {
  return (
    <div>
      <a href={props.href}>
        <span>{props.title}</span>
        <span>{props.value}</span>
        <span>{props.difference}</span>
      </a>
    </div>
  );
}
