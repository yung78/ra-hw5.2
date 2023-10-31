import MainNews from './MainNews';

/** Новости
 *  Общий компонент новостей, который отображает 3 компонента основных разделов новостей(+ дата)
 */
export default function News() {
  return (
    <div>
      <MainNews
        title={title}
        href={href}>
      </MainNews>

      <MainNews
        title={title}
        href={href}>
      </MainNews>

      <MainNews
        title={title}
        href={href}>
      </MainNews>

      <time>
        {() => Date.now}
      </time>
    </div>
  );
}
