/**Где искать
 * Компонент варианта поиска в качестве свойств получает наименование и ссылку.
 */
export default function SearchIn({...props}) {
  return (
    <a href={props.href}>
      <span>{props.title}</span>
    </a>
  )
}
