document.addEventListener("DOMContentLoaded",function(){  
    
    //TODO: animate the hero title
    const heroTitle = document.querySelector('.hero');
    heroTitle.style.opacity = 0;
    heroTitle.style.transform = 'translateY(-50px)';

    setTimeout(() => {
        heroTitle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        heroTitle.style.opacity = 1;
        heroTitle.style.transform = 'translateY(0)';
    },100);

    // TODO: animate the predict links
    const predictLinks = document.querySelectorAll('.card a');
    predictLinks.forEach(link => {
        link.style.position = 'relative'; // to help us animate the link
        link.style.overflow = 'hidden'; // to hide the text

        link.addEventListener('mouseover',() =>{
            const existingSpan = link.querySelector('.hover-effect');
            if (existingSpan) {
                existingSpan.remove();
            }

            const span = document.createElement('span');
            span.className = 'hover-effect';
            span.style.position = 'absolute'; // to make sure the span is positioned relative to the link
            span.style.top = '0';
            span.style.left = '0';
            span.style.width = '100%';
            span.style.height = '100%';
            span.style.backgroundColor = 'rgba(93,188,252,0.3)';
            span.style.transition = 'transform 0.6s ease-out';
            span.style.transform = 'scaleX(0)';
            span.style.transformOrigin = 'left';
            link.appendChild(span);
            requestAnimationFrame(() => {
                span.style.transform = 'scaleX(1)';
            });

            link.addEventListener('mouseleave',() =>{
                span.style.transform = 'scaleX(0)';
                span.addEventListener('transitionend', () => {
                    span.remove();
                },{once:true});
            },{once:true});
        });
    });
});