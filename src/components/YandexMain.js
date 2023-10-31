import News from './News'
import MOEX from './MOEX'
import SearchBar from './SearchBar'
import Services from './Services'

/** Главная страница
 * Основной компонент, который отображает все общие компоненты, расположенные на главной.
 */
export default function YandexMain() {
  return (
    <main>
      <News/>
      <MOEX />
      <SearchBar />
      <Services />
    </main>
  )
}