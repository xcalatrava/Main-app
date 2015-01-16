$(document).on("pagecontainershow", function() {
    var activePage = $.mobile.pageContainer.pagecontainer("getActivePage");

    var activePageId = activePage[0].id;
    switch (activePageId) {
        case 'home':
            var tl = new TimelineLite();
            tl.fromTo($("#btn-baraja"), 1, {
                left: "-200px"
            }, {
                left: "0px",
                ease: Linear.easeNone
            });
            tl.fromTo($("#btn-carta-dia"), 1, {
                left: "-250px"
            }, {
                left: "0px",
                ease: Linear.easeNone
            }, "-=1");
            tl.fromTo($("#btn-numerologia"), 1, {
                left: "-300px"
            }, {
                left: "0px",
                ease: Linear.easeNone
            }, "-=1");
            tl.fromTo($("#btn-tirada-rapida"), 1, {
                left: "-300px"
            }, {
                left: "0px",
                ease: Linear.easeNone
            }, "-=1");
            tl.fromTo($("#btn-tirada-meditacion"), 1, {
                left: "-250px"
            }, {
                left: "0px",
                ease: Linear.easeNone
            }, "-=1");
                        tl.fromTo($("#btn-historico"), 1, {
                left: "-250px"
            }, {
                left: "0px",
                ease: Linear.easeNone
            }, "-=1");
            break;
    }
});