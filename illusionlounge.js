const popupOverlay = document.querySelector(&quot;.popup-overlay&quot;);
const skipButton = document.querySelector(&quot;.popup-container .skip-button&quot;);
const visitButton = document.querySelector(&quot;.popup-container .visit-button&quot;);

let remainingTime = 5;
let allowedToSkip = false;
let popupTimer;

const createPopupCookie = () =&gt; {
  let expiresDays = 30;
  let date = new Date();
  date.setTime(date.getTime() + expiresDays * 24 * 60 * 60 * 1000);
  let expires = &quot;expires=&quot; + date.toUTCString();
  document.cookie = `popupCookie=true; ${expires}; path=/;`;
};

const showAd = () =&gt; {
  popupOverlay.classList.add(&quot;active&quot;);
  popupTimer = setInterval(() =&gt; {
    skipButton.innerHTML = `Skip in ${remainingTime}s`;
    remainingTime--;

    if (remainingTime &lt; 0) {
      allowedToSkip = true;
      skipButton.innerHTML = &quot;Skip&quot;;
      clearInterval(popupTimer);
    }
  }, 1000);
};

const skipAd = () =&gt; {
  popupOverlay.classList.remove(&quot;active&quot;);
  createPopupCookie();
};

skipButton.addEventListener(&quot;click&quot;, () =&gt; {
  if (allowedToSkip) {
    skipAd();
  }
});

const startTimer = () =&gt; {
  if (window.scrollY &gt; 100) {
    showAd();
    window.removeEventListener(&quot;scroll&quot;, startTimer);
  }
};

if (!document.cookie.match(/^(.*;)?\s*popupCookie\s*=\s*[^;]+(.*)?$/)) {
  window.addEventListener(&quot;scroll&quot;, startTimer);
}



// Popup

// JavaScript for the popup
     // window.onload = function() {
        setTimeout(function() {
          var popup = document.getElementById(&quot;popup&quot;);
          popup.style.display = &quot;flex&quot;;
          setTimeout(function() {
            popup.style.display = &quot;none&quot;;
          }, 8000);
        }, 25000);
      };
      
      
      
//Design

 // Generate random pigeon paths
      function getRandomPath() {
        var path = &quot;translateY(&quot; + (Math.floor(Math.random() * 101) - 50) + &quot;%) &quot;;
        path += &quot;translateX(&quot; + (Math.floor(Math.random() * 501) + 100) + &quot;%) &quot;;
        path += &quot;rotate(&quot; + (Math.floor(Math.random() * 181) - 90) + &quot;deg)&quot;;
        return path;
      }

      // Create pigeons
      var numPigeons = Math.max(5, Math.floor(Math.random() * 11)); // generate at least 5 pigeons, up to 15
      for (var i = 0; i &lt; numPigeons; i++) {
        var pigeon = document.createElement(&quot;div&quot;);
        pigeon.classList.add(&quot;pigeon&quot;);
        pigeon.style.transform = getRandomPath();
        document.body.appendChild(pigeon);
      }
      
   const navLinks = document.querySelectorAll(&#39;nav ul li a&#39;);

// add click event listener to each link
navLinks.forEach(link =&gt; {
  link.addEventListener(&#39;click&#39;, event =&gt; {
    // prevent default link behavior
    event.preventDefault();

    // get the target ID from the href attribute
    const targetID = link.getAttribute(&#39;href&#39;);

    // scroll to the target ID using smooth behavior
    document.querySelector(targetID).scrollIntoView({
      behavior: &#39;smooth&#39;
    });
  });
});  

