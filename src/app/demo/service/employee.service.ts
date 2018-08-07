import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Employee } from "../domain/employee.model";
import { environment } from "../../../environments/environment";

const BAKEND_URL = environment.apiUrl;

@Injectable({
    providedIn: "root"
})
export class EmployeeService {
    employees: Employee[] = [];
    employeeSub = new Subject<Employee[]>();

    constructor(private http: HttpClient) {}

    GetEmployees() {
        return this.http
            .get<{ message: string; employees: Employee[] }>(BAKEND_URL)
            .subscribe(employeeData => {
                this.employees = employeeData.employees;
                this.employeeSub.next([...this.employees]);
            });
    }

    GetEmployeeListner() {
        return this.employeeSub.asObservable();
    }

    addPost(
        firstName: string,
        lastName: string,
        gender: string,
        email: string,
        contact: string,
        image?: File
    ) {
        const employeeData = new FormData();
        employeeData.append("firstName", firstName);
        employeeData.append("lastName", lastName);
        employeeData.append("gender", gender);
        employeeData.append("email", email);
        employeeData.append("contact", contact);
        employeeData.append("image", image, name);

        return this.http
            .post<{ message: string; employee: Employee }>(
                BAKEND_URL,
                employeeData
            )
            .subscribe(response => {
                const employeeDatas: Employee = {
                    firstName: firstName,
                    lastName: lastName,
                    gender: gender,
                    email: email,
                    contact: contact,
                    image: image
                };
                this.employees.push(employeeDatas);
                this.employeeSub.next([...this.employees]);
            });
    }
}
