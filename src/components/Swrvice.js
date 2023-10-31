/**Сервис
 * Компонент одного из популярных сервисов, который получает в свойствах название и ссылку на себя,
 * а также разметку для индивидуальной отрисовки.
 */
export default function Service({...props}) {
  return (
    <div>
      <div>
        <a href={props.href}>
          <span>{props.title}</span>
        </a>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}
