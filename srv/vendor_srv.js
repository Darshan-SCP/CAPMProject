const cds = require('@sap/cds')

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