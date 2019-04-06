/*
function kreirajMapu() {
  const lokacija = { lat: 42.55139, lng: 22.58611 };
  const mapa = google.map.Mapa(document.getElementById('mapa'), {
    zoom: 3,
    centar: lokacija
  });
  const markiranje = new google.maps.Markiranje({
    pozicija: lokacija,
    pocetna_mapa: mapa
  });
}
*/

function MapaRuta() {
  this.listaRuta = [
    {
      pocetnatacka: 'Jagodina',
      zavrsnatacka: 'Kragujevac',
      kilometraza: '38 kilometara',
      vreme: '60 minuta'
    },
    {
      pocetnatacka: 'Jagodina',
      zavrsnatacka: 'Velika Plana',
      kilometraza: '49 kilometara',
      vreme: '70 minuta'
    }
  ],
  this.isprazniTabelu = function() {
      const redovi = document.getElementById('okvirTabeleID');
      if (redovi) {
      while (redovi.hasChildNodes()) {
          redovi.removeChild(redovi.firstChild());
        }
      }
  };

  this.prikaziTabelu = function() {
    isprazniTabelu();
    for (const indexID in this.listaRuta) {
      const red = document.createElement('tr');
      red.id = indexID;
      tabela.appendChild(red);
    }

    this.dodajRutu = function() {
      if (confirm('Dodajte novu rutu?')) {
        const pocetnatacka = prompt('Pocetna tacka: ');
        const zavrsnatacka = prompt('Zavrsna tacka: ');
        const kilometraza = prompt('Kilometraza: ');
        const vreme = prompt('Vreme: ');

        if (pocetnatacka == '' && zavrsnatacka == '' && kilometraza == '' && vreme == '') {
          alert('Niste uneli trazene podatke!');
        } else {
          this.listaRuta.push({
            pocetnatacka,
            zavrsnatacka,
            kilometraza,
            vreme
          });
        }
      }
    };
  };
}

const novaMapaRuta = new MapaRuta();
novaMapaRuta.prikaziTabelu();

function dugmeDodaj() {
  novaMapaRuta.dodajRutu();
}

const tabela = document.getElementById('okvirTabeleID');
tabela.onclick = function(event) {
  console.log(event);
};

export { kreirajMapu, MapaRuta, novaMapaRuta, tabela, dugmeDodaj };
