const cds = require('@sap/cds');
const dbClass = require("sap-hdbext-promisfied");
const hdbext = require("@sap/hdbext");

// module.exports = cds.service.impl(async function() {
// 	const { Products } = this.entities;
// 	const service = await cds.connect.to('NorthWind');
// 	this.on('READ', Products, request => {
// 		return service.tx(request).run(request.query);
// 	});

// });
exports.email = async function(){
    let Emailconnection = await cds.connect.to ('EMAILAPP');
    // const result = await SPA_API.send('POST', '/workflow/rest/v1/workflow-instances',
    //  JSON.stringify(workflowContent), { "Content-Type": "application/json" });
    var params = "send_email?EmailTo=darshan.l@intellectbizware.com"  ;
	params += "&EmailBody=" + encodeURIComponent('This is test email');
	params += "&EmailSender=" + "support.scp@intellectbizware.com";
	params += "&EmailCc=" + "siddhesh.d@intellectbizware.com";
	params += "&EmailSubject=" + "Test java Email from CAPM";
	var path = encodeURI(params);
    const Mailresult = await Emailconnection.send('GET',path);
    return Mailresult;
},
exports.fetchNorthWindData = async function () {
    let connection = await cds.connect.to ('ZIVN_VENDOR_REG_SRV');
    let queryResult =await connection.run(SELECT .from  `${connection.entities['BPTypeSet']}`  );
    queryResult.forEach(elm=>delete elm.$metadata );
//     let connDB = await cds.connect.to('db');

//    console.log(queryResult);

   let Result =await connection.run(SELECT .from  `${connection.entities['GetStateSet']}` );
   console.log(queryResult);
   return queryResult;

// let insertResult =await connDB.run(UPSERT (Result) .into (`${connDB.entities['Product']}`) );
    ///////////////////////////////
//    var client = await dbClass.createConnectionFromEnv()
//    let dbConn = new dbClass(client)
// const sp = await dbConn.loadProcedurePromisified(hdbext, null, 'UPDATE_BOOK')
// // console.log(req.data.input);
// const output = await dbConn.callProcedurePromisified(sp,[queryResult]);
//  console.log(output)
///////////////////////////////////

//    let updateResult;
//    queryResult.map(async function(record){

// try{
//      updateResult = await connDB.run(
//          UPDATE.entity(`${connDB.entities['Books']}`)
//             .set({city: {'=': `${record.Address.City}`}})
//             .where({ID:{'=':`${record.ID}` }})
//           )
// }
// catch(error) {
// console.log(error)
// }
//    })
   
//     return "queryResult";
 };