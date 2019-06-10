# Angular Assignment 

_A sample app for Angular unit testing._

This project was generated with [stackblitz](https://stackblitz.com/edit/angularpoc).

This project include Login and Dashboard pages with unit testing. </br>
<b>Login:</b> Handled invalid user with three attempt locking the user.</br>
<b>Dashboard:</b> To display the random prime no with valid user.

## Technologies 
HTML5, CSS3, Material Design, Angular, Jasmine.

## Service
_authentication.ts_
Following actions done in this service.</br>
* Setting user details in localStorage.
* Getting user details from localStorage.
* Checking the valid user.
* Clear user informations from localStorage.

## Component
_login.component.ts_ , 
_dashboard.component.ts_</br>

<b>login.component.ts</b>
Onsubmiting the form checking the valid user name and password and displaying the error messages. If valid user redirecting to dashboard page.</br>
<b>dashboard.component.ts</b>
Generating the random prime no and displaying the loggedIn user and prime no. Logout redirecting to login page.

## Testing
Created test cases for above login functionality in  _login.component.spec.ts_ and dashboard functionality in  _dashboard.component.spec.ts_ .


[Demo ⚡️](https://angularpoc.stackblitz.io)