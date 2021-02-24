public class ReadonlyFlowFieldController {

    @AuraEnabled
    public static String getObjectApiName(String recordId) {
        try {        
            return Id.valueOf(recordId).getSObjectType().getDescribe().getName();
        } catch (Exception e) {
            return null;
        }
    }
}
