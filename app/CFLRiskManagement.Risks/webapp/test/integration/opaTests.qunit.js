sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'CFLRiskManagement/Risks/test/integration/FirstJourney',
		'CFLRiskManagement/Risks/test/integration/pages/RisksList',
		'CFLRiskManagement/Risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('CFLRiskManagement/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);