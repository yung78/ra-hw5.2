import Service from './Swrvice';

/** Сервисы
 * Общий компонент сервисов, который содержит 5 компонентов наиболе посещаемых сервисов.
*/
export default function Services() {
  return (
    <div>
      <Service
        href={href}
        title={title}
      >
        <div>
          <img src='./clouds.png'/>
        </div>
        <div>
          <span>+17</span>
        </div>
        <div>
          <div>Утром <span>+17</span></div>
          <div>Днем <span>+20</span></div>
        </div>
      </Service>

      <Service
        href={href}
        title={title}
      >
        <div>
          <a href='#'>
            <span><strong>Недвижимость</strong> - о сталинках</span>
          </a>
        </div>
        <div>
          <a href='#'>
            <span><strong>Маркет</strong> - люстры и светильники</span>
          </a>
        </div>
        <div>
          <a href='#'>
            <span><strong>Авто.ру</strong> - привод 4х4 до 500 000</span>
          </a>
        </div>
      </Service>

      <Service
        href={href}
        title={title}
      >
        <div>
          <a href='#'>
            <span>Расписание</span>
          </a>
        </div>
      </Service>

      <Service
        href={href}
        title={title}
      >
        <div>
          <a href='#'>
            <time>02:00</time>
            <span>ТНТ.Best</span>
            <span>ТНТ International</span>
          </a>
        </div>
        <div>
          <a href='#'>
            <time>02:15</time>
            <span>Джинглики</span>
            <span>Карусель Int</span>
          </a>
        </div>
        <div>
          <a href='#'>
            <time>02:25</time>
            <span>Наедине со всеми</span>
            <span>Первый</span>
          </a>
        </div>
      </Service>

      <Service
        href={href}
        title={title}
      >
        <div>
          <a href={props.href}>
            <img src='./play.png'></img>
            <span>Управление как искусство</span>
            <span>Успех</span>
          </a>
        </div>
        <div>
          <a href={props.href}>
            <img src='./play.png'></img>
            <span>Ночью Мир в это время</span>
            <span>earthTV</span>
          </a>
        </div>
        <div>
          <a href={props.href}>
            <img src='./play.png'></img>
            <span>Андрей Вознесенский</span>
            <span>Совершенно секретно</span>
          </a>
        </div>
      </Service>
    </div>
  );
}
