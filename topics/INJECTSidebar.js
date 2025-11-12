document.addEventListener('DOMContentLoaded', function () {
    //inject the sidebar into the templates. href needs to be adjusted

    let tmpdiv=document.getElementsByClassName("nav-ul");
    var tmpstring;
    for(let i=0; i<tmpdiv.length; i++){

        tmpstring=tmpdiv[i].innerHTML;
        tmpdiv[i].innerHTML=tmpstring+' <li class="nav-li" style="margin-top: 20px; border-top: 1px solid #333;"> <a href="#" id="openFullMenuBtn" style="color: #fff; font-weight: bold;"> Full Menu </a>'

    }

    //adding css styles to the templates pages
    tmpdiv=document.createElement("link");
    tmpdiv.rel="stylesheet";
    tmpdiv.href="../../../index.css";
    document.head.appendChild(tmpdiv);
    let tmpdiv2 = document.createElement("link");
    tmpdiv2.rel = "stylesheet";
    tmpdiv2.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    document.head.appendChild(tmpdiv2);
     




    const sidebarHTML = `
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <div class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <h5 class="mb-0 light-mode text-white">Catastrophic Software Failures</h5>
            <button class="sidebar-close" id="closeSidebar">&times;</button>
        </div>
        <div class="sidebar-content">
            
            <a href="../../../index.html" class="menu-item">Home</a>
            <!--the links should be changed after the html of the subtopic pages are done -->
            
            <a href="../../topic_1/choose.html" class="menu-item has-submenu" data-toggle="topic1">
                <span>Transportation</span>
            </a>
            <div class="submenu" id="topic1">
                <a href="../../topic_1/topicgeneral_b.html" class="submenu-item has-submenu" data-toggle="topic1-bugs">
                    <span>Bugs</span>
                </a>
                <div class="subsubmenu" id="topic1-bugs">
                    <a href="../../topic_1/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Arienne 5</a>
                    <a href="../../topic_1/subtopic_2/generalsubtopic.html" class="subsubmenu-item">Mars Climate Orbiter</a>
                    <a href="../../topic_1/subtopic_3/generalsubtopic.html" class="subsubmenu-item">Mars Polar Lan</a>
                    <a href="../../topic_1/subtopic_4/generalsubtopic.html" class="subsubmenu-item">F-35 Lightning</a>
                    <a href="../../topic_1/subtopic_5/generalsubtopic.html" class="subsubmenu-item">F22 Raptor</a>
                </div>

                <a href="../../topic_1/topicgeneral_v.html" class="submenu-item has-submenu" data-toggle="topic1-vuln">
                    <span>Vulnerabilities</span>
                </a>
                <div class="subsubmenu" id="topic1-vuln">
                    <a href="../../topic_1/subtopic_6/generalsubtopic.html" class="subsubmenu-item">Boeing 737 max</a>
                    <a href="../../topic_1/subtopic_7/generalsubtopic.html" class="subsubmenu-item">Patriot Missile</a>
                    <a href="../../topic_1/subtopic_8/generalsubtopic.html" class="subsubmenu-item">Faa Notam Failure</a>
                    <a href="../../topic_1/subtopic_9/generalsubtopic.html" class="subsubmenu-item">F-15/F-16</a>
                    <a href="../../topic_1/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Jeep Cherokee</a>
                </div>
            </div>

            
            <a href="../../topic_2/choose.html" class="menu-item has-submenu" data-toggle="topic2">
                <span>Energy/Infrastructure</span>
            </a>
            <div class="submenu" id="topic2">
                <a href="../../topic_2/topicgeneral_b.html" class="submenu-item has-submenu" data-toggle="topic2-bugs">
                <span>Bugs</span>
                </a>
                <div class="subsubmenu" id="topic2-bugs">
                    <a href="../../topic_2/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Denver International Airport Baggage System</a>
                    <a href="../../topic_2/subtopic_2/generalsubtopic.html" class="subsubmenu-item">USA Hatch Nuclear Plant Shutdown</a>
                    <a href="../../topic_2/subtopic_3/generalsubtopic.html" class="subsubmenu-item">Deepwater Horizon Oil Rig Incident Software</a>
                    <a href="../../topic_2/subtopic_4/generalsubtopic.html" class="subsubmenu-item">North-East Blackout 2003</a>
                    <a href="../../topic_2/subtopic_5/generalsubtopic.html" class="subsubmenu-item">Texas Power Grid Modeling Error</a>
                </div>

                <a href="../../topic_2/topicgeneral_v.html" class="submenu-item has-submenu" data-toggle="topic2-vuln">
                <span>Vulnerabilities</span>
                </a>
                <div class="subsubmenu" id="topic2-vuln">
                    <a href="../../topic_2/subtopic_6/generalsubtopic.html" class="subsubmenu-item">Stuxnet Worm</a>
                    <a href="../../topic_2/subtopic_7/generalsubtopic.html" class="subsubmenu-item">Ukraine Power Grid Hack</a>
                    <a href="../../topic_2/subtopic_8/generalsubtopic.html" class="subsubmenu-item">Solar Winds Supply Chain Attack</a>
                    <a href="../../topic_2/subtopic_9/generalsubtopic.html" class="subsubmenu-item">Colonial Pipeline Ransomware Attack</a>
                    <a href="../../topic_2/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Oldsmar Water Treatment Facility Attack</a>
                </div>
            </div>

             
            <a href="../../topic_3/choose.html" class="menu-item has-submenu" data-toggle="topic3">
                <span>Business-Critical Systems</span>
            </a>
            <div class="submenu" id="topic3">
                <a href="../../topic_3/topicgeneral_b.html" class="submenu-item has-submenu" data-toggle="topic3-bugs">
                <span>Bugs</span>
                </a>
                <div class="subsubmenu" id="topic3-bugs">
                    <a href="../../topic_3/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Office 365 Outage</a>
                    <a href="../../topic_3/subtopic_2/generalsubtopic.html" class="subsubmenu-item">AWS</a>
                    <a href="../../topic_3/subtopic_3/generalsubtopic.html" class="subsubmenu-item">TSB Bank</a>
                    <a href="../../topic_3/subtopic_4/generalsubtopic.html" class="subsubmenu-item">Vancouver Stock Exchange</a>
                    <a href="../../topic_3/subtopic_5/generalsubtopic.html" class="subsubmenu-item">Knight Capital Group</a>
                </div>

                <a href="../../topic_3/topicgeneral_v.html" class="submenu-item has-submenu" data-toggle="topic3-vuln">
                <span>Vulnerabilities</span>
                </a>
                <div class="subsubmenu" id="topic3-vuln">
                    <a href="../../topic_3/subtopic_6/generalsubtopic.html" class="subsubmenu-item">OVH Cloud Data Center</a>
                    <a href="../../topic_3/subtopic_7/generalsubtopic.html" class="subsubmenu-item">Heartbleed</a>
                    <a href="../../topic_3/subtopic_8/generalsubtopic.html" class="subsubmenu-item">NHS Ransomware Attack</a>
                    <a href="../../topic_3/subtopic_9/generalsubtopic.html" class="subsubmenu-item">Facebook Global Outage</a>
                    <a href="../../topic_3/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Equifax Data Breach</a>
                </div>
            </div>

            
            <a href="../../topic_4/choose.html" class="menu-item has-submenu" data-toggle="topic4">
                <span>Healthcare</span>
            </a>
            <div class="submenu" id="topic4">
                <a href="../../topic_4/topicgeneral_b.html" class="submenu-item has-submenu" data-toggle="topic4-bugs">
                <span>Bugs</span>
                </a>
                <div class="subsubmenu" id="topic4-bugs">
                    <a href="../../topic_4/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Therac-25</a>
                    <a href="../../topic_4/subtopic_2/generalsubtopic.html" class="subsubmenu-item">Panama City</a>
                    <a href="../../topic_4/subtopic_3/generalsubtopic.html" class="subsubmenu-item">UK Covid-19 Excel Data Loss</a>
                    <a href="../../topic_4/subtopic_4/generalsubtopic.html" class="subsubmenu-item">Healthcare Gov Launch Failure</a>
                    <a href="../../topic_4/subtopic_5/generalsubtopic.html" class="subsubmenu-item">Infusion Pump & Change Healthcare</a>
                </div>

                <a href="../../topic_4/topicgeneral_v.html" class="submenu-item has-submenu" data-toggle="topic4-vuln">
                <span>Vulnerabilities</span>
                </a>
                <div class="subsubmenu" id="topic4-vuln">
                    <a href="../../topic_4/subtopic_6/generalsubtopic.html" class="subsubmenu-item">WannaCry</a>
                    <a href="../../topic_4/subtopic_7/generalsubtopic.html" class="subsubmenu-item">U.S. Medical Imaging</a>
                    <a href="../../topic_4/subtopic_8/generalsubtopic.html" class="subsubmenu-item">Medtronic</a>
                    <a href="../../topic_4/subtopic_9/generalsubtopic.html" class="subsubmenu-item">Philips IntelliBridge Gateways</a>
                    <a href="../../topic_4/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Change Healthcare Ransomware Breach</a>
                </div>
            </div>
            <a href="../../../about_us/about_us.html" class="menu-item">About us</a>

            <a href="../../../table/members-contribution.html" class="menu-item">Members contribution</a>
        </div>
    </div>
    `;


    //injecting it inside the body
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);


    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');

    const topicFolder = pathParts.find(part => part.startsWith('topic_'));
    const subtopicFolder = pathParts.find(part => part.startsWith('subtopic_'));

    if (topicFolder && subtopicFolder) {
        
        const uniquePathSegment = `${topicFolder}/${subtopicFolder}/`;

        document.querySelectorAll('.sidebar a').forEach(link => {
            const linkHref = link.getAttribute('href');
            
            if (linkHref.includes(uniquePathSegment)) {
                link.classList.add('current-page-link-subtopic');
            }
        });
    }

   

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


        const activeLink = globalSidebar ? globalSidebar.querySelector('.current-page-link-subtopic') : null;
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
    const currentPageLink = globalSidebar ? globalSidebar.querySelector('.current-page-link-subtopic') : null;
    if (currentPageLink) {
        currentPageLink.addEventListener('click', function (e) {
            e.preventDefault();
            closeGlobalSidebar();
            setTimeout(openLocalSidebar, 300);
        });
    }
});