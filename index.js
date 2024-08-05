/*
Дізнатись суму всіх зарплат користувачів. Об'єкт може містити невідому кількість департаментів та співробітників.
*/

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice',salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
 }

function getTotalSalary (department) {

    if (Array.isArray(department)) {

        return department.reduce((total, employee) => total + employee.salary, 0);
    
    } else {

        let totalSalary = 0;

        for(let subDept of Object.values(department)) {
            totalSalary += getTotalSalary(subDept);
        }
        return totalSalary;
    }
}

console.log(getTotalSalary(company));