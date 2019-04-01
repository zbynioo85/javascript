// Stwórz klasę reprezentującą aukcję. Każda aukcja ma nazwę wystawianego towaru oraz cenę wywoławczą. Aukcja udostępnia metodę licytuj, gdzie możemy podać nazwisko licytującego oraz jego ofertę. Jeśli nie jest ona wyższa od ceny wywoławczej (lub najwyższej aktualnie oferowanej, jest odrzucana). W przeciwnym razie zapamiętujemy ją w tablicy. Jeśli ta sama osoba ponownie licytuje, jej poprzednia oferta jest usuwana (pamiętamy tylko po jednej ofercie na osobę). Możliwe jest zakończenie aukcji, wówczas kolejne oferty nie będą przyjmowane.

// Stwórz interfejs w HTML, który pozwoli na dodawanie aukcji (wyświetlana jest ich lista) oraz licytowanie i kończenie (poprzez wywoływanie jej metod). Wyświetlaj również wszystkie oferty w danej aukcji. Daj też możliwość ręcznego usuwania aukcji (ale nie ofert).
// Vue.component('auction-item', {
//     props: ['auction'],
//     template: `
//     <li>
// Tytuł:{{auction.name}}
// cena wywoławcza:{{auction.price}}<br><br>
// <button @click.prevent="$emit('close-auction, auction.id')">zakoncz aukcje</button>
//     </li>
//     <strong>lista ofert:</strong>
//     <ul>
//     <li v-for="offer in auction.offers">
//     osoba:{{offer.name}},oferta: {{offer.price}}
//     </li>

//     </ul>
//     `,
//     methods: {
//         removeOffert(id) {

//         }
//     }
// })

const myApp = new Vue({
  el: '[data-id="myApp"]',
  data() {
    return {
      newAuctionId: 0,
      newAuction: {
        name: "",
        price: 0
      },
      auctionData: [
        {
          name: "Aukcja 1",
          price: 123,
          offers: [
            {
              id: 1,
              name: "krystian",
              price: 125
            }
          ]
        }
      ]
    };
  },
  methods: {
    addNewAuction() {
      this.newAuctionID();

      this.newAuction.price = Number(this.newAuction.price);

      if (this.newAuction.name.length > 0) {
        this.auctionData.push({
          id: this.newAuctionId,
          name: this.newAuction.name,
          price: this.newAuction.price,
          offers: []
        });
        this.newAuction.name = "";
        this.newAuction.price = 0;
      }
    },

    newAuctionID() {
      if (this.auctionData.length > 0) {
        this.newAuctionId = this.auctionData[this.auctionData.length - 1].id;
      }
      this.newAuctionId++;
    },

    removeAuction() {
      this.auctionData = this.auctionData.filter(auction => auction.id !== id);
    }
  }
});
