import SearchIn from './SearchIn';

/**Панель поиска
 * Общий компонент панели поиска. Помимо поисковой строки(формы) содержит меню поиска с 7ю компонентами вариаций поиска.
 */
export default function SearchBar() {
  return (
    <div>
      <div>
        <SearchIn
          href={href}
          title={title}
        ></SearchIn>

        <SearchIn
          href={href}
          title={title}
        ></SearchIn>

        <SearchIn
          href={href}
          title={title}
        ></SearchIn>

        <SearchIn
          href={href}
          title={title}
        ></SearchIn>

        <SearchIn
          href={href}
          title={title}
        ></SearchIn>

        <SearchIn
          href={href}
          title={title}
        ></SearchIn>

        <SearchIn
        ></SearchIn>
        <a href='#'>ещё</a>
      </div>
      <div>
        <img src='./yandex.png'></img>
        <form>
          <input type="search"/>
          <button type="submit">Найти</button>
        </form>
      </div>
    </div>
  )
}
