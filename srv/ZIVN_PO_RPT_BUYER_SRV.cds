using ZIVN_PO_RPT_BUYER_SRV from './external/ZIVN_PO_RPT_BUYER_SRV.cds';

service ZIVN_PO_RPT_BUYER_SRVSampleService {
    @readonly
    entity AttachmentSet as projection on ZIVN_PO_RPT_BUYER_SRV.AttachmentSet
    {        key ObjectId, ObjectType, ObjectCat, key DocumentId, FileName, MimeType, Creator, CreatorName, CreateOn     }    
;
    @readonly
    entity ChangeItemSet as projection on ZIVN_PO_RPT_BUYER_SRV.ChangeItemSet
    {        key PoNumber, key PoItem, key ItemSeq, MaterialDes, Quantity, NewQuantity, DelyDate, NewDelDate, Status, Reason, AsnNo, SesNo     }    
;
    @readonly
    entity CommentSet as projection on ZIVN_PO_RPT_BUYER_SRV.CommentSet
    {        key PoNumber, Message, MDate, UserName, Action, UserId     }    
;
    @readonly
    entity HeaderSet as projection on ZIVN_PO_RPT_BUYER_SRV.HeaderSet
    {        key PoNumber, PoDate, VendorCode, VendorName, DueDays, PoAmount, Currency, Buyer, BuyerName, Status, Zterm, ZtermDes, CompanyCode, CompanyName, PurOrg, PurOrgDes, HeaderText, PurGroup, PurGroupDes, PoTermCond, Message, NoteToSupp, RetentionPerc, DpPerc, DpAmount, DpDueDate, RefNo     }    
;
    @readonly
    entity ItemSet as projection on ZIVN_PO_RPT_BUYER_SRV.ItemSet
    {        Material, key PoNumber, key PoItem, MaterialDes, PlantName, Plant, ConfQty, PendingQty, Quantity, Uom, NetPrice, Amount, Vat, TotalAmt, DeliveryDate, TaxPercent, Acckey, Status, NewQuantity, NewDelDate, Discount     }    
;
    @readonly
    entity SESDetailsSet as projection on ZIVN_PO_RPT_BUYER_SRV.SESDetailsSet
    {        key PoNumber, key PoItem, key SerItem, SerQuantity, BaseUnit, Description, NetValue, GrossValue, PendingQty     }    
;
}