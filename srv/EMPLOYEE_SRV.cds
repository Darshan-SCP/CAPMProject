using CAPMProject from '../db/EMPLOYEE';

service EmployeeService @(path: '/EmpSrv') @(requires: 'authenticated-user') {

    entity Employee @(restrict: [{
        grant: ['*'],
        to   : ['AddressAuth']
    }]) as projection on CAPMProject.EMPLOYEE;
 entity Employee2 as projection on CAPMProject.EMPLOYEE;

    entity ADDRESS @(restrict: [{
        grant: ['*'],
        to   : ['AddressAuth']
    }]) as projection on CAPMProject.ADDRESS;

    entity BPType @(restrict: [{
        grant: ['*'],
        to   : ['AddressAuth']
    }]) as projection on CAPMProject.BPType;
}
