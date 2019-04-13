const TIME_REFRESH_DATA = 60000 * 10;

const EmployeeApp = new Vue({
    el: '#EmployeeApp',
    data() {
        return {
            employees: [],
            newEmployee: {
                name: '',
                age: '',
                salary: ''
            },
            intervalGetData: null,
            intervalTime: TIME_REFRESH_DATA / 1000,
            intervalCountdown: null,
            isError: null,
            isLoading: false,
            editableItemId: null,
        }
    },
    methods: {
        countdownRefresh() {
            if (this.intervalTime > 0) {
                this.intervalTime--;
            } else {
                clearInterval(this.intervalCountdown);
            }
        },
        toggleEdit(id) {
            this.editableItemId = (this.editableItemId !== id) ? id : null;
        },
        getNewData() {
            this.getData();
            this.intervalTime = TIME_REFRESH_DATA / 1000;
        },
        getData() {
            this.isLoading = true;

            axios.get(`http://kitan.pl/pb/api/v1/employees`)
                .then((response) => {
                    console.log('response', response);
                    this.employees = response.data;
                    this.isLoading = false;
                })
                .catch((error) => {
                    console.log('error', error);
                    this.isError = error;
                    this.isLoading = false;
                })
        },
        addNewData() {
            this.isLoading = true;

            axios.post('http://kitan.pl/pb/api/v1/employees', {
                    "employee_name": this.newEmployee.name,
                    "employee_age": this.newEmployee.age,
                    "employee_salary": this.newEmployee.salary
                })
                .then((response) => {
                    console.log('response', response.data);

                    if (response) {
                        this.getNewData();
                        this.newEmployee.name = '';
                        this.newEmployee.age = '';
                        this.newEmployee.salary = '';
                    } else {
                        this.isLoading = false;
                    }
                })
                .catch((error) => {
                    console.log('error', error);
                    this.isError = error;
                    this.isLoading = false;
                });

        },
        editNewData(id, event) {
            this.isLoading = true;

            const $root = event.currentTarget.parentNode;

            const $employeeName = $root.querySelector("[data-id='employee-name']");
            const $employeeAge = $root.querySelector("[data-id='employee-age']");
            const $employeeSalary = $root.querySelector("[data-id='employee-salary']");

            axios.put(`http://kitan.pl/pb/api/v1/employees/${this.editableItemId}`, {
                    "employee_name": $employeeName.textContent,
                    "employee_age": $employeeAge.textContent,
                    "employee_salary": $employeeSalary.textContent
                })
                .then((response) => {
                    if (response) {
                        this.toggleEdit(id);
                        this.getNewData();
                        this.isLoading = false;
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.toggleEdit(id);
                    this.isError = error;
                    this.isLoading = false;
                });

        },
        removeData(id) {
            this.isLoading = true;

            axios.delete(`http://kitan.pl/pb/api/v1/employees/${id}`)
                .then(response => {
                    console.log('response', response);
                    this.getNewData();

                    this.toggleEdit(id);
                    this.isLoading = false;
                })
                .catch(error => {
                    console.log('error', error);
                    this.isError = error;

                    this.toggleEdit(id);
                    this.isLoading = false;
                })
        },
    },
    mounted() {
        this.getNewData();

        this.intervalCountdown = setInterval(() => {
            this.countdownRefresh();
        }, 1000);

        this.intervalGetData = setInterval(() => {
            this.getNewData();
        }, TIME_REFRESH_DATA);
    },
    beforeDestroy() {
        clearInterval(this.intervalGetData);
    }
})