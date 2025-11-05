

const images = [
  'index_img/bgindex.jpg',
  'index_img/bgindex2.jpg',
  'index_img/bgindex3.jpg',
  'index_img/bgindex4.jpg'
];

let index = 0;
let showingFirst = true;

const bg1 = document.getElementById('background1');
const bg2 = document.getElementById('background2');

// Preload all images to prevent white flash
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

// Initialize first background
bg1.style.backgroundImage = `url(${images[0]})`;
bg1.style.opacity = 1;

function changeBackground() {
  index = (index + 1) % images.length;
  const nextImage = images[index];

  if (showingFirst) {
    bg2.style.backgroundImage = `url(${nextImage})`;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    bg1.style.backgroundImage = `url(${nextImage})`;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }

  showingFirst = !showingFirst;
}

// Change every 5 seconds
setInterval(changeBackground, 5000);



document.addEventListener('DOMContentLoaded', function() {
            // FAQ
            document.querySelectorAll('.faq-question').forEach(button => {
                button.addEventListener('click', () => {
                    const answer = button.nextElementSibling;

                    if (answer.style.maxHeight) {
                        answer.style.maxHeight = null;
                        answer.style.opacity = 0;
                        answer.classList.remove('active');
                    } else {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                        answer.style.opacity = 1;
                        answer.classList.add('active');
                    }

                    const expanded = button.getAttribute('aria-expanded') === 'true' || false;
                    button.setAttribute('aria-expanded', !expanded);
                });
            });

            // sidebar functionality
            const menuBtn = document.getElementById('menuBtn');
            const sidebar = document.getElementById('sidebar');
            const sidebarOverlay = document.getElementById('sidebarOverlay');
            const closeSidebar = document.getElementById('closeSidebar');

            function openSidebar() {
                sidebar.classList.add('active');
                sidebarOverlay.classList.add('active');
            }

            function closeSidebarFunc() {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            }

            menuBtn.addEventListener('click', openSidebar);
            closeSidebar.addEventListener('click', closeSidebarFunc);
            sidebarOverlay.addEventListener('click', closeSidebarFunc);

            
            document.querySelectorAll('[data-toggle]').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('data-toggle');
                    const target = document.getElementById(targetId);
                    
                    
                    this.classList.toggle('expanded');
                    target.classList.toggle('expanded');
                });
            });
        });