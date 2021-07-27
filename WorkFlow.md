1. Create Employee
Method: POST
Path: /employees
The body will be a JSON object containing the following Keys: “ID”, “Name”, “Email”, “Phone Number”

This API will create a file “employee.txt” if it does not exist and save the newly created employee into the file. If that file already exists, add the record to existing employee records in the file. You can decide the storage data structure.


2. List Employee
Method: GET
Path: /employees
It will list all the employees present in the file. 


3. GET Employees
Method: Get
Path: /employees/1
Where 1 is the employee id parameter. This would be sent by the requester to get data on that specific employee.

API should read the file and then the API should return all the data of that employee.
