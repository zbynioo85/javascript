const VueObj = new Vue({
  el: '[data-vue="mainVue"]',
  data: {
    nameEmployee: "",
    salaryEmployee: "",
    ageEmployee: "",
    idEmployee: "",
    editing: null,
    employees: []
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
    }
  },
  mounted() {
    this.getData();
  }
});
