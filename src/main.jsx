import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight, ArrowUpRight, Building2, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, ClipboardList, Hammer, Menu, Search, ShieldCheck, Store, X} from 'lucide-react';
import './styles.css';

const services=[
 {icon:Building2,title:'Commercial Construction',text:'Complete construction solutions for business spaces, branches and commercial facilities.',img:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85'},
 {icon:Store,title:'Branch / Outlet Setup',text:'Build your new business location from site preparation to a ready-to-open outlet.',img:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85'},
 {icon:Building2,title:'Office Construction',text:'Professional office spaces designed around your operational requirements.',img:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85'},
 {icon:Hammer,title:'Interior & Civil Works',text:'End-to-end interior and civil execution with quality finishing and attention to detail.',img:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85'}
];
const steps=[['01','Submit Your Project','Share your requirements and location details.'],['02','We Review & Plan','Our team analyses your project needs.'],['03','Get Quotation','Receive a detailed and transparent proposal.'],['04','Project Execution','We handle construction from start to finish.'],['05','Project Completion','Your space, ready for business.']];

function App(){
 const [menu,setMenu]=useState(false); const [showModal,setShowModal]=useState(false);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)};
 return <div className="app">
  <header className="header"><div className="nav-wrap">
   <button className="brand" onClick={()=>go('home')}><span className="brand-mark">K</span><span><strong>KEERTHANA SOLUTIONS</strong><small>By Katakam Venkatesh</small></span></button>
   <nav className={menu?'nav open':'nav'}>{[['home','Home'],['services','Services'],['process','How It Works'],['projects','Projects'],['contact','Contact']].map(([id,label])=><button key={id} className={id==='home'?'active':''} onClick={()=>go(id)}>{label}</button>)}</nav>
   <div className="nav-actions"><button className="icon-btn"><Search size={18}/></button><button className="login" onClick={()=>setShowModal(true)}>Login</button><button className="primary small" onClick={()=>setShowModal(true)}>Get Started <ArrowRight size={16}/></button></div>
   <button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  </div></header>

  <main>
   <section id="home" className="hero">
    <div className="hero-overlay"></div><div className="hero-content">
      <div className="eyebrow light">BUILDING BUSINESSES, SHAPING SPACES</div>
      <h1>Your Vision.<br/>Our <em>Construction</em><br/>Expertise.</h1>
      <p>From concept to completion, Keerthana Solutions delivers end-to-end construction and turnkey solutions for businesses, brands and growing companies.</p>
      <div className="hero-actions"><button className="primary" onClick={()=>setShowModal(true)}>Start Your Project <ArrowRight size={18}/></button><button className="outline-light" onClick={()=>go('projects')}>Explore Our Work <ArrowUpRight size={18}/></button></div>
      <div className="stats"><div><b>50+</b><span>Projects Completed</span></div><div><b>20+</b><span>Business Clients</span></div><div><b>100%</b><span>On-Time Delivery</span></div></div>
    </div>
    <div className="hero-card" onClick={()=>setShowModal(true)}><span className="mini-icon">▧</span><div><b>Need a new branch or outlet?</b><small>Let us build it for you.</small></div><span className="circle"><ArrowRight size={16}/></span></div>
   </section>

   <section className="trust"><span>TRUSTED BY GROWING BUSINESSES</span><div className="logos"><b>OLA</b><i></i><b className="more">more<span>+</span></b></div></section>

   <section id="services" className="section services"><div className="section-intro"><div className="eyebrow">OUR SERVICES</div><h2>Complete Construction<br/>& Turnkey Solutions</h2><p>We help businesses build, expand and transform their spaces with end-to-end construction and interior solutions.</p><button className="outline" onClick={()=>go('contact')}>View All Services <ArrowRight size={16}/></button></div><div className="service-grid">{services.map((s,i)=><article className="service-card" key={s.title}><img src={s.img} alt=""/><div className="service-label"><s.icon size={18}/><b>{s.title}</b></div><p>{s.text}</p><span className="service-arrow"><ArrowRight size={17}/></span></article>)}</div></section>

   <section id="process" className="section process"><div className="center-head"><div className="eyebrow">HOW IT WORKS</div><h2>From Idea to Completion</h2><p>A simple and transparent process to bring your project to life.</p></div><div className="steps">{steps.map(([num,title,text])=><div className="step" key={num}><div className="step-no">{num}</div><div className="step-line"></div><h3>{title}</h3><p>{text}</p></div>)}</div></section>

   <section id="projects" className="projects"><div className="projects-head"><div><div className="eyebrow light">OUR PROJECTS</div><h2>Spaces We’ve Built</h2><p>Explore one of our completed projects across different industries.</p></div><button className="outline-light" onClick={()=>setShowModal(true)}>View All Projects <ArrowRight size={16}/></button></div><article className="project-feature"><div className="project-main-img"><img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1200&q=90" alt="Modern commercial building"/></div><div className="project-copy"><div className="project-kicker">OLA SERVICE CENTER</div><h3>OLA Branch — Hyderabad</h3><p className="location">● Hyderabad</p><p>Complete branch construction and interior setup for OLA, including civil work, interiors, electrical coordination, flooring and branding-ready spaces.</p><div className="tags"><span>Commercial</span><span>Outlet Setup</span></div></div><div className="project-thumbs"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80"/><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"/></div></article></section>

   <section className="testimonial"><div><div className="eyebrow">WHAT OUR CLIENTS SAY</div><h2>Trusted by Businesses</h2><p>We take pride in building long-term relationships with our clients.</p></div><div className="quote"><span className="quote-mark">“</span><p>Keerthana Solutions built our new OLA branch in Hyderabad on time with excellent quality and professional execution. The entire process, from planning to completion, was smooth and well managed.</p><div className="person"><div className="avatar">U</div><div><b>Uday</b><small>OLA — Branch Operations</small></div></div></div></section>

   <section id="contact" className="cta"><div><h2>Ready to Build Your Next Location?</h2><p>Let’s discuss your project and turn your vision into reality.</p><div className="hero-actions"><button className="primary" onClick={()=>setShowModal(true)}>Start Your Project <ArrowRight size={18}/></button><button className="outline-light" onClick={()=>setShowModal(true)}>Contact Us</button></div></div><div className="cta-points"><div><ShieldCheck/> <b>Expert Team</b></div><div><CheckCircle2/><b>Quality Work</b></div><div><ClipboardList/><b>On-Time Delivery</b></div></div></section>
  </main>
  <footer><div><b>KEERTHANA SOLUTIONS</b><span>By Katakam Venkatesh</span></div><p>© 2026 Keerthana Solutions. All rights reserved.</p></footer>
  {showModal&&<div className="modal-backdrop" onClick={()=>setShowModal(false)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setShowModal(false)}><X/></button><div className="eyebrow">START YOUR PROJECT</div><h2>Tell us what you want to build.</h2><p>Share a few details and the Keerthana Solutions team can review your requirement.</p><form onSubmit={e=>{e.preventDefault();setShowModal(false);alert('Thanks! Your project request form is ready to connect to Supabase in the next phase.')}}><input required placeholder="Company / Business name"/><input required placeholder="Your name"/><input required placeholder="Phone number"/><input required placeholder="Project location"/><select><option>Project type</option><option>Branch / Outlet Setup</option><option>Commercial Construction</option><option>Office Construction</option><option>Interior & Civil Works</option></select><textarea placeholder="Tell us about your project"></textarea><button className="primary full">Submit Project Request <ArrowRight size={17}/></button></form></div></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
