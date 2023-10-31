/**Превью
 * Компонент превью одной новости, который получает в свойствах ссылку на иконку,
 * текст заголовка и ссылку на источник новости.
 */
export default function Preview({...props}) {
  return (
    <div>
      <a href={props.href}>
        <img src={props.icon}></img>
        <span>{props.title}</span>
      </a>
    </div>
  );
}
