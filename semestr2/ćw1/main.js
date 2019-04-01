const vm = new Vue({
  el: '[data-jscomponent="personList"]',
  data: {
    sortBy: "a-z",
    filterValue: "",
    viewOption: true,
    newName: "",
    newSurname: "",
    newIntreste: "",
    newAge: "",
    newEmail: "",
    newStreet: "",
    newZipcode: "",
    newCity: "",
    newFriend: "",
    newlikes: 0,
    newPhoto: "",
    NewPersons: [],
    persons: [
      {
        name: "Piotr",
        surname: "Kwiatkowski",
        age: "28",
        email: "piotr@gmail.com",
        address: {
          street: "Wiejska 45A",
          zipcode: "15-300",
          city: "Białystok"
        },
        friend: true,
        likes: 4,
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        interests: ["sport", "muzyka"]
      },
      {
        name: "Krzysztof",
        surname: "Nowak",
        age: "19",
        email: "knowak@wp.pl",
        address: {
          street: "Sienkiewicza 12 m. 13",
          zipcode: "15-400",
          city: "Białystok"
        },
        friend: false,
        likes: 12,
        photo: "https://randomuser.me/api/portraits/men/73.jpg",
        interests: ["komiksy", "gry wideo", "anime"]
      },
      {
        name: "Olga",
        surname: "Zielińska",
        age: "32",
        email: "olzie@gmail.com",
        address: {
          street: "Lipowa 8/10",
          zipcode: "15-500",
          city: "Białystok"
        },
        friend: true,
        likes: 15,
        photo: "https://randomuser.me/api/portraits/women/40.jpg",
        interests: ["film", "muzyka"]
      },
      {
        name: "Barbara",
        surname: "Kowalska",
        age: "22",
        email: "kowalska@manga.pl",
        address: {
          street: "Mazowiecka 9B/44",
          zipcode: "15-600",
          city: "Białystok"
        },
        friend: false,
        likes: 10,
        photo: "https://randomuser.me/api/portraits/women/50.jpg",
        interests: ["manga", "anime"]
      }
    ]
  },
  methods: {
    filter() {
      this.filterValue = this.filterValue.toLowerCase();
      this.NewPersons = [...this.persons];
      this.NewPersons = this.NewPersons.filter(person =>
        person.name.toLowerCase().includes(this.filterValue)
      );
      this.persons = this.NewPersons;
    },
    addLikes(e) {
      e.likes++;
    },
    subtractLikes(person) {
      person.likes--;
      if (person.likes < 0) {
        person.likes = 0;
      }
    },
    addPerson() {
      this.persons.push({
        name: this.newName,
        surname: this.newSurname,
        age: this.newAge,
        email: this.newEmail,
        address: {
          street: this.newStreet,
          zipcode: this.newZipcode,
          city: this.newCity
        },
        interests: [this.newIntreste],
        friend: this.newFriend,
        likes: this.newlikes,
        photo: this.newPhoto
      });
      this.newName = "";
      this.newSurname = "";
      this.newAge = "";
      this.newEmail = "";
      this.newStreet = "";
      this.newZipcode = "";
      this.newCity = "";
      this.newIntreste = "";
      this.newFriend = "";
      this.newlikes = "";
      this.newPhoto = "";
    }
  },
  computed: {
    sortData() {
      if (this.sortBy === "a-z") {
        return this.persons
          .slice()
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          );
      } else if (this.sortBy === "z-a") {
        return this.persons
          .slice()
          .sort((a, b) =>
            b.name.toLowerCase().localeCompare(a.name.toLowerCase())
          );
      }
    }
  }
});
