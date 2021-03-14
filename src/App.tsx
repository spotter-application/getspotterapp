import icon from './icon.svg';
import screenshot1 from './assets/screenshots/1.png';
import screenshot2 from './assets/screenshots/2.png';
import screenshot3 from './assets/screenshots/3.png';
import screenshot4 from './assets/screenshots/4.png';
import './App.scss';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';


const screenshots = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
];

function App() {

  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);

  const startInterval = useCallback(() => {
    let screenshotIndex = 0;
    setInterval(() => {
      screenshotIndex = screenshotIndex + 1 > (screenshots.length - 1) ? 0 : screenshotIndex + 1;
      setActiveScreenshotIndex(screenshotIndex)
    }, 3000);
  }, [setActiveScreenshotIndex])

  useEffect(() => {
    startInterval();
  }, [startInterval]);

  return (
    <>
      <section className="section">

        <a
          className="producthunt"
          href="https://www.producthunt.com/posts/spotter-4?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-spotter-4" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=280842&theme=dark&period=daily"
          width="250"
          height="54"
        /></a>

        <div className="icon">
          <img className="icon__image" src={icon} alt="Spotter" />
          <div className="icon__title">spotter</div>
        </div>

        <div className="screenshots">
          <div className="screenshots__screenshot-container">
          {screenshots.map((screenshot, i) => (
              <img
                key={screenshot + i}
                className={classNames('screenshots__screenshot', { 'screenshots__screenshot--visible': i === activeScreenshotIndex })}
                src={screenshot}
                alt={`Spotter screenshot ${i}`}
              />
          ))}
          </div>
        </div>

        <div className="description">
          <div className="description__content">
            Productivity tool that allows to launch everything (e.g. switch the next song, connect bluetooth device, set a timer, etc.) so you can stay focused on your current task.
          </div>
        </div>

        <div className="goals">
          <ul className="goals__list">
            <li className="goals__list-item">❤️ Open source</li>
            <li className="goals__list-item">🤖 Native</li>
            <li className="goals__list-item">🔌 Plugin system</li>
            <li className="goals__list-item">⌨️ Custom hotkeys</li>
            <li className="goals__list-item">⬆️ Sort options by frequency of use</li>
            <li className="goals__list-item">📦 Small size (less than 20mb)</li>
          </ul>
        </div>

        <div className="row">
            <div className="row__content">
              <h1>Installation</h1>

              <div>
                <code>
                  brew install --cask spotter
                </code>
              </div>


              <a href="https://github.com/spotter-application/spotter/releases/latest" className="link">
                <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" fill="currentColor"></path></svg>
                Download latest release
              </a>

              <div>
                <a href="https://github.com/sponsors/ziulev" className="link link--bottom">
                  <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" fill="currentColor"></path></svg>
                  Sponsor
                </a>
              </div>
            </div>

        </div>


      </section>
      <footer className="footer">
        <a href="https://github.com/ziulev">© Denis Ziulev</a>
      </footer>
    </>
  );
}

export default App;
