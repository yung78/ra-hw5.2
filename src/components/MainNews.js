import Preview from './Preview';

/**Блок раздела новостей.
 * Компонент раздела, который получает в свойствах название и ссылки на себя, содержит 5 компонентов превью главных новостей раздела.
 */
export default function MainNews({...props}) {
  return (
    <div>
      <div>
        <a href={props.href}>
          <span>{props.title}</span>
        </a>
      </div>
      <div>
        <Preview
          icon={icon}
          title={title}
          href={href}>
        </Preview>

        <Preview
          icon={icon}
          title={title}
          href={href}>
        </Preview>

        <Preview
          icon={icon}
          title={title}
          href={href}>
        </Preview>

        <Preview
          icon={icon}
          title={title}
          href={href}>
        </Preview>

        <Preview
          icon={icon}
          title={title}
          href={href}>
        </Preview>
      </div>
    </div>
  );
}
