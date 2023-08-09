# RESTful APIs/Services

1. REST stands Representational State Transfer. It's a set of standards and principles of building backend APIs. 

2. In rest APIs clients requests and servers responses are typically in the JSON format.

3. Rest URLs/endpoints are typically called **resources**. They are usually named in the plural form 

Example of a typical REST URL:

```
https://jassehcodecamp.com/api/students
```

4. It uses some standard HTTP methods also called **HTTP verbs**
   
   These methods are:
      - GET: to get all resources from an endpoint. Eg: to get all students from the JCC API. Example endpoint is: `/students
      
      - POST: to create and store a new resource. Eg: `/students`
      
      - PUT: to update a resource by replacing all the fields of the resource. Eg: `/students/:studentId`
      
      - PATCH: to update a resource by just modifying one or more fields. Eg: `/students/:studentId`
      
      - DELETE: to delete a resource from our application. Eg: `/studetns/:studentId`