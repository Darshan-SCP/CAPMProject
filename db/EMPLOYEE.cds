namespace CAPMProject;

entity EMPLOYEE
{
    key EMPLOYEE_ID : Integer64;
    EMPLOYEE_FIRSTNAME : String(30);
    EMPLOYEE_LASTNAME : String(30);
    COUNTRY : String(30);
    EMAIL : String(50);
}entity ADDRESS
{
    key EMPLOYEE_ID : Integer64;
    EMPLOYEE_CITY : String(30);
    EMPLOYEE_STATE : String(30);
    EMPLOYEE_PINCODE : String(20);
}

entity BPType {
  key Spras : String(2) not null;
  key Bpkind : String(4) not null;
  Text40 : String(40) not null;
};
entity BPTypeSet {
  key Spras : String(2) not null;
  key Bpkind : String(4) not null;
  Text40 : String(40) not null;
}

