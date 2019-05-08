const VueObj = new Vue({
  el: '[data-vue="mainVue"]',
  data: {
    nameEmployee: "",
    salaryEmployee: "",
    ageEmployee: "",
    idEmployee: "",
    editing: null,
    sortBy: "",
    lista: [],
    employees: [],
    page: 0,
    details: 0
  },
  methods: {
    getData() {
      axios
        .get("http://kitan.pl/pb/api/v1/employees")
        .then(response => {
          // handle success
          console.log(response);
          this.employees = response.data;
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    add() {
      if (this.editing) {
        axios
          .put("http://kitan.pl/pb/api/v1/employees/" + this.editing.id, {
            employee_name: this.nameEmployee,
            employee_salary: this.salaryEmployee,
            employee_age: this.ageEmployee
          })
          .then(response => {
            this.editing = null;
            console.log(response.data);
            this.getData();
          });
      } else {
        axios
          .post("http://kitan.pl/pb/api/v1/employees", {
            employee_name: this.nameEmployee,
            employee_salary: this.salaryEmployee,
            employee_age: this.ageEmployee
          })
          .then(response => {
            if (response && response.status === 200) {
              this.getData();
              console.log(response.data);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
      this.nameEmployee = "";
      this.salaryEmployee = "";
      this.ageEmployee = "";
    },
    remove(employee) {
      axios
        .delete("http://kitan.pl/pb/api/v1/employees/" + employee.id)
        .then(response => {
          let idx = this.employees.indexOf(employee);
          this.employees.splice(idx, 1);
          if (response && response.status === 200) {
            this.getData();
            console.log("gitar!!!");
          }
        });
    },
    edit(employee) {
      this.editing = employee;
      this.nameEmployee = employee.employee_name;
      this.salaryEmployee = employee.employee_salary;
      this.ageEmployee = employee.employee_age;
    },
    sortData() {
      if (this.sortBy === "a-z") {
        localStorage.name = JSON.stringify(
          this.employees
            .slice()
            .sort((a, b) =>
              a.employee_name
                .toLowerCase()
                .localeCompare(b.employee_name.toLowerCase())
            )
        );
        this.lista = JSON.parse(localStorage.name);
        console.log(this.lista);
        return this.employees
          .slice()
          .sort((a, b) =>
            a.employee_name
              .toLowerCase()
              .localeCompare(b.employee_name.toLowerCase())
          );
      } else if (this.sortBy === "z-a") {
        localStorage.name = JSON.stringify(
          this.employees
            .slice()
            .sort((a, b) =>
              b.employee_name
                .toLowerCase()
                .localeCompare(a.employee_name.toLowerCase())
            )
        );
        this.lista = JSON.parse(localStorage.name);
        console.log(this.lista);
        return this.employees
          .slice()
          .sort((a, b) =>
            b.employee_name
              .toLowerCase()
              .localeCompare(a.employee_name.toLowerCase())
          );
      } else if (!this.sortBy) {
        localStorage.name = JSON.stringify(this.employees);
        return this.employees;
      }
    },
    nextpage() {
      this.page++;
      window.history.pushState(null, "", "?page=" + this.page);
    },
    prevpage() {
      this.page--;
      history.pushState(null, "", "?page=" + this.page);
    },
    firstpage() {
      this.page = 0;
      history.pushState(null, "", "?page=" + this.page);
    },

    lastpage() {
      this.page = Math.floor((this.employees.length - 1) / 10);
      history.pushState(null, "", "?page=" + this.page);
    },
    detailsItem(index) {
      this.details = index;
      history.pushState(null, "", "?page=" + this.page + "#" + index);
    }
  },
  mounted() {
    this.getData();
  },
  created() {
    if (localStorage.name) {
      this.lista = JSON.parse(localStorage.name);
      console.log(this.lista);
    }
    let query = new URLSearchParams(location.search);
    this.page = +query.get("page"); // +null === 0
    window.onload = window.onhashchange = () => {
      this.details = parseInt(location.hash.substr(1));
    };
  },
  computed: {
    filteredList() {
      this.employees = this.sortData();
      return this.employees.slice(this.page * 10, this.page * 10 + 10);
    },
    isDisabledNext() {
      if (this.page >= Math.floor((this.employees.length - 1) / 10))
        return true;
      else return null;
    },
    isDisabledPrev() {
      if (this.page <= 0) return true;
      else return null;
    }
  }
});
