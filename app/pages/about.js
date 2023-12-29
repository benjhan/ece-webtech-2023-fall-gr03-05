import Layout from '../components/Layout.js'
export default function Page() {
  return (
    <Layout>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', textAlign: 'center', padding: '0 20px'}}>
        <h1 style={{ marginBottom: '20px', fontSize: '2rem', fontWeight: 'bold'}}>About Us</h1>
        <div style={{backgroundColor: '#9e9e9e',borderRadius: '10px', padding: '20px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',maxWidth: '600px',}}>
          <h2>Hey, Travel Buddies !</h2>
          <p>
            Welcome to our little corner of the internet where we spill the tea on all things travel. We're a bunch of ECE Paris peeps who can't sit still, always out there finding the next cool spot to chill or thrill.
          </p>
          <p>
            Our blog's like our open diary, scribbled with stories of places we've been and dreams about where we're headed next. Think of it as your go-to inspo for your own epic travel saga.
          </p>
          <p>
            So, what's up? Ready to join the crew and make your travel feed #goals? Let's bounce to the beat of the world together!
          </p>
        </div>
      </div>
    </Layout>
  )
}