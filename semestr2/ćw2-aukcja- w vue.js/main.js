Vue.component("auction-item", {
  props: ["auction"],
  template: ` 
  <div>
        <li>
            Tytuł: {{auction.name}}
            Cena wywoławcza: {{auction.price}} <br>
            <button @click.prevent="$emit('close-auction',auction.id)">Zakończ aukcję</button>
            <br><br>
            <strong>Lista ofert:</strong>
            <ul>
                <li v-for="offer in auction.offers">
                    osoba: {{offer.name}}, oferta: {{offer.price}},
                    <button @click="removeOffer(offer.id)" data-offer="removeOffer">Usuń oferte</button>
                </li>
            </ul>
        </li>
        <add-new-offer
          :offers="auction.offers"
          :auction-price="auction.price"
          :heightsOffer="heightsOfferPrice()">
        </add-new-offer>
  </div>
    `,

  methods: {
    removeOffer(id) {
      this.auction.offers = this.auction.offers.filter(
        offer => offer.id !== id
      );
    },
    heightsOfferPrice() {
      if (this.auction.offers.length > 0) {
        let max = 0;
        for (let i = 0; i < this.auction.offers.length; i++) {
          if (max <= this.auction.offers[i].price) {
            max = this.auction.offers[i].price;
          }
        }
        return max;
      } else {
        return this.auction.price;
      }
    }
  }
});

Vue.component("add-new-offer", {
  data() {
    return {
      newOffer: {
        name: "",
        price: 0
      },
      newOfferId: 0,
      isFound: false
    };
  },
  props: ["offers", "auction-price", "heightsOffer"],
  template: `<div>
  <button @click="closeOffers">zakoncz licytacje</button>
    <form id="formAddOffer" @submit.prevent="addNewOffer">
    <label for="offer.name">Tytuł nowej oferty</label>
    <input name="offer.name" id="offer.name"
    v-model="newOffer.name"/>
    <label for="offer-price">cenna wywoławcza</label>
    <input name="offer-price" id="offer.price" type="number"
    min="heightsOffer" v-model="newOffer.price"/>
    <button type="submit" id="btnSub">Dodaj nową ofertę</button>
    </form></div>
    
    `,
  methods: {
    addNewOffer() {
      this.newOfferID();
      this.newOffer.price = Number(this.newOffer.price);
      if (
        this.newOffer.name.length > 0 &&
        this.newOffer.price > this.heightsOffer
      ) {
        this.updateOfferExistenUser(this.newOffer);
        // aktualizacja ceny istniejacej oferty
        if (this.isFound === false) {
          // dodanie nowej oferty
          this.offers.push({
            id: this.newOfferId,
            name: this.newOffer.name,
            price: this.newOffer.price
          });
        }
        this.newOffer.name = "";
        this.newOffer.price = "";
      }
    },
    newOfferID() {
      if (this.offers.length > 0) {
        this.newOfferId = this.offers[this.offers.length - 1].id;
      }
      this.newOfferId++;
    },
    updateOfferExistenUser(newOffers) {
      for (let i = 0; i < this.offers.length; i++) {
        if (newOffers.name === this.offers[i].name) {
          this.offers[i].price = newOffers.price;
          this.isFound = true;
          break;
        } else {
          this.isFound = false;
        }
      }
    },
    closeOffers() {
      document.getElementById("offer.name").disabled = true;
      document.getElementById("offer.price").disabled = true;
      document
        .querySelectorAll('[data-offer="removeOffer"]')
        .forEach(element => {
          element.disabled = true;
        });
      document.getElementById("btnSub").textContent = "licytacja zakończona";
    }
  }
});
const myApp = new Vue({
  el: '[data-id="myApp"]',
  data() {
    return {
      newAuctionId: 0,
      newAuction: {
        name: "",
        price: 0
      },
      auctionsData: [
        {
          id: 1,
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
        this.auctionsData.push({
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
      if (this.auctionsData.length > 0) {
        this.newAuctionId = this.auctionsData[this.auctionsData.length - 1].id;
      }
      this.newAuctionId++;
    },

    removeAuction(id) {
      this.auctionsData = this.auctionsData.filter(
        auction => auction.id !== id
      );
    }
  }
});
