// a)
function promeniSliku() {
    var slika = document.getElementById('slika');
    if (slika.src.endsWith('leverkuzen2.jpg')) {
      slika.src = 'leverkuzen.jpg';
    } else {
      slika.src = 'leverkuzen2.jpg';
    }
  }
  
  function promeniSliku2() {
    var slika1 = document.getElementById('slika1');
    if (slika1.src.endsWith('realigraci1.jpg')) {
      slika1.src = 'sitiigraci1.jpg';
    } else {
      slika1.src = 'realigraci1.jpg';
    }
  }

  function promeniSliku3() {
    var slika2 = document.getElementById('slika2');
    if (slika2.src.endsWith('kosarkasisrbija2.jpg')) {
      slika2.src = 'kosarkasisrbija.jpg';
    } else {
      slika2.src = 'kosarkasisrbija2.jpg';
    }
  }


  // d)
  function checkAnswers() {
    var radiobuttons = document.querySelectorAll('input[name="answer"]:checked');
    var correctAnswers = ['3']; // Podesite tačne odgovore ovde
  
    var userAnswers = [];
    radiobuttons.forEach(function(radiobutton) {
      userAnswers.push(radiobutton.value);
    });
  
    var correct = true;
    correctAnswers.forEach(function(answer) {
      if (!userAnswers.includes(answer)) {
        correct = false;
      }
    });
  
    var resultMessage = document.getElementById('result-message');
    if (correct) {
      resultMessage.textContent = "Čestitamo, osvojili ste dres!";
      document.getElementById('dres-slika').style.display = 'block';
    } else {
      resultMessage.textContent = "Više sreće drugi put u narednom kvizu.";
      document.getElementById('dres-slika').style.display = 'none';
    }
  }
  

  // b)
  function proveriPotvrdu() {
    var checkbox = document.querySelector('input[name="potvrda"]:checked');
  
    var resultMessage = document.getElementById('result-message1');
    if (checkbox) {
      resultMessage.textContent = "Čestitamo! Vaš zahtev za dobijanje dresa je uspešno primljen.";
    } else {
      resultMessage.textContent = "Molimo vas, potvrdite da želite da dobijete dres.";
    }
  }
  

 // c)
function proveriFormu() {
  document.getElementById("submitBtn").addEventListener("click", function() {
      var ime = document.getElementById("ime").value;
      var prezime = document.getElementById("prezime").value;
      var komentar = document.getElementById("komentar").value;

      if (ime !== "" && prezime !== "" && komentar !== " " ) {
          document.getElementById("poruka").innerText = "Uspešno.";
      } else {
          document.getElementById("poruka").innerText = "Molim Vas, popunite sva polja.";
      }
  });
}

proveriFormu();
// Pozivamo funkciju nakon definisanja

// d)
// Funkcija za vraćanje na vrh stranice
function scrollToTop() {
  document.documentElement.scrollTop = 0; 
}
// Prikazivanje dugmeta za vraćanje na vrh kada korisnik skroluje dole
window.onscroll = function() {scrollFunction()};









  



  