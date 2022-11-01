//Nav animation
var navAnimate = {
    targets: 'nav ul li',
    duration: 1000,
    translateY: ['-200', '0'],
    opacity: ['0', '1'],
    // delay: (el, i) => {
    //     return 100 * i;
    // }
    delay: anime.stagger(100, {direction: 'reverse'})
}

//NAV RESPONSIVE
document.addEventListener('DOMContentLoaded', (e) => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-navbar');
    const navLinks = nav.querySelectorAll('li');

    window.addEventListener('resize', () => {
        if (window.innerWidth < 800 && window.innerWidth > 768) {
            nav.removeAttribute('style');
            navLinks.forEach((a)=>{
                a.removeAttribute('style');
            });
            burger.querySelectorAll('div').forEach((a)=>{
                a.removeAttribute('style');
            });
            burger.classList.remove('open');
        }
    })
    
    burger.addEventListener('click', (e) => {
        if (burger.classList.contains('nav-progress')){
        } else {
            burger.classList.add('nav-progress')
            if (burger.classList.contains('open')) {
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: function(anim){
                        navLinks.forEach( (a) => {
                            a.style.display = 'none';
                            a.removeAttribute('style');
                        })
                        nav.removeAttribute('style');
                        burger.classList.remove('nav-progress')
                    }
                }).add({
                    targets: navLinks,
                    opacity: ['1', '0'],
                    translateY: ['0', '-50'],
                    duration: 400,
                    delay: (el, i) => {
                        return 100 * i;
                    }
                }).add({
                    targets: nav,
                    height: ['50vh', '0'],
                    duration: 400,
                }, '-=100')
                anime({
                    targets: burger.querySelector('.line1'),
                    rotate: 0,
                    translateY: ['12', '0'],
                    easing: 'easeOutQuad',
                    duration: 700,
                })
                anime({
                    targets: burger.querySelector('.line3'),
                    rotate: 0,
                    translateY: ['-12', '0'],
                    easing: 'easeOutQuad',
                    duration: 700,
                })
                anime({
                    targets: burger.querySelector('.line2'),
                    opacity: 1,
                    easing: 'easeOutQuad',
                    duration: 700,
                })
                burger.classList.remove('open');
            } else {
                navLinks.forEach( (a) => {
                    a.style.display = 'block';
                })
                anime({
                    targets: burger.querySelector('.line1'),
                    rotate: 45,
                    translateY: ['0', '12'],
                    easing: 'easeOutExpo',
                    duration: 800,
                })
                anime({
                    targets: burger.querySelector('.line3'),
                    rotate: -45,
                    translateY: ['0', '-12'],
                    easing: 'easeOutExpo',
                    duration: 800,
                })
                anime({
                    targets: burger.querySelector('.line2'),
                    opacity: 0,
                    easing: 'easeOutExpo',
                    duration: 800,
                })
                anime.timeline({
                    easing: 'easeOutExpo',
                    complete: function (anim) {
                        burger.classList.remove('nav-progress')
                    }
                }).add({
                    targets: nav,
                    height: ['0', '50vh'],
                    duration: 800,
                }).add({
                    targets: navLinks,
                    opacity: ['0', '1'],
                    translateY: ['50', '0'],
                    duration: 1000,
                    delay: (el, i) => {
                        return 100 * i;
                    }
                }, '-=400')
                burger.classList.add('open');
            }
        }
    })
})

//NAV LINE
document.querySelector('.main-navbar').querySelectorAll('li').forEach((a)=>{
    a.appendChild(document.createElement('div'));
    a.querySelector('div').classList.add('line');
});

//Search Box
let expandSearch = false;
document.querySelector('.search-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    if (!expandSearch){
        expandSearch = true;
        document.querySelector('.search-txt').classList.add('expand');
    } else {
        if (document.querySelector('.search-txt').value == ''){
            expandSearch = false;
            document.querySelector('.search-txt').classList.remove('expand');
        } else {
            document.querySelector('#searchform').submit();
            document.querySelector('.search-txt').value = '';
        }
    }
})


//index.html
function indexLoaded(e){
    //SCROLL ANIMATION
    if (window.innerWidth  < 768){
        anime.timeline({
        }).add({
            targets: '.logo-ime-container',
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo'
        }).add({
            targets: '.logo-desc-flex',
            scale: [0, 1],
            delay: anime.stagger(100),
        }).add({
            targets: '.landing-title-grid',
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo'
        }, '-=500').add({
            targets: '.landing-text',
            opacity: [0, 1],
            translateY: ['50', '0'],
            duration: 800,
        }, '-=400')
    } else {
        anime.timeline({
            easing: 'easeOutExpo'
        }).add({
            targets: '.logo-ime-container',
            opacity: [0, 1],
            duration: 1000,
        }).add({
            targets: '.landing-title-text',
            opacity: [0, 1],
            duration: 1000,
        }).add({
            targets: '.landing-img-kiri',
            scaleX: ['0', '1'],
            duration: 800,
        }, '-=800').add({
            targets: '.landing-img-kanan',
            scaleX: ['0', '1'],
            duration: 800,
        }, '-=800').add({
            targets: '.landing-text',
            opacity: [0, 1],
            translateY: ['50', '0'],
            duration: 800,
        }).add(navAnimate)
    }

    window.addEventListener('scroll', () => {
        var logoBidangPosition = document.querySelector('.logbid-logo').getBoundingClientRect().top;
        var youtubePosition = document.querySelector('.video-highlight').getBoundingClientRect().top;
        var artikelPosition = document.querySelector('.article-container').getBoundingClientRect().top;
        var socialMediaPosition = document.querySelector('.social-media-icons').parentElement.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (logoBidangPosition < screenHeight / 2){
            if (!(document.querySelector('.logbid-logo').classList.contains('active'))){
                document.querySelector('.logbid-logo').classList.add('active');
                anime.timeline({
                }).add({
                    targets: '.logbid-bidang-logo',
                    scale: [0, 1],
                    duration: 800,
                }).add({
                    targets: '.logbid-bidang-title',
                    opacity: [0, 1],
                    translateX: ['100', '0'],
                    easing: 'easeOutExpo',
                    duration: 600,
                }).add({
                    targets: '.logbid-bidang-desc',
                    opacity: [0, 1],
                    translateX: ['100', '0'],
                    easing: 'easeOutExpo',
                    duration: 600,
                }, '-=400').add({
                    targets: '.logbid-logos div',
                    scale: [0, 1],
                    delay: anime.stagger(100),
                })
            }
        }
        if (youtubePosition < screenHeight / 2){
            if (!(document.querySelector('.video-highlight').classList.contains('active'))){
                document.querySelector('.video-highlight').classList.add('active');
                if (window.innerWidth < 768) {
                    anime.timeline({
                    }).add({
                        targets: '.youtube-title-mobile',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }).add({
                        targets: '.video-highlight',
                        scale: [0, 1],
                        duration: 1500,
                    }, '-=400').add({
                        targets: '.youtube-desc',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }, '-=1200').add({
                        targets: '.youtube-thumbnail-title',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }, '-=300').add({
                        targets: '.video-thumbnail',
                        scale: [0, 1],
                        delay: anime.stagger(100),
                    }, '-=300').add({
                        targets: '.youtube-button',
                        scale: [0, 1],
                        duration: 500,
                    }, '-=200')
                } else {
                    anime.timeline({
                    }).add({
                        targets: '.video-highlight',
                        scale: [0, 1],
                        duration: 1500,
                    }).add({
                        targets: '.youtube-desc',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }, '-=400').add({
                        targets: '.youtube-thumbnail-title',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }, '-=400').add({
                        targets: '.video-thumbnail',
                        scale: [0, 1],
                        delay: anime.stagger(200),
                    }, '-=300').add({
                        targets: '.youtube-button',
                        scale: [0, 1],
                        duration: 500,
                    }, '-=900')
                }
            }
        }
        if (artikelPosition < screenHeight / 2){
            if (!(document.querySelector('.article-container').classList.contains('active'))){
                document.querySelector('.article-container').classList.add('active');
                anime.timeline({
                    easing: 'easeOutExpo',
                }).add({
                    targets: '.archive-landing-title',
                    opacity: [0, 1],
                    duration: 500,
                }).add({
                    targets: '.article-card',
                    opacity: [0, 1],
                    translateY: ['-100', '0'],
                    delay: anime.stagger(200),
                }).add({
                    targets: '.article-button',
                    scale: [0, 1],
                    duration: 500,
                })
            }
        }
        var screenHeightSocialMedia;
        if (window.innerWidth < 768){
            screenHeightSocialMedia = screenHeight / 3;
        } else {
            screenHeightSocialMedia = screenHeight / 2
        }
        if (socialMediaPosition < screenHeightSocialMedia){
            if (!(document.querySelector('.social-media-icons').classList.contains('active'))){
                document.querySelector('.social-media-icons').classList.add('active');
                anime({
                    targets: '.social-media-icons i',
                    scale: [0, 1],
                    delay: anime.stagger(150),
                })
            }
        }
    })

    //LANDING
    var logoMatahari = document.querySelector('.matahari')
    var descMatahari = document.querySelector('.logo-desc-matahari')
    var logoSerigala = document.querySelector('.serigala')
    var descSerigala = document.querySelector('.logo-desc-serigala')
    var logoKuas = document.querySelector('.kuas')
    var descKuas = document.querySelector('.logo-desc-kuas')
    var logoGelombang = document.querySelector('.gelombang')
    var descGelombang = document.querySelector('.logo-desc-gelombang')

    window.addEventListener('resize', () => {
        if (window.innerWidth < 800 && window.innerWidth > 768) {
            document.querySelectorAll('.logo-desc-container > div').forEach((a) => {
                a.removeAttribute('style');
                a.querySelector('h1').removeAttribute('style');
                a.querySelector('p').removeAttribute('style');
            })
        }
    })

    function matahariReveal(){
        descMatahari.style.display = 'flex';
        descMatahari.parentElement.classList.add('progress');
        descSerigala.classList.remove('active');
        descMatahari.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descMatahari.classList.add('active');
                if (!descSerigala.classList.contains('active')){
                    descMatahari.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descMatahari.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descMatahari.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descMatahari.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function serigalaReveal(){
        descSerigala.style.display = 'flex';
        descSerigala.parentElement.classList.add('progress');
        descMatahari.classList.remove('active');
        descSerigala.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descSerigala.classList.add('active');
                if (!descMatahari.classList.contains('active')){
                    descSerigala.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descSerigala.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descSerigala.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descSerigala.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function kuasReveal(){
        descKuas.style.display = 'flex';
        descKuas.parentElement.classList.add('progress');
        descGelombang.classList.remove('active');
        descKuas.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descKuas.classList.add('active');
                if (!descGelombang.classList.contains('active')){
                    descKuas.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descKuas.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descKuas.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descKuas.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function gelombangReveal(){
        descGelombang.style.display = 'flex';
        descGelombang.parentElement.classList.add('progress');
        descKuas.classList.remove('active');
        descGelombang.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descGelombang.classList.add('active');
                if (!descKuas.classList.contains('active')){
                    descGelombang.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descGelombang.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descGelombang.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descGelombang.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function matahariClose(){
        descMatahari.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descMatahari.style.display = 'none';
                descMatahari.classList.remove('active');
                if (!descSerigala.classList.contains('active')){
                    descMatahari.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descMatahari.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descMatahari.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descMatahari.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }
    function serigalaClose(){
        descSerigala.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descSerigala.style.display = 'none';
                descSerigala.classList.remove('active');
                if (!descMatahari.classList.contains('active')){
                    descSerigala.parentElement.classList.remove('progress');
                };
            }
        }).add({
            targets: descSerigala.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descSerigala.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descSerigala.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }
    function kuasClose(){
        descKuas.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descKuas.style.display = 'none';
                descKuas.classList.remove('active');
                if (!descGelombang.classList.contains('active')){
                    descKuas.parentElement.classList.remove('progress');
                };
            }
        }).add({
            targets: descKuas.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descKuas.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descKuas.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }
    function gelombangClose(){
        descGelombang.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descGelombang.style.display = 'none';
                descGelombang.classList.remove('active');
                if (!descKuas.classList.contains('active')){
                    descGelombang.parentElement.classList.remove('progress');
                };
            }
        }).add({
            targets: descGelombang.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descGelombang.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descGelombang.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }

    function logoIMEAnimation (){
        logoMatahari.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descSerigala.classList.contains('active')){
                    if (!descMatahari.classList.contains('active')){
                        if (!descMatahari.parentElement.classList.contains('progress')){
                            matahariReveal();
                        }
                    }
                } else {
                    descSerigala.style.display = '';
                    serigalaClose();
                    matahariReveal();
                }
            }
        })
        logoMatahari.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descMatahari.parentElement.classList.contains('progress')){
                    matahariClose()
                }
            }
        })
        logoSerigala.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descMatahari.classList.contains('active')){
                    if (!descSerigala.classList.contains('active')){
                        if (!descSerigala.parentElement.classList.contains('progress')){
                            serigalaReveal();
                        }
                    }
                } else {
                    descMatahari.style.display = '';
                    matahariClose();
                    serigalaReveal();
                }
            }
        })
        logoSerigala.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descSerigala.parentElement.classList.contains('progress')){
                    serigalaClose();
                }
            }
        })
        logoKuas.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descGelombang.classList.contains('active')){
                    if (!descKuas.classList.contains('active')){
                        if (!descKuas.parentElement.classList.contains('progress')){
                            kuasReveal();
                        }
                    }
                } else {
                    descGelombang.style.display = '';
                    gelombangClose();
                    kuasReveal();
                }
            }
        })
        logoKuas.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descKuas.parentElement.classList.contains('progress')){
                    kuasClose()
                }
            }
        })
        logoGelombang.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descKuas.classList.contains('active')){
                    if (!descGelombang.classList.contains('active')){
                        if (!descGelombang.parentElement.classList.contains('progress')){
                            gelombangReveal();
                        }
                    }
                } else {
                    descKuas.style.display = '';
                    kuasClose();
                    gelombangReveal();
                }
            }
        })
        logoGelombang.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descGelombang.parentElement.classList.contains('progress')){
                    gelombangClose()
                }
            }
        })
    }

    if (window.innerWidth > 768){
        logoIMEAnimation();
    } else {
        window.addEventListener('resize', (e) => {
            if (window.innerWidth > 768){
                logoIMEAnimation();
            }
        })
    }

    //LOGBID
    var bidangTitle = document.querySelector('.logbid-bidang-title');
    var bidangDesc = document.querySelector('.logbid-bidang-desc');
    var bidangMainLogo = document.querySelector('.logbid-bidang-logo');
    var bidangButton = document.querySelector('.bidang-button');
    var bidangLogo = document.querySelector('.logbid-logos').querySelectorAll('a');
    let onProgress = false;

    function bidangLoadLanding (a){
        bidangTitle.textContent = a.namaBidang;
        bidangDesc.textContent = a.deskripsiBidang;
        bidangMainLogo.src = a.logoBidang;
    }
    bidangLogo.forEach((a) => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            if (!onProgress){
                onProgress = true;
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: () => {
                        bidangButton.style.display = 'inline-block';
                        if (e.target.parentElement.classList.contains('logbid-kominfo')){
                            bidangLoadLanding(bidangKominfo);
                            localStorage.selectedBidang = 'kominfo';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-kema')){
                            bidangLoadLanding(bidangKema);
                            localStorage.selectedBidang = 'kema';
                        }
                        if (e.target.parentElement.classList.contains('logbid-kastrat')){
                            bidangLoadLanding(bidangKastrat);
                            localStorage.selectedBidang = 'kastrat';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-kewirus')){
                            bidangLoadLanding(bidangKewirus);
                            localStorage.selectedBidang = 'kewirus';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-kestari')){
                            bidangLoadLanding(bidangKestari);
                            localStorage.selectedBidang = 'kestari';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-kesma')){
                            bidangLoadLanding(bidangKesma);
                            localStorage.selectedBidang = 'kesma';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-pengmas')){
                            bidangLoadLanding(bidangPengmas);
                            localStorage.selectedBidang = 'pengmas';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-litbang')){
                            bidangLoadLanding(bidangLitbang);
                            localStorage.selectedBidang = 'litbang';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-retro')){
                            bidangLoadLanding(bidangRetro);
                            localStorage.selectedBidang = 'retro';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-piptek')){
                            bidangLoadLanding(bidangPiptek);
                            localStorage.selectedBidang = 'piptek';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-siwa')){
                            bidangLoadLanding(bidangSiwa);
                            localStorage.selectedBidang = 'siwa';
                        } 
                        if (e.target.parentElement.classList.contains('logbid-akpro')){
                            bidangLoadLanding(bidangAkpro);
                            localStorage.selectedBidang = 'akpro';
                        }
                    }
                }).add({
                    targets: bidangMainLogo.parentElement,
                    opacity: [1, 0],
                    duration: 400,
                }).add({
                    targets: bidangTitle,
                    opacity: [1, 0],
                    duration: 400,
                }, '-=200').add({
                    targets: bidangDesc,
                    opacity: [1, 0],
                    duration: 400,
                }, '-=200').add({
                    targets: bidangButton,
                    opacity: [1, 0],
                    duration: 400,
                }, '-=200');

                setTimeout(() => {
                    anime.timeline({
                        easing: 'easeOutExpo',
                        complete: () => {
                            onProgress = false;
                        }
                    }).add({
                        targets: bidangMainLogo.parentElement,
                        translateY: ['-100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }).add({
                        targets: bidangTitle,
                        translateX: ['100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }, '-=200').add({
                        targets: bidangDesc,
                        translateX: ['100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }, '-=200').add({
                        targets: bidangButton,
                        translateX: ['100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }, '-=200');
                }, 1200)

            }
        })
    })


}

// about.html
function aboutLoaded(e){
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1020 && window.innerWidth > 900) {
            document.querySelector('#misi').removeAttribute('style');
            document.querySelector('#visi').removeAttribute('style');
            document.querySelector('.vismis-line').removeAttribute('style');
        }
    })
    if (window.innerWidth < 1020){
        anime.timeline({
            easing: 'easeOutExpo',
        }).add({
            targets: '.vismis-line',
            width: ['0', '200'],
            duration: 400,
        }).add({
            targets: '#visi',
            translateX: ['100', '0'],
            opacity: ['0', '1'],
            duration: 400,
        }).add({
            targets: '#misi',
            translateX: ['-100', '0'],
            opacity: ['0', '1'],
            duration: 400,
        })
        .add(navAnimate)
    } else {
        anime.timeline({
            easing: 'easeOutQuad'
        }).add({
            targets: '#visi',
            translateY: ['100', '0'],
            opacity: ['0', '1'],
            duration: 800
        }).add({
            targets: '#misi',
            translateY: ['-100', '0'],
            opacity: ['0', '1'],
            duration: 800,
        }, '-=800')
        .add({
            targets: '.vismis-line',
            height: ['0','100%'],
            duration: 800,
        }, '-=1600')
        .add(navAnimate);
    }
    
    if (window.innerHeight < 600) {
        document.getElementById('visi').addEventListener('click', visiAppear);
        document.getElementById('misi').addEventListener('click', misiAppear);
        document.querySelector('.visi-card').addEventListener('click', visiDisappear);
        document.querySelector('.misi-card').addEventListener('click', misiDisappear);
    } else {
        document.getElementById('visi').addEventListener('mouseover', visiAppear);
        document.getElementById('misi').addEventListener('mouseover', misiAppear);
        document.getElementById('visi').addEventListener('mouseout', visiDisappear);
        document.getElementById('misi').addEventListener('mouseout', misiDisappear);
    }

}
// Visi Misi Section
function visiAppear(e){
    var nextSection = document.querySelector('#organigram');
    var nextSectionPosition = nextSection.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (window.innerWidth < 1020) {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.visi-card').classList.add('visi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('visi').addEventListener('click', visiUpAppear);
        }
    } else {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.visi-card').classList.add('visi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('visi').addEventListener('click', visiUpAppear);
        }
    }
}
function misiAppear(e){
    var nextSection = document.querySelector('#organigram');
    var nextSectionPosition = nextSection.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    
    if(window.innerWidth < 1020) {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.misi-card').classList.add('misi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('misi').addEventListener('click', misiUpAppear);
        }
    } else {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.misi-card').classList.add('misi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('misi').addEventListener('click', misiUpAppear);
        }
    }
}
function visiDisappear(e){
    if (window.innerWidth < 1020){
        document.querySelector('.visi-card').classList.remove('visi-mini-appear');
        anime({
            targets: '.vismis-line',
            width: '200',
            duration: 200,
            easing: 'easeOutExpo',
        });
    } else{
        document.querySelector('.visi-card').classList.remove('visi-appear');
        anime({
            targets: '.vismis-line',
            height: '100%',
            duration: 200,
            easing: 'easeOutExpo',
        });
    }
}
function misiDisappear(e){
    if (window.innerWidth < 1020){
        document.querySelector('.misi-card').classList.remove('misi-mini-appear');
        anime({
            targets: '.vismis-line',
            width: '200',
            duration: 200,
            easing: 'easeOutExpo',
        });
    } else {
        document.querySelector('.misi-card').classList.remove('misi-appear');
        anime({
            targets: '.vismis-line',
            height: '100%',
            duration: 200,
            easing: 'easeOutExpo',
        });
    }
}
function visiUpAppear(e){
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(function() {
        if (window.innerWidth < 1020){
            document.querySelector('.visi-card').classList.add('visi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else {
            document.querySelector('.visi-card').classList.add('visi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        }
    }, 500);
}
function misiUpAppear(e){
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(function() {
        if (window.innerWidth < 1020){
            document.querySelector('.misi-card').classList.add('misi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else {
            document.querySelector('.misi-card').classList.add('misi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        }
      }, 500);
}


// window.addEventListener('scroll', consolePosition);
// function consolePosition(e){
//     var nextSection = document.querySelector('#organigram');
//     var nextSectionPosition = nextSection.getBoundingClientRect().top;
//     var screenHeight = window.innerHeight;

//     if (nextSectionPosition < screenHeight - 1){
//         console.log('Hello')
//     } else{
//         console.log('World')
//     }
// }


//  bidang-template.html //
function bidangLoaded(e){
    anime.timeline({
        easing: 'easeOutExpo',
        complete: () => {
            document.querySelectorAll('.bidang-foto').forEach((a) => {
                a.removeAttribute('style');
                a.style.opacity = '1';
            })
        }
    })
    .add({
        targets: '.bidang-logo img',
        duration: 800,
        translateX: [-200, 0],
        opacity: [0, 1],
    })
    .add({
        targets: '.bidang-title',
        duration: 800,
        translateX: [200, 0],
        opacity: [0, 1],
    }, '-=400')
    .add({
        targets: '.bidang-proker',
        duration: 800,
        translateX: [200, 0],
        opacity: [0, 1],
    }, '-=400')
    .add({
        targets: '.bidang-foto-container div',
        duration: 500,
        translateY: [40, 0],
        opacity: [0, 1],
        delay: (el, i) => {
            return 100 * i;
        },
    })
    .add(navAnimate);
    
    //Scroll Animation
    scrollAnimateBidang();
    function scrollAnimateBidang () {
        window.addEventListener('scroll', () => {
            var videoBidangPosition = document.querySelector('.video-bidang').getBoundingClientRect().top;
            var bphSaContainerPosition = document.querySelector('.bph-sa-container').getBoundingClientRect().top;
            var bpContainerPosition = document.querySelector('.bp-container').getBoundingClientRect().top;
            var logoBidangPosition = document.querySelector('.logbid-logo').getBoundingClientRect().top;
            var screenHeight = window.innerHeight;
    
            if (videoBidangPosition < screenHeight / 1.3){
                if (!(document.querySelector('.video-bidang').classList.contains('active'))){
                    document.querySelector('.video-bidang').classList.add('active');
                    var scrollVideo = anime.timeline({
                        easing: 'easeOutExpo',
                        autolay: false,
                    }).add({
                        targets: document.querySelector('.video-bidang-title'), 
                        translateX: ['-100', '0'],
                        opacity: ['0', '1'],
                        duration: 1000,
                    }).add({
                        targets: document.querySelector('.video-background'),
                        height: ['0%','100%'],
                        opacity: ['0', '1'],
                        duration: 1000,
                    }, '-=500').add({
                        targets: document.querySelector('.video-bidang'),
                        translateX: ['-100', '0'],
                        opacity: ['0', '1'],
                        duration: 1000,
                    }, '-=500')
                    scrollVideo.play;
                }
            }
            if (bphSaContainerPosition < screenHeight / 1.5){
                if (!(document.querySelector('.bph-sa-container').classList.contains('active'))){
                    document.querySelector('.bph-sa-container').classList.add('active');
                    anime.timeline({
                    }).add({
                        targets: document.querySelector('.bph-text'), 
                        opacity: ['0', '1'],
                        easing: 'easeOutExpo',
                        duration: 1000,
                    }).add({
                        targets: document.querySelector('.sa-text'),
                        opacity: ['0', '1'],
                        easing: 'easeOutExpo',
                        duration: 1000,
                    }, '-=900').add({
                        targets: document.querySelectorAll('.bph-foto'),
                        scale: [0, 1],
                        delay: (el, i) => {
                            return i*100;
                        },
                    }, '-=900').add({
                        targets: document.querySelectorAll('.bph-nama'),
                        translateY: ['50', '0'],
                        opacity: ['0', '1'],
                        delay: (el, i) => {
                            return i*100;
                        }
                    }, '-=500').add({
                        targets: document.querySelectorAll('.bph-jabatan'),
                        translateY: ['50', '0'],
                        opacity: ['0', '1'],
                        delay: (el, i) => {
                            return (i*100);
                        }
                    }, '-=1000')
                }
            }
            if (bpContainerPosition < screenHeight / 1.5){
                if (!(document.querySelector('.bp-container').classList.contains('active'))){
                    document.querySelector('.bp-container').classList.add('active');
                    anime.timeline({
                    }).add({
                        targets: document.querySelector('.bp-text'),
                        opacity: [0, 1],
                        duration: 500,
                        easing: 'easeOutExpo',
                    }).add({
                        targets: document.querySelectorAll('.bp-foto'),
                        scale: [0, 1],
                        delay: (el, i) => {
                            return (i*100);
                        }
                    }).add({
                        targets: document.querySelectorAll('.bp-nama'),
                        opacity: [0, 1],
                        translateY: ['50', '0'],
                        delay: (el, i) => {
                            return (i*100);
                        }
                    }, '-=1000')
                }
            }
            if (logoBidangPosition < screenHeight / 2){
                if (!(document.querySelector('.logbid-logo').classList.contains('active'))){
                    document.querySelector('.logbid-logo').classList.add('active');
                    anime.timeline({
                    }).add({
                        targets: '.logbid-bidang-logo',
                        scale: [0, 1],
                        duration: 800,
                    }).add({
                        targets: '.logbid-bidang-title',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }).add({
                        targets: '.logbid-bidang-desc',
                        opacity: [0, 1],
                        translateX: ['100', '0'],
                        easing: 'easeOutExpo',
                        duration: 600,
                    }, '-=400').add({
                        targets: '.logbid-logos div',
                        scale: [0, 1],
                        delay: anime.stagger(100),
                    })
                }
            }
        })
    }
    

    //CONTENT CHANGE
    console.log(localStorage.selectedBidang)
    function bidangContentLoad (x){
        document.querySelector('.bidang-logo').querySelector('img').src = x.logoBidang
        document.querySelector('.bidang-title').querySelector('h1').textContent = x.namaBidang;
        document.querySelector('.proker').textContent = x.programKerja;
        for (let i = 0; i <= 9; i++){
            document.querySelectorAll('.bidang-foto')[i].querySelector('img').src = x.fotoBidang[i]
        };
        document.querySelector('.video-bidang-nickname').textContent = `${x.bidangNickname.toUpperCase()}!`;
        document.querySelector('.video-bidang').querySelector('iframe').src = x.videoBidang;
        for (let i = 0; i <= 5; i++){
            document.querySelectorAll('.bph-nama')[i].textContent = x.namaBPH[i].nama;
            document.querySelectorAll('.bph')[i].style.display = x.namaBPH[i].display;
            document.querySelectorAll('.bph-jabatan')[i].textContent = x.namaBPH[i].jabatan;
            document.querySelectorAll('.bph-foto-wadah')[i].querySelector('img').src = x.namaBPH[i].foto;
        }
        for (let i = 0; i <= 15; i++){
            document.querySelectorAll('.bp-nama')[i].textContent = x.namaBP[i].nama;
            document.querySelectorAll('.bp-foto')[i].querySelector('img').src = x.namaBP[i].foto;
            document.querySelectorAll('.bp')[i].style.display = x.namaBP[i].display;
        }
    }
    if (localStorage.selectedBidang === 'kominfo'){
        bidangContentLoad (bidangKominfo);
    } else if (localStorage.selectedBidang === 'kema'){
        bidangContentLoad (bidangKema);
    } else if (localStorage.selectedBidang === 'kastrat'){
        bidangContentLoad (bidangKastrat);
    } else if (localStorage.selectedBidang === 'kewirus'){
        bidangContentLoad (bidangKewirus);
    } else if (localStorage.selectedBidang === 'kestari'){
        bidangContentLoad (bidangKestari);
        document.querySelector('.bph-sa-container').style.gridTemplateRows = '1fr';
        document.querySelectorAll('.bph-container')[0].style.justifyContent = 'center';
        document.querySelectorAll('.bph-container')[1].style.display = 'none';
    } else if (localStorage.selectedBidang === 'kesma'){
        bidangContentLoad (bidangKesma);
    } else if (localStorage.selectedBidang === 'pengmas'){
        bidangContentLoad (bidangPengmas);
    } else if (localStorage.selectedBidang === 'litbang'){
        bidangContentLoad (bidangLitbang);
    } else if (localStorage.selectedBidang === 'retro'){
        bidangContentLoad (bidangRetro);
        document.querySelector('.bph-sa-container').style.gridTemplateRows = '1fr';
        document.querySelectorAll('.bph-container')[0].style.justifyContent = 'center';
        document.querySelectorAll('.bph-container')[1].style.display = 'none';
    } else if (localStorage.selectedBidang === 'piptek'){
        bidangContentLoad (bidangPiptek);
    } else if (localStorage.selectedBidang === 'siwa'){
        bidangContentLoad (bidangSiwa);
    } else if (localStorage.selectedBidang === 'akpro'){
        bidangContentLoad (bidangAkpro);
    }

    //MODAL
    var fotoBidang = document.querySelectorAll('.bidang-foto');
    var modalBidang = document.querySelector('.modal-bidang-foto');
    var modalFotoContainer = document.querySelector('.modal-foto-container');
    var modalImg = document.querySelector('.modal-img');
    var modalLeft = document.querySelector('.fa-chevron-left');
    var modalRight = document.querySelector('.fa-chevron-right');
    let modalOnProgress = false;
    let currentModalImg;
    let nextModalImg;

    fotoBidang.forEach((a) => {
        a.querySelector('img').addEventListener('click', (e) => {
            currentModalImg = e.target;
            modalImg.src = currentModalImg.src;
            modalBidang.style.display = 'flex';
            anime({
                targets: modalBidang,
                opacity: 1,
                duration: 500,
                easing: 'easeOutQuad',
            })
        })
    })

    document.querySelector('.fa-times').addEventListener('click', (e) => {
        anime({
            targets: modalBidang,
            opacity: 0,
            duration: 500,
            easing: 'easeOutExpo',
            complete: () => {
                modalBidang.style.display = 'none';
            }
        })
    })

    modalRight.addEventListener('click', () => {
        if (!modalOnProgress){
            modalOnProgress = true;
            if (currentModalImg.classList.contains('last-foto')){
                nextModalImg = document.querySelector('.first-foto');
            } else{
                nextModalImg = currentModalImg.parentElement.nextElementSibling.querySelector('img');
            };
            anime.timeline({
                easing: 'easeInOutQuad',
                complete: () => {
                    modalImg.src = nextModalImg.src;
                    anime.timeline({
                        easing: 'easeOutQuad',
                        complete: () => {
                            modalOnProgress = false;
                            currentModalImg = nextModalImg;
                        }
                    }).add({
                        targets: modalFotoContainer,
                        translateX: ['100', '0'],
                        opacity: [0, 1],
                        duration: 500,
                    })
                }
            }).add({
                targets: modalFotoContainer,
                translateX: ['0', '-100'],
                opacity: [1, 0],
                duration: 500,
            })
        }
    })
    modalLeft.addEventListener('click', () => {
        if (!modalOnProgress){
            modalOnProgress = true;
            if (currentModalImg.classList.contains('first-foto')){
                nextModalImg = document.querySelector('.last-foto')
            } else{
                nextModalImg = currentModalImg.parentElement.previousElementSibling.querySelector('img');
            }
            anime.timeline({
                easing: 'easeInOutQuad',
                complete: () => {
                    modalImg.src = nextModalImg.src;
                    anime.timeline({
                        easing: 'easeOutQuad',
                        complete: () => {
                            modalOnProgress = false;
                            currentModalImg = nextModalImg;
                        }
                    }).add({
                        targets: modalFotoContainer,
                        translateX: ['-100', '0'],
                        opacity: [0, 1],
                        duration: 500,
                    })
                }
            }).add({
                targets: modalFotoContainer,
                translateX: ['0', '100'],
                opacity: [1, 0],
                duration: 500,
            })
        }
    })

    // LOGO BIDANG DI BIDANG TEMPLATE
    var bidangTitle = document.querySelector('.logbid-bidang-title');
    var bidangMainLogo = document.querySelector('.logbid-bidang-logo');
    var bidangLogo = document.querySelector('.logbid-logos').querySelectorAll('img');
    let currentLogo;
    function bidangLoadTemplate (x, y){
        bidangTitle.textContent = x.namaBidang;
        bidangMainLogo.src = x.logoBidang;
        currentLogo = y.target.parentElement.className;
    }

    bidangLogo.forEach((a) => {
        a.addEventListener('mouseover', (e) => {
            if (!(currentLogo === e.target.parentElement.className)){
                onFade = true;
                if (e.target.parentElement.classList.contains('logbid-kominfo')){
                    bidangLoadTemplate(bidangKominfo, e);
                } 
                else if (e.target.parentElement.classList.contains('logbid-kema')){
                    bidangLoadTemplate(bidangKema, e);
                }
                else if (e.target.parentElement.classList.contains('logbid-kastrat')){
                    bidangLoadTemplate(bidangKastrat, e);
                } 
                else if (e.target.parentElement.classList.contains('logbid-kewirus')){
                    bidangLoadTemplate(bidangKewirus, e);
                } 
                else if (e.target.parentElement.classList.contains('logbid-kestari')){
                    bidangLoadTemplate(bidangKestari, e);
                } 
                else if (e.target.parentElement.classList.contains('logbid-kesma')){
                    bidangLoadTemplate(bidangKesma, e);
                } 
                else if (e.target.parentElement.classList.contains('logbid-pengmas')){
                    bidangLoadTemplate(bidangPengmas, e);
                } 
                else if (e.target.parentElement.classList.contains('logbid-litbang')){
                    bidangLoadTemplate(bidangLitbang, e);
                } 
                else if (e.target.parentElement.classList.contains('logbid-retro')){
                    bidangLoadTemplate(bidangRetro, e);
                } 
                else if (e.target.parentElement.classList.contains('logbid-piptek')){
                    bidangLoadTemplate(bidangPiptek, e);
                } 
                else if (e.target.parentElement.classList.contains('logbid-siwa')){
                    bidangLoadTemplate(bidangSiwa, e);
                } 
                else if (e.target.parentElement.classList.contains('logbid-akpro')){
                    bidangLoadTemplate(bidangAkpro, e);
                }
            }
        })
    })
    
    //bidangRefresh
    document.querySelector('.logbid-logos').querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: "smooth"});
            anime.timeline({
                easing: 'easeOutExpo',
                complete: () => {
                    var removeClass = ['.video-bidang', '.bph-sa-container', '.bp-container']
                    var removeStyle = ['.bidang-logo img', '.bidang-title', '.bidang-proker', '.video-bidang-title', '.video-background', '.video-bidang', '.bph-text', '.sa-text', '.bp-text', '.bph-sa-container']
                    var removeStyleForEach = ['.bph-foto', '.bph-nama', '.bph-jabatan', '.bp-foto', '.bp-nama', '.bph-container']
                    
                    for (let i = 0; i < removeClass.length; i++){
                        document.querySelector(removeClass[i]).classList.remove('active');
                    }
                    for (let i = 0; i < removeStyle.length; i++){
                        document.querySelector(removeStyle[i]).removeAttribute('style');
                    }            
                    for (let i = 0; i < removeStyleForEach.length; i++){
                        document.querySelectorAll(removeStyleForEach[i]).forEach((a)=>{
                            a.removeAttribute('style');
                        })
                    }
                    document.querySelector('.bidang-foto-container').querySelectorAll('div').forEach((a)=>{
                        a.removeAttribute('style');
                    })
                    if (a.classList.contains('logbid-kominfo')){
                        bidangContentLoad (bidangKominfo);
                        localStorage.selectedBidang = 'kominfo';
                    } 
                    else if (a.classList.contains('logbid-kema')){
                        bidangContentLoad (bidangKema);
                        localStorage.selectedBidang = 'kema';
                    }
                    else if (a.classList.contains('logbid-kastrat')){
                        bidangContentLoad (bidangKastrat);
                        localStorage.selectedBidang = 'kastrat';
                    } 
                    else if (a.classList.contains('logbid-kewirus')){
                        bidangContentLoad (bidangKewirus);
                        localStorage.selectedBidang = 'kewirus';
                    } 
                    else if (a.classList.contains('logbid-kestari')){
                        bidangContentLoad (bidangKestari);
                        localStorage.selectedBidang = 'kestari';
                        document.querySelector('.bph-sa-container').style.gridTemplateRows = '1fr';
                        document.querySelectorAll('.bph-container')[0].style.justifyContent = 'center';
                        document.querySelectorAll('.bph-container')[1].style.display = 'none';
                    } 
                    else if (a.classList.contains('logbid-kesma')){
                        bidangContentLoad (bidangKesma);
                        localStorage.selectedBidang = 'kesma';
                    } 
                    else if (a.classList.contains('logbid-pengmas')){
                        bidangContentLoad (bidangPengmas);
                        localStorage.selectedBidang = 'pengmas';
                    } 
                    else if (a.classList.contains('logbid-litbang')){
                        bidangContentLoad (bidangLitbang);
                        localStorage.selectedBidang = 'litbang';
                    } 
                    else if (a.classList.contains('logbid-retro')){
                        bidangContentLoad (bidangRetro);
                        localStorage.selectedBidang = 'retro';
                        document.querySelector('.bph-sa-container').style.gridTemplateRows = '1fr';
                        document.querySelectorAll('.bph-container')[0].style.justifyContent = 'center';
                        document.querySelectorAll('.bph-container')[1].style.display = 'none';
                    } 
                    else if (a.classList.contains('logbid-piptek')){
                        bidangContentLoad (bidangPiptek);
                        localStorage.selectedBidang = 'piptek';
                    } 
                    else if (a.classList.contains('logbid-siwa')){
                        bidangContentLoad (bidangSiwa);
                        localStorage.selectedBidang = 'siwa';
                    } 
                    else if (a.classList.contains('logbid-akpro')){
                        bidangContentLoad (bidangAkpro);
                        localStorage.selectedBidang = 'akpro';
                    }
                    setTimeout(() => {
                        anime.timeline({
                            easing: 'easeOutExpo',
                        }).add({
                            targets: '.section',
                            opacity: 1,
                            duration: 1000,
                        }).add({
                            targets: '.bidang-foto-container div',
                            duration: 500,
                            translateY: [40, 0],
                            opacity: [0, 1],
                            delay: (el, i) => {
                                return 100 * i;
                            },
                        }, '-=1000')
                    }, 500)
                }
            }).add({
                targets: document.querySelectorAll('.section'),
                opacity: 0,
                duration: 1000,
                direction: 'reverse',
            })
        })
    })

}

// akademis.html
function akademisLoaded(e){
    window.addEventListener('resize', () => {
        if (window.innerWidth < 800 && window.innerWidth > 768) {
            document.querySelector('#diktat').removeAttribute('style');
            document.querySelector('#ebook').removeAttribute('style');
            document.querySelector('.akademis-line').removeAttribute('style');
        }
    })
    if (window.innerWidth < 768) {
        var akademisLine = {
            targets: '.akademis-line',
            width: ['0', '20rem'],
            opacity: ['0', '1'],
            duration: 800,
        }
        var akademisDiktat = {
            targets: '#diktat',
            translateY: ['500', '0'],
            duration: 1000,
        }
        var akademisEbook = {
            targets: '#ebook',
            translateY: ['-500', '0'],
            duration: 1000,
        }
    } else {
        var akademisLine = {
            targets: '.akademis-line',
            height: ['0', '6rem'],
            opacity: ['0', '1'],
            duration: 800,
        }
        var akademisDiktat = {
            targets: '#diktat',
            translateX: ['500', '0'],
            duration: 1000,
        }
        var akademisEbook = {
            targets: '#ebook',
            translateX: ['-500', '0'],
            duration: 1000,
        }
    }
    anime.timeline({
        easing: 'easeOutExpo',
    })
    .add(akademisLine)
    .add(akademisDiktat)
    .add(akademisEbook, '-=800')
    .add(navAnimate, '-=400')

    let isOpen = false;
    let onProgress = false;

    setTimeout(function(){
        document.querySelector('#ebook-a').addEventListener('click', (e) => {
            var ebook = document.querySelectorAll('.ebook-list');
            var ebookDropdown = document.querySelector('.ebook-dropdown');
            if (!onProgress){
                if (isOpen){
                    onProgress = true;
                    animation = anime.timeline({
                        easing: 'easeOutQuad',
                        complete: () => {
                            isOpen = false;
                            onProgress = false;
                            ebookDropdown.style.display = 'none';
                            ebook.forEach(function(a){
                                a.style.display = 'none';
                            })
                        }
                    }).add({
                        targets: '.ebook-list',
                        duration: 400,
                        translateX: ['0', '-50'],
                        opacity: ['1', '0'],
                        delay: (el, i) => {
                            return 100 * i;
                        },
                    }).add({
                        targets: '.ebook-dropdown',
                        height: 0,
                        duration: 1000,
                    })
                }else{
                    ebookDropdown.style.display = 'block';
                    ebook.forEach(function(a){
                        a.style.display = 'block';
                    })
                    onProgress = true;
                    isOpen = true;
                    animation = anime.timeline({
                        easing: 'easeOutSine',
                        complete: () => {
                            onProgress = false;
                        }
                    }).add({
                        targets: '.ebook-dropdown',
                        height: 100,
                        duration: 1000,
                    }).add({
                        targets: '.ebook-list',
                        duration: 400,
                        translateX: ['-50', '0'],
                        opacity: ['0', '1'],
                        delay: (el, i) => {
                            return 100 * i;
                        },
                    })
                }
            }
        })
    }, 2000)
}

// diktat.html
function diktatLoaded(e){
    var listHeader = document.querySelectorAll('.diktat-list-header');
    var linkHeader = document.querySelectorAll('.diktat-link-header');

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1020 && window.innerWidth > 900) {
            listHeader.forEach((a)=>{
                a.classList.remove('open');
            })
            linkHeader.forEach((a)=>{
                a.removeAttribute('style');
                a.classList.remove('active');
            })
            document.querySelectorAll('.diktat-list').forEach((a)=>{
                a.removeAttribute('style');
            })
            document.querySelectorAll('.diktat-link').forEach((a)=>{
                a.removeAttribute('style');
            })
        }
    })
    listHeader.forEach(function(a){
        a.addEventListener('click', (e) => {
            var selectedHeader = e.target;
            var selectedList = e.target.parentElement.nextElementSibling;
            if (selectedHeader.classList.contains('open')){
                anime({
                    targets: selectedList,
                    height: 0,
                    opacity: 0,
                    duration: 800,
                    easing: 'easeOutExpo',
                    complete: () => {
                        selectedList.style.display = 'none';
                        selectedHeader.classList.remove('open');
                        document.querySelectorAll('.diktat-link').forEach(function(a){
                            a.removeAttribute('style');
                        });
                        document.querySelectorAll('.diktat-link-header').forEach(function(a){
                            a.classList.remove('active');
                        });
                    }
                })
            } else{
                selectedList.style.display = 'block';
                anime.timeline({
                    easing: 'easeOutQuad'
                }).add({
                    targets: selectedList,
                    height: 100,
                    opacity: 1,
                    duration: 600,
                }).add({
                    targets: selectedList.querySelectorAll('.diktat-link-header'),
                    translateX: ['-100', '0'],
                    opacity:  ['0', '1'],
                    duration: 400,
                    delay: (el, i) => {
                        return (100 * i) ;
                    }
                }, '-=300')
                selectedHeader.classList.add('open');
            }
        })
    })
    linkHeader.forEach((a) => {
        a.addEventListener('click', (e) => {
            var diktatLinksHeader = e.target;
            var diktatLinks = diktatLinksHeader.parentElement.nextElementSibling;
            var diktatList = diktatLinksHeader.parentElement.parentElement.parentElement;
            if (window.innerWidth < 1020) {
                if (diktatLinksHeader.classList.contains('active')){
                    anime.timeline({
                        easing: 'easeOutQuad',
                        complete: () => {
                            diktatLinks.removeAttribute('style');
                        }
                    }).add({
                        targets: diktatLinks.querySelectorAll('li'),
                        opacity: 0,
                        duration: 400,
                    }).add({
                        targets: diktatLinks,
                        height: 0,
                        duration: 400,
                    }, '-=400')
                    diktatLinksHeader.classList.remove('active');
                } else {
                    diktatLinks.style.display = 'block';
                    anime.timeline({
                        easing: 'easeOutExpo',
                        delay: 300
                    })
                    .add({
                        targets: diktatLinks.querySelectorAll('li'),
                        opacity: ['0', '1'],
                        translateX: ['-50', '0'],
                        duration: 800,
                        delay: anime.stagger(100),
                    })
                    diktatLinksHeader.classList.add('active');
                    //diktatList.style.height = 'auto';
                    diktatList.removeAttribute('style');
                    diktatList.style.display = 'block';
                }
            }
        })
    })

    //DIKTAT ARRAY
    var diktatBookContainer = document.querySelectorAll('.diktat-book-container');
    var diktatBookTitle = document.querySelectorAll('.diktat-book-title');
    var diktatBookCover = document.querySelectorAll('.diktat-cover');
    
    function diktatRefresh (x, y){
        for (let i = 0; i <= 14; i++){
            y.parentElement.nextElementSibling.querySelectorAll('a')[i].text = x[i].title;
            y.parentElement.nextElementSibling.querySelectorAll('a')[i].href = x[i].link;
            y.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = x[i].display;
        }
    }

    diktatBookContainer.forEach((a) => {
        a.parentElement.target = '_blank';
    })
    document.querySelectorAll('.diktat-link').forEach((a) => {
        a.querySelectorAll('a').forEach((b) => {
            b.target = '_blank';
        })
    })

    document.querySelectorAll('.diktat-link-header').forEach((a) => {
        if (a.classList.contains('uts-ganjil-2020')){
            diktatRefresh(utsGanjil20, a)
        }
        if (a.classList.contains('uas-ganjil-2020')){
            diktatRefresh(uasGanjil20, a)
        }
        if (a.classList.contains('uts-genap-2020')){
            diktatRefresh(utsGenap20, a)
        }
        if (a.classList.contains('uas-genap-2020')){
            diktatRefresh(uasGenap20, a)
        }
        if (a.classList.contains('uts-ganjil-2019')){
            diktatRefresh(utsGanjil19, a)
        }
        if (a.classList.contains('uas-ganjil-2019')){
            diktatRefresh(uasGanjil19, a)
        }
        if (a.classList.contains('uts-genap-2019')){
            diktatRefresh(utsGenap19, a)
        }
        if (a.classList.contains('uas-genap-2019')){
            diktatRefresh(uasGenap19, a)
        }
        if (a.classList.contains('uts-ganjil-2018')){
            diktatRefresh(utsGanjil18, a)
        }
        if (a.classList.contains('uas-ganjil-2018')){
            diktatRefresh(uasGanjil18, a)
        }
        if (a.classList.contains('uts-genap-2018')){
            diktatRefresh(utsGenap18, a)
        }
        if (a.classList.contains('uas-genap-2018')){
            diktatRefresh(uasGenap18, a)
        }
        if (a.classList.contains('uts-ganjil-2017')){
            diktatRefresh(utsGanjil17, a)
        }
        if (a.classList.contains('uas-ganjil-2017')){
            diktatRefresh(uasGanjil17, a)
        }
    })

    function diktatBookRefresh (x){
        for (let i = 0; i <= 14; i++){
            diktatBookContainer[i].parentElement.href = x[i].link
            diktatBookContainer[i].parentElement.style.display = x[i].display
            diktatBookTitle[i].querySelector('h1').textContent = x[i].title.toUpperCase();
            diktatBookCover[i].querySelector('img').src = x[i].img
        }
    }
    
    document.querySelectorAll('.diktat-link-header').forEach((a) => {
        a.addEventListener('click', () => {
            if (a.classList.contains('uts-ganjil-2020')){
                diktatBookRefresh(utsGanjil20)
            }
            if (a.classList.contains('uas-ganjil-2020')){
                diktatBookRefresh(uasGanjil20)
            }
            if (a.classList.contains('uts-genap-2020')){
                diktatBookRefresh(utsGenap20)
            }
            if (a.classList.contains('uas-genap-2020')){
                diktatBookRefresh(uasGenap20)
            }
            if (a.classList.contains('uts-ganjil-2019')){
                diktatBookRefresh(utsGanjil19)
            }
            if (a.classList.contains('uas-ganjil-2019')){
                diktatBookRefresh(uasGanjil19)
            }
            if (a.classList.contains('uts-genap-2019')){
                diktatBookRefresh(utsGenap19)
            }
            if (a.classList.contains('uas-genap-2019')){
                diktatBookRefresh(uasGenap19)
            }
            if (a.classList.contains('uts-ganjil-2018')){
                diktatBookRefresh(utsGanjil18)
            }
            if (a.classList.contains('uas-ganjil-2018')){
                diktatBookRefresh(uasGanjil18)
            }
            if (a.classList.contains('uts-genap-2018')){
                diktatBookRefresh(utsGenap18)
            }
            if (a.classList.contains('uas-genap-2018')){
                diktatBookRefresh(uasGenap18)
            }
            if (a.classList.contains('uts-ganjil-2017')){
                diktatBookRefresh(utsGanjil17)
            }
            if (a.classList.contains('uas-ganjil-2017')){
                diktatBookRefresh(uasGanjil17)
            }
            anime({
                targets: diktatBookContainer,
                translateY: ['-100', '0'],
                opacity: ['0', '1'],
                duration: 800,
                delay: anime.stagger(100),
                easing: 'easeOutExpo',
            })
        })
    })

    //bouncing book
    var diktatBook = document.querySelectorAll('.diktat-book-container');
    diktatBook.forEach(function(a){
        var bouncingBook = anime({
            targets: a.querySelector('.diktat-cover'),
            translateY: -20,
            direction: 'alternate',
            duration: 600,
            loop: true,
            autoplay: false,
            easing: 'easeInOutSine',
        })
        setTimeout(function(){
            a.addEventListener('mouseenter', (e) => {
                setTimeout(bouncingBook.play , 500)
            })
        }, 500)
        a.addEventListener('mouseleave', (e) => {
            setTimeout(function(){
                bouncingBook.loop = false;
                bouncingBook.paused = true;
                anime({
                    targets: a.querySelector('.diktat-cover'),
                    translateY: 0,
                    duration: 500,
                    easing: 'easeOutExpo',
                    complete: function (a) {
                        document.querySelector('.diktat-cover').removeAttribute('style');
                        bouncingBook.seek(0)
                    }
                })
            }, 500)
        })
    })
}

// ebook.html

function ebookLoaded(e) {
    var ebook = document.querySelectorAll('.ebook-click');
    ebook.forEach(function(a){
        a.addEventListener('click', (e) => {
            e.preventDefault();
            if (a.classList.contains('open')){
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: function(anim){
                        a.parentElement.parentElement.style.zIndex = 0;
                        a.classList.remove('open');
                        a.parentElement.parentElement.style.justifyContent = 'center';
                    }
                })
                .add({
                    targets: a.nextElementSibling.querySelectorAll('li'),
                    translateX: ['0', '-50'],
                    opacity: 0,
                    duration: 600,
                    delay: (el, i) => {
                        return 200 * i;
                    }
                })
                .add({
                    targets: a.nextElementSibling,
                    width: '100%',
                    duration: 600,
                }, '-=200')
            } else {
                a.parentElement.parentElement.style.zIndex = 10;
                if (window.innerWidth < 768){
                    a.parentElement.parentElement.style.justifyContent = 'flex-start';
                };
                anime.timeline({
                    easing: 'easeOutExpo'
                }).add({
                    targets: a.nextElementSibling,
                    width: '200%',
                    duration: 600,
                }).add({
                    targets: a.nextElementSibling.querySelectorAll('li'),
                    translateX: ['-50', '0'],
                    opacity: 1,
                    duration: 600,
                    delay: (el, i) => {
                        return 200 * i;
                    }
                })
                setTimeout(function(){
                    a.classList.add('open');
                }, 650)
            }
        })
    })
}
// contact-us.html
function contactusLoaded(e) {
    anime.timeline({
        easing: 'easeOutExpo',
    }).add({
        targets: document.querySelector('.contact-title-line'),
        width: ['0', '30%'],
        duration: 500,
    }).add({
        targets: document.querySelector('.contact-title').querySelector('h1'),
        translateY: ['-50', '0'],
        opacity: ['0', '1'],
        duration: 500,
    }, '-=500').add({
        targets: document.querySelectorAll('.contact-desc-title'),
        translateX: ['-50', '0'],
        opacity: ['0', '1'],
        duration: 800,
        delay: anime.stagger(200)
    }, '-=350').add({
        targets: document.querySelectorAll('.contact-desc-text'),
        translateX: ['-50', '0'],
        opacity: ['0', '1'],
        duration: 800,
        delay: anime.stagger(200)
    }, '-=500').add({
        targets: document.querySelector('.social-media-icons').querySelectorAll('div'),
        translateY: ['-50', '0'],
        opacity: ['0', '1'],
        delay: anime.stagger(100, {
            from: 'center',
            direction: 'reverse',
        })
    }, '-=600').add(navAnimate, '-=700')
}