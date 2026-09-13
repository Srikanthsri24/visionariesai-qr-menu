import React, { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles, Leaf, MapPin, UtensilsCrossed, QrCode } from 'lucide-react'
import './home.css'

const photo = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`
const interior = photo('photo-1517248135467-4c7edcad34c4')
const picks = [
  ['01', 'From the garden', 'Charcoal Paneer', 'Smoky edges. Silky makhani. A little theatre on a plate.', '₹890', 'veg', 'photo-1631452180519-c014fe946bc7'],
  ['02', 'From the coast', 'Malabar Sea Bass', 'Pan-seared fish with a fragrant curry leaf beurre blanc.', '₹1,580', 'nonveg', 'photo-1519708227418-c8fd9a32b7a2'],
  ['03', 'The sweet finale', 'Rasmalai Tres Leches', 'Saffron milk cake, pistachio and a delicate touch of rose.', '₹490', 'desserts', 'photo-1578985545062-69928b1d9587'],
]

export default function HomePage({ go, openCollection, showQR }) {
  const root = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target) }
    }), { threshold: 0.08 })
    root.current.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return <main className="hotel-home" ref={root}>
    <section className="home-hero">
      <img className="home-hero-image" src={interior} alt="Warmly lit restaurant with an intimate dining atmosphere" fetchPriority="high" />
      <div className="home-hero-shade" />
      <div className="home-hero-copy"><span className="home-kicker"><span className="pulse" /> VISIONARIESAI · VISAKHAPATNAM</span>
        <h1>A little coastal.<br />A little unexpected.<br /><em>Entirely memorable.</em></h1>
        <p>Come for the flavours. Stay for the feeling. Discover an imaginative dining experience inspired by the coast and made for your kind of evening.</p>
        <div className="home-actions"><button className="home-button" onClick={() => go('menu')}>Discover the menu <ArrowRight size={18} /></button><a className="home-button outline" href="#home-experiences">Explore the experience <span>↓</span></a></div>
      </div>
      <div className="hero-bottom"><span><MapPin size={16} /> VISAKHAPATNAM, ANDHRA PRADESH</span><a href="#home-signatures">SCROLL TO DISCOVER <span>↓</span></a></div>
      <div className="hero-seal"><Sparkles size={23} /><span>A TASTE OF<br />SOMETHING NEW</span></div>
    </section>

    <div className="home-ribbon" aria-label="Coastal flavours, thoughtful details, memorable evenings"><div aria-hidden="true">{[0,1].map(i => <span key={i}>COASTAL FLAVOURS <b>✦</b> THOUGHTFUL DETAILS <b>✦</b> MEMORABLE EVENINGS <b>✦</b> </span>)}</div></div>

    <section className="home-section home-intro" data-reveal>
      <span className="home-kicker">01 / WELCOME TO OUR TABLE</span><div><h2>Some meals fill a table.<br /><em>Others become a story.</em></h2><p>At VisionariesAI, familiar Indian flavours meet a curious, contemporary kitchen. Think slow-cooked comfort, bold coastal spices, beautiful vegetarian plates and desserts worth making room for.</p><div className="home-facts"><div><strong>80</strong><span>MENU SELECTIONS</span></div><div><strong>08</strong><span>FLAVOUR COLLECTIONS</span></div><div><Leaf size={29} /><span>VEG & NON-VEG CHOICES</span></div></div></div>
    </section>

    <section className="home-section signature-section" id="home-signatures">
      <div className="home-heading" data-reveal><div><span className="home-kicker">02 / THE FIRST BITE</span><h2>Meet your next<br /><em>favourite.</em></h2></div><button className="home-text-link" onClick={() => openCollection('signature')}>Explore all signatures <ArrowRight size={19} /></button></div>
      <div className="home-picks">{picks.map(([number, label, name, desc, price, category, image]) => <article className="home-pick" data-reveal key={name}><button className="pick-image" onClick={() => openCollection(category)} aria-label={`Explore ${name}`}><img loading="lazy" src={photo(image)} alt={`${label} — illustrative food photography`} /><span>{number} / {label}</span><b><ArrowRight size={24} /></b></button><div className="pick-details"><h3>{name}</h3><strong>{price}</strong></div><p>{desc}</p><button className="home-text-link" onClick={() => openCollection(category)}>View collection <ArrowRight size={15} /></button></article>)}</div>
      <p className="photo-note">Photography is illustrative. Explore the menu for dish descriptions and prices.</p>
    </section>

    <section className="home-experiences" id="home-experiences">
      <div className="experience-photo"><img loading="lazy" src={photo('photo-1559339352-11d035aa65de')} alt="An inviting restaurant setting" /><span>GOOD COMPANY.<br />GREAT TASTE.</span></div>
      <div className="experience-copy" data-reveal><span className="home-kicker">03 / SET THE MOOD</span><h2>One table.<br /><em>So many possibilities.</em></h2><p>Choose the experience that feels like you. A long lunch, a flavour-filled celebration or just one more dessert.</p>
        {[
          ['01','The coastal table','Sea bass, prawns and warming coastal spices.','nonveg'],
          ['02','A garden-led gathering','Paneer, mushrooms, seasonal vegetables and slow-cooked dal.','veg'],
          ['03','The after-dinner ritual','Saffron, chocolate, coffee and a sweet reason to linger.','desserts'],
        ].map(([n,title,desc,cat]) => <button className="experience-row" key={n} onClick={() => openCollection(cat)}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowRight size={20} /></button>)}
      </div>
    </section>

    <section className="home-section home-offers" data-reveal><div><span className="home-kicker">04 / A LITTLE EXTRA</span><h2>Make an evening<br /><em>of it.</em></h2><p>A tasting journey for the adventurous. A refreshing pause for the unhurried. There is always another way to enjoy your table.</p></div><div className="offer-cards"><article><span className="offer-label">THE SIGNATURE EXPERIENCE</span><Sparkles size={28} /><h3>Seven courses.<br />One delicious journey.</h3><p>The Visionary Tasting takes you through the kitchen’s imagination.</p><div><strong>₹3,250</strong><button onClick={() => openCollection('signature')} aria-label="Explore the tasting menu"><ArrowRight /></button></div></article><article><span className="offer-label">ZERO-PROOF DISCOVERY</span><Leaf size={28} /><h3>A garden<br />in your glass.</h3><p>Meet Neon Garden: yuzu, elderflower, cucumber and tonic.</p><div><strong>₹490</strong><button onClick={() => openCollection('beverages')} aria-label="Explore beverages"><ArrowRight /></button></div></article></div></section>

    <section className="home-section home-ritual"><div className="home-heading" data-reveal><div><span className="home-kicker">05 / EFFORTLESS EXPLORATION</span><h2>Less waiting.<br /><em>More discovering.</em></h2></div><p>Your dining companion is already in your pocket.</p></div><div className="ritual-grid">{[[QrCode,'01','Scan & discover','Open the menu with your camera. No app download required.'],[Leaf,'02','Find your flavour','Explore eight collections and filter vegetarian or non-vegetarian dishes.'],[UtensilsCrossed,'03','Build your table','Collect your favourites, adjust quantities and review your estimated total.']].map(([Icon,n,title,desc]) => <article key={n} data-reveal><div><Icon size={26}/><span>{n}</span></div><h3>{title}</h3><p>{desc}</p></article>)}</div><button className="home-text-link" onClick={showQR}>Open the menu QR <ArrowRight size={18} /></button></section>

    <section className="home-section home-journal"><div className="home-heading" data-reveal><div><span className="home-kicker">06 / THE VISUAL JOURNAL</span><h2>Stay a little<br /><em>curious.</em></h2></div><button className="home-text-link" onClick={() => go('stories')}>Explore the gallery <ArrowRight size={19} /></button></div><div className="journal-tiles">{[['THE ATMOSPHERE','Spaces made for conversation.',interior],['THE INSPIRATION','A love letter to good food.',photo('photo-1504674900247-0877df9cc836')]].map(([label,title,img]) => <button key={label} data-reveal onClick={() => go('stories')}><img loading="lazy" src={img} alt={title}/><div><span>{label}</span><h3>{title}</h3><ArrowRight size={23}/></div></button>)}</div></section>

    <section className="home-finale" data-reveal><span className="home-kicker">YOUR NEXT GREAT MEAL STARTS HERE</span><h2>Bring your appetite.<br /><em>We’ll bring the inspiration.</em></h2><p>VisionariesAI Hotel · Visakhapatnam</p><button className="home-button" onClick={() => go('menu')}>Find something delicious <ArrowRight size={19}/></button><small>Hotel concept demo · Explore the menu and sample dining experiences.</small></section>
  </main>
}
