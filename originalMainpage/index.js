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