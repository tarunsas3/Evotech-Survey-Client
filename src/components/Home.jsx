function Home() {
  return (
    <div style={{ fontFamily: 'cascadia code', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', justifyContent: 'center', color: 'black', padding: '30px', marginTop: '16rem' }}>
      <h1 style={{ fontSize: '3rem' }}>WELCOME TO EVO SURVEY</h1>
      <div style={{ fontFamily: 'cascadia code', display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'center', justifyContent: 'center', color: 'black', padding: '30px' }}>
      <a href="/form" style={{ background: 'orangered', padding: '10px 20px', color: 'white', textDecoration: 'none', fontSize: '1rem', cursor: 'pointer', borderRadius: '10px' }}>
        <p style={{ fontSize: '2rem', margin: '0' }}>Take a Survey 📄</p>
      </a>
      <a href="/login" style={{ background: 'orangered', padding: '10px 20px', color: 'white', textDecoration: 'none', fontSize: '1rem', cursor: 'pointer', borderRadius: '10px' }}>
        <p style={{ fontSize: '2rem', margin: '0' }}>Login 🔒</p>
      </a>
      </div>
    </div>
  );
}

export default Home;
