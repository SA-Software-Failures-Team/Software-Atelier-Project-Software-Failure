document.addEventListener('DOMContentLoaded', function () {
    //inject the sidebar into the templates. href needs to be adjusted
    const sidebarHTML = `
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <div class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <h5 class="mb-0">Catastrophic Software Failures</h5>
            <button class="sidebar-close" id="closeSidebar">&times;</button>
        </div>
        <div class="sidebar-content">
            
            <a href="index.html" class="menu-item">Home</a>
            <!--the links should be changed after the html of the subtopic pages are done -->
            
            <a href="../topics/topic_1/choose.html" class="menu-item has-submenu" data-toggle="topic1">
                <span>Transportation</span>
            </a>
            <div class="submenu" id="topic1">
                <a href="../topics/topic_1/topicgeneral_b.html" class="submenu-item has-submenu" data-toggle="topic1-bugs">
                    <span>Bugs</span>
                </a>
                <div class="subsubmenu" id="topic1-bugs">
                    <a href="/topics/topic_1/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Subtopic 1</a>
                    <a href="./topics/topic_1/subtopic_2/generalsubtopic.html" class="subsubmenu-item">Subtopic 2</a>
                    <a href="./topics/topic_1/subtopic_3/generalsubtopic.html" class="subsubmenu-item">Subtopic 3</a>
                    <a href="./topics/topic_1/subtopic_4/generalsubtopic.html" class="subsubmenu-item">Subtopic 4</a>
                    <a href="./topics/topic_1/subtopic_5/generalsubtopic.html" class="subsubmenu-item">Subtopic 5</a>
                </div>

                <a href="../topics/topic_1/topicgeneral_v.html" class="submenu-item has-submenu" data-toggle="topic1-vuln">
                    <span>Vulnerabilities</span>
                </a>
                <div class="subsubmenu" id="topic1-vuln">
                    <a href="./topics/topic_1/subtopic_6/generalsubtopic.html" class="subsubmenu-item">Subtopic 6</a>
                    <a href="./topics/topic_1/subtopic_7/generalsubtopic.html" class="subsubmenu-item">Subtopic 7</a>
                    <a href="./topics/topic_1/subtopic_8/generalsubtopic.html" class="subsubmenu-item">Subtopic 8</a>
                    <a href="./topics/topic_1/subtopic_9/generalsubtopic.html" class="subsubmenu-item">Subtopic 9</a>
                    <a href="./topics/topic_1/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Subtopic 10</a>
                </div>
            </div>

            
            <a href="../topics/topic_2/choose.html" class="menu-item has-submenu" data-toggle="topic2">
                <span>Energy/Infrastructure</span>
            </a>
            <div class="submenu" id="topic2">
                <div class="submenu-item has-submenu" data-toggle="topic2-bugs">
                    <span>Bugs</span>
                </div>
                <div class="subsubmenu" id="topic2-bugs">
                    <a href="./topics/topic_2/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Subtopic 1</a>
                    <a href="./topics/topic_2/subtopic_2/generalsubtopic.html" class="subsubmenu-item">Subtopic 2</a>
                    <a href="./topics/topic_2/subtopic_3/generalsubtopic.html" class="subsubmenu-item">Subtopic 3</a>
                    <a href="./topics/topic_2/subtopic_4/generalsubtopic.html" class="subsubmenu-item">Subtopic 4</a>
                    <a href="./topics/topic_2/subtopic_5/generalsubtopic.html" class="subsubmenu-item">Subtopic 5</a>
                </div>

                <div class="submenu-item has-submenu" data-toggle="topic2-vuln">
                    <span>Vulnerabilities</span>
                </div>
                <div class="subsubmenu" id="topic2-vuln">
                    <a href="./topics/topic_2/subtopic_6/generalsubtopic.html" class="subsubmenu-item">Subtopic 6</a>
                    <a href="./topics/topic_2/subtopic_7/generalsubtopic.html" class="subsubmenu-item">Subtopic 7</a>
                    <a href="./topics/topic_2/subtopic_8/generalsubtopic.html" class="subsubmenu-item">Subtopic 8</a>
                    <a href="./topics/topic_2/subtopic_9/generalsubtopic.html" class="subsubmenu-item">Subtopic 9</a>
                    <a href="./topics/topic_2/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Subtopic 10</a>
                </div>
            </div>

             
            <div class="menu-item has-submenu" data-toggle="topic3">
                <span>Business-Critical System</span>
            </div>
            <div class="submenu" id="topic3">
                <div class="submenu-item has-submenu" data-toggle="topic3-bugs">
                    <span>Bugs</span>
                </div>
                <div class="subsubmenu" id="topic3-bugs">
                    <a href="./topics/topic_3/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Subtopic 1</a>
                    <a href="./topics/topic_3/subtopic_2/generalsubtopic.html" class="subsubmenu-item">Subtopic 2</a>
                    <a href="./topics/topic_3/subtopic_3/generalsubtopic.html" class="subsubmenu-item">Subtopic 3</a>
                    <a href="./topics/topic_3/subtopic_4/generalsubtopic.html" class="subsubmenu-item">Subtopic 4</a>
                    <a href="./topics/topic_3/subtopic_5/generalsubtopic.html" class="subsubmenu-item">Subtopic 5</a>
                </div>

                <div class="submenu-item has-submenu" data-toggle="topic3-vuln">
                    <span>Vulnerabilities</span>
                </div>
                <div class="subsubmenu" id="topic3-vuln">
                    <a href="./topics/topic_3/subtopic_6/generalsubtopic.html" class="subsubmenu-item">Subtopic 6</a>
                    <a href="./topics/topic_3/subtopic_7/generalsubtopic.html" class="subsubmenu-item">Subtopic 7</a>
                    <a href="./topics/topic_3/subtopic_8/generalsubtopic.html" class="subsubmenu-item">Subtopic 8</a>
                    <a href="./topics/topic_3/subtopic_9/generalsubtopic.html" class="subsubmenu-item">Subtopic 9</a>
                    <a href="./topics/topic_3/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Subtopic 10</a>
                </div>
            </div>

            
            <div class="menu-item has-submenu" data-toggle="topic4">
                <span>Healthcare</span>
            </div>
            <div class="submenu" id="topic4">
                <div class="submenu-item has-submenu" data-toggle="topic4-bugs">
                    <span>Bugs</span>
                </div>
                <div class="subsubmenu" id="topic4-bugs">
                    <a href="./topics/topic_4/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Subtopic 1</a>
                    <a href="./topics/topic_4/subtopic_2/generalsubtopic.html" class="subsubmenu-item">Subtopic 2</a>
                    <a href="./topics/topic_4/subtopic_3/generalsubtopic.html" class="subsubmenu-item">Subtopic 3</a>
                    <a href="./topics/topic_4/subtopic_4/generalsubtopic.html" class="subsubmenu-item">Subtopic 4</a>
                    <a href="./topics/topic_4/subtopic_5/generalsubtopic.html" class="subsubmenu-item">Subtopic 5</a>
                </div>

                <div class="submenu-item has-submenu" data-toggle="topic4-vuln">
                    <span>Vulnerabilities</span>
                </div>
                <div class="subsubmenu" id="topic4-vuln">
                    <a href="./topics/topic_4/subtopic_6/generalsubtopic.html" class="subsubmenu-item">Subtopic 6</a>
                    <a href="./topics/topic_4/subtopic_7/generalsubtopic.html" class="subsubmenu-item">Subtopic 7</a>
                    <a href="./topics/topic_4/subtopic_8/generalsubtopic.html" class="subsubmenu-item">Subtopic 8</a>
                    <a href="./topics/topic_4/subtopic_9/generalsubtopic.html" class="subsubmenu-item">Subtopic 9</a>
                    <a href="./topics/topic_4/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Subtopic 10</a>
                </div>
            </div>
        </div>
    </div>
    `;


    //injecting it inside the body
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);


    //adding current-page-link class. Still need to adjust it
    const currentPath = window.location.pathname;

    document.querySelectorAll('.sidebar a').forEach(link => {
        

        if (link.pathname === currentPath) {
            link.classList.add('current-page-link');
        }
    });

   

    const localHamburger = document.querySelector('.hamburger-icon');
    const navLocal = document.querySelector('.nav');
    const mainContent = document.querySelector('main');
    const openFullMenuBtn = document.getElementById('openFullMenuBtn');
    const globalSidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeGlobalBtn = document.getElementById('closeSidebar');

    //sidebar functions
    function openLocalSidebar() {
        if(navLocal) navLocal.classList.add('menu-open-full');
        if(mainContent) mainContent.classList.add('main-pushed');
    }
    function closeLocalSidebar() {
        if(navLocal) navLocal.classList.remove('menu-open-full');
        if(mainContent) mainContent.classList.remove('main-pushed');
    }
    function toggleLocalSidebar() {
        if (globalSidebar && globalSidebar.classList.contains('active')) {
            closeGlobalSidebar();
            setTimeout(openLocalSidebar, 300);
        } else {
            if (navLocal && navLocal.classList.contains('menu-open-full')) closeLocalSidebar();
            else openLocalSidebar();
        }
    }
    function openGlobalSidebar(e) {
        if (e) e.preventDefault();
        closeLocalSidebar();
        if(globalSidebar) globalSidebar.classList.add('active');
        if(sidebarOverlay) sidebarOverlay.classList.add('active');


        const activeLink = globalSidebar ? globalSidebar.querySelector('.current-page-link') : null;
        if (activeLink) {
            let parent = activeLink.parentElement;
            while (parent && !parent.classList.contains('sidebar-content')) {
                if (parent.classList.contains('submenu') || parent.classList.contains('subsubmenu')) {
                    parent.classList.add('expanded');
                    const toggleBtn = globalSidebar.querySelector(`[data-toggle="${parent.id}"]`);
                    if (toggleBtn) toggleBtn.classList.add('expanded');

                    const arrow = toggleBtn ? toggleBtn.querySelector('.arrow-icon') : null;
                    if (arrow) arrow.style.transform = 'rotate(90deg)';
                }
                parent = parent.parentElement;
            }
        }
    }
    function closeGlobalSidebar() {
        if(globalSidebar) globalSidebar.classList.remove('active');
        if(sidebarOverlay) sidebarOverlay.classList.remove('active');
    }

    if (localHamburger) localHamburger.onclick = toggleLocalSidebar;
    if (openFullMenuBtn) openFullMenuBtn.addEventListener('click', openGlobalSidebar);
    if (closeGlobalBtn) closeGlobalBtn.addEventListener('click', closeGlobalSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeGlobalSidebar);

    //function to make the clicks links or expansions
    document.querySelectorAll('[data-toggle]').forEach(item => {
        item.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const isArrowArea = clickX > (rect.width - 70);

            if (this.tagName === 'A' && !isArrowArea) {
                return;
            }

            e.preventDefault();
            const target = document.getElementById(this.getAttribute('data-toggle'));
            if (target) {
                this.classList.toggle('expanded');
                target.classList.toggle('expanded');
            }
        });
    });

    //general sidebar to subtopic sidebar
    const currentPageLink = globalSidebar ? globalSidebar.querySelector('.current-page-link') : null;
    if (currentPageLink) {
        currentPageLink.addEventListener('click', function (e) {
            e.preventDefault();
            closeGlobalSidebar();
            setTimeout(openLocalSidebar, 300);
        });
    }
});