const Normal = ({ children, title }) => (
  <>
    <h1 style={
      {
        fontFamily: 'Roboto',
        fontSize: '2.5rem',
        textAlign: 'center',
        margin: '0',
      }
    }>{title}</h1>
    <p style={
      {
        fontFamily: 'Roboto',
        fontSize: '1rem',
        textAlign: 'center',
        margin: '0',
      }
    }>Ja nie wieże czy to [object Object]</p>
    <hr />
    {children}
    <hr />
    <footer style={
      {
        fontFamily: 'Roboto',
        fontSize: '1rem',
        textAlign: 'center',
        margin: '0',
      }
    }>
      Coperek tobiasGaming 2022
    </footer>
  </>
);

export default Normal;