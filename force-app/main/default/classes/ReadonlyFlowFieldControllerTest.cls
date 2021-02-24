@isTest
public class ReadonlyFlowFieldControllerTest {
    
    @isTest
    public static void runTest() {
        Account testAcc = new Account(Name='Test Account');
        insert testAcc;

        System.assertEquals(ReadonlyFlowFieldController.getObjectApiName('this is not a valid record ID'), null);
        System.assertEquals(ReadonlyFlowFieldController.getObjectApiName(testAcc.Id), 'Account');
    }
}
