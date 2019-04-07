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
        })
        .then(function() {
          // always executed
        });
    },
    add() {
      axios
        .post("http://kitan.pl/pb/api/v1/employees",{
        'employee_name': this.nameEmployee,
        'employee_salary': this.salaryEmployee,
        'employee_age': this.ageEmployee
        })
        .then((response)=> {
            console.log(response.data);
            if(response&&response.status===200){
                this.getData();
      this.nameEmployee = "";
      this.salaryEmployee = "";
      this.ageEmployee = "";
      this.id = "";}
    })
    .catch((error)=>{
console.log(error);
    })},
    remove(employee){
        axios.delete("http://kitan.pl/pb/api/v1/employees/" + employee.id)
        .then((response) => {
           
            let idx = this.employees.indexOf(employee);
            this.employees.splice(idx, 1);
            if(response&&response.status===200){
                this.getData();
                console.log("gitar!!!");
            }
        })
    },
    edit(employee) {
        this.editing = employee;
        this.booktitle = book.title;
    },
  },
  mounted() {
    this.getData();
  }
});

