import data from './data';
import Value from './components/Value';
import ToggleSwitch from './components/ToggleSwitch';

export const App = () => {

  return (
    <main>
      <header>
        <ToggleSwitch />
        <h1>Four values of <span className="color">Agile</span></h1>
      </header>
      <section>
        {data.map((item) => {
          return (
            <Value key={item.id} {...item} />
          );
        })}
      </section>
    </main>
  );
};

export default App;