<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eventify - Book Your Events</title>

  <!-- Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">

  <!-- AOS (Animate on Scroll) -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

  <!-- Custom CSS (Premium Event Theme - Enhanced) -->
  <style>
    :root{
      --bg-dark:#05030d;
      --bg-mid:#0a0515;
      --card-dark:#0f0a1a;
      --accent1:#ff3d9a; /* vibrant pink */
      --accent2:#00e5ff; /* electric cyan */
      --accent3:#9d4edd; /* deep purple */
      --accent4:#ffbe0b; /* golden yellow */
      --glass: rgba(255,255,255,0.06);
      --glass-strong: rgba(255,255,255,0.10);
      --muted:#c8d0e0;
      --text-bright:#ffffff;
    }

    html,body { height:100%; }
    body {
      margin:0;
      font-family: 'Roboto', sans-serif;
      background: radial-gradient(circle at 20% 50%, rgba(157,78,221,0.08) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(0,229,255,0.08) 0%, transparent 50%),
                  linear-gradient(180deg, #05030d 0%, #0a0515 50%, #0f0a1a 100%);
      background-attachment: fixed;
      color: #e9eef8;
      -webkit-font-smoothing:antialiased;
      scroll-behavior: smooth;
      overflow-x: hidden;
    }

    /* Animated particles background */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 10% 20%, rgba(255,61,154,0.03) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(157,78,221,0.03) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(0,229,255,0.02) 0%, transparent 50%);
      animation: particleFloat 20s ease-in-out infinite;
      pointer-events: none;
      z-index: 0;
    }

    @keyframes particleFloat {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-30px) scale(1.05); }
    }

    a { text-decoration:none; color:inherit; }

    /* Navbar - Enhanced */
    .navbar {
      padding: 1rem 1.5rem;
      background: linear-gradient(135deg, rgba(157,78,221,0.12), rgba(0,229,255,0.08));
      border-bottom: 2px solid rgba(255,255,255,0.06);
      backdrop-filter: blur(20px) saturate(180%);
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
      position: relative;
      z-index: 1000;
    }
    
    .navbar::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(255,61,154,0.1), rgba(0,229,255,0.05));
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }
    
    .navbar:hover::before {
      opacity: 1;
    }

    .navbar-brand {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      letter-spacing: 1.2px;
      font-size: 1.8rem;
      background: linear-gradient(135deg, #ff3d9a, #00e5ff, #9d4edd);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 4px 12px rgba(255,61,154,0.3));
      animation: gradientShift 4s ease infinite;
      position: relative;
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    .nav-link {
      color: var(--muted) !important;
      transition: all .3s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      width: 0%;
      height: 2px;
      background: linear-gradient(90deg, #ff3d9a, #00e5ff);
      transform: translateX(-50%);
      transition: width 0.3s ease;
    }
    
    .nav-link:hover { 
      color: var(--text-bright) !important; 
      transform: translateY(-2px);
    }
    
    .nav-link:hover::after {
      width: 80%;
    }

    .btn-cta {
      background: linear-gradient(135deg, var(--accent1), var(--accent2));
      border: none;
      color: #0a0515;
      font-weight: 700;
      letter-spacing: 0.8px;
      box-shadow: 0 8px 24px rgba(255,61,154,0.3), 0 4px 12px rgba(0,229,255,0.2);
      transition: all .3s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      overflow: hidden;
    }
    
    .btn-cta::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255,255,255,0.4);
      transform: translate(-50%, -50%);
      transition: width 0.6s ease, height 0.6s ease;
    }
    
    .btn-cta:hover::before {
      width: 300px;
      height: 300px;
    }
    
    .btn-cta:hover { 
      transform: translateY(-4px) scale(1.05); 
      box-shadow: 0 16px 48px rgba(255,61,154,0.4), 0 8px 24px rgba(0,229,255,0.3);
    }

    /* HERO - Enhanced Parallax */
    .hero {
      position: relative;
      height: 95vh;
      min-height: 700px;
      display:flex;
      align-items:center;
      justify-content:center;
      text-align:center;
      overflow:hidden;
      padding-top:60px;
    }

    .hero-bg {
      position:absolute;
      top:50%;
      left:50%;
      width:120%;
      height:120%;
      transform: translate(-50%,-50%);
      object-fit:cover;
      filter: saturate(1.3) contrast(1.1) brightness(0.55);
      transition: transform 0.2s linear;
      will-change: transform;
      z-index:0;
    }

    /* Enhanced colorful radial lights */
    .hero-lights::before,
    .hero-lights::after {
      content: "";
      position:absolute;
      width:1200px;
      height:1200px;
      border-radius:50%;
      filter: blur(150px);
      opacity:0.35;
      z-index:0;
      pointer-events:none;
      animation: floatingGlow 8s ease-in-out infinite;
    }
    
    @keyframes floatingGlow {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -20px) scale(1.1); }
      66% { transform: translate(-20px, 30px) scale(0.95); }
    }
    
    .hero-lights::before { 
      background: radial-gradient(circle at 30% 30%, rgba(255,61,154,1), rgba(157,78,221,0.8), transparent 40%); 
      left:-15%; 
      top:-12%; 
      animation-delay: -2s;
    }
    .hero-lights::after { 
      background: radial-gradient(circle at 70% 70%, rgba(0,229,255,1), rgba(157,78,221,0.7), transparent 40%); 
      right:-15%; 
      bottom:-12%; 
    }

    .hero-overlay {
      position:absolute;
      inset:0;
      background: linear-gradient(180deg, rgba(0,0,0,0.3), rgba(10,5,21,0.6));
      z-index:0;
    }

    .hero-content {
      position:relative;
      z-index:5;
      max-width:1000px;
      padding: 50px 40px;
      border-radius:24px;
      backdrop-filter: blur(16px) saturate(160%);
      background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
      border: 2px solid rgba(255,255,255,0.1);
      box-shadow: 0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
      animation: floatHero 6s ease-in-out infinite;
    }
    
    @keyframes floatHero {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .hero-title {
      font-family:'Montserrat',sans-serif;
      font-weight:800;
      font-size:3.6rem;
      line-height:1.1;
      margin:0;
      letter-spacing:2px;
      background: linear-gradient(135deg, #ffffff, #ff3d9a, #00e5ff);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 12px 32px rgba(255,61,154,0.4));
      animation: gradientShift 5s ease infinite;
    }
    
    .hero-subtitle {
      color: #e8f0ff;
      margin-top:1rem;
      font-size:1.15rem;
      font-weight:400;
      letter-spacing: 0.5px;
      text-shadow: 0 4px 12px rgba(0,0,0,0.6);
    }
    
    .hero-cta-wrap { 
      margin-top:2rem; 
      display:flex; 
      gap:16px; 
      justify-content:center;
      flex-wrap: wrap;
    }

    .btn-ghost {
      background: rgba(255,255,255,0.05);
      color: var(--text-bright);
      border-radius:50px;
      border:2px solid rgba(255,255,255,0.15);
      padding:12px 28px;
      font-weight: 600;
      letter-spacing: 0.6px;
      backdrop-filter: blur(10px);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      overflow: hidden;
    }
    
    .btn-ghost::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255,61,154,0.2), rgba(0,229,255,0.2));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .btn-ghost:hover::before {
      opacity: 1;
    }
    
    .btn-ghost:hover {
      transform: translateY(-3px);
      border-color: rgba(255,255,255,0.4);
      box-shadow: 0 12px 32px rgba(0,229,255,0.3);
    }

    /* EVENTS - Enhanced */
    #events { padding:90px 0; position: relative; }
    
    #events h2 { 
      font-family:'Montserrat'; 
      font-weight:800; 
      font-size: 2.8rem;
      background: linear-gradient(135deg, #ffffff, #ff3d9a, #9d4edd);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom:50px; 
      text-align:center;
      animation: gradientShift 6s ease infinite;
      filter: drop-shadow(0 4px 16px rgba(255,61,154,0.3));
    }

    .events-grid {
      perspective:1500px;
    }

    .event-card {
      border-radius:20px;
      overflow:hidden;
      background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
      border:2px solid rgba(255,255,255,0.08);
      transition: all .4s cubic-bezier(0.34, 1.56, 0.64, 1);
      transform-style: preserve-3d;
      will-change: transform;
      position: relative;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    }
    
    .event-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255,61,154,0.1), rgba(0,229,255,0.05));
      opacity: 0;
      transition: opacity 0.4s ease;
      z-index: 1;
      pointer-events: none;
    }
    
    .event-card:hover::before {
      opacity: 1;
    }

    .event-card:hover {
      transform: translateY(-24px) rotateX(8deg) rotateY(-6deg) scale(1.05);
      box-shadow: 0 48px 96px rgba(157,78,221,0.4), 0 24px 48px rgba(0,0,0,0.6);
      border-color: rgba(255,61,154,0.3);
    }

    .event-card .card-img-top {
      height:250px;
      object-fit:cover;
      display:block;
      transition: all .6s cubic-bezier(0.34, 1.56, 0.64, 1);
      transform-origin: center;
      will-change: transform;
      filter: brightness(0.85) saturate(1.1);
    }
    
    .event-card:hover .card-img-top { 
      transform: scale(1.15) translateZ(30px); 
      filter: brightness(1) saturate(1.3);
    }

    .card-body { 
      padding:24px; 
      position: relative;
      z-index: 2;
    }
    
    .card-title { 
      font-family:'Montserrat'; 
      font-weight:700; 
      letter-spacing:1px; 
      font-size: 1.3rem;
      background: linear-gradient(135deg, #ffffff, #ff3d9a);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom:10px;
    }
    
    .card-meta { 
      color:var(--muted); 
      font-size:0.98rem; 
      margin-bottom:12px;
      font-weight: 500;
    }

    .btn-book {
      background: linear-gradient(135deg, rgba(255,61,154,1), rgba(0,229,255,1));
      color:#0a0515;
      font-weight:700;
      letter-spacing: 0.8px;
      border-radius:14px;
      padding: 12px 24px;
      border: none;
      box-shadow: 0 8px 24px rgba(255,61,154,0.4);
      transition: all .3s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      overflow: hidden;
    }
    
    .btn-book::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255,255,255,0.5);
      transform: translate(-50%, -50%);
      transition: width 0.6s ease, height 0.6s ease;
    }
    
    .btn-book:hover::before {
      width: 300px;
      height: 300px;
    }
    
    .btn-book:hover { 
      transform: translateY(-4px) scale(1.05); 
      box-shadow: 0 16px 48px rgba(255,61,154,0.6), 0 8px 24px rgba(0,229,255,0.4);
    }

    /* Testimonials - Enhanced */
    .testimonials { 
      padding:80px 0; 
      background: linear-gradient(180deg, rgba(157,78,221,0.08), rgba(0,229,255,0.05)); 
      position: relative;
    }
    
    .testimonials h2 {
      font-family:'Montserrat'; 
      font-weight:800; 
      font-size: 2.8rem;
      background: linear-gradient(135deg, #ffffff, #00e5ff, #9d4edd);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom:50px; 
      text-align:center;
      animation: gradientShift 6s ease infinite;
    }
    
    .testimonial-card { 
      background:linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)); 
      border-radius:18px; 
      padding:28px; 
      border:2px solid rgba(255,255,255,0.08); 
      box-shadow: 0 12px 32px rgba(0,0,0,0.3);
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      backdrop-filter: blur(10px);
    }
    
    .testimonial-card:hover {
      transform: translateY(-12px);
      border-color: rgba(255,61,154,0.3);
      box-shadow: 0 24px 64px rgba(157,78,221,0.4);
    }
    
    .testimonial-card img { 
      object-fit:cover; 
      border: 3px solid rgba(255,61,154,0.3);
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    }

    /* About Section */
    #about h2 {
      font-family:'Montserrat'; 
      font-weight:800; 
      font-size: 2.8rem;
      background: linear-gradient(135deg, #ffffff, #9d4edd, #00e5ff);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom:30px; 
      text-align:center;
      animation: gradientShift 6s ease infinite;
    }

    /* Contact - Enhanced */
    #contact { padding:80px 0; }
    
    #contact h2 {
      font-family:'Montserrat'; 
      font-weight:800; 
      font-size: 2.8rem;
      background: linear-gradient(135deg, #ffffff, #ff3d9a, #00e5ff);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom:40px; 
      text-align:center;
      animation: gradientShift 6s ease infinite;
    }
    
    #contact .form-control {
      background: rgba(255,255,255,0.04);
      border:2px solid rgba(255,255,255,0.1);
      color:#ffffff;
      border-radius:12px;
      padding:16px 20px;
      font-weight: 500;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }
    
    #contact .form-control:focus {
      background: rgba(255,255,255,0.08);
      border-color: rgba(255,61,154,0.5);
      box-shadow: 0 0 24px rgba(255,61,154,0.3);
      outline: none;
    }
    
    #contact .form-control::placeholder { 
      color: rgba(255,255,255,0.5); 
    }
    
    #contact .btn-primary { 
      background: linear-gradient(135deg,var(--accent1),var(--accent2)); 
      border:none;
      padding: 14px 32px;
      font-weight: 700;
      letter-spacing: 1px;
      border-radius: 14px;
      box-shadow: 0 8px 24px rgba(255,61,154,0.4);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    #contact .btn-primary:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 16px 48px rgba(255,61,154,0.6);
    }

    /* Footer - Enhanced */
    footer { 
      padding:30px 0; 
      background: linear-gradient(180deg, transparent, rgba(10,5,21,0.8)); 
      color:var(--muted); 
      border-top:2px solid rgba(255,255,255,0.08); 
    }
    
    footer a { 
      color:var(--muted); 
      transition: all .3s ease;
      font-weight: 500;
      position: relative;
    }
    
    footer a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0%;
      height: 2px;
      background: linear-gradient(90deg, #ff3d9a, #00e5ff);
      transition: width 0.3s ease;
    }
    
    footer a:hover { 
      color:#fff;
      transform: translateY(-2px);
    }
    
    footer a:hover::after {
      width: 100%;
    }

    /* Modal - Enhanced */
    .modal-content { 
      background: linear-gradient(135deg, rgba(15,10,26,0.98), rgba(10,5,21,0.98)); 
      color:#ffffff; 
      border-radius:20px; 
      border:2px solid rgba(255,255,255,0.1); 
      box-shadow: 0 24px 64px rgba(0,0,0,0.6);
      backdrop-filter: blur(20px);
    }
    
    .modal-header {
      border-bottom: 2px solid rgba(255,255,255,0.1);
    }
    
    .modal-title {
      font-family: 'Montserrat';
      font-weight: 700;
      background: linear-gradient(135deg, #ffffff, #ff3d9a);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .modal-body .form-control {
      background: rgba(255,255,255,0.05);
      border: 2px solid rgba(255,255,255,0.1);
      color: #ffffff;
      border-radius: 10px;
      padding: 12px 16px;
      transition: all 0.3s ease;
    }
    
    .modal-body .form-control:focus {
      background: rgba(255,255,255,0.08);
      border-color: rgba(255,61,154,0.5);
      box-shadow: 0 0 20px rgba(255,61,154,0.3);
    }
    
    .modal-body .btn-success {
      background: linear-gradient(135deg, #10b981, #00e5ff);
      border: none;
      font-weight: 700;
      padding: 12px;
      border-radius: 12px;
      letter-spacing: 0.8px;
      box-shadow: 0 8px 24px rgba(16,185,129,0.4);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .modal-body .btn-success:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 40px rgba(16,185,129,0.6);
    }

    /* Responsive tweaks */
    @media (max-width:991px){
      .hero-title{ font-size:2.8rem; }
      .hero { min-height:600px; height:85vh; }
      #events h2, .testimonials h2, #about h2, #contact h2 { font-size: 2.2rem; }
    }
    @media (max-width:575px){
      .hero-title{ font-size:2rem; }
      .hero-subtitle{ font-size:1rem; }
      #events h2, .testimonials h2, #about h2, #contact h2 { font-size: 1.8rem; }
      .navbar-brand { font-size: 1.4rem; }
    }
  </style>
</head>
<body>

  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Eventify</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon" style="filter:invert(1);"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-center">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#events">Events</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          <li class="nav-item ms-2"><a class="btn btn-cta btn-sm" href="#events">Book Now</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero hero-lights" id="home">
    <!-- background image (parallax) -->
    <img src="./assets/bd.2.jpg" alt="Background" class="hero-bg" id="heroBg">

    <div class="hero-overlay"></div>

    <div class="hero-content" data-aos="zoom-in" data-aos-duration="900">
      <h1 class="hero-title">Music Fest 2025</h1>
      <p class="hero-subtitle">Join us for an unforgettable live concert experience — lights, beats, and moments that glow.</p>
      <div class="hero-cta-wrap">
        <a href="#events" class="btn btn-cta btn-lg">Book Tickets</a>
        <button class="btn btn-ghost btn-lg" onclick="document.querySelector('#about').scrollIntoView({behavior:'smooth'})">Learn More</button>
      </div>
    </div>
  </section>

  <!-- EVENTS -->
  <section id="events">
    <div class="container">
      <h2 data-aos="fade-up">Upcoming Events</h2>

      <div class="row g-4 events-grid">
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="80">
          <div class="card event-card h-100 shadow-sm">
            <img src="./assets/ev.1.jpg" class="card-img-top" alt="Event 1">
            <div class="card-body">
              <h5 class="card-title">MUSIC CONCERT</h5>
              <p class="card-meta">📅 20th September 2025&nbsp;&nbsp; ⏰ 6:00 PM</p>
              <p class="card-meta">📍 Chennai Stadium</p>
              <button class="btn btn-book w-100" data-bs-toggle="modal" data-bs-target="#bookingModal" data-event="MUSIC CONCERT - Chennai Stadium">Book Now</button>
            </div>
          </div>
        </div>

        <div class="col-md-4" data-aos="fade-up" data-aos-delay="160">
          <div class="card event-card h-100 shadow-sm">
            <img src="./assets/ev.2.jpg" class="card-img-top" alt="Event 2">
            <div class="card-body">
              <h5 class="card-title">DJ NIGHT PARTY</h5>
              <p class="card-meta">📅 31st August 2025&nbsp;&nbsp; ⏰ 8:30 PM</p>
              <p class="card-meta">📍 Bangalore Club</p>
              <button class="btn btn-book w-100" data-bs-toggle="modal" data-bs-target="#bookingModal" data-event="DJ NIGHT PARTY - Bangalore Club">Book Now</button>
            </div>
          </div>
        </div>

        <div class="col-md-4" data-aos="fade-up" data-aos-delay="240">
          <div class="card event-card h-100 shadow-sm">
            <img src="./assets/ev.3.jpg" class="card-img-top" alt="Event 3">
            <div class="card-body">
              <h5 class="card-title">MUSIC CONCERT</h5>
              <p class="card-meta">📅 30th September 2025&nbsp;&nbsp; ⏰ 7:00 PM</p>
              <p class="card-meta">📍 Coimbatore Arena</p>
              <button class="btn btn-book w-100" data-bs-toggle="modal" data-bs-target="#bookingModal" data-event="MUSIC CONCERT - Coimbatore Arena">Book Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Booking Modal (PHP logic untouched) -->
  <form action="index.php" method="POST">
    <div class="modal fade" id="bookingModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
          <div class="modal-header">
            <h5 class="modal-title">Book Your Ticket</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Event</label>
              <input type="text" id="eventName" class="form-control" readonly name="evn">
            </div>
            <div class="mb-3">
              <label class="form-label">Your Name</label>
              <input type="text" class="form-control" placeholder="Enter your name" required name="nm">
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" placeholder="Enter your email" required name="em">
            </div>
            <div class="mb-3">
              <label class="form-label">Phone</label>
              <input type="number" class="form-control" placeholder="Enter your mobile" required name="pho">
            </div>
            <div class="mb-3">
              <label class="form-label">Tickets</label>
              <input type="number" class="form-control" min="1" value="1" required name="noft">
            </div>
            <button type="submit" class="btn btn-success w-100" name="book">Confirm Booking</button>
          </div>
        </div>
      </div>
    </div>
  </form>

  <!-- ABOUT -->
  <section id="about" class="py-5">
    <div class="container">
      <h2 data-aos="fade-up">About Eventify</h2>
      <div class="row align-items-center mt-4">
        <div class="col-md-6" data-aos="fade-right">
          <h5 style="font-weight:700;">🎉 Experience Unforgettable Moments</h5>
          <p>Eventify brings electrifying concerts, sports matches, and glamorous parties to life. Our mission is to create memorable experiences for everyone.</p>
          <h6>📍 Address</h6>
          <p>123 Event Street, Tamil Nadu, India</p>
          <h6>📧 Email</h6>
          <p>contact@eventify.com</p>
          <h6>📞 Phone</h6>
          <p>+91 98765 43210</p>
        </div>
        <div class="col-md-6 text-center" data-aos="fade-left">
          <img src="./assets/about.jpg" class="img-fluid rounded shadow" alt="About Image" style="max-height:340px; object-fit:cover;">
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="testimonials">
    <div class="container">
      <h2 data-aos="fade-up">What People Say</h2>
      <div class="row g-4 mt-3">
        <div class="col-md-4" data-aos="flip-left" data-aos-delay="80">
          <div class="testimonial-card text-center">
            <img src="./assets/r.p.1.jpg" class="rounded-circle mb-3" width="80" height="80" alt="">
            <p>"Amazing experience! Loved the vibe and the performances."</p>
            <h6>- Rukmani Vasanth</h6>
          </div>
        </div>
        <div class="col-md-4" data-aos="flip-left" data-aos-delay="160">
          <div class="testimonial-card text-center">
            <img src="./assets/r.p.2.jpg" class="rounded-circle mb-3" width="80" height="80" alt="">
            <p>"The best event I’ve attended this year. Highly recommended!"</p>
            <h6>- Sai Pallavi</h6>
          </div>
        </div>
        <div class="col-md-4" data-aos="flip-left" data-aos-delay="240">
          <div class="testimonial-card text-center">
            <img src="./assets/sm.1.jpg" class="rounded-circle mb-3" width="80" height="80" alt="">
            <p>"Great organization and fantastic music. Can’t wait for the next one."</p>
            <h6>- SM</h6>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="py-5">
    <div class="container">
      <h2 data-aos="fade-up">Contact Us</h2>
      <div class="row justify-content-center mt-3">
        <div class="col-md-6" data-aos="fade-up" data-aos-delay="80">
          <form onsubmit="sendWhatsApp(); return false;">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Your Name" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Your Email" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Message</label>
              <textarea class="form-control" rows="4" id="message" placeholder="Your Message" required></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="text-center">
    <div class="container">
      <p>
        <a href="#">Facebook</a> | 
        <a href="#">Instagram</a> | 
        <a href="#">Twitter</a>
      </p>
      <p>&copy; 2025 Eventify. All rights reserved.</p>
    </div>
  </footer>

  <!-- Bootstrap + AOS + small utilities -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

  <script>
    // Initialize AOS
    AOS.init({
      once: true,
      easing: 'ease-out-cubic',
      duration: 700
    });

    // Booking Modal: set event name (unchanged)
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
      bookingModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const eventName = button.getAttribute('data-event') || '';
        document.getElementById('eventName').value = eventName;
      });
    }

    // WhatsApp send (unchanged behavior)
    function sendWhatsApp() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
      const phone = "918608144068";
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    }

    // HERO Parallax (subtle): translates background image based on scroll
    (function() {
      const bg = document.getElementById('heroBg');
      if(!bg) return;
      let latestKnownScrollY = 0;
      let ticking = false;

      function onScroll() {
        latestKnownScrollY = window.scrollY;
        requestTick();
      }

      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(update);
        }
        ticking = true;
      }

      function update() {
        const scrolled = latestKnownScrollY;
        // compute a parallax offset (subtle)
        // move up to +/- 40px based on scroll within first viewport
        const maxOffset = 40;
        const ratio = Math.min(scrolled / (window.innerHeight), 1);
        const offset = -maxOffset * ratio;
        // small horizontal drift using sine for natural feel
        const drift = Math.sin(scrolled / 200) * 6;
        bg.style.transform = `translate(calc(-50% + ${drift}px), calc(-50% + ${offset}px)) scale(1.03)`;
        ticking = false;
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      // initial update
      update();
    })();

    // Pointer-based tilt for stronger 3D feeling on event cards (hover motion)
    (function(){
      const cards = document.querySelectorAll('.event-card');
      cards.forEach(card => {
        card.addEventListener('pointermove', function(e) {
          const rect = card.getBoundingClientRect();
          const cx = rect.left + rect.width/2;
          const cy = rect.top + rect.height/2;
          const dx = e.clientX - cx;
          const dy = e.clientY - cy;
          const tiltx = (dy / rect.height) * 8; // rotateX
          const tilty = (dx / rect.width) * -8; // rotateY
          card.style.transform = `translateY(-18px) rotateX(${tiltx}deg) rotateY(${tilty}deg) scale(1.03)`;
        });
        card.addEventListener('pointerleave', function(){
          card.style.transform = '';
        });
      });
    })();
  </script>

  <!-- =============== DO NOT CHANGE PHP BELOW =============== -->
  <?php 
  if (isset($_POST['book'])) {
      $name  = $_POST['nm'];
      $email = $_POST['em'];  
      $pho   = $_POST['pho'];
      $noft  = $_POST['noft'];
      $event = $_POST['evn'];
  
      // Database connection
      $servername = "localhost";
      $username   = "u913997673_prasanna";
      $password   = "Ko%a/2klkcooj]@o";
      $dbname     = "u913997673_prasanna";
  
      $conn = new mysqli($servername, $username, $password, $dbname);
  
      if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
      }
  
      // Insert into database
      $sql = "INSERT INTO book (name,email,phone,noft,event) 
              VALUES ('$name','$email','$pho','$noft','$event')";
  
      if ($conn->query($sql) === TRUE) {
          // Success message
          echo "<script>
              Swal.fire({
                title: '✅ Booking Confirmed!',
                text: 'Your booking details have been saved in the database.',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#3085d6',
                customClass: {
                  title: 'swal2-title-custom',
                  popup: 'swal2-popup-custom'
                }
              }).then(() => {
                window.location.href='index.php';
              });
          </script>";
  
          // Send Email after successful booking
          $to = $email;
          $subject = "Your Event Booking Confirmation";
          $message = "Hello $name,\n\nThank you for booking with us!\n\n".
                     "Name: $name\nEmail: $email\nPhone: $pho\nTickets: $noft\nEvent: $event\n\n".
                     "We will contact you soon.\n\nRegards,\nEvent Team";
  
          $headers = "From: no-reply@prasanna.techmerise.com";
  
          if (mail($to, $subject, $message, $headers)) {
              echo "<script>alert('📩 Confirmation email sent to $email');</script>";
          } else {
              echo "<script>alert('⚠️ Failed to send confirmation email');</script>";
          }
  
      } else {
          // Error inserting data
          echo "<script>
              Swal.fire({
                title: '❌ Error!',
                text: 'Booking could not be saved.',
                icon: 'error',
                confirmButtonText: 'Try Again',
                confirmButtonColor: '#d33'
              });
          </script>";
      }
  
      $conn->close();
  }
  ?>
  <!-- =============== END PHP (UNCHANGED) =============== -->

</body>
</html>
