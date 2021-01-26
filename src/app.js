window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

function toggleMenu() {
    const resMenu = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    resMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}


const animItems = document.querySelectorAll('.__anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', onScroll);

    function onScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('__active');
            } else {
                if (!animItem.classList.contains('no-anim')) {
                    animItem.classList.remove('__active');
                }
            }

        }
    }


    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }

    }

    setTimeout(() => {
        onScroll();
    }, 500)

}



