const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const ZIVN_PO_RPT_BUYER_SRV = await cds.connect.to("ZIVN_PO_RPT_BUYER_SRV"); 
      srv.on('READ', 'AttachmentSet', req => ZIVN_PO_RPT_BUYER_SRV.run(req.query)); 
      srv.on('READ', 'ChangeItemSet', req => ZIVN_PO_RPT_BUYER_SRV.run(req.query)); 
      srv.on('READ', 'CommentSet', req => ZIVN_PO_RPT_BUYER_SRV.run(req.query)); 
      srv.on('READ', 'HeaderSet', req => ZIVN_PO_RPT_BUYER_SRV.run(req.query)); 
      srv.on('READ', 'ItemSet', req => ZIVN_PO_RPT_BUYER_SRV.run(req.query)); 
      srv.on('READ', 'SESDetailsSet', req => ZIVN_PO_RPT_BUYER_SRV.run(req.query)); 
}