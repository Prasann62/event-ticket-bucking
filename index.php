<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EVENTIFY - Premium Event Booking</title>
  <meta name="description" content="Book tickets for exclusive concerts, DJ nights, and live events.">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- SweetAlert2 -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  <!-- Custom CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- NAVBAR -->
  <nav class="navbar" id="navbar">
    <a href="#" class="navbar-brand">EVENTIFY</a>
    <ul class="nav-links">
      <li><a href="#events">Events</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#testimonials">Reviews</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="menu-toggle" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>

  <!-- HERO SECTION -->
  <section class="hero" id="home">
    <img src="./assets/bd.2.jpg" alt="Concert" class="hero-bg">
    
    <div class="hero-content">
      <div class="hero-tag">Premium Experience</div>
      <h1 class="hero-title">
        <span>LIVE</span>
        <span class="accent">EVENTS</span>
      </h1>
      <p class="hero-subtitle">
        Experience the thrill of live music. Book your tickets for the most exclusive concerts, 
        DJ nights, and live performances across India.
      </p>
      <div class="hero-cta">
        <a href="#events" class="btn-primary">Explore Events</a>
        <a href="#about" class="btn-outline">Learn More</a>
      </div>
    </div>

    <div class="scroll-down">
      <span>Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>

  <!-- EVENTS SECTION -->
  <section class="section" id="events">
    <div class="section-header">
      <div class="section-tag">Upcoming</div>
      <h2 class="section-title">Featured Events</h2>
    </div>

    <div class="events-grid">
      <!-- Event 1 -->
      <div class="event-card">
        <div class="event-card-image">
          <img src="./assets/ev.1.jpg" alt="Music Concert">
        </div>
        <div class="event-card-content">
          <h3 class="event-card-title">Music Concert</h3>
          <p class="event-card-meta"><span>📅</span> 20th September 2025</p>
          <p class="event-card-meta"><span>⏰</span> 6:00 PM</p>
          <p class="event-card-meta"><span>📍</span> Chennai Stadium</p>
          <button class="event-card-btn" data-bs-toggle="modal" data-bs-target="#bookingModal" data-event="MUSIC CONCERT - Chennai Stadium">
            Book Now
          </button>
        </div>
      </div>

      <!-- Event 2 -->
      <div class="event-card">
        <div class="event-card-image">
          <img src="./assets/ev.2.jpg" alt="DJ Night">
        </div>
        <div class="event-card-content">
          <h3 class="event-card-title">DJ Night Party</h3>
          <p class="event-card-meta"><span>📅</span> 31st August 2025</p>
          <p class="event-card-meta"><span>⏰</span> 8:30 PM</p>
          <p class="event-card-meta"><span>📍</span> Bangalore Club</p>
          <button class="event-card-btn" data-bs-toggle="modal" data-bs-target="#bookingModal" data-event="DJ NIGHT PARTY - Bangalore Club">
            Book Now
          </button>
        </div>
      </div>

      <!-- Event 3 -->
      <div class="event-card">
        <div class="event-card-image">
          <img src="./assets/ev.3.jpg" alt="Live Performance">
        </div>
        <div class="event-card-content">
          <h3 class="event-card-title">Live Performance</h3>
          <p class="event-card-meta"><span>📅</span> 30th September 2025</p>
          <p class="event-card-meta"><span>⏰</span> 7:00 PM</p>
          <p class="event-card-meta"><span>📍</span> Coimbatore Arena</p>
          <button class="event-card-btn" data-bs-toggle="modal" data-bs-target="#bookingModal" data-event="LIVE PERFORMANCE - Coimbatore Arena">
            Book Now
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section class="section section-dark" id="about">
    <div class="about-grid">
      <div class="about-content">
        <div class="section-tag">About Us</div>
        <h3>Experience Unforgettable Moments</h3>
        <p>
          Eventify brings electrifying concerts, sports matches, and glamorous parties to life. 
          Our mission is to create memorable experiences for everyone.
        </p>
        <p>
          We partner with the best venues and artists to deliver world-class entertainment 
          that you'll remember forever.
        </p>
        
        <div class="about-info">
          <div class="about-info-item">
            <h6>Address</h6>
            <p>123 Event Street, Tamil Nadu, India</p>
          </div>
          <div class="about-info-item">
            <h6>Email</h6>
            <p>contact@eventify.com</p>
          </div>
          <div class="about-info-item">
            <h6>Phone</h6>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </div>
      
      <div class="about-image">
        <img src="./assets/about.jpg" alt="About Eventify">
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="section" id="testimonials">
    <div class="section-header">
      <div class="section-tag">Testimonials</div>
      <h2 class="section-title">What People Say</h2>
    </div>

    <div class="testimonials-grid">
      <div class="testimonial-card">
        <img src="./assets/r.p.1.jpg" alt="Reviewer" class="testimonial-avatar">
        <p class="testimonial-text">"Amazing experience! Loved the vibe and the performances. Will definitely come back for more."</p>
        <div class="testimonial-name">Rukmani Vasanth</div>
      </div>

      <div class="testimonial-card">
        <img src="./assets/r.p.2.jpg" alt="Reviewer" class="testimonial-avatar">
        <p class="testimonial-text">"The best event I've attended this year. The organization was flawless. Highly recommended!"</p>
        <div class="testimonial-name">Sai Pallavi</div>
      </div>

      <div class="testimonial-card">
        <img src="./assets/sm.1.jpg" alt="Reviewer" class="testimonial-avatar">
        <p class="testimonial-text">"Great organization and fantastic music. The atmosphere was electric. Can't wait for the next one."</p>
        <div class="testimonial-name">SM</div>
      </div>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section class="section section-dark" id="contact">
    <div class="section-header">
      <div class="section-tag">Get in Touch</div>
      <h2 class="section-title">Contact Us</h2>
    </div>

    <div class="contact-container">
      <form class="contact-form" onsubmit="sendWhatsApp(); return false;">
        <div class="form-group">
          <label class="form-label">Your Name</label>
          <input type="text" class="form-input" id="contactName" placeholder="Enter your name" required>
        </div>
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input type="email" class="form-input" id="contactEmail" placeholder="Enter your email" required>
        </div>
        <div class="form-group">
          <label class="form-label">Message</label>
          <textarea class="form-input" id="contactMessage" placeholder="Your message..." required></textarea>
        </div>
        <button type="submit" class="form-submit">Send Message</button>
      </form>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">EVENTIFY</div>
      <div class="footer-links">
        <a href="#events">Events</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>
    </div>
    <div class="footer-copyright">
      &copy; 2025 Eventify. All rights reserved.
    </div>
  </footer>

  <!-- BOOKING MODAL -->
  <form action="index.php" method="POST">
    <div class="modal fade" id="bookingModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Book Your Ticket</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-4">
              <label class="form-label">Event</label>
              <input type="text" id="eventName" class="form-control" readonly name="evn">
            </div>
            <div class="mb-4">
              <label class="form-label">Your Name</label>
              <input type="text" class="form-control" placeholder="Enter name" required name="nm">
            </div>
            <div class="mb-4">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" placeholder="Enter email" required name="em">
            </div>
            <div class="mb-4">
              <label class="form-label">Phone</label>
              <input type="number" class="form-control" placeholder="Enter phone" required name="pho">
            </div>
            <div class="mb-4">
              <label class="form-label">Tickets</label>
              <input type="number" class="form-control" min="1" value="1" required name="noft">
            </div>
            <button type="submit" class="btn btn-success w-100" name="book">Confirm Booking</button>
          </div>
        </div>
      </div>
    </div>
  </form>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

  <script>
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Modal event name
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
      bookingModal.addEventListener('show.bs.modal', (e) => {
        const btn = e.relatedTarget;
        const eventName = btn.getAttribute('data-event') || '';
        document.getElementById('eventName').value = eventName;
      });
    }

    // WhatsApp contact
    function sendWhatsApp() {
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();
      const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
      window.open(`https://wa.me/918608144068?text=${text}`, '_blank');
    }

    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  </script>

  <!-- PHP BOOKING HANDLER -->
  <?php 
  if (isset($_POST['book'])) {
      $name  = $_POST['nm'];
      $email = $_POST['em'];  
      $pho   = $_POST['pho'];
      $noft  = $_POST['noft'];
      $event = $_POST['evn'];
  
      $servername = "localhost";
      $username   = "u913997673_prasanna";
      $password   = "Ko%a/2klkcooj]@o";
      $dbname     = "u913997673_prasanna";
  
      $conn = new mysqli($servername, $username, $password, $dbname);
  
      if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
      }
  
      $sql = "INSERT INTO book (name,email,phone,noft,event) VALUES ('$name','$email','$pho','$noft','$event')";
  
      if ($conn->query($sql) === TRUE) {
          echo "<script>
              Swal.fire({
                title: 'Booking Confirmed!',
                text: 'Your tickets have been booked successfully.',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#e63946',
                background: '#0a0a0a',
                color: '#ffffff'
              }).then(() => { window.location.href='index.php'; });
          </script>";
  
          $to = $email;
          $subject = "Event Booking Confirmation";
          $message = "Hello $name,\n\nYour booking is confirmed!\n\nEvent: $event\nTickets: $noft\n\nThank you!\nEventify Team";
          $headers = "From: no-reply@prasanna.techmerise.com";
          mail($to, $subject, $message, $headers);
      } else {
          echo "<script>
              Swal.fire({
                title: 'Error!',
                text: 'Booking failed. Please try again.',
                icon: 'error',
                confirmButtonColor: '#e63946',
                background: '#0a0a0a',
                color: '#ffffff'
              });
          </script>";
      }
  
      $conn->close();
  }
  ?>

</body>
</html>
