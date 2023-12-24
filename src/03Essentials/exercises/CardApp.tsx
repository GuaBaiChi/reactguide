import Card from './CardAppCard';

function CardApp() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card name="Anthony Blake" href="mailto:blake@example.com">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles" href="mailto:maria@example.com">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:maria@example.com">Email Maria</a>
        </p>
      </Card>
    </div>
  );
}

export default CardApp;