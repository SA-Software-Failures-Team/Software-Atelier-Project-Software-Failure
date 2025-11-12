document.addEventListener('DOMContentLoaded', function () {

    let tmpdiv = document.createElement("link");
    tmpdiv.rel = "stylesheet";
    tmpdiv.href = "../../index.css";
    document.head.appendChild(tmpdiv);

    let tmpdiv2 = document.createElement("link");
    tmpdiv2.rel = "stylesheet";
    tmpdiv2.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    document.head.appendChild(tmpdiv2);

    let tmpdiv3 = document.createElement("link");
    tmpdiv3.rel = "stylesheet";
    tmpdiv3.href = "../subtopic_styles/general_subtopic_index.css";
    document.head.appendChild(tmpdiv3);


    const sidebarHTML = `
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <div class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <h5 class="mb-0 light-mode text-white">Catastrophic Software Failures</h5>
            <button class="sidebar-close" id="closeSidebar">&times;</button>
        </div>
        <div class="sidebar-content">
            
            <a href="../../index.html" class="menu-item">Home</a>
            
            <a href="../topic_1/choose.html" class="menu-item has-submenu" data-toggle="topic1">
                <span>Transportation</span>
            </a>
            <div class="submenu" id="topic1">
                <a href="../topic_1/topicgeneral_b.html" class="submenu-item has-submenu" data-toggle="topic1-bugs">
                    <span>Bugs</span>
                </a>
                <div class="subsubmenu" id="topic1-bugs">
                    <a href="../topic_1/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Arienne 5</a>
                    <a href="../topic_1/subtopic_2/generalsubtopic.html" class="subsubmenu-item">Mars Climate Orbiter</a>
                    <a href="../topic_1/subtopic_3/generalsubtopic.html" class="subsubmenu-item">Mars Polar Lan</a>
                    <a href="../topic_1/subtopic_4/generalsubtopic.html" class="subsubmenu-item">F-35 Lightning</a>
                    <a href="../topic_1/subtopic_5/generalsubtopic.html" class="subsubmenu-item">F22 Raptor</a>
                </div>

                <a href="../topic_1/topicgeneral_v.html" class="submenu-item has-submenu" data-toggle="topic1-vuln">
                    <span>Vulnerabilities</span>
                </a>
                <div class="subsubmenu" id="topic1-vuln">
                    <a href="../topic_1/subtopic_6/generalsubtopic.html" class="subsubmenu-item">Boeing 737 max</a>
                    <a href="../topic_1/subtopic_7/generalsubtopic.html" class="subsubmenu-item">Patriot Missile</a>
                    <a href="../topic_1/subtopic_8/generalsubtopic.html" class="subsubmenu-item">Faa Notam Failure</a>
                    <a href="../topic_1/subtopic_9/generalsubtopic.html" class="subsubmenu-item">F-15/F-16</a>
                    <a href="../topic_1/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Jeep Cherokee</a>
                </div>
            </div>

            <a href="../topic_2/choose.html" class="menu-item has-submenu" data-toggle="topic2">
                <span>Energy/Infrastructure</span>
            </a>
            <div class="submenu" id="topic2">
                <a href="../topic_2/topicgeneral_b.html" class="submenu-item has-submenu" data-toggle="topic2-bugs">
                <span>Bugs</span>
                </a>
                <div class="subsubmenu" id="topic2-bugs">
                    <a href="../topic_2/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Denver International Airport Baggage System</a>
                    <a href="../topic_2/subtopic_2/generalsubtopic.html" class="subsubmenu-item">USA Hatch Nuclear Plant Shutdown</a>
                    <a href="../topic_2/subtopic_3/generalsubtopic.html" class="subsubmenu-item">Deepwater Horizon Oil Rig Incident Software</a>
                    <a href="../topic_2/subtopic_4/generalsubtopic.html" class="subsubmenu-item">North-East Blackout 2003</a>
                    <a href="../topic_2/subtopic_5/generalsubtopic.html" class="subsubmenu-item">Texas Power Grid Modeling Error</a>
                </div>

                <a href="../topic_2/topicgeneral_v.html" class="submenu-item has-submenu" data-toggle="topic2-vuln">
                <span>Vulnerabilities</span>
                </a>
                <div class="subsubmenu" id="topic2-vuln">
                    <a href="../topic_2/subtopic_6/generalsubtopic.html" class="subsubmenu-item">Stuxnet Worm</a>
                    <a href="../topic_2/subtopic_7/generalsubtopic.html" class="subsubmenu-item">Ukraine Power Grid Hack</a>
                    <a href="../topic_2/subtopic_8/generalsubtopic.html" class="subsubmenu-item">Solar Winds Supply Chain Attack</a>
                    <a href="../topic_2/subtopic_9/generalsubtopic.html" class="subsubmenu-item">Colonial Pipeline Ransomware Attack</a>
                    <a href="../topic_2/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Oldsmar Water Treatment Facility Attack</a>
                </div>
            </div>

            <a href="../topic_3/choose.html" class="menu-item has-submenu" data-toggle="topic3">
                <span>Business-Critical Systems</span>
            </a>
            <div class="submenu" id="topic3">
                <a href="../topic_3/topicgeneral_b.html" class="submenu-item has-submenu" data-toggle="topic3-bugs">
                <span>Bugs</span>
                </a>
                <div class="subsubmenu" id="topic3-bugs">
                    <a href="../topic_3/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Office 365 Outage</a>
                    <a href="../topic_3/subtopic_2/generalsubtopic.html" class="subsubmenu-item">AWS</a>
                    <a href="../topic_3/subtopic_3/generalsubtopic.html" class="subsubmenu-item">TSB Bank</a>
                    <a href="../topic_3/subtopic_4/generalsubtopic.html" class="subsubmenu-item">Vancouver Stock Exchange</a>
                    <a href="../topic_3/subtopic_5/generalsubtopic.html" class="subsubmenu-item">Knight Capital Group</a>
                </div>

                <a href="../topic_3/topicgeneral_v.html" class="submenu-item has-submenu" data-toggle="topic3-vuln">
                <span>Vulnerabilities</span>
                </a>
                <div class="subsubmenu" id="topic3-vuln">
                    <a href="../topic_3/subtopic_6/generalsubtopic.html" class="subsubmenu-item">OVH Cloud Data Center</a>
                    <a href="../topic_3/subtopic_7/generalsubtopic.html" class="subsubmenu-item">Heartbleed</a>
                    <a href="../topic_3/subtopic_8/generalsubtopic.html" class="subsubmenu-item">NHS Ransomware Attack</a>
                    <a href="../topic_3/subtopic_9/generalsubtopic.html" class="subsubmenu-item">Facebook Global Outage</a>
                    <a href="../topic_3/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Equifax Data Breach</a>
                </div>
            </div>

            <a href="../topic_4/choose.html" class="menu-item has-submenu" data-toggle="topic4">
                <span>Healthcare</span>
            </a>
            <div class="submenu" id="topic4">
                <a href="../topic_4/topicgeneral_b.html" class="submenu-item has-submenu" data-toggle="topic4-bugs">
                <span>Bugs</span>
                </a>
                <div class="subsubmenu" id="topic4-bugs">
                    <a href="../topic_4/subtopic_1/generalsubtopic.html" class="subsubmenu-item">Therac-25</a>
                    <a href="../topic_4/subtopic_2/generalsubtopic.html" class="subsubmenu-item">Panama City</a>
                    <a href="../topic_4/subtopic_3/generalsubtopic.html" class="subsubmenu-item">UK Covid-19 Excel Data Loss</a>
                    <a href="../topic_4/subtopic_4/generalsubtopic.html" class="subsubmenu-item">Healthcare Gov Launch Failure</a>
                    <a href="../topic_4/subtopic_5/generalsubtopic.html" class="subsubmenu-item">Infusion Pump & Change Healthcare</a>
                </div>

                <a href="../topic_4/topicgeneral_v.html" class="submenu-item has-submenu" data-toggle="topic4-vuln">
                <span>Vulnerabilities</span>
                </a>
                <div class="subsubmenu" id="topic4-vuln">
                    <a href="../topic_4/subtopic_6/generalsubtopic.html" class="subsubmenu-item">WannaCry</a>
                    <a href="../topic_4/subtopic_7/generalsubtopic.html" class="subsubmenu-item">U.S. Medical Imaging</a>
                    <a href="../topic_4/subtopic_8/generalsubtopic.html" class="subsubmenu-item">Medtronic</a>
                    <a href="../topic_4/subtopic_9/generalsubtopic.html" class="subsubmenu-item">Philips IntelliBridge Gateways</a>
                    <a href="../topic_4/subtopic_10/generalsubtopic.html" class="subsubmenu-item">Change Healthcare Ransomware Breach</a>
                </div>
            </div>

            <a href="../../about_us/about_us.html" class="menu-item">About us</a>
            <a href="../../table/members-contribution.html" class="menu-item">Members contribution</a>
        </div>
    </div>

    <header class="p-3">
        <div class="container-fluid">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <button class="menu-btn" id="menuBtn"><span></span><span></span><span></span></button>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="../../index.html" class="nav-link" style="color: white;">Home</a></li>
                    <li><a href="../../about_us/about_us.html" class="nav-link" style="color: white;">About us</a></li>
                </ul>
                <div class="bta backbta" style="font-size: 15px;">Go Back</div>
            </div>
        </div>
    </header>
    `;


    // Inject sidebar
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

    const currentFullURL = window.location.href;
    document.querySelectorAll('.sidebar a').forEach(link => {
        if (link.href === currentFullURL) {
            link.classList.add('current-page-link');
        }
    });

    // ====== Save Category in Session Storage ======
    document.querySelectorAll('a[href*="topicgeneral_b.html"]').forEach(link => {
        link.addEventListener('click', () => {
            sessionStorage.setItem('category', 'bug');
        });
    });

    document.querySelectorAll('a[href*="topicgeneral_v.html"]').forEach(link => {
        link.addEventListener('click', () => {
            sessionStorage.setItem('category', 'vuln');
        });
    });

    // ====== "Go Back" Button ======
    divs = document.getElementsByClassName("exit");
    for (let i = 0; i < divs.length; i++) {
        divs[i].onclick = function () {
            let parts = window.location.pathname.split("/");
            parts.pop();
            parts.pop();
            let base = parts.join("/");

            if (sessionStorage.getItem("category") == "bug") {
                temp = base + "/topicgeneral_b.html";
                window.location.href = temp;
            } else {
                temp = base + "/topicgeneral_v.html";
                window.location.href = temp;
            }
        };
    }

    // Sidebar functionality
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebar = document.getElementById('closeSidebar');

    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');

        const activeLink = sidebar ? sidebar.querySelector('.current-page-link') : null;
        if (activeLink) {
            let parent = activeLink.parentElement;
            while (parent && !parent.classList.contains('sidebar-content')) {
                if (parent.classList.contains('submenu') || parent.classList.contains('subsubmenu')) {
                    parent.classList.add('expanded');
                    const toggleBtn = sidebar.querySelector(`[data-toggle="${parent.id}"]`);
                    if (toggleBtn) toggleBtn.classList.add('expanded');

                    const arrow = toggleBtn ? toggleBtn.querySelector('.arrow-icon') : null;
                    if (arrow) arrow.style.transform = 'rotate(90deg)';
                }
                parent = parent.parentElement;
            }
        }
    }

    function closeSidebarFunc() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }

    menuBtn.addEventListener('click', openSidebar);
    closeSidebar.addEventListener('click', closeSidebarFunc);
    sidebarOverlay.addEventListener('click', closeSidebarFunc);

    // Toggle submenus
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

    divs = document.getElementsByClassName("backbta");
    for (let i = 0; i < divs.length; i++) {
        divs[i].onclick = function () {
            window.location.href = "../topics.html";
        };
    }
});
