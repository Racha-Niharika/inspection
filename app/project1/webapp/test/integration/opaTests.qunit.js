sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/A_InspectionLotList',
		'project1/test/integration/pages/A_InspectionLotObjectPage'
    ],
    function(JourneyRunner, opaJourney, A_InspectionLotList, A_InspectionLotObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheA_InspectionLotList: A_InspectionLotList,
					onTheA_InspectionLotObjectPage: A_InspectionLotObjectPage
                }
            },
            opaJourney.run
        );
    }
);