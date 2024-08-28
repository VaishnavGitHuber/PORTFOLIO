const intersectionCallback = (entries) => {
    for (const entry of entries) { // Loop over all elements that either enter or exit the view.
        if (entry.isIntersecting) { // This is true when the element is in view.
            entry.target.classList.add('animatedcard'); // Add a class.
        }
    }
}


const observer = new IntersectionObserver(intersectionCallback);

const items = document.querySelectorAll('.anime');
for (const item of items) {
    observer.observe(item);
    console.log("observ");
}
$(window).on('scroll', function () {
    var st = $(this).scrollTop(),
        vh = $(this).height(),
        $counter = $('.wrapperx'),
        ct = $counter.offset().top;
    if ((st + vh) > ct) {
        // #counter is in the viewport

        let valueDisplays = document.querySelectorAll(".num");
        let interval = 100;

        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }
})