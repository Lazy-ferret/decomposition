import './App.css';
import Search from './components/Search';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';
import NavHeader from './components/NavHeader';
import Exchange from './components/Exchange';
import Advertising from './components/Advertising';
import NavMain from './components/NavMain';
import Widget from './components/Widget';
import WidgetsList from './components/WidgetsList';
import { advertising, advertisingBanner, exchange, favourite, newsItems, onAir, searchExamples, tvProgramm } from './components/App.const'

function App() {
  return (
    <div className="App">

      <header className='App-Header'>
        <div className='AppHeader-Content'>
          <div className='NavHeader-Container'>
            <NavHeader />
            <div className='header-date'>{new Date().toLocaleString()}</div>
          </div>
          <NewsList items={newsItems}>
            {items => items.map(news => <NewsItem news={news} />)}
          </NewsList>
          <Exchange items={exchange} />
        </div>
        <div className='AppHeader-Commercial'>
          <Advertising item={advertising} />
        </div>
      </header>

      <main className='App-Main'>
        <NavMain />
        <Search />
        <div className='Examples'>
          <h5 className='Examples-Title'>Найдется все. Например,</h5>
          <span className='Examples-Text'>{searchExamples[Math.floor(Math.random() * 5)]}</span>
        </div>
        <div className='Advertising-Banner'>
          <a href={advertisingBanner.link}>
            <img src={advertisingBanner.icon} alt='advertising_banner' />
          </a>
        </div>
        <WidgetsList >
          <Widget title='Погода' className='widget widget-weather'>
            <div className='weather-info'>
              <div>
                <img
                  src='https://image.flaticon.com/icons/png/512/4727/4727667.png'
                  alt='weather_icon'
                  style={{ width: 50, height: 50 }} />
              </div>
              <div className='weather-current'>+17</div>
              <div className='weather-forecast'>
                <span>Утром +17,</span>
                <span>днём +17</span>
              </div>
            </div>
          </Widget>
          <Widget title='Карта Германии' className='widget widget-map'>
            <a href='#'>Расписания</a>
          </Widget>
          <Widget title='Эфир' className='widget widget-onAir'>
            {onAir.map(item =>
              <div>
                <img
                  style={{ width: 15, height: 15 }}
                  src="https://image.flaticon.com/icons/png/512/892/892666.png"
                  alt="onair_icon" />
                <h6>{item.name}</h6>
                <span>{item.channel}</span>
              </div>
            )}
          </Widget>
          <Widget title='Посещаемое' className='widget widget-visited'>
            {favourite.map(item =>
              <div>
                <h6>{item.title}</h6>
                <span>-{item.text}</span>
              </div>
            )}
          </Widget>
          <Widget title='Телепрограмма' className='widget widget-tvProgramm'>
            {tvProgramm.map(item =>
              <div>
                <h6>{item.time}</h6>
                <span style={{ fontWeight: 'bold' }} >{item.name}</span>
                <span>{item.channel}</span>
              </div>
            )}
          </Widget>
        </WidgetsList >
      </main>
    </div>
  );
}

export default App;
