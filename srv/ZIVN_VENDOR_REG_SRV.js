const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const ZIVN_VENDOR_REG_SRV = await cds.connect.to("ZIVN_VENDOR_REG_SRV"); 
    
    srv.on('READ', 'GetCitySet', req => ZIVN_VENDOR_REG_SRV.run(req.query)); 
    srv.on('CREATE', 'GetCitySet', req => ZIVN_VENDOR_REG_SRV.run(req.query)); 
      srv.on('READ', 'BPTypeSet', req => ZIVN_VENDOR_REG_SRV.run(req.query)); 
      srv.on('READ', 'CheckNewVendorCodeSet', req => ZIVN_VENDOR_REG_SRV.run(req.query)); 
      srv.on('READ', 'CheckUpdateReqSet', req => ZIVN_VENDOR_REG_SRV.run(req.query)); 
      srv.on('READ', 'GetStateSet', req => ZIVN_VENDOR_REG_SRV.run(req.query)); 
      srv.on('READ', 'GetSortKeySet', req => ZIVN_VENDOR_REG_SRV.run(req.query)); 
      srv.on('READ', 'GetVendorsSet', req => ZIVN_VENDOR_REG_SRV.run(req.query)); 
}