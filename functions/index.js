var admin = require("firebase-admin");
var functions = require("firebase-functions");

admin.initializeApp(functions.config().firebase)
var firestore = admin.firestore(); 

exports.addUserAmount = functions.firestore
	.document("budget/{expenseID}")
	.onCreate(snapshot => {
		var expenseAmount = snapshot.data().amount;

		var userRef = firestore
			.collection("users")
			.doc(snapshot.data().author.uid);
			
		return firestore.runTransaction(transaction => {
			return transaction.get(userRef).then(userDoc => {
				
				var newUserAmount = parseFloat(userDoc.data().userAmount) + parseFloat(expenseAmount);
				
				return transaction.update(userRef, {
					userAmount: newUserAmount
				});
			});
		});
	});

exports.subtractUserAmount = functions.firestore
	.document("budget/{expenseID}")
	.onDelete(snapshot => {
		var expenseAmount = snapshot.data().amount;

		var userRef = firestore
			.collection("users")
			.doc(snapshot.data().author.uid);

		return firestore.runTransaction(transaction => {
			return transaction.get(userRef).then(userDoc => {

				var newUserAmount =
					parseFloat(userDoc.data().userAmount) - parseFloat(expenseAmount);

				return transaction.update(userRef, {
					userAmount: newUserAmount
				});
			});
		});
	});