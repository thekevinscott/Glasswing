define([
	'collections/patients',
	'collections/procedures',
	'models/worklist'],
function(patients, procedures, worklistModel) {
	var number_of_random_procedures, worklist, patientsCollection, proceduresCollection;
	number_of_random_procedures = 50;
	worklist = new worklistModel();

	// generate a collection of random patients
	patientsCollection = new patients();
	proceduresCollection = new procedures();


	for (var i=0;i<number_of_random_procedures;i++) {
		worklist.add(proceduresCollection.getRandomProcedure(patientsCollection.generateRandomPatient()));
	}

  	return {worklist : worklist};
});