const cds = require('@sap/cds')
const lib = require('./LIB/EMPLOYEE_LIB')
const extlib = require("./LIB/extcall");
module.exports = cds.service.impl(function () {

   

    
  this.on('createEmployee', async (req) => {
    try {
      // let employeeIDResult  = lib.fetchEmployeeId();
      const dbClass = require("sap-hdbext-promisfied")
    var client = await dbClass.createConnectionFromEnv()
    let dbConn = new dbClass(client)
      const hdbext = require("@sap/hdbext")
const sp = await dbConn.loadProcedurePromisified(hdbext, null, 'CREATE_EMPLOYEE')
console.log(employeeIDResult)
// console.log(req.data.input);
const output = await dbConn.callProcedurePromisified(sp,[req.data.input.EMPLOYEE_HEADER,req.data.input.EMPLOYEE_ADDRESS]);
      // console.log(output)
      return "output"
  } catch (error) {
      console.error(error)
      return error
  }
  }),
  this.on("GET", "BPTypeSet",  async (req) => {
    var out = await extlib.fetchNorthWindData();
   
      // out.forEach(elm=>delete elm.$metadata );
    return out
    //return datares;
  });

})