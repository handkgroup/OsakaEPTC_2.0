// links tagas js
document.addEventListener('DOMContentLoaded', function () {
    const tagsContainer = document.querySelector('.tl-link-tags');
    const svgIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.11785 11.7886C6.18473 11.8556 6.26417 11.9088 6.35163 11.9451C6.43908 11.9813 6.53283 12 6.62751 12C6.72219 12 6.81594 11.9813 6.90339 11.9451C6.99084 11.9088 7.07028 11.8556 7.13716 11.7886L10.4553 8.47041C10.5224 8.40353 10.5755 8.32409 10.6118 8.23664C10.6481 8.14919 10.6667 8.05544 10.6667 7.96076C10.6667 7.86608 10.6481 7.77233 10.6118 7.68488C10.5755 7.59742 10.5224 7.51798 10.4553 7.45111L7.13716 4.13293C7.07023 4.066 6.99078 4.01291 6.90333 3.97669C6.81588 3.94047 6.72216 3.92183 6.62751 3.92183C6.53286 3.92183 6.43913 3.94047 6.35169 3.97669C6.26424 4.01291 6.18478 4.066 6.11785 4.13293C6.05092 4.19986 5.99783 4.27932 5.96161 4.36676C5.92539 4.45421 5.90675 4.54793 5.90675 4.64259C5.90675 4.73724 5.92539 4.83096 5.96161 4.91841C5.99783 5.00585 6.05092 5.08531 6.11785 5.15224L8.92276 7.96437L6.11785 10.7693C5.83592 11.0512 5.84315 11.5139 6.11785 11.7886Z" fill="white"/>
        </svg>
    `;

    const paragraphs = tagsContainer.querySelectorAll('p');

    paragraphs.forEach((p, index) => {
        if (index < paragraphs.length - 1) {
            p.insertAdjacentHTML('afterend', svgIcon);
        }
    });
});

// tags show more button 

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#tagContainer a');
    const showMoreBtn = document.getElementById('showMoreBtn');

    links.forEach((link, index) => {
        if (index >= 5) {
            link.style.display = 'none'; 
        }
    });

    showMoreBtn.addEventListener('click', function() {
        links.forEach(link => {
            link.style.display = 'block'; 
        });
        this.style.display = 'none'; 
    });
});
