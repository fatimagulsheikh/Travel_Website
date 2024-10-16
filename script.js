//  JavaScript for Interactivity
        // Dynamic Text Animation
        const destinations = ["Paris", "New York", "Tokyo", "Sydney", "Dubai"];
        let currentIndex = 0;

        function changeText() {
            const changeContentElement = document.querySelector(".changecontent");
            changeContentElement.textContent = destinations[currentIndex];
            currentIndex = (currentIndex + 1) % destinations.length;
        }

        // Change text every 2 seconds
        setInterval(changeText, 2000);

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

   