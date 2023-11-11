const cds = require('@sap/cds');
const { error } = require('console');
const twilio = require('twilio')

module.exports = cds.service.impl(function () {
    // this.on("GET", "GetCitySet", async (req, res) => {

    //     let S4Conn = await cds.connect.to('ZIVN_VENDOR_REG_SRV');
    //     // ZIVN_VENDOR_REG_SRV/GetCitySet
    //     const citydata = await S4Conn.send('GET', '/GetCitySet', { 'x-csrf-token': 'fetch' });
    //     let a = S4Conn.get.headers;
    //     // console.log(citydata);
    //     return citydata;

    // });
    this.on("GET", "GetCitySet", async (req, res) => {
        let sid =  'AC6d897b12719036791d16e53a7c66f420';
        let api_token = '1b969e2944d5dc60f364de3085b47594';
        const client = twilio(sid,api_token);
      
        client.messages.create({
        body: "Welcome to iVen Solution, collobration is the key",
        from: "+15707043889",
        to: "+919328712269"}).then(messages => console.log(messages))
       .catch(err => console.log(err.messages));
 
       client.messages.create({
        body: 'Welcome to iVen Solution, collobration is the key',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+919328712269'
             }).then(message => console.log(message.sid));
  
            // var out = await extlib.fetchNorthWindData();
            // var IASConnection = await cds.connect.to('IAS_DEST');
            // const result = await IASConnection.send('GET', '/Users', '',{ "Accept": "*/*", "Content-Type": "application/scim+json" ,"DataServiceVersion":"2.0" }   ) ;
         
            // // out.forEach(elm=>delete elm.$metadata );
            // return result
            //return datares;
       
        // let S4Conn = await cds.connect.to('ZIVN_VENDOR_REG_SRV');
        // // ZIVN_VENDOR_REG_SRV/GetCitySet
        // let Payload = req.data;
        // //const citydata = await S4Conn.send('GET', '/$metadata', ;
        // // // console.log(citydata);
        // // var outRes = citydata;
       
        // let oImportedCaseDetails =  await S4Conn.send({
        //     method: 'POST',
        //     path: '/GetCitySet',
        //     headers: { 'Content-Type': 'application/json'},
        //     data:  Payload
        //     // headers: { 'Content-Type': 'multipart/mixed;boundary=batch'},
        //     // data:  '--batch\r\n'+
        //     // '\r\n'+
        //     // 'Content-Type: multipart/mixed; boundary=changeset\r\n'+
        //     // '\r\n'+
        //     // '--changeset\r\n'+
        //     // 'Content-Type: application/http\r\n'+
        //     // 'Content-Transfer-Encoding: binary\r\n'+
        //     // '\r\n'+
        //     // 'POST GetCitySet HTTP/1.1\r\n'+
        //     // 'Content-Type: application/json\r\n'+
        //     // '\r\n'+
        //     // '{ "Land1": "BD","Landx": "Bangladesh","Regio": "","Bezer": "","Cityc": "0126","Bezei": "DHAKA"}\r\n'+
        //     // '\r\n'+
        //     // '--changeset--\r\n'+
        //     // '\r\n'+
        //     // '--batch--',
        //  });

        // return oImportedCaseDetails;

    });

})